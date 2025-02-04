import { signIn } from "@/auth"
import Image from "next/image"

export default function SignIn() {
  return (
    <form
      action={async () => {
        "use server"
        await signIn("google")
      }}
    >
      <button
        className="flex items-center gap-3 px-6 py-3 border border-gray-300 rounded-md 
        bg-white text-gray-700 hover:bg-gray-50 transition-colors duration-200 
        shadow-sm font-medium text-[15px]"
        type="submit"
      >
        <Image
          src="/google-logo.svg"
          alt="Google logo"
          width={18}
          height={18}
          className="w-[18px] h-[18px]"
        />
        Continue with Google
      </button>
    </form>
  )
} 