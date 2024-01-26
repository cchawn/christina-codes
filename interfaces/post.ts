type PostType = {
  content: string;
  date: string;
  emoji?: string;
  slug: string;
  title: string;
  ogImage: {
    alt?: string;
    url: string;
  };
};

export default PostType;
