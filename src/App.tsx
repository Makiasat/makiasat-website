import Spline from '@splinetool/react-spline';
import LandingGrid from "@/components/LandingGrid";
import MembersGrid from "@/components/MembersGrid/main.tsx";
import RepoGrid from "@/components/RepoGrid";
import {Button} from "@/components/ui/button.tsx";
import {Mail} from "lucide-react";


function App() {

    return (
        <div className="flex flex-col w-full h-screen  items-center ">
            <div className="min-h-screen w-full">
                <Spline className="relative" scene="https://prod.spline.design/eZFH5nZjfiC1Htqq/scene.splinecode"/>
            </div>
            <div className="w-full">
                <div className="bg-zinc-900 rounded-t-3xl p-10 flex flex-col items-center justify-center">
                    <div className='max-w-7xl mx-auto mt-10 mb-16'>
                        <LandingGrid/>
                    </div>
                </div>
                <div
                    className="bg-white rounded-3xl p-10 flex flex-col items-center justify-center relative bottom-6">
                    <MembersGrid/>
                </div>
                <div className="bg-black h-12 rounded-t-3xl"></div>
                <div
                    className="h-[50rem] w-full bg-black bg-grid-white/[0.2] relative flex items-center justify-center rounded-3xl flex-col">
                    <div
                        className="absolute pointer-events-none inset-0 flex items-center justify-center bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
                    <RepoGrid/>
                </div>
                <div
                    className="bg-teal-600 rounded-3xl p-10 flex flex-col items-center justify-center relative bottom-6">
                    <div className="flex flex-col md:flex-row between items-center justify-center max-w-7xl w-full gap-20 ">
                        <iframe className="rounded-3xl"
                                src="https://open.spotify.com/embed/episode/0tPeiaQM8iNEMEwGn5V5em?utm_source=generator&theme=0"
                                width="100%" height="352" frameBorder="0" allowFullScreen={true}
                                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                                loading="lazy"></iframe>

                        <div className="flex flex-col gap-8">
                            <h2 className="scroll-m-20 text-5xl font-extrabold tracking-tight lg:text-7xl">
                                Try listening to our podcast...
                            </h2>
                            <a href="https://open.spotify.com/show/0c4boekEEGYEzPxgbTgpGV?si=401a754331614628"
                               className="w-full">
                                <Button size="lg" className="h-20 text-xl w-full">Check out MakiaOnAir</Button>
                            </a>
                        </div>
                    </div>
                </div>

                <div
                    className="flex flex-col h-[40rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative items-center justify-center">
                    <div className="flex flex-col gap-8 w-full items-center justify-center mt-8 h-96">
                        <h1 className="text-5xl font-bold">Get in touch !</h1>
                        <p className="flex items-center text-center max-w-lg">If you have any questions or requests for
                            help, please do not hesitate to write to us, we will be happy to answer any of your
                            questions.</p>
                        <a href="mailto:EMAILADDRESS"><Button size="lg"><Mail className="mr-2 h-4 w-4"/>Contact us</Button></a>

                    </div>
                    <div className="flex flex-row overflow-hidden">
                        <img alt="" className="h-56 relative bottom-0" src="src/assets/stand-up/matteo.png"/>
                        <img alt="" className="h-56 relative bottom-0" src="src/assets/stand-up/giulio.png"/>
                        <img alt="" className="h-56 relative bottom-0" src="src/assets/stand-up/tommaso.png"/>
                        <img alt="" className="h-56 relative bottom-0" src="src/assets/stand-up/gaia.png"/>
                        <img alt="" className="h-56 relative bottom-0" src="src/assets/stand-up/prof.png"/>
                        <img alt="" className="h-56 relative bottom-0" src="src/assets/stand-up/emanuele.png"/>
                        <img alt="" className="h-56 relative bottom-0" src="src/assets/stand-up/deme.png"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
