"use client";

export default function Error({ reset }: { reset: () => void }) {
  return (
    <main className="px-16 py-8">
      <h1 className="text-4xl font-bold">Something went wrong</h1>

      <p className="mt-8 text-xl">Failed to load projects.</p>

      <button onClick={() => reset()} className="mt-6 border px-4 py-2">
        Try again
      </button>
    </main>
  );
}
