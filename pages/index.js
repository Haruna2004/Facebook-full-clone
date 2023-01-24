import { useSession } from "next-auth/react";
import Head from "next/head";
import Feed from "../components/Feed";
import Header from "../components/Header";
import Login from "../components/Login";
import Sidebar from "../components/Sidebar";
import Widgets from "../components/Widgets";
import { db } from "../firebase";

export default function Home({ posts }) {
  const { data: session } = useSession();
  console.log(session);
  if (!session) return <Login />;
  return (
    <div className="h-screen, bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook</title>
        <meta name="viewport" content="width=device-width" />
      </Head>
      <Header />
      <main className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Feed */}
        <Feed posts={posts} />
        {/* Widgets */}
        <Widgets />
      </main>
    </div>
  );
}

// The code here has problem with login, You can check this out an suggest a possible fix

export async function getServerSideProps() {
  ///Get the posts
  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();
  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));
  return {
    props: {
      posts: docs,
    },
  };
}
