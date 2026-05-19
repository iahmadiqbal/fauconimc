import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-navy-deep px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-white">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-white">Page not found</h2>
        <p className="mt-2 text-sm text-slate-400">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-bold transition hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, #d4a017, #f5c462)",
              color: "#1a0f00",
            }}
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
