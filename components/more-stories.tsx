import PostPreview from './post-preview';
import type Post from '../interfaces/post';

type Props = {
  posts: Post[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="max-w-prose text-lg my-16">
      <h2 className="uppercase text-base mb-4 tracking-spread">Posts</h2>
      {posts.map(post => (
        <PostPreview
          key={post.slug}
          emoji={post.emoji}
          title={post.title}
          date={post.date}
          slug={post.slug}
        />
      ))}
    </section>
  );
};

export default MoreStories;
