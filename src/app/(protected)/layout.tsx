import SignOutButton from "@/components/signout-button"
import Link from "next/link"

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation Header */}
            <header className="bg-white shadow-sm">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                    <nav className="flex items-center space-x-6">
                        <Link 
                            href="/dashboard" 
                            className="text-gray-800 hover:text-blue-600 font-medium"
                        >
                            Dashboard
                        </Link>
                        <Link 
                            href="/available-courses" 
                            className="text-gray-800 hover:text-blue-600 font-medium"
                        >
                            Available Courses
                        </Link>
                        <Link
                            href="/profile"
                            className="text-gray-800 hover:text-blue-600 font-medium"
                        >
                            Profile
                        </Link>
                        <Link
                            href="/courses"
                            className="text-gray-800 hover:text-blue-600 font-medium"
                        >
                            Courses
                        </Link>
                    </nav>
                    <SignOutButton />
                </div>
            </header>

            {/* Main Content */}
            <main>
                {children}
            </main>
        </div>
    )
}