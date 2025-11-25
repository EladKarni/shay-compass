import Link from 'next/link';
import PageSection from '@/components/PageSection';

export default function SuccessPage() {
    return (
        <PageSection id="success" maxWidth="max-w-3xl">
            <div className="min-h-[60vh] flex items-center justify-center">
                <div className="bg-white/80 backdrop-blur-md border border-gray-200 rounded-2xl shadow-lg p-12 text-center">
                    <div className="mb-6">
                        <svg
                            className="mx-auto h-16 w-16 text-green-500"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                            />
                        </svg>
                    </div>

                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Thank You!
                    </h1>

                    <p className="text-lg text-gray-700 mb-8">
                        Your message has been successfully sent. We&apos;ll get back to you as soon as possible.
                    </p>

                    <Link
                        href="/#home"
                        className="inline-block btn btn-primary bg-gray-900 border-gray-900 hover:bg-gray-800 hover:border-gray-800 rounded-lg px-8 py-3 font-semibold shadow-md hover:shadow-lg transition-all duration-200"
                    >
                        Return to Home
                    </Link>
                </div>
            </div>
        </PageSection>
    );
}
