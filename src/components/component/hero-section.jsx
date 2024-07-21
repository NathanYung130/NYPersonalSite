import Link from "next/link";
import "./hero-section.css";
import Image from 'next/image';

export function HeroSection() {
  return (
    <div className="HeroSectionBody relative">
    <img
        src="./img-home.jpg"
        width={1920}
        height={1080}
        alt="Hero Image"
        className="w-full h-full object-cover object-center absolute z-10"
      />
    <section
      className="w-full h-[80vh] flex items-center justify-center bg-[url('/placeholder.svg')] bg-cover bg-center relative z-20">
      <div className="container px-4 md:px-6 text-center space-y-6">
        <h1
          className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
          Welcome to My Portfolio
        </h1>
        <p
          className="max-w-[600px] mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400">
          Explore my latest design and development projects, showcasing my skills and creativity.
        </p>
        <Link
          className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
          href="/Projects">
          View Portfolio
        </Link>
      </div>
    </section>
    </div>
  );
}
