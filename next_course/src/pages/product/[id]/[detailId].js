import { useRouter } from 'next/router';
import Head from 'next/head';

export default function ProductDetail() {
  const router = useRouter();
  const { id, detailId } = router.query;

  return (
    <div className="container">
      <Head>
        <title>Product {id} - {detailId} | Next.js Course</title>
      </Head>


      <div className="card">
        <h3>Details:</h3>
        <p>The first Id is: <strong>{id}</strong></p>
        <p>The second Id is: <strong>{detailId}</strong></p>
      </div>
    </div>
  );
}
