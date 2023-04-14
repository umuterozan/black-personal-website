import Head from "next/head"
import type { ReactNode } from "react"

type prop = {
    title: string,
    children: ReactNode
}

export default function Layout({ title, children }: prop) {
    return (
        <>
            <Head>
                <title>{title}</title>
                <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
            </Head>
            <main>{children}</main>
        </>
    )
}