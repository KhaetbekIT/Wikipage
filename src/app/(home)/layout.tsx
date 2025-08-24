import type { LayoutType } from "@/types/type";
import { Sidebar } from "./_components/sidebar";
import { SidebarInfo } from "./_components/sidebar-info";
import { Footer } from "@/layout/footer";

const RootLayout: LayoutType = async ({ children }) => {
    return <>
        <Sidebar />

        <div className="flex px-20 gap-10">
            <main className="flex-1 p-10">
                {children}
            </main>

            <SidebarInfo />
        </div>

        <Footer />
    </>
}

export default RootLayout;