import { GithubIcon, TwitterIcon, DribbleIcon } from "./icons";

export default function Footer() {
    return (
        <footer>
            <div className="container px-24 computer:px-6 text-xs text-white flex flex-col computer:flex-row gap-y-[10px] items-center justify-between">
                <div className="order-3 computer:order-1">Copyright © 2021 All rights reserved.</div>
                <div className="flex items-center gap-x-4 computer:-ml-20 order-1 computer:order-2">
                    <button>
                        <GithubIcon />
                    </button>
                    <button>
                        <TwitterIcon />
                    </button>
                    <button>
                        <DribbleIcon />
                    </button>
                </div>
                <div className="order-2 computer:order-3">Source code available</div>
            </div>
        </footer>
    );
}
