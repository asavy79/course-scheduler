import Link from "next/link";

export default function DashboardCard({title, value, description, color, href}: {title: string, value: string, description: string, color: string, href: string}) {
    return (
        <div className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
        <div className={`text-${color}-500 text-lg font-semibold`}>{title}</div>
        <div className="text-3xl font-bold mt-2">{value}</div>
        <div className="text-gray-500 text-sm mt-2">{description}</div>
        <Link href={href} className="inline-block mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors">View Details</Link>
    </div>
    )
}