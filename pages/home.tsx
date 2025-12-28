// Server-side redirect to homepage to avoid conflicts with App Router
export async function getServerSideProps() {
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
}

export default function HomeRedirect() {
  return null;
}
