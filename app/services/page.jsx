"use client";
import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { delay, motion } from "framer-motion";

const services = [
	{
		num: "01",
		title: "Front-End Web Development",
		description:
			"Specializing in modern front-end frameworks like React and TypeScript to build responsive, dynamic, and user-friendly web interfaces.",
		href: "",
	},
	{
		num: "02",
		title: "Back-End Web Development",
		description:
			"Building robust and scalable back-end solutions using Node.js, Express, MongoDB, and Prisma for seamless data management and server-side operations.",
		href: "",
	},
	{
		num: "03",
		title: "Mobile Development with Flutter",
		description:
			"Creating high-performance cross-platform mobile applications with Flutter, delivering a smooth and native user experience.",
		href: "",
	},
	{
		num: "04",
		title: "AI and Machine Learning Development",
		description:
			"Developing intelligent systems using Python and machine learning frameworks to solve complex problems and enable data-driven decision-making.",
		href: "",
	},
];

const Services = () => {
	return (
		<section className='min-h-[80vh] flex flex-col justify-center py-12 xl:py-8'>
			<div className='container mx-auto'>
				<motion.div
					initial={{ opacity: 0 }}
					animate={{
						opacity: 1,
						transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
					}}
					className='grid grid-cols-1 md:grid-cols-2 gap-[60px]'>
					{services.map((service, index) => {
						return (
							<div
								key={index}
								className='flex-1 flex flex-col justify-center gap-6 group'>
								{/* top */}
								<div className='w-full flex justify-between items-center text-outline text-transparent group-hover:text-outline-hover transition-all duration-500'>
									<div className='text-5xl font-extrabold'>{service.num}</div>
									<Link
										href={service.href}
										className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate'>
										<BsArrowDownRight className='text-primary text-3xl' />
									</Link>
								</div>
								{/* title */}
								<h2 className='text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500'>
									{service.title}
								</h2>
								{/* description */}
								<p className='text-white/60'>{service.description}</p>
								{/* border */}
								<div className='border-b border-white/20 w-full'></div>
							</div>
						);
					})}
				</motion.div>
			</div>
		</section>
	);
};

export default Services;
