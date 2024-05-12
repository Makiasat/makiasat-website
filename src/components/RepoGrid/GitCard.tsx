import {
    CircleIcon,
    StarIcon,
} from "@radix-ui/react-icons"

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card.tsx"
import {cn} from "@/lib/utils.ts";


interface GitCardProps {
    repoUrl: string;
    repoName: string;
    repoDescription: string;
    repoLanguageColor: string;
    repoLanguage: string;
    repoUpdate: string;
}


export function GitCard(props: GitCardProps) {

    return (
        <a href={props.repoUrl} target="_blank" rel="noreferrer">
            <Card className="max-w-lg flex-row justify-between">
                <CardHeader className="grid grid-cols-[1fr_110px] items-start gap-4 space-y-0">
                    <div className="space-y-1">
                        <CardTitle>{props.repoName}</CardTitle>
                        <CardDescription>
                            {props.repoDescription}
                        </CardDescription>
                    </div>

                </CardHeader>
                <CardContent>
                    <div className="flex space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                            <CircleIcon className={cn("mr-1 h-3 w-3 text-sky-400", props.repoLanguageColor)}/>
                            {props.repoLanguage}
                        </div>
                        <div className="flex items-center">
                            <StarIcon className="mr-1 h-3 w-3"/>
                        </div>
                        <div>{props.repoUpdate}</div>
                    </div>
                </CardContent>
            </Card>
        </a>
    )
}