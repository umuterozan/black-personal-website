import Image from "next/image";
import ButtonGroup from "./ButtonGroup";

export default function ContactSection() {
    return (
        <section>
            <div className="container flex items-center gap-x-5 pt-12 computer:pt-[65px] pb-[45px] pl-6 pr-10 computer:pr-[316px]">
                <Image
                    className="hidden computer:block"
                    src="/Saly-14.svg"
                    alt="Saly-14"
                    width={263}
                    height={468}
                />
                <div className="text-white">
                    <div className="font-bold text-5xl leading-[58px]">
                        <h1>You can reach me any time🙂</h1>
                    </div>
                    <div className="mt-12 computer:mt-[35px] font-semibold text-base leading-[19px]">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor.
                        </p>
                        <ul className="mt-6 grid gap-y-6">
                            <li>Twitter: amirhwsin</li>
                            <li>Github: amireshoon</li>
                            <li>Dribble: amireshoon</li>
                            <li>Telegram: GeekDreamer</li>
                            <li>Email: amirhwsin@outlook.com</li>
                        </ul>
                        <div className="mt-[105px] computer:mt-11 font-semibold flex items-center gap-x-[11px]">
                            <ButtonGroup />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
