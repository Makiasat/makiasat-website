import {BadgePlus, GraduationCap, Sparkle, TestTubeDiagonal, Trophy} from "lucide-react";

export const data = [
    {
        cName: "bg-green-100",
        icon: <Sparkle className="h-12 w-12"/>,
        title: "Our Project",
        description: "The conception, design, construction, and programming of the cansat constitutes an intriguing challenge that we faced by working as a team, offering our talents to realize a project that needs many skills."
    },
    {
        cName: "bg-yellow-100",
        icon: <GraduationCap className="h-12 w-12 "/>,
        title: "Learn",
        description: "This project helps develop teamwork skills such as Problem solving, Learning by doing and peer tutoring."
    },
    {
        cName: "bg-orange-100",
        icon: <TestTubeDiagonal className="h-12 w-12 "/>,
        title: "Experiment",
        description: "\n" +
            "In our experiment is to measure air pollution and weather conditions during flight. Readings of items such as fine particles and temperature will be taken at different altitudes so as to verify the relationship between the concentration of various pollutants and meteorological data."
    },
    {
        cName: "bg-purple-100",
        icon: <BadgePlus className="h-12 w-12"/>,
        title: "Innovation",
        description: "It's small, inexpensive and reusable, allows pollutant data collection simply and fast on the vertical profile."
    },
    {
        cName: "bg-blue-100",
        icon: <Trophy className="h-12 w-12"/>,
        title: "Competition",
        description: "Passing the first stage of selection are only 10 schools throughout italy, thereafter the evaluation of our work depends on several areas, including social coverage and teamwork. The winners of the competition will have the opportunity to visit the ESA headquarters on a guided tour."
    },

]