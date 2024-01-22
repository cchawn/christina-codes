import type Author from './author';

type PostType = {
  author: Author;
  content: string;
  coverImage: string;
  date: string;
  emoji?: string;
  excerpt: string;
  slug: string;
  title: string;
  ogImage: {
    alt?: string;
    url: string;
  };
};

export default PostType;
