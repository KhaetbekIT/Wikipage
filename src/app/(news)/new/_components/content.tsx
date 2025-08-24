export const Content = () => {
    return <div className="grid grid-cols-2">
        <div className="space-y-10">
            <h3 className="px-5 py-2.5 text-xl font-semibold bg-gray-200">
                Редактор статьи
            </h3>

            <form className="space-y-9 px-5">
                <input type="text" placeholder="Title" className="px-5 py-2.5 border rounded w-full" />
                <textarea className="px-5 py-2.5 border rounded w-full" placeholder="Content" rows={10} />
                <button className="text-white px-4 py-2 rounded hover:bg-link-hover block text-center bg-button cursor-pointer">Добавить статью</button>
            </form>

        </div>

        <div className="border-l border-gray-200">
            <h2 className="font-bold text-lg bg-[#7e919c] px-5 py-2.5 text-white">Предпросмотр статьи</h2>
            
            <div className="bg-white space-y-5 p-5 min-h-[465px]">
                <h2 className="text-2xl font-bold">Новая статья</h2>

                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
            </div>
        </div>
    </div>
}