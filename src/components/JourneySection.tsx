import Image from "next/image";

const timeLineEvents = [
    {
        id: 1,
        date: "2 January 2021",
        title: "The resolution, What am i gonna do?",
        description: "It’s all about the new year and works i have to do",
    },
    {
        id: 2,
        date: "29 January 2021",
        title: "Gow - command line tool to manage works",
        description: "Gow is cli tool written in golang using cobra",
    },
    {
        id: 3,
        date: "2 February 2021",
        title: "Started designing what you are seeing right now!",
        description: "Yes in 2th of february i started designing this site",
    },
    {
        id: 4,
        date: "1 March 2021",
        title: "Maybe it’s time to deploy...!",
        description:
            "Maybe in this day i completed the front and backend of this",
    },
];

export default function JourneySection() {
    return (
        <section>
            <div className="container flex flex-col-reverse computer:flex-row gap-x-20 pb-[30px]">
                <div className="grid gap-y-[15px] computer:gap-y-8 mt-[22px] computer:mt-[30px] px-5 computer:px-0">
                    <div className="flex items-center gap-x-[15px]">
                        <Image
                            className="hidden computer:block"
                            src="/Saly-22.svg"
                            alt="Saly-22"
                            width={221}
                            height={221}
                        />
                        <div className="grid gap-y-[15px] computer:gap-y-8">
                            <h1 className="font-bold text-[36px] leading-[44px] computer:text-5xl computer:leading-[58px] text-white max-w-[573px] text-center computer:text-left">
                                The resolution, What am I gonna do?
                            </h1>
                            <p className="font-medium text-sm leading-[17px] text-white/[.45] max-w-[344px] text-center computer:text-left">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry. Lorem Ipsum has been
                                the industry's standard
                            </p>
                        </div>
                    </div>
                    <div className="text-white grid gap-y-[15px] computer:gap-y-6 max-w-[789px]">
                        <h3 className="font-bold text-sm leading-[17px]">
                            The standard Lorem Ipsum passage, used since the
                            1500s
                        </h3>
                        <p className="font-medium text-sm leading-[17px]">
                            "Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit, sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation ullamco laboris nisi ut aliquip
                            ex ea commodo consequat. Duis aute irure dolor in
                            reprehenderit in voluptate velit esse cillum dolore
                            eu fugiat nulla pariatur. Excepteur sint occaecat
                            cupidatat non proident, sunt in culpa qui officia
                            deserunt mollit anim id est laborum."
                        </p>
                        <p className="font-medium text-sm leading-[17px]">
                            Section 1.10.32 of "de Finibus Bonorum et Malorum",
                            written by Cicero in 45 BC
                            <br />
                            "Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo. Nemo enim ipsam voluptatem quia
                            voluptas sit aspernatur aut odit aut fugit, sed quia
                            consequuntur magni dolores eos qui ratione
                            voluptatem sequi nesciunt. Neque porro quisquam est,
                            qui dolorem ipsum quia dolor sit amet, consectetur,
                            adipisci velit, sed quia non numquam eius modi
                            tempora incidunt ut labore et dolore magnam aliquam
                            quaerat voluptatem. Ut enim ad minima veniam, quis
                            nostrum exercitationem ullam corporis suscipit
                            laboriosam, nisi ut aliquid ex ea commodi
                            consequatur? Quis autem vel eum iure reprehenderit
                            qui in ea voluptate velit esse quam nihil molestiae
                            consequatur, vel illum qui dolorem eum fugiat quo
                            voluptas nulla pariatur?"
                        </p>
                        <p className="font-medium text-sm leading-[17px]">
                            1914 translation by H. Rackham
                            <br />
                            "But I must explain to you how all this mistaken
                            idea of denouncing pleasure and praising pain was
                            born and I will give you a complete account of the
                            system, and expound the actual teachings of the
                            great explorer of the truth, the master-builder of
                            human happiness. No one rejects, dislikes, or avoids
                            pleasure itself, because it is pleasure, but because
                            those who do not know how to pursue pleasure
                            rationally encounter consequences that are extremely
                            painful. Nor again is there anyone
                        </p>
                    </div>
                </div>
                <div className="bg-[#0E0E10] computer:max-w-[227px] pl-[27px] computer:pl-[17px] computer:pr-[19px] pb-6 computer:pb-0 overflow-auto">
                    <h2 className="font-black text-[25px] text-white mt-[22px] computer:mt-10 mb-[15px] computer:mb-[22px]">
                        Time line
                    </h2>
                    <div className="flex computer:grid gap-x-[18px] gap-y-4">
                        <select className="hidden computer:inline bg-transparent text-white outline-none border border-white/[.35] rounded-[9px] p-[13px] w-full">
                            <option selected>2021</option>
                        </select>
                        {timeLineEvents.map((event) => (
                            <div key={event.id} className="grid gap-y-2">
                                <small className="hidden computer:inline text-[11px] text-white/[.57]">
                                    {event.date}
                                </small>
                                <div className="bg-[#fdb827]/[.05] border border-white/[.35] rounded-[9px] p-[13px] flex flex-col justify-between w-[191px] computer:w-auto min-h-[88px]">
                                    <h3 className="font-bold text-xs leading-[15px] text-white">
                                        {event.title}
                                    </h3>
                                    <p className="font-medium text-[11px] leading-[13px] text-white/[.56]">
                                        {event.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
