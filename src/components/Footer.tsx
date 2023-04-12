import { GithubIcon, TwitterIcon, DribbleIcon } from "./icons";

export default function Footer() {
    return (
        <footer>
            <div className="container px-6 text-xs text-white flex items-center justify-between">
                <div>Copyright © 2021 All rights reserved.</div>
                <div className="flex items-center gap-x-4 -ml-20">
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
                <div>Source code available</div>
            </div>
        </footer>
    );
}
