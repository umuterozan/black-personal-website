import Image from "next/image";
import ButtonGroup from "./ButtonGroup";

export default function HomeSection() {
    return (
        <section>
            <div className="container px-6 relative">
                <div className="absolute pointer-events-none left-0">
                    <Image
                        src="/Saly-13.svg"
                        alt="Saly-13.svg"
                        width={407}
                        height={407}
                    />
                </div>
                <div className="max-w-[558px] mx-auto text-center text-white pt-40 pb-[126px]">
                    <h1 className="font-black text-[64px] leading-[77px]">
                        <span className="block">Hey there 👋</span>
                        <span className="block">I am Amirhossein</span>
                    </h1>
                    <p className="font-semibold mt-11 leading-5">
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book.
                    </p>
                    <div className="mt-8 font-semibold flex items-center justify-center gap-x-[11px]">
                        <ButtonGroup />
                    </div>
                </div>
                <div className="absolute pointer-events-none -bottom-[42px] right-6">
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
