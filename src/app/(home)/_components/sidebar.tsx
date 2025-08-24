import Link from "next/link"
import LogoImage from "@public/wiki-logo.png"
import Image from "next/image"

export const Sidebar = () => {
    return <aside className="border-r border-gray-200 w-64 h-screen fixed left-0 top-0">
        <Link href="/" className="block border-b border-gray-200 p-10">
            <Image src={LogoImage} alt="Wiki Logo" className="w-full" />
        </Link>

        <div className="p-10 border-b border-gray-200">
            <Link href={"/new"} className="text-white px-4 py-2 rounded hover:bg-link-hover block text-center bg-button">
                Добавить статью
            </Link>
        </div>

        <div className="space-y-3 p-10">
            <h3 className="text-lg font-semibold text-gray-300">
                Новые статьи
            </h3>


            <ul className="space-y-1.5">
                <li>
                    <Link href="/articles/1" className="text-link hover:text-link-hover">
                        Новая статья - 1
                    </Link>
                </li>

                <li>
                    <Link href="/articles/1" className="text-link hover:text-link-hover">
                        Новая статья - 2
                    </Link>
                </li>

                <li>
                    <Link href="/articles/1" className="text-link hover:text-link-hover">
                        Новая статья - 3
                    </Link>
                </li>

                <li>
                    <Link href="/articles/1" className="text-link hover:text-link-hover">
                        Новая статья - 4
                    </Link>
                </li>
            </ul>
        </div>
    </aside>
}