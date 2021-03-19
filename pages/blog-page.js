import Layout from '../components/Layout';
import Link from 'next/link';
import { getAllPostsData } from '../lib/posts'
import Post from '../components/Post'

export default function BlogPage({sortedPosts}) {
    return (
        <Layout title="Blog page">
            <ul>
                {sortedPosts && 
                    sortedPosts.map((post) => <Post key={post.id} post={post} />)}
            </ul>
            <Link href="/main-page">
                <div>
                <svg className="w-6 h-6 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19l-7-7 7-7m8 14l-7-7 7-7"/>
                </svg>
                <span>Back to main page</span>
                </div>
            </Link>
        </Layout>
    )
}

export async function getStaticProps() {
    const sortedPosts = await getAllPostsData();
    return {
        props: { sortedPosts },
    }
}