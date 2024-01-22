import DateFormatter from "./date-formatter";
import Link from "next/link";

type Props = {
  title: string;
  date: string;
  slug: string;
};

const PostPreview = ({
  title,
  date,
  slug,
}: Props) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-0.5 md:gap-2 my-1">
      <h3 className="md:col-span-3">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
        >
          {title}
        </Link>
      </h3>
      <p className="md:justify-self-end text-neutral-400 text-sm">
        <DateFormatter dateString={date} />
      </p>
    </div>
  );
};

export default PostPreview;
