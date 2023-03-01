import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import NotionService from '../services/notion-service';
import { BlogPost } from '../@types/schema';
import BlogCard from '../components/BlogCard';

export const getStaticProps: GetStaticProps = async (context) => {
  const notionService = new NotionService();

  const posts = await notionService.getPublishedBlogPosts();
  console.log(posts);

  const serializedPosts = posts.map((post) => ({
    ...post,
    tags: post.tags || null,
  }));

  return {
    props: {
      posts: serializedPosts,
    },
  };
};

const Home = ({ posts }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const title = `Ryan Kim's Blog`;
  const description =
    'A blog about web development, software engineering, and more.';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name={'description'}
          title={'description'}
          content={description}
        />
        <meta name={'og:title'} title={'og:title'} content={title} />
        <meta
          name={'og:description'}
          title={'og:description'}
          content={title}
        />
      </Head>

      <div className="min-h-screen">
        <main className="max-w-5xl mx-auto relative">
          <div className="h-full pt-4 pb-16 px-4 md:px-0 mx-auto">
            <div className="flex items-center justify-center">
              <h1 className="font-extrabold text-xl md:text-4xl text-black text-center">
                완벽하지 않으면 어때
              </h1>
            </div>
            <div className="mt-12 mx-wlg mx-auto grid gap-6 lg:grid-cols-2 lg:max-w-none">
              {posts.map((post: BlogPost) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Home;
