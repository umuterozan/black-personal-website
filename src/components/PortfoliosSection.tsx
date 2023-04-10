import Image from "next/image"
import LinkIcon from "./icons/LinkIcon"

export default function PortfoliosSection() {
    return (
        <section>
            <div className="container py-[62px] px-[101px]">
                <div className="grid grid-cols-2 gap-6">
                    <div className="flex items-center gap-x-3 pr-[32px] bg-white/10 border border-white/[.35] rounded-[19px]">
                        <Image src="/Portfolio-1.svg" alt="Portolio-1" width={181} height={181} />
                        <div className="text-white">
                            <h3 className="font-bold text-sm">There is more than you know</h3>
                            <p className="mt-5 font-medium text-xs leading-[15px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            </p>
                            <button className="mt-[52px] font-medium text-xs leading-[15px] flex gap-x-1">
                                <span>Read more</span>
                                <LinkIcon />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3 pr-[32px] bg-white/10 border border-white/[.35] rounded-[19px]">
                        <Image src="/Portfolio-2.svg" alt="Portolio-1" width={181} height={181} />
                        <div className="text-white">
                            <h3 className="font-bold text-sm">There is more than you know</h3>
                            <p className="mt-5 font-medium text-xs leading-[15px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            </p>
                            <button className="mt-[52px] font-medium text-xs leading-[15px] flex gap-x-1">
                                <span>Read more</span>
                                <LinkIcon />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3 pr-[32px] bg-white/10 border border-white/[.35] rounded-[19px]">
                        <Image src="/Portfolio-3.svg" alt="Portolio-1" width={181} height={181} />
                        <div className="text-white">
                            <h3 className="font-bold text-sm">There is more than you know</h3>
                            <p className="mt-5 font-medium text-xs leading-[15px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            </p>
                            <button className="mt-[52px] font-medium text-xs leading-[15px] flex gap-x-1">
                                <span>Read more</span>
                                <LinkIcon />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3 pr-[32px] bg-white/10 border border-white/[.35] rounded-[19px]">
                        <Image src="/Portfolio-4.svg" alt="Portolio-1" width={181} height={181} />
                        <div className="text-white">
                            <h3 className="font-bold text-sm">There is more than you know</h3>
                            <p className="mt-5 font-medium text-xs leading-[15px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            </p>
                            <button className="mt-[52px] font-medium text-xs leading-[15px] flex gap-x-1">
                                <span>Read more</span>
                                <LinkIcon />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3 pr-[32px] bg-white/10 border border-white/[.35] rounded-[19px]">
                        <Image src="/Portfolio-5.svg" alt="Portolio-1" width={181} height={181} />
                        <div className="text-white">
                            <h3 className="font-bold text-sm">There is more than you know</h3>
                            <p className="mt-5 font-medium text-xs leading-[15px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            </p>
                            <button className="mt-[52px] font-medium text-xs leading-[15px] flex gap-x-1">
                                <span>Read more</span>
                                <LinkIcon />
                            </button>
                        </div>
                    </div>
                    <div className="flex items-center gap-x-3 pr-[32px] bg-white/10 border border-white/[.35] rounded-[19px]">
                        <Image src="/Portfolio-6.svg" alt="Portolio-1" width={181} height={181} />
                        <div className="text-white">
                            <h3 className="font-bold text-sm">There is more than you know</h3>
                            <p className="mt-5 font-medium text-xs leading-[15px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            </p>
                            <button className="mt-[52px] font-medium text-xs leading-[15px] flex gap-x-1">
                                <span>Read more</span>
                                <LinkIcon />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}