'use client';
 
import { useEffect, useState } from 'react';
 
export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Optionally log the error to an error reporting service
    console.error(error);
  }, [error]);

  // Check if the component is mounted before rendering
  if (!isMounted) return null;

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <h2 className="text-center">Something went wrong!</h2>
      <button
        className="mt-4 rounded-md bg-blue-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
        onClick={reset}
      >
        Try again
      </button>
    </main>
  );
}