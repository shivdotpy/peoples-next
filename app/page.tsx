import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <header className="py-16">
        <h1 className="text-6xl">Welcome to peoples page</h1>
      </header>
      <main className="flex flex-col items-center">
        <p className="text-xl mb-4">We offer amazing services!</p>
        <Link
          href="/peoples"
          className="px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600"
          role="button"
        >
          Explore Peoples
        </Link>
        <Image
          className="mt-16"
          src="/assets/images/peoples-c.png"
          alt="peoples"
          height={500}
          width={500}
        />
      </main>
      <footer className="mt-auto py-4 text-center text-gray-500">
        &copy; 2023 Peoples App. No rights reserved. 😂
      </footer>
    </div>
  );
}
