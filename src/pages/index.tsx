import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const allPages = useRouter();
  return (
    <>
      {useEffect(() => {
        allPages.push('/pessoas');
      }, [allPages])}
    </>
  );
}
