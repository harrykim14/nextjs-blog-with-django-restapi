import fetch from 'node-fetch';

export async function getAllPostsData() {
    const res = await fetch(
        new URL(`${process.env.NEXT_PUBLIC_RESTAPI_URL}api/list-post/`)
    );

    const posts = await res.json();
    const sortedPosts = posts.sort(
        (a, b) => new Date(b.created_at) - new Date(a.created_at)
    );

    return sortedPosts;
}