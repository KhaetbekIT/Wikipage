import { Time } from "@/libs/utils";
import type { PageType } from "@/types/type";
import Link from "next/link";

const Page: PageType = () => {
    return <article className="space-y-6">
        <h1 className="text-2xl font-bold">Новая статья - 1</h1>

        <time dateTime="2023-01-01" className="text-gray-500 block">
            {Time().format("MMMM DD, YYYY HH:mm")}
        </time>

        <div className="space-y-3" >
            <p>
                Это пример статьи, созданной для демонстрации возможностей платформы. Она содержит заголовок, дату и несколько абзацев текста.
            </p>
            <p>
                Платформа позволяет легко создавать и редактировать статьи, а также управлять их содержимым. Вы можете добавлять изображения, ссылки и другие элементы для улучшения визуального восприятия.
            </p>
            <p>
                Надеемся, что эта статья поможет вам понять, как использовать платформу для создания качественного контента.
            </p>
            <p>
                Спасибо за внимание!
            </p>
        </div>

        <div className="text-right">
            <Link href={`/new?edit=${1}`} className="text-white px-4 py-2 rounded hover:bg-link-hover inline-block text-center bg-button">
                Редактировать
            </Link>
        </div>
    </article>
}

export default Page;