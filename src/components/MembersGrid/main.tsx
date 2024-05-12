import {useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card.tsx";
import {data} from "@/components/MembersGrid/data"
import {Button} from "@/components/ui/button.tsx";
import {Github, Instagram, Link} from "lucide-react";


interface MemberInterface {
    cName: string;
    name: string;
    surname: string;
    description: string;
    role: string;
    ig: string;
    gh: string;
    wb: string;
}

const MembersGrid = () => {
    const [member, setMember] = useState<MemberInterface>(data[0])


    const get_data = (name: string) => {
        for (const member of data) {
            if (member.name === name) {
                setMember(member)
                console.log(member)
            }
        }
    }

    return (
        <div
            className="flex w-full flex-col md:flex-row justify-between sm:gap-20 md:gap-40 max-w-7xl items-start mt-8 mb-20">
            <div className="flex flex-col">
                <h2 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl mb-12">
                    Team&nbsp;
                    <br className="hidden md:block"/>
                    Members
                </h2>
                <Card className=" rounded-xl shadow-lg overflow-hidden max-w-3xl">
                    <CardHeader>
                        <CardTitle className="text-3xl">
                            {member?.name} {member?.surname}
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p>{member?.description}</p>
                    </CardContent>
                </Card>
                <div className="flex flex-row gap-2 w-full">
                    {member.ig ? <Button size="sm" className="mt-4 w-full bg-gradient-to-r from-[#833ab4] via-[#fd1d1d] to-[#fcb045]" asChild><a href={member.ig}><Instagram className="mr-2 h-4 w-4"/> Insta</a></Button> : ""}
                    {member.gh ? <Button size="sm" className="mt-4 w-full" asChild><a href={member.gh}><Github className="mr-2 h-4 w-4"/> GitHub</a></Button> : ""}
                    {member.wb ? <Button size="sm" variant="secondary" className="mt-4 w-full" asChild><a href={member.wb}><Link className="mr-2 h-4 w-4"/> WebSite</a></Button> : ""}
                </div>
            </div>
            <div className='grid grid-cols-2 md:grid-cols-3 items-center justify-between w-full mt-12 md:mt-32'>
                <img
                    onClick={() => get_data("Tommaso")}
                    onMouseEnter={() => get_data("Tommaso")}
                    alt="Tommaso"
                    src="src/assets/tommaso.png"
                    className="md:relative w-40 md:rotate-6 md:left-14 md:hover:right-12 hover:w-48 md:hover:rotate-12 transition-all"
                />
                <img
                    onClick={() => get_data("Emanuele")}
                    onMouseEnter={() => get_data("Emanuele")}
                    alt="Emanuele"
                    src="src/assets/ema.png"
                    className="md:relative w-40 md:bottom-6 md:hover:bottom-12 hover:w-48 transition-all"
                />
                <img
                    onClick={() => get_data("Demetrio")}
                    onMouseEnter={() => get_data("Demetrio")}
                    alt="Demetrio"
                    src="src/assets/deme.png"
                    className="md:relative w-40 md:-rotate-6 md:right-12 md:hover:right-8 hover:w-48 md:hover:rotate-12 transition-all"
                />
                <img
                    onClick={() => get_data("Maria Grazia")}
                    onMouseEnter={() => get_data("Maria Grazia")}
                    alt="Maria Grazia"
                    src="src/assets/prof.png"
                    className="md:relative w-40 md:rotate-6 md:hover:right-6  hover:w-48 md:hover:-rotate-6 transition-all md:col-span-2"
                />
                <img
                    onClick={() => get_data("Jacopo")}
                    onMouseEnter={() => get_data("Jacopo")}
                    alt="Marchesi"
                    src="src/assets/jacopo.png"
                    className="md:relative w-40 md:rotate-6 md:hover:right-2 hover:w-48 md:hover:rotate-12 transition-all md:col-start-3"
                />
                <img
                    onClick={() => get_data("Giulio")}
                    onMouseEnter={() => get_data("Giulio")}
                    alt="Giulio"
                    src="src/assets/giulio.png"
                    className="md:relative w-40 md:rotate-6 md:left-12 md:hover:right-2 hover:w-48 md:hover:rotate-12 transition-all"
                />
                <img
                    onClick={() => get_data("Gaia")}
                    onMouseEnter={() => get_data("Gaia")}
                    alt="Gaia"
                    src="src/assets/gaia.png"
                    className="md:relative w-40 md:top-6 hover:w-48 transition-all"
                />
                <img
                    onClick={() => get_data("Matteo")}
                    onMouseEnter={() => get_data("Matteo")}
                    alt="Matteo"
                    src="src/assets/matteo.png"
                    className="md:relative w-40 md:rotate-6 md:right-12 md:hover:right-8 hover:w-48 md:hover:rotate-12 transition-all"
                />

            </div>
        </div>
    );
};

export default MembersGrid