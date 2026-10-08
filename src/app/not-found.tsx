import Link from "next/link";

const NotFound = () => {
    return (
        <div className="flex min-h-[70vh] flex-1 items-center justify-center px-4">
            <div className="text-center">

                <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-[#C2F800]">
                    FitLog
                </p>

                <h1 className="text-8xl font-extrabold tracking-tight text-white">
                    404
                </h1>

                <h2 className="mt-4 text-2xl font-bold text-white">
                    Page Not Found
                </h2>

                <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-gray-400">
                    The page {`you're`} looking for {`doesn't`} exist or may have
                    been moved to another location.
                </p>

                <Link
                    href="/"
                    className="mt-7 inline-flex items-center rounded-xl bg-[#C2F800] px-6 py-3 text-sm font-bold text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#d4ff33] hover:shadow-[0_8px_25px_rgba(194,248,0,0.2)]"
                >
                    Back to Home
                </Link>

            </div>
        </div>
    );
};

export default NotFound;