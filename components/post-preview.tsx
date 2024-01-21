import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import Link from "next/link";
import type Author from "../interfaces/author";

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
    <div className="flex flex-row items-baseline">
      <h3 className="mr-2">
        <Link
          as={`/posts/${slug}`}
          href="/posts/[slug]"
        >
          {title}
        </Link>
      </h3>
      <p className="text-neutral-400 text-sm">
        <DateFormatter dateString={date} />
      </p>
    </div>
  );
};

export default PostPreview;
