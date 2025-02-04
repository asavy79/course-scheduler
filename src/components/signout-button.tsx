import { signOut } from "@/auth";


// how can I make this take in classproperties as a prop?
export default function SignOutButton({ className }: { className?: string }) {
    return (
        <form action={async () => {
            "use server"
            await signOut();
        }}>
            <button className={className} type="submit">Sign Out</button>
        </form>
    )
}