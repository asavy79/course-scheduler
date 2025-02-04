import SignIn from "@/components/signin-button";
import { signOut, auth } from "@/auth";
import SignOutButton from "@/components/signout-button";


export default async function Prereq() {
    const session = await auth();
    const user = session?.user;

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 flex items-center justify-center p-4">
            <div className="max-w-md w-full backdrop-blur-lg bg-white/80 rounded-2xl shadow-2xl p-8 border border-white/20">
                <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">
                    {user ? 'Welcome Back!' : 'Sign In'}
                </h1>
                <div className="space-y-6">
                    {!user ? (
                        <div className="flex flex-col items-center">
                            <p className="text-gray-600 text-center mb-8 text-lg">
                                Please sign in to access your course schedule
                            </p>
                            <div className="transform hover:scale-105 transition-transform duration-200">
                                <SignIn />
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-col items-center">
                            <p className="text-gray-600 text-center mb-8 text-lg">
                                Signed in as {user.email}
                            </p>
                            <div className="transform hover:scale-105 transition-transform duration-200">
                                <SignOutButton />
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}