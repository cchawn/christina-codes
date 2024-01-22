import Link from 'next/link';
import DateFormatter from './date-formatter';

type Props = {
  date: string;
  emoji?: string;
  slug: string;
  title: string;
};

const PostPreview = ({ date, emoji = '📝', slug, title }: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-0.5 md:gap-2 my-1 items-center">
      <h3 className="md:col-span-3">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <span aria-hidden>{emoji}</span> {title}
        </Link>
      </h3>
      <p className="md:justify-self-end text-neutral-400 text-sm">
        <DateFormatter dateString={date} />
      </p>
    </div>
  );
};

export default PostPreview;
