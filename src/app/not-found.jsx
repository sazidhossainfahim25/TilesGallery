import Link from 'next/link';
import { FaHome } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-5">
      <div className="text-center">
        <h1 className="text-8xl font-black text-gray-100">404</h1>

        <div className="mt-4">
          <h2 className="text-2xl font-bold text-gray-800">Page Not Found</h2>
          <p className="text-gray-500 mt-2 mb-8">The page you are looking for does not exist.</p>

          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#FF5F00] text-white px-6 py-3 rounded-md hover:bg-[#f18446] transition-colors"
          >
            <FaHome />
            Go to Homepage
          </Link>
        </div>
      </div>
    </div>
  );
}
