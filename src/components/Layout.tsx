import { ReactNode, lazy, Suspense } from "react";
import Navbar from "./Navbar";

const Footer = lazy(() => import("./Footer"));

const Layout = ({ children }: { children: ReactNode }) => (
    <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 pt-[68px]">{children}</main>
        <Suspense fallback={<div className="h-40" />}>
            <Footer />
        </Suspense>
    </div>
);

export default Layout;
