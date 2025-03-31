import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const members = [
    {
        name: "草芬",
        role: "社長",
        avatar: "/feng.jpg",
        description: `閃耀魔眼社的靈魂人物，同時也是SAO全服最大的公會《血盟騎士團》的會長希茲克利夫，能一眼看穿陽明交大的真理（至少他自己這麼認為）。
本人現在是大四下二周目，但學分卻比在醫院躺了兩年不願具名的桐姓黑色劍士還要少。
「這不是很戲劇性的發展嗎」，本人總是這麼說道。`,
    },
    {
        name: "非洲人",
        role: "總務",
        avatar: "/african.jpg",
        description: `身為閃耀魔眼社的總務，他的工作是讓社團運作得井然有序——至少在表面上如此。他負責管理活動經費（即便社團的資金來源可疑），安排社團活動，並確保社員們每日的星爆練習順利進行。
此外，他還要處理社長突發奇想的瘋狂計畫，並確保公關部不會因為過度誇張的宣傳而惹上麻煩。
總務擁有極為強大的危機處理能力，畢竟在這個社團，混亂才是日常。`,
    },
    {
        name: "千羽",
        role: "公關",
        avatar: "/senba.webp",
        description: `閃耀魔眼社的形象大使，負責向全世界宣傳艾恩格朗特的神奇與偉大（即使沒人相信）。
他擅長製造話題，無論是誇張的宣傳海報、神秘的網站、還是「十秒十六下」的都市傳說，都是他的傑作。
他的目標是讓閃耀魔眼社成為全校最受矚目的社團，即使這意味著要製造一些「靈異事件」。`,
    },
    {
        name: "企鵝",
        role: "副社長",
        avatar: "/penguin.png",
        description: `閃耀魔眼社的第二把交椅。
他既是社長的得力助手，也是整個社團的理性擔當（儘管有時候會穿上女僕裝讓社員理性蒸發）。
據說本體是企鵝，不知道在南極是否也有114.514G的高速無線網路可以讓他暢玩SAO。`,
    },
    {
        name: "阿冬",
        role: "活動",
        avatar: "/dong.webp",
        description: `閃耀魔眼社的幕後策劃師，負責設計各種腦洞大開的活動。
雖然現在在「閃耀魔眼社」擔任活動，但是好像是因為隔壁「喝的LIVE」供應的飲料品項缺貨情形相當嚴重，憤而跳槽SAO。
目前不定期會在艾恩格朗特22層湖邊的小木屋裡面，參與「喝的LIVE」的線上演唱會。`,
    },
]

export default function MembersPage() {
    return (
        <div className="container mx-auto px-4 py-10">
            <h1 className="text-3xl font-bold mb-8 text-center">社團幹部（攻略組）</h1>

            <div className="grid grid-cols-1 gap-12 max-w-6xl mx-auto">
                {members.map((member) => (
                    <Card key={member.role} className="overflow-hidden">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <Avatar className="h-24 w-24 border-2 border-primary">
                                <AvatarImage src={member.avatar} alt={member.name} />
                                <AvatarFallback>{member.name[0]}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle className="text-2xl">{member.name}</CardTitle>
                                <CardDescription className="text-base">{member.role}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="whitespace-pre-line text-muted-foreground mt-3">{member.description}</div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

