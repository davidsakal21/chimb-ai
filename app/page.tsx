import { PitchDeckAnalyzer } from "@/components/pitch-deck-analyzer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                {/* Company Logo */}
                <Image
                  src="/placeholder.svg?height=40&width=160"
                  alt="Company Logo"
                  width={160}
                  height={40}
                  className="h-10 w-auto"
                />
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Home
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                About
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Services
              </Link>
              <Link href="#" className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium">
                Contact
              </Link>
            </nav>
            <div className="hidden md:flex">
              <Button variant="outline" className="mr-3">
                Sign In
              </Button>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              Venture Capital <span className="text-primary">Insights</span>
            </h1>
            <p className="mt-4 text-xl text-gray-600">Get expert analysis and feedback on your pitch deck in seconds</p>
          </div>
        </div>
      </section>

      {/* Pitch Deck Analyzer Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-gray-900">Pitch Deck Analyzer</h2>
              <p className="mt-3 text-lg text-gray-600">Upload your pitch deck and get instant AI-powered feedback</p>
            </div>

            <PitchDeckAnalyzer />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900">Why Use Our Analyzer</h2>
            <p className="mt-4 text-lg text-gray-600">Get comprehensive insights that help you improve your pitch</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Expert Analysis</h3>
              <p className="text-gray-600">AI-powered insights based on thousands of successful pitch decks</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Instant Results</h3>
              <p className="text-gray-600">Get comprehensive feedback in seconds, not days</p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 text-primary"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                  />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">Actionable Insights</h3>
              <p className="text-gray-600">Clear recommendations to improve your chances of funding</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between">
            <div className="mb-8 md:mb-0">
              <Image
                src="/placeholder.svg?height=40&width=160"
                alt="Company Logo"
                width={160}
                height={40}
                className="h-10 w-auto brightness-200"
              />
              <p className="mt-4 text-gray-400 max-w-xs">Helping startups perfect their pitch and secure funding</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div>
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Company</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Careers
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Resources</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Guides
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Support
                    </Link>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-gray-300 uppercase tracking-wider">Legal</h3>
                <ul className="mt-4 space-y-2">
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Privacy
                    </Link>
                  </li>
                  <li>
                    <Link href="#" className="text-gray-400 hover:text-white">
                      Terms
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-gray-800 pt-8">
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} Your Company. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

