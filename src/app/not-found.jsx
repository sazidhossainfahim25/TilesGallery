import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-6">
      <div className="text-center">
        <h1 className="text-9xl font-bold text-gray-100">404</h1>

        <div className="mt-[-40px]">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
          <p className="text-gray-500 mb-10 max-w-md mx-auto leading-relaxed">
            The page you are looking for might have been removed, had its name changed, or is
            temporarily unavailable.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 bg-black text-white px-10 py-4 rounded-md hover:bg-zinc-800 transition-all font-medium text-sm uppercase tracking-widest"
            >
              <Home size={16} />
              Back to Home
            </Link>

            <button
              onClick={() => window.history.back()}
              className="flex items-center gap-2 border border-gray-200 px-10 py-4 rounded-md hover:bg-gray-50 transition-all font-medium text-sm uppercase tracking-widest"
            >
              <ArrowLeft size={16} />
              Go Back
            </button>
          </div>
        </div>
      </div>

      <div className="mt-20 grid grid-cols-4 gap-2 opacity-10">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="w-16 h-16 border border-black"></div>
        ))}
      </div>
    </div>
  );
}
