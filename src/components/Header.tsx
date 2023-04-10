import ActiveLink from "./ActiveLink"

export default function Header() {
    return (
        <header className="h-[51px] bg-header-gradient shadow-header-box border-b-2 border-header-color">
            <div className="h-full container">
                <nav className="h-full max-w-[558px] mx-auto font-bold text-sm text-white flex items-center justify-between">
                    <ActiveLink activeClassName="active" href="/">Home</ActiveLink>
                    <ActiveLink activeClassName="active" href="/about">About</ActiveLink>
                    <ActiveLink activeClassName="active" href="/contact">Contact</ActiveLink>
                    <ActiveLink activeClassName="active" href="/portfolios">Portfolios</ActiveLink>
                    <ActiveLink activeClassName="active" href="/journey">Journey</ActiveLink>
                    <ActiveLink activeClassName="active" href="/blog">Blog</ActiveLink>
                </nav>
            </div>
        </header>
    )
}