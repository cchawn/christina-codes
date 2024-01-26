import Head from 'next/head';
import Intro from '../components/intro';
import Layout from '../components/layout';
import MorePosts from '../components/more-posts';
import SocialLinks from '../components/social-links';
import Post from '../interfaces/post';
import { getAllPosts } from '../lib/api';
import { FULL_NAME } from '../lib/constants';

type Props = {
  allPosts: Post[];
};

export default function Index({ allPosts }: Props) {
  return (
    <Layout>
      <Head>
        <title>{FULL_NAME}</title>
      </Head>
      <Intro />
      <SocialLinks />
      {allPosts.length > 0 && <MorePosts posts={allPosts} />}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['date', 'emoji', 'slug', 'title']);

  return {
    props: { allPosts },
  };
};
