'use client'
import { formatDate } from '@/lib/format';
import LikeButton from './like-icon';
import { togglePostLikeStatus } from '@/actions/posts';
import { useOptimistic } from 'react';

function Post({ post, updatedPost }) {
  return (
    <article className="post">
      <div className="post-image">
        <img src={post.image} alt={post.title} />
      </div>
      <div className="post-content">
        <header>
          <div>
            <h2>{post.title}</h2>
            <p>
              Shared by {post.userFirstName} on{' '}
              <time dateTime={post.createdAt}>
                {formatDate(post.createdAt)}
              </time>
            </p>
          </div>
          {/* Functions cannot be passed directly to Client Components unless you explicitly expose it by marking it with "use server" thats why used bind over here */}
          <form action={updatedPost.bind(null, post.id)} className={post.isLiked ? 'liked' : ''}>
            <LikeButton />
          </form>
        </header>
        <p>{post.content}</p>
      </div>
    </article>
  );
}

export default function Posts({ posts }) {
  const [optimisticPosts, setOptimisticPosts] = useOptimistic(posts, (prevPosts, postId) => {
    const postIndex = prevPosts.findIndex((post) => post.id === postId);

    if (postIndex === -1) {
      return prevPosts;
    }

    const updatedPost = { ...prevPosts[postIndex] };
    updatedPost.likes = updatedPost.likes + (updatedPost.isLiked ? -1 : 1);
    updatedPost.isLiked = !updatedPost.isLiked;
    const newPosts = [...prevPosts];
    newPosts[postIndex] = updatedPost;
    return newPosts;
  })
  if (!optimisticPosts || optimisticPosts.length === 0) {
    return <p>There are no posts yet. Maybe start sharing some?</p>;
  }

  async function updatedPost(postId) {
    setOptimisticPosts(postId);
    await togglePostLikeStatus(postId);
  }

  return (
    <ul className="posts">
      {optimisticPosts.map((post) => (
        <li key={post.id}>
          <Post post={post} updatedPost={updatedPost} />
        </li>
      ))}
    </ul>
  );
}
