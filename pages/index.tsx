import MoreStories from '../components/more-stories';
import Intro from '../components/intro';
import Layout from '../components/layout';
import SocialLinks from '../components/social-links';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import { FULL_NAME } from '../lib/constants';
import Post from '../interfaces/post';

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
      {allPosts.length > 0 && <MoreStories posts={allPosts} />}
    </Layout>
  );
}

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['date', 'emoji', 'slug', 'title']);

  return {
    props: { allPosts },
  };
};
