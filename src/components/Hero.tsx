export default function Hero() {
  return (
    <section className="relative -mt-1 md:-mt-px flex flex-col items-center justify-center text-center min-h-screen px-6 bg-gradient-to-b from-gray-900 to-gray-800">
      <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl">
        Partnering with You on the Frontiers of AI
      </h1>
      <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-2xl">
        I help businesses and innovators leverage AI to simplify complexity and unlock new opportunities.
      </p>
      <div className="mt-8 flex space-x-4">
        <a
          href="/contact"
          className="bg-green-600 text-white w-[150px] md:w-[170px] flex items-center justify-center px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-500 transition whitespace-nowrap"
        >
          Book a Call
        </a>
        <a
          href="/services"
          className="border border-green-600 text-green-400 w-[150px] md:w-[170px] flex items-center justify-center px-6 py-3 rounded-lg text-lg font-medium hover:bg-green-600 hover:text-white transition whitespace-nowrap"
        >
          View Services
        </a>
      </div>
    </section>
  );
}