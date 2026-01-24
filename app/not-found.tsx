'use client';
import { useRouter } from 'next/navigation';

export default function NotFound() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-neutral-900 via-neutral-800 to-neutral-900">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold text-gray-300 mb-6">
          Stránka nenalezena
        </h2>
        <p className="text-lg text-gray-400 mb-8">
          Omlouváme se, ale stránka kterou hledáte neexistuje.
        </p>
        <a 
          href="/" 
          className="inline-block mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors"
          onClick={() => router.push('/')}
        >
          Přejít na hlavní stránku
        </a>
      </div>
    </div>
  );
}
