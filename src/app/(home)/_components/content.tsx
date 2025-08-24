import { Time } from "@/libs/utils"
import Link from "next/link"

export const Content = () => {
    return <article className="space-y-6">
        <h2 className="text-2xl font-bold">Новая статья - 4</h2>
        <time dateTime="2023-01-01" className="text-gray-500 block">
            {Time().format("MMMM DD, YYYY")}
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
            <Link href={"/articles/1"} className="text-white px-4 py-2 rounded hover:bg-link-hover inline-block text-center bg-button">
                Читать далее
            </Link>
        </div>
    </article>
}