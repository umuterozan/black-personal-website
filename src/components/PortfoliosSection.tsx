import Image from "next/image";
import LinkIcon from "./icons/LinkIcon";

const portfolios = [
    {
        id: 1,
        title: "There is more than you know",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
        id: 2,
        title: "There is more than you know",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
        id: 3,
        title: "There is more than you know",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
        id: 4,
        title: "There is more than you know",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
        id: 5,
        title: "There is more than you know",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
    {
        id: 6,
        title: "There is more than you know",
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard",
    },
];

export default function PortfoliosSection() {
    return (
        <section>
            <div className="container py-[62px] px-[33px] computer:px-[101px]">
                <div className="computer:hidden text-center mb-[52px] text-white font-black text-[32px] leading-[39px]">
                    What i’ve done😋
                </div>
                <div className="grid grid-cols-1 computer:grid-cols-2 gap-[19px] computer:gap-6">
                    {portfolios.map((portfolio) => (
                        <div
                            key={portfolio.id}
                            className="flex flex-col computer:flex-row items-center gap-x-3 computer:pr-[32px] bg-white/10 border border-white/[.35] rounded-[19px]"
                        >
                            <Image
                                className="w-full computer:w-auto"
                                src={`/Portfolio-${portfolio.id}.svg`}
                                alt={`Portolio-${portfolio.id}`}
                                width={181}
                                height={181}
                            />
                            <div className="text-white p-5 computer:p-0">
                                <h3 className="font-bold text-sm">
                                    {portfolio.title}
                                </h3>
                                <p className="mt-5 font-medium text-xs leading-[15px]">
                                    {portfolio.description}
                                </p>
                                <button className="mt-[52px] font-medium text-xs leading-[15px] flex gap-x-1">
                                    <span>Read more</span>
                                    <LinkIcon />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
