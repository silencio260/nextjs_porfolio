import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaYoutube, FaTwitter } from "react-icons/fa";

const socials = [
	{ Icon: <FaGithub />, path: "" },
	{ Icon: <FaLinkedinIn />, path: "" },
	{ Icon: <FaYoutube />, path: "" },
	{ Icon: <FaTwitter />, path: "" },
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
