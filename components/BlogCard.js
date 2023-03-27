import Link from "next/link";

export default function BlogCard({title , path}) {
  return (
    <div className="flex flex-row justify-start items-start border border-blue-700 rounded w-5/12 h-32 p-2">
        <p className="font-Urbanist uppercase text-xl text-blue-700">
            <Link href={'/blog/'+ path}>
                {title}
            </Link>
        </p>
    </div>
  );
}
