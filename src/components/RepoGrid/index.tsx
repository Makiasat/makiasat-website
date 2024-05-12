import {GitCard} from "@/components/RepoGrid/GitCard.tsx";



const RepoGrid = () => {

    return (
        <div className="flex flex-col items-center">
            <h1 className="relative z-10 text-4xl md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold mb-8">
                Check out our <br/> codebase!
            </h1>
            <a href="https://github.com/Makiasat" target="_blank" rel="noreferrer">
                <button
                    className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] hover:outline-none hover:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
                <span
                    className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"
                />
                    <span
                        className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl">
                    Go to Organization
                </span>
                </button>
            </a>

            <div className="flex flex-col p-2 md:p-0 md:flex-row gap-4 items-center justify-center mt-20">
                <GitCard
                    repoUrl="https://github.com/Makiasat/MakiaSat-Software"
                    repoName="MakiaSat-Software"
                    repoDescription="Source code for the arduino cansat module that transmits data to the ground station."
                    repoLanguageColor="fill-sky-400"
                    repoLanguage="Arduino"
                    repoUpdate="Sab 11 mag 2024"
                />
                <GitCard
                    repoUrl="https://github.com/Makiasat/MakiaSat-LandStation"
                    repoName="MakiaSat-LandStation"
                    repoDescription="Receive data from the cansat to the ground station and plot it in real time."
                    repoLanguageColor="fill-green-400"
                    repoLanguage="Python"
                    repoUpdate="Sab 11 mag 2024"
                />
            </div>
        </div>
    )
}

export default RepoGrid