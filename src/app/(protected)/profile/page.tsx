import { auth } from "@/auth";
import SignOutButton from "@/components/signout-button";
import Image from "next/image";

export default async function Profile() {
    const session = await auth();
    const user = session?.user;

    return (
        <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
                <div className="flex flex-col items-center space-y-6">
                    {/* Profile Image */}
                    <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200">
                        {user?.image ? (
                            <img
                                src={user.image}
                                alt="Profile picture"
                                className="w-full h-full object-cover"
                            />
                        ) : (
                            <div className="w-full h-full bg-gray-300 flex items-center justify-center">
                                <span className="text-4xl text-gray-600">
                                    {user?.name?.[0] || user?.email?.[0] || '?'}
                                </span>
                            </div>
                        )}
                    </div>

                    {/* User Info */}
                    <div className="text-center">
                        <h1 className="text-2xl font-bold text-gray-900">
                            {user?.name || 'Anonymous User'}
                        </h1>
                        <p className="text-gray-500 mt-1">{user?.email}</p>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-8 w-full max-w-sm">
                        <div className="text-center">
                            <div className="text-xl font-bold text-gray-900">0</div>
                            <div className="text-sm text-gray-500">Bitches</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-bold text-gray-900">0</div>
                            <div className="text-sm text-gray-500">Hoes</div>
                        </div>
                        <div className="text-center">
                            <div className="text-xl font-bold text-gray-900">0</div>
                            <div className="text-sm text-gray-500">Money</div>
                        </div>
                    </div>

                    {/* Sign Out Button */}
                    <div className="mt-6">
                        <SignOutButton className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}