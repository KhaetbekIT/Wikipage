import type { LayoutType } from "@/types/type";
import "@/css/globals.css";

const RootLayout: LayoutType = async ({ children }) => {
    return <html lang="zxx" translate="no">
        <body className="bg-body relative min-h-screen pl-64">
            {children}
        </body>
    </html>
}

export default RootLayout;