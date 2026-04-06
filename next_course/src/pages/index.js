import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Course</title>
      </Head>

      <h1 className="title">home</h1>
      <p className="description">
        Welcome to the home page.
      </p>
    </div>
  );
}
