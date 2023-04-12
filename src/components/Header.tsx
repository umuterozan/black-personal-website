import { usePathname } from "next/navigation";
import { MenuIcon } from "./icons";
import Link from "next/link";

export default function Header() {

    const pathname = usePathname()

    return (
        <header className="h-[51px] bg-header-gradient shadow-header-box border-b-2 border-header-color">
            <div className="h-full container px-[27px] computer:p-0">
                <nav className="h-full max-w-[558px] mx-auto font-bold text-sm text-white flex items-center justify-between">
                    <button className="computer:hidden">
                        <MenuIcon />
                    </button>
                    <Link className={pathname === "/" ? "active" : "hidden computer:inline-block"} href="/">Home</Link>
                    <Link className={pathname === "/about" ? "active" : "hidden computer:inline-block"} href="/about">About</Link>
                    <Link className={pathname === "/contact" ? "active" : "hidden computer:inline-block"} href="/contact">Contact</Link>
                    <Link className={pathname === "/portfolios" ? "active" : "hidden computer:inline-block"} href="/portfolios">Portfolios</Link>
                    <Link className={pathname === "/journey" ? "active" : "hidden computer:inline-block"} href="/journey">Journey</Link>
                    <Link className={pathname === "/blog" ? "active" : "hidden computer:inline-block"} href="/blog">Blog</Link>
                    <div className="computer:hidden"></div>
                </nav>
            </div>
        </header>
    );
}
