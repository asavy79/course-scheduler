import { auth } from "@/auth";
import { SessionProvider } from "next-auth/react";

export default async function DashboardLayout({children}: {children: React.ReactNode}) {
    const session = await auth();
    const user = session?.user;

    if (!user) {
        return <div>Loading...</div>
    }
    return (
        <div>
            <SessionProvider session={session}>
                {children}
            </SessionProvider>
        </div>
    )
}   