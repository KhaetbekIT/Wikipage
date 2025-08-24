import type { LayoutType } from "@/types/type"
import { Header } from "./_components/header";

const NewLayout: LayoutType = async ({ children }) => {
    return <main className="py-10 space-y-10">
        <Header />

        <article className="pr-20">
            {children}
        </article>
    </main>
}

export default NewLayout;