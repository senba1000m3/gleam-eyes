import Image from "next/image"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"

export default function Home() {
    const features = [
        {
            title: "全新社團活動",
            description:
                "動畫社與 VTuber 社的合併帶來了前所未有的跨界社團活動。從動畫欣賞會到 VR 遊戲競賽，從角色扮演到技術研討，我們為不同興趣的社員提供多元化的活動選擇，促進 ACGVN 領域的交流與合作。目前，幹部群也正在努力策畫社團全新的麻將大賽與女裝評鑑，誓言帶給社員與以往截然不同的社團體驗。",
            imageUrl: "/happy.png",
            imageAlt: "全新社團活動",
        },
        {
            title: "獨家 VR 技術",
            description:
                "社團獨家引進2025年款NERvGear，搭載 YJU1919 晶片，提供前所未有的沉浸式體驗。不只是遊戲，更是另一種人生。" +
                "我們的幹部團隊確保每位社員都能安全地進入虛擬世界，在這裡，你可以遵循你內心的慾望，不管是想要四處探索，或是跟心儀的社員擁抱，甚至變成小男娘，都能滿足你的各種需求。最重要的是，你無需擔心被困在遊戲中。",
            imageUrl: "/room.png",
            imageAlt: "獨家 VR 技術",
        },
        {
            title: "全新社辦（活動中心 5F 514）",
            description: "社員制社辦，由兩社社長斥巨資打造，火紅的燭光蠟燭為我們照向前進的光明，而非黑色的布簾則帶來無限可能，偌大無比的巨大柔軟沙發，仿佛身處最高級的殿堂。若在這樣的社辦中，來上一杯午後紅茶，這不是很棒的點子嗎！",
            imageUrl: "/level.webp",
            imageAlt: "全新社辦",
        },
        {
            title: "社團指導老師",
            description: "偉大的奇宏大統領，將作為我們新社團的指導老師，蒞臨全新的閃耀魔眼社，為我們帶來創作與管理的革新，教導我們寄送信件與抽宿舍的技巧。",
            imageUrl: "/chihong.png",
            imageAlt: "社團指導老師",
        },
    ]

    return (
        <div className="flex flex-col min-h-screen">
            <div className="relative w-full h-[40vh] md:h-[80vh]">
                <Image src="/banner.gif" alt="閃耀魔眼社橫幅" fill priority className="object-cover w-full" />
                <div className="absolute inset-0 bg-black/50 flex items-center justify-center flex-col gap-1 md:gap-5">
                    <h1 className="text-[1.3rem] md:text-5xl font-bold text-white text-center px-4">國立陽明交通大學閃耀魔眼社</h1>
                    <h3 className="text-1xl md:text-2xl font-bold text-white text-center px-4">The Gleam Eyes Club</h3>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16 max-w-4xl">
            <h2 className="text-3xl font-bold text-center mb-12">🎮社團介紹🎮</h2>
                <div className="prose prose-lg dark:prose-invert mx-auto mb-16">
                    <p className="text-lg mb-6">
                        長久以來，動畫社員一直困於想要星爆卻好星沒好爆，因為社辦過於狹小，沒有足夠的空間施展星爆氣流斬；VT社員則一直因為高階顯卡晶片YJU1919斷貨，導致無法買到最新2025年款的NervGear潛行進入艾恩格朗特而耿耿於懷。
                    </p>
                    <p className="text-lg mb-6">基於各位社員的訴求，交大動畫社與交大 VTuber 兩社在經討論後，決定合併成閃耀魔眼社，一同邁向光明的未來。</p>
                    <p className="text-lg mb-6">
                        雖然我們各自對於原本的社團活動形式相當滿意，也對改變長久以來的慣例感到不安，但為了提供社員們最佳的星爆體驗、回應長久以來的改革呼聲，兩位社長痛定思痛，最終還是決定進行合併，冀望能為陽明交大的宅系社團帶來新氣象。
                    </p>
                </div>

                <h2 className="text-3xl font-bold text-center mb-12">♂ 社團特色 ♂</h2>

                <div className="space-y-24">
                    {features.map((feature, index) => (
                        <div
                            key={feature.title}
                            className={`flex flex-col ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"} gap-8 items-center`}
                        >
                            <div className="w-full md:w-1/2">
                                <Card className="overflow-hidden border-2 border-primary/20">
                                    <div className="relative aspect-video">
                                        <Image
                                            src={feature.imageUrl || "/placeholder.svg"}
                                            alt={feature.imageAlt}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>
                                </Card>
                            </div>
                            <div className="w-full md:w-1/2">
                                <CardTitle className="text-2xl mb-4">{feature.title}</CardTitle>
                                <CardDescription className="text-lg">{feature.description}</CardDescription>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

