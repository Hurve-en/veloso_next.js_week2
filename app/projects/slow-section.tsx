export async function SlowSection() {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <section className="mt-12">
      <h2 className="text-2xl font-bold">Slow Section</h2>
      <p className="mt-4">This content was intentionally delayed .</p>
    </section>
  );
}
