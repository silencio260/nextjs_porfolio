import Link from "next/link";
import React from "react";
import Nav from "./Nav";
import MobileNav from "./MobileNav";
import { Button } from "./ui/button";

const Header = () => {
	return (
		<header className='py-8 xl:py-12 text-white'>
			{/* logo */}
			<div className='container mx-auto flex justify-between items-center'>
				<Link href='/'>
					<h1 className='text-4xl font-semibold'>
						Faruq<span className='text-accent'>.</span>
					</h1>
				</Link>
				{/* desktop nav */}
				<div className='hidden xl:flex items-center gap-8'>
					<Nav />
					<Link href='/contact'>
						<Button>Hire me</Button>
					</Link>
				</div>

				{/* Mobile Nav */}
				<div className='xl:hidden'>
					<MobileNav />
				</div>
			</div>
		</header>
	);
};

export default Header;
