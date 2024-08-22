"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		name: "home",
		path: "/",
	},
	{
		name: "services",
		path: "/services",
	},
	{
		name: "resume",
		path: "/resume",
	},
	{
		name: "work",
		path: "/work",
	},
	{
		name: "contact",
		path: "/contact",
	},
];

const Nav = () => {
	const pathname = usePathname();
	return (
		<nav className='flex gap-8'>
			{links.map((link, index) => (
				<Link
					href={link.path}
					key={index}
					className={`${link.path === pathname && "text-accent-DEAFULT border-b-2 border-accent-DEAFULT"} capitalize font-medium hover:text-accent-DEAFULT translate-all`}>
					{link.name}
				</Link>
			))}
		</nav>
	);
};

export default Nav;
