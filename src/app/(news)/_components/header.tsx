import Link from "next/link";
import LogoImage from "@public/wiki-logo.png"
import Image from "next/image";

export const Header = () => {
    return <header>
        <div className="flex gap-20 items-center">
            <Link href="/" className="inline-block w-40 border-r border-gray-300 pr-10">
                <Image src={LogoImage} alt="logo" className="w-full h-full" />
            </Link>

            <h1 className="text-3xl font-bold">Добавить новую статью</h1>
        </div>
    </header>
}