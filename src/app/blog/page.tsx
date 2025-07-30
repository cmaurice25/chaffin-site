export default function AboutPage() {
  return (
    <main className="min-h-[200vh] p-8 space-y-4">
      <h1 className="text-4xl font-bold text-gray-800">Blog</h1>
      {Array.from({ length: 30 }).map((_, index) => (
        <p key={index} className="text-gray-600">
          This is blog content row {index + 1}
        </p>
      ))}
    </main>
  );
}