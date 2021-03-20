import Layout from '../components/Layout';
import Link from 'next/link';
import { useEffect } from 'react';
import { getAllTasksData } from '../lib/task';
import Task from '../components/Task';
import TaskForm from '../components/TaskForm';
import StateContextProvider from '../context/StateContext';
import useSWR from 'swr';

const fetcher = url => fetch(url).then(res => res.json());
const apiURL = `${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-task/`;

export default function TaskPage({ staticSortedTasks }) {

    const { data: tasks, mutate } = useSWR(apiURL, fetcher, {
        initialData: staticSortedTasks, // static하게 불러온 데이터 값은 여기서 초기 데이터로 사용함
    })

    const sortedTasks = tasks?.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    useEffect(() => {
        mutate();
    }, []);

    return (
        <StateContextProvider>
            <Layout title="Task page">
                <TaskForm taskCreated={mutate}/>
                <ul>
                    {sortedTasks &&
                        sortedTasks.map(task => <Task key={task.id} task={task} taskDeleted={mutate}/>)}
                </ul>
                <Link href="/main-page">
                    <div className="flex cursor-pointer mt-12">
                    <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
                    </svg>
                    <span>Back to main page</span>
                    </div>
                </Link>
            </Layout>
        </StateContextProvider>
    )
}

export async function getStaticProps() {
    const staticSortedTasks = await getAllTasksData();

    return { props: { staticSortedTasks },
             revalidate: 3
    };
}