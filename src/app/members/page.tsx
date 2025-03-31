import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const members = [
    {
        name: "社長",
        role: "社長",
        description: "負責社團整體運作與對外代表",
        avatar: "P",
    },
    {
        name: "總務",
        role: "總務",
        description: "負責社團財務與物資管理",
        avatar: "T",
    },
    {
        name: "公關",
        role: "公關",
        description: "負責社團對外聯繫與活動宣傳",
        avatar: "PR",
    },
]

export default function MembersPage() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-3xl font-bold mb-8 text-center">社團幹部</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {members.map((member) => (
                    <Card key={member.role} className="overflow-hidden">
                        <CardHeader className="flex flex-row items-center gap-4 pb-2">
                            <Avatar className="h-12 w-12 border-2 border-primary">
                                <AvatarFallback>{member.avatar}</AvatarFallback>
                            </Avatar>
                            <div>
                                <CardTitle>{member.name}</CardTitle>
                                <CardDescription>{member.role}</CardDescription>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p>{member.description}</p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    )
}

