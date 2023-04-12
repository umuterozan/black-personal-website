import Image from "next/image";
import ButtonGroup from "./ButtonGroup";

export default function HomeSection() {
    return (
        <section>
            <div className="container computer:px-6 relative">
                <div className="absolute -z-10 -left-12 computer:left-0 computer:z-0 w-[309px] h-[309px] computer:w-[407px] computer:h-[407px] pointer-events-none">
                    <Image
                        src="/Saly-13.svg"
                        alt="Saly-13.svg"
                        width={407}
                        height={407}
                    />
                </div>
                <div className="px-7 computer:px-0 computer:max-w-[558px] mx-auto text-center text-white pt-48 computer:pt-40 pb-[69px] computer:pb-[84px]">
                    <h1 className="font-black text-[55px] leading-[67px] computer:text-[64px] computer:leading-[77px]">
                        <span className="block">Hey there 👋</span>
                        <span className="block">I am Amirhossein</span>
                    </h1>
                    <p className="font-semibold mt-[19px] computer:mt-11 leading-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                    <div className="mt-9 computer:mt-8 font-semibold flex items-center justify-center gap-x-[11px]">
                        <ButtonGroup />
                    </div>
                </div>
                <div className="absolute invisible computer:visible pointer-events-none -bottom-[42px] right-6">
                    <Image
                        src="/Saly-8.svg"
                        alt="Saly-8.svg"
                        width={362}
                        height={362}
                    />
                </div>
            </div>
        </section>
    );
}
