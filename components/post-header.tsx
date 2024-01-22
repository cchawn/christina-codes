import DateFormatter from './date-formatter';
import PostTitle from './post-title';

type Props = {
  title: string;
  date: string;
};

const PostHeader = ({ title, date }: Props) => {
  return (
    <section>
      <PostTitle>{title}</PostTitle>
      <p className="text-neutral-400 text-sm">
        <DateFormatter dateString={date} />
      </p>
    </section>
  );
};

export default PostHeader;
