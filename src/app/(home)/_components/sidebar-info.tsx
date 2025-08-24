import Link from "next/link"

export const SidebarInfo = () => {
    return <div className="py-10 w-2xl ">
        <div className="bg-white px-10 py-5 space-y-6">
            <div className="space-y-3 border border-gray-200 p-5 rounded">
                <h1 className="text-2xl font-bold"> Добро пожаловать в вики-страницу</h1>

                <p>это мини пет-проект, созданный для учебных целей</p>
            </div>

            <div className="space-y-3 border border-gray-200 p-5 rounded">
                <h3 className="text-lg font-semibold text-gray-300">
                    Новая статья
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

            <div className="space-y-3 border border-gray-200 p-5 rounded">
                <h3 className="text-lg font-semibold text-gray-300">
                    Все статьи
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

                    <li>
                        <Link href="/articles/1" className="text-link hover:text-link-hover">
                            Cтатья - 5
                        </Link>
                    </li>

                    <li>
                        <Link href="/articles/1" className="text-link hover:text-link-hover">
                            Cтатья - 6
                        </Link>
                    </li>

                    <li>
                        <Link href="/articles/1" className="text-link hover:text-link-hover">
                            Cтатья - 7
                        </Link>
                    </li>

                    <li>
                        <Link href="/articles/1" className="text-link hover:text-link-hover">
                            Cтатья - 8
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
}