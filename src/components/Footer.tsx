import Image from "next/image"

export default function Footer() {
    return (
        <footer>
            <div className="container px-6 text-xs text-white flex items-center justify-between">
                <div>Copyright © 2021 All rights reserved.</div>
                <div className="flex items-center gap-x-4 -ml-20">
                    <button><Image src="/github-icon.svg" alt="github-icon" width={26} height={26} /></button>
                    <button><Image src="/twitter-icon.svg" alt="twitter-icon" width={18} height={18} /></button>
                    <button><Image src="/dribble-icon.svg" alt="dribble-icon" width={18} height={18} /></button>
                </div>
                <div>Source code available</div>
            </div>
        </footer>
    )
}