import Image from "next/image";

export default function AboutSection() {
    return (
        <section>
            <div className="container">
                <div className="flex flex-col computer:flex-row gap-x-[6px] gap-y-6 computer:gap-y-0 pl-[46px] pr-[45px] computer:pl-[46px] computer:pr-[226px]">
                    <Image
                        className="pointer-events-none"
                        src="/Saly-10.svg"
                        alt="Saly-10"
                        width={323}
                        height={323}
                    />
                    <h1 className="computer:mt-[82px] text-center computer:text-left font-bold text-[32px] leading-[39px] computer:text-[45px] computer:leading-[54px] text-white">
                        I’m Amirhossein Meydani A{" "}
                        <span className="text-[#FDB827]">Backend</span> and{" "}
                        <span className="text-[#FDB827]">Android</span>{" "}
                        Programmer and{" "}
                        <span className="text-[#FDB827]">UI/UX</span> Designer
                    </h1>
                </div>
                <div className="text-white text-xs leading-[15px] grid gap-y-4 my-5 pl-7 pr-[29px] computer:pl-[59px] computer:pr-[51px]">
                    <h3 className="font-bold">
                        The standard Lorem Ipsum passage, used since the 1500s
                    </h3>
                    <p className="font-medium">
                        "Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu
                        fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit
                        anim id est laborum."
                    </p>
                    <h3 className="font-bold">
                        Section 1.10.32 of "de Finibus Bonorum et Malorum",
                        written by Cicero in 45 BC
                    </h3>
                    <p className="font-medium">
                        "Sed ut perspiciatis unde omnis iste natus error sit
                        voluptatem accusantium doloremque laudantium, totam rem
                        aperiam, eaque ipsa quae ab illo inventore veritatis et
                        quasi architecto beatae vitae dicta sunt explicabo. Nemo
                        enim ipsam voluptatem quia voluptas sit aspernatur aut
                        odit aut fugit, sed quia consequuntur magni dolores eos
                        qui ratione voluptatem sequi nesciunt. Neque porro
                        quisquam est, qui dolorem ipsum quia dolor sit amet,
                        consectetur, adipisci velit, sed quia non numquam eius
                        modi tempora incidunt ut labore et dolore magnam aliquam
                        quaerat voluptatem. Ut enim ad minima veniam, quis
                        nostrum exercitationem ullam corporis suscipit
                        laboriosam, nisi ut aliquid ex ea commodi consequatur?
                        Quis autem vel eum iure reprehenderit qui in ea
                        voluptate velit esse quam nihil molestiae consequatur,
                        vel illum qui dolorem eum fugiat quo voluptas nulla
                        pariatur?"
                    </p>
                    <h3 className="font-bold">
                        1914 translation by H. Rackham
                    </h3>
                    <p className="font-medium">
                        "But I must explain to you how all this mistaken idea of
                        denouncing pleasure and praising pain was born and I
                        will give you a complete account of the system, and
                        expound the actual teachings of the great explorer of
                        the truth, the master-builder of human happiness. No one
                        rejects, dislikes, or avoids pleasure itself, because it
                        is pleasure.
                    </p>
                </div>
            </div>
        </section>
    );
}
