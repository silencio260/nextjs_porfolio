import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
	{ Icon: <FaGithub />, path: "https://github.com/silencio260" },
	{
		Icon: <FaLinkedinIn />,
		path: "https://www.linkedin.com/in/umar-faruq-0b7741281/",
	},
	// { Icon: <FaYoutube />, path: "" },
	{
		Icon: <FaTwitter />,
		path: "https://x.com/kurritian?t=d4-gu9DpxHcvdiRO27ArIQ&s=35",
	},
];

const Socials = ({ containerStyles, iconStyles }) => {
	return (
		<div className={containerStyles}>
			{socials.map((item, index) => {
				return (
					<Link key={index} href={item.path} className={iconStyles}>
						{item.Icon}
					</Link>
				);
			})}
		</div>
	);
};

export default Socials;
