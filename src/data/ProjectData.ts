interface ProjectObj {
    name: string;
    desc: string;
    href: string;
}

const ProjectObjects: ProjectObj[] = [
    {
        name: "dakskihedron.com",
        desc: "WIP portfolio website.",
        href: "https://github.com/Dakskihedron/dakskihedron.com",
    },
    {
        name: "Graph Visualiser",
        desc: "WIP graph editor and algorithm visualiser.",
        href: "https://github.com/Dakskihedron/graph-visualiser",
    },
    {
        name: "U3DS Docker Image",
        desc: "Docker image for Unturned 3 dedicated server.",
        href: "https://github.com/Dakskihedron/u3ds-docker",
    },
    {
        name: "Advent of Code",
        desc: "My solutions for Advent of Code.",
        href: "https://github.com/Dakskihedron/advent-of-code",
    },
    {
        name: "Superintendent",
        desc: "Discord.js bot written in TypeScript.",
        href: "https://github.com/Dakskihedron/superintendent",
    },
    {
        name: "Unturned DTM",
        desc: "Unturned vehicle mod based on the Delorean Time Machine.",
        href: "https://steamcommunity.com/sharedfiles/filedetails/?id=1082483962",
    },
];

export default ProjectObjects;
export type { ProjectObj };
