interface HeaderLinkObj {
    icon: string;
    href: string;
}

const HeaderLinkObjects: HeaderLinkObj[] = [
    {
        icon: "fa-brands fa-github",
        href: "https://github.com/Dakskihedron",
    },
    {
        icon: "fa-regular fa-envelope",
        href: "mailto:nathan@dakskihedron.com",
    },
    {
        icon: "fa-brands fa-linkedin",
        href: "https://www.linkedin.com/in/nathanzhou352",
    },
    {
        icon: "fa-brands fa-mastodon",
        href: "https://mastodon.social/@Dakskihedron",
    },
];

export default HeaderLinkObjects;
export type { HeaderLinkObj };
