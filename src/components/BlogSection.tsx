import Image from "next/image"
import { LinkIcon } from "./icons"

export default function BlogSection() {
    return (
        <section>
            <div className="container py-[39px] px-[72px]">
                <div className="grid grid-cols-4 gap-x-[13px] gap-y-[16px]">
                    <div className="bg-white/10 border border-white/[.35] rounded-[19px]">
                        <Image src="/Blog-1.svg" alt="Blog-1" width={242} height={173} />
                        <div className="text-white pl-[13px] pr-[22px] py-4">
                            <h3 className="font-bold text-sm">There is more than you know</h3>
                            <p className="mt-[10px] font-medium text-xs leading-[15px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            </p>
                            <button className="mt-[18px] font-medium text-xs leading-[15px] flex gap-x-1">
                                <span>Read more</span>
                                <LinkIcon />
                            </button>
                        </div>
                    </div>
                    <div className="bg-white/10 border border-white/[.35] rounded-[19px]">
                        <Image src="/Blog-2.svg" alt="Blog-2" width={242} height={173} />
                        <div className="text-white pl-[13px] pr-[22px] py-4">
                            <h3 className="font-bold text-sm">There is more than you know</h3>
                            <p className="mt-[10px] font-medium text-xs leading-[15px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            </p>
                            <button className="mt-[18px] font-medium text-xs leading-[15px] flex gap-x-1">
                                <span>Read more</span>
                                <LinkIcon />
                            </button>
                        </div>
                    </div>
                    <div className="bg-white/10 border border-white/[.35] rounded-[19px]">
                        <Image src="/Blog-3.svg" alt="Blog-3" width={242} height={173} />
                        <div className="text-white pl-[13px] pr-[22px] py-4">
                            <h3 className="font-bold text-sm">There is more than you know</h3>
                            <p className="mt-[10px] font-medium text-xs leading-[15px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            </p>
                            <button className="mt-[18px] font-medium text-xs leading-[15px] flex gap-x-1">
                                <span>Read more</span>
                                <LinkIcon />
                            </button>
                        </div>
                    </div>
                    <div className="bg-white/10 border border-white/[.35] rounded-[19px]">
                        <Image src="/Blog-4.svg" alt="Blog-4" width={242} height={173} />
                        <div className="text-white pl-[13px] pr-[22px] py-4">
                            <h3 className="font-bold text-sm">There is more than you know</h3>
                            <p className="mt-[10px] font-medium text-xs leading-[15px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            </p>
                            <button className="mt-[18px] font-medium text-xs leading-[15px] flex gap-x-1">
                                <span>Read more</span>
                                <LinkIcon />
                            </button>
                        </div>
                    </div>
                    <div className="bg-white/10 border border-white/[.35] rounded-[19px]">
                        <Image src="/Blog-5.svg" alt="Blog-5" width={242} height={173} />
                        <div className="text-white pl-[13px] pr-[22px] py-4">
                            <h3 className="font-bold text-sm">There is more than you know</h3>
                            <p className="mt-[10px] font-medium text-xs leading-[15px]">
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                            </p>
                            <button className="mt-[18px] font-medium text-xs leading-[15px] flex gap-x-1">
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