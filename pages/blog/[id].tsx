import { useRouter } from 'next/router';

const BlogDetail = () => {
  const { query } = useRouter();
  const { id } = query;

  return (
    <div>
      <h2>Blog Detail Page</h2>
      <p>Blog ID: {id}</p>
    </div>
  );
};

export default BlogDetail;