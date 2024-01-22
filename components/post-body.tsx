import markdownStyles from './markdown-styles.module.css';

type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <section
      className={`max-w-prose text-base ${markdownStyles['markdown']}`}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  );
};

export default PostBody;
