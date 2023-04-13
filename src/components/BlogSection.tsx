import Image from "next/image";
import { LinkIcon } from "./icons";

const posts = [
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
];

export default function BlogSection() {
    return (
        <section>
            <div className="container py-[60px] computer:py-[39px] px-[33px] computer:px-[72px]">
                <div className="grid grid-cols-1 computer:grid-cols-4 gap-x-[13px] gap-y-[19px] computer:gap-y-[16px]">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-white/10 border border-white/[.35] rounded-[19px]"
                        >
                            <Image
                                className="w-full computer:w-auto"
                                src={`/Post-${post.id}.svg`}
                                alt={`Post-${post.id}`}
                                width={242}
                                height={173}
                            />
                            <div className="text-white pl-5 pr-6 computer:pl-[13px] computer:pr-[22px] py-4">
                                <h3 className="font-bold text-sm">
                                    {post.title}
                                </h3>
                                <p className="mt-[10px] font-medium text-xs leading-[15px]">
                                    {post.description}
                                </p>
                                <button className="mt-[32px] computer:mt-[18px] font-medium text-xs leading-[15px] flex gap-x-1">
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
