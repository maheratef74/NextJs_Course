import { useRouter } from 'next/router';
import Head from 'next/head';

export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <div className="container">
      <Head>
        <title>Product {id} | Next.js Course</title>
      </Head>

      <div className="card">
        <h3>The id is {id}</h3>
      </div>
    </div>
  );
}
