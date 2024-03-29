import ErrorPage from 'next/error';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import PostBody from '../../components/post-body';
import PostHeader from '../../components/post-header';
import PostTitle from '../../components/post-title';
import { FULL_NAME } from '../../lib/constants';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import markdownToHtml from '../../lib/markdownToHtml';
import type PostType from '../../interfaces/post';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

export default function Post({ post, morePosts }: Props) {
  const router = useRouter();
  const title = `${post.title} | ${FULL_NAME}`;
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout showHeader>
      {router.isFallback ? (
        <PostTitle>Loading…</PostTitle>
      ) : (
        <article className="mt-16 md:mt-32 mb-32">
          <Head>
            <title>{title}</title>
            <meta property="og:image" content={post.ogImage.url} />
          </Head>
          <PostHeader title={post.title} date={post.date} />
          <PostBody content={post.content} />
        </article>
      )}
    </Layout>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'content',
    'ogImage',
  ]);
  const content = await markdownToHtml(post.content || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
