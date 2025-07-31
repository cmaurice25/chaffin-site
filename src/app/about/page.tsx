"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* HERO SECTION */}
      <section className="max-w-4xl mx-auto text-center py-16 px-4 sm:py-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
          Hi, I’m Christopher — Your Partner in Scalable Digital Solutions
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 sm:mb-8 leading-relaxed">
          Technology should be simple. I bring strategy, development, and AI together to make it that way.
        </p>
        <div className="mb-8">
          <Image
            src="/images/about/desktop.png"
            alt="Christopher Chaffin workspace"
            width={1200}
            height={500}
            className="rounded-xl shadow-lg object-cover w-full"
            priority
          />
        </div>
        <Link
          href="/contact"
          className="inline-block bg-green-600 text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-lg hover:bg-green-500 transition mt-4"
        >
          Book a Call
        </Link>
      </section>

      {/* CREDIBILITY SNAPSHOT */}
      <section className="relative max-w-5xl mx-auto py-12 sm:py-16 px-4 text-center border-t border-white/10 bg-gradient-to-b from-gray-900/20 to-transparent">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-2xl sm:text-3xl font-bold mb-10"
        >
          Service Areas
        </motion.h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 gap-x-8 gap-y-12 md:grid-cols-3 md:gap-y-16"
        >
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
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Proven Results</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Helping businesses grow through technology.
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Collaborative Approach</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Working closely with teams to achieve goals.
            </p>
          </div>
          <div>
            <h3 className="text-xl sm:text-2xl font-semibold mb-2">Client-Centric</h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
              Tailored solutions that fit your unique needs.
            </p>
          </div>
        </motion.div>
      </section>

      {/* YOUR STORY */}
      <section className="max-w-5xl mx-auto py-16 px-4 md:grid md:grid-cols-2 md:gap-12 md:items-center">
        <div className="flex justify-center mb-8 md:mb-0">
          <Image
            src="/images/about/profile.jpg"
            alt="Christopher Chaffin"
            width={400}
            height={400}
            className="rounded-xl shadow-lg object-cover block border border-white/20 backdrop-blur-sm transition-transform duration-300 md:hover:scale-105 md:hover:shadow-green-500/20"
          />
        </div>
        <div className="text-center md:text-left">
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
        </div>
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