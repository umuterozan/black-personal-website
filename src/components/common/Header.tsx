import { usePathname } from "next/navigation";
import { MenuIcon, CloseIcon } from "../icons";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const pathname = usePathname();

    function handleMenu() {
        if (isMenuOpen) setMenuOpen(false);
        if (!isMenuOpen) setMenuOpen(true);
    }

    const routes = [
        {
            path: "/",
            name: "Home",
            isActive: pathname === "/",
        },
        {
            path: "/about",
            name: "About",
            isActive: pathname === "/about",
        },
        {
            path: "/contact",
            name: "Contact",
            isActive: pathname === "/contact",
        },
        {
            path: "/portfolios",
            name: "Portfolios",
            isActive: pathname === "/portfolios",
        },
        {
            path: "/journey",
            name: "Journey",
            isActive: pathname === "/journey",
        },
        {
            path: "/blog",
            name: "Blog",
            isActive: pathname === "/blog",
        },
    ];

    return (
        <>
            <header className="h-[51px] bg-header-gradient shadow-header-box border-b-2 border-header-color">
                <div className="h-full container px-[27px] computer:p-0">
                    <nav className="h-full max-w-[558px] mx-auto font-bold text-sm text-white flex items-center justify-between">
                        <button
                            onClick={handleMenu}
                            className="computer:hidden"
                        >
                            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
                        </button>
                        {routes.map((route, key) => (
                            <Link
                                key={key}
                                className={
                                    route.isActive
                                        ? "active"
                                        : "hidden computer:inline-block"
                                }
                                href={route.path}
                            >
                                {route.name}
                            </Link>
                        ))}
                        <div className="computer:hidden"></div>
                    </nav>
                </div>
            </header>
            {isMenuOpen && (
                <div className="computer:hidden container">
                    <nav className="font-bold text-sm text-white bg-white/[.13] divide-y-2 divide-white/[.15]">
                        {routes
                            .filter((route) => !route.isActive)
                            .map((route, key) => (
                                <Link
                                    key={key}
                                    className="block py-[14px] pl-[27px] transition-all hover:bg-white/[.15]"
                                    href={route.path}
                                >
                                    {route.name}
                                </Link>
                            ))}
                    </nav>
                </div>
            )}
        </>
    );
}
