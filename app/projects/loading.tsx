export default function Loading() {
  return (
    <main className="px-16 py-8">
      {/* Projects title */}
      <div className="h-10 w-48 animate-pulse bg-zinc-200" />

      {/* Search bar */}
      <div className="mt-8 h-10 w-80 animate-pulse bg-zinc-200" />

      {/* Project list */}
      <div className="mt-8 space-y-4">
        <div className="h-7 w-48 animate-pulse bg-zinc-200" />
        <div className="h-7 w-52 animate-pulse bg-zinc-200" />
        <div className="h-7 w-56 animate-pulse bg-zinc-200" />
      </div>
    </main>
  );
}
