import Link from 'next/link';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Hi, I’m Christopher — Your Partner in AI-Driven Solutions
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
          I help forward-thinking businesses leverage AI and automation to simplify operations and unlock growth.
        </p>
        <Link
          href="/contact"
          className="inline-block bg-green-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-green-500 transition mt-4"
        >
          Book a Call
        </Link>
      </section>

      {/* CREDIBILITY SNAPSHOT */}
      <section className="max-w-5xl mx-auto py-12 sm:py-16 px-4 grid grid-cols-1 gap-8 md:grid-cols-3 text-center">
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">AI & Automation</h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Streamlining workflows with custom AI solutions.
          </p>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Modern Web Development</h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            Next.js, Tailwind, and scalable architecture.
          </p>
        </div>
        <div>
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">Business Efficiency</h3>
          <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
            From manual tasks to fully automated systems.
          </p>
        </div>
      </section>

      {/* YOUR STORY */}
      <section className="max-w-3xl mx-auto py-16 px-4 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6">My Story</h2>
        <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
          With a background in tech and a passion for efficiency, I’ve spent the last several years helping businesses bridge the gap between ideas and execution.
        </p>
        <p className="text-base sm:text-lg text-gray-300 mb-4 leading-relaxed">
          My approach is hands-on, collaborative, and always focused on results. I believe in building technology that feels simple, elegant, and empowering.
        </p>
        <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
          Today, I help businesses harness the power of AI to create meaningful, lasting impact.
        </p>
      </section>

      {/* CTA CLOSER */}
      <section className="bg-gray-800 py-12 sm:py-16 text-center px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-4 leading-snug">
          Ready to explore how AI can simplify your business?
        </h2>
        <Link
          href="/contact"
          className="inline-block bg-green-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-green-500 transition mt-2"
        >
          Book a Call
        </Link>
      </section>
    </main>
  );
}