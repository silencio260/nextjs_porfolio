"use client";

import { delay, motion } from "framer-motion";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
	Tooltip,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { TooltipContent } from "@radix-ui/react-tooltip";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";

const projects = [
	{
		num: "01",
		category: "front-end",
		title: "AI Article Summarizer",
		description:
			"AI Summarizer is an intelligent tool designed to quickly condense long articles into concise summaries. Using advanced natural language processing, it extracts key points and insights, saving users time while retaining essential information. Ideal for researchers, students, and professionals looking to digest content efficiently.",
		stack: [{ name: "React" }, { name: "TypeScript" }, { name: "Tailwind" }],
		image: "/assets/work/summarizer.png",
		live: "https://ai-summarizer-eight-alpha.vercel.app/",
		github: "https://github.com/silencio260/ai-summarizer",
	},
	{
		num: "02",
		category: "Full Stack",
		title: "Imaginify",
		description:
			"Imaginify is an AI-powered SaaS platform that allows users to effortlessly transform and modify images with advanced tools. Whether resizing, enhancing, or applying creative effects, Imaginify delivers fast, high-quality results, making it ideal for designers, marketers, and creatives looking to streamline their image editing workflow.",
		stack: [{ name: "React" }, { name: "REST API" }, { name: "SCSS" }],
		image: "/assets/work/imaginify.png",
		live: "https://imaginify-mu-mocha-74.vercel.app/",
		github: "https://github.com/silencio260/imaginify",
	},
	{
		num: "03",
		category: "Full Stack",
		title: "Price Wise",
		description:
			"Price Wise is a web-based price tracker that scrapes and monitors online prices across multiple retailers. With real-time alerts and detailed price history, Price Wise helps users find the best deals, track price drops, and make informed purchasing decisions with ease. Perfect for savvy shoppers and bargain hunters.",
		stack: [{ name: "Next.js" }, { name: "Supabase" }, { name: "TypeScript" }],
		image: "/assets/work/price_wise.png",
		live: "https://pricewise-web-scraper.vercel.app/",
		github: "https://github.com/silencio260/pricewise-web-scraper",
	},
	{
		num: "04",
		category: "front-end",
		title: "Car Hub",
		description:
			"Car Hub is a comprehensive platform that simplifies finding, booking, and renting cars. Users can browse a wide range of vehicles, compare prices, and make reservations seamlessly, all in one place. With flexible rental options and user-friendly search features, Car Hub makes car renting fast, convenient, and hassle-free.",
		stack: [{ name: "Next.js" }, { name: "TypeScript" }],
		image: "/assets/work/car_hub.png",
		live: "https://car-showcase-eight-coral.vercel.app/",
		github: "https://github.com/silencio260/car-showcase",
	},
];

const Work = () => {
	const [project, setProject] = useState(projects[0]);

	const handleSlideChange = (swiper) => {
		// get current slide index
		const currentIndex = swiper.activeIndex;
		// update
		setProject(projects[currentIndex]);
	};

	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className='min-h-[80vh] flex flex-col justify-center py-12 xl:px-0'>
			<div className='container mx-auto'>
				<div className='flex flex-col xl:flex-row xl:gap-[30px]'>
					<div className='w-full flex flex-col  xl:h-[460px] xl:justify-between order-2 xl:order-none'>
						<div className='flex flex-col gap-[30px] h-[50%]'>
							<div>
								{/* outline num */}
								<div className='text-8xl leading-none font-extrabold text-transparent text-outline'>
									{project.num}
								</div>
								{/* project category */}
								<h2 className='text- font-bold leading-none text-white group-hover:text-accent transition-all duration-500 captialize'>
									{project.category} project
								</h2>
								{/* project description */}
								<p className='text-white/60'>{project.description}</p>
								{/* stack */}
								<ul className='flex gap-4'>
									{project.stack.map((item, index) => {
										return (
											<li key={index} className='text-xl text-accent'>
												{item.name}
												{/* remotve the --- */}
												{index !== project.stack.length - 1 && ","}
											</li>
										);
									})}
								</ul>
								{/* border */}
								<div className='border border-white/20'></div>
								{/* buttons */}
								<div>
									<div className='flex item-center gap-4'>
										{/* live project */}
										<Link href={project.live}>
											<TooltipProvider delayDuration={100}>
												<Tooltip>
													<TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
														<BsArrowUpRight className='text-white text-3xl group-hover:text-accent' />
													</TooltipTrigger>
													<TooltipContent>
														<p>Live Project</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</Link>

										{/* github project */}
										<Link href={project.github}>
											<TooltipProvider delayDuration={100}>
												<Tooltip>
													<TooltipTrigger className='w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group'>
														<BsGithub className='text-white text-3xl group-hover:text-accent' />
													</TooltipTrigger>
													<TooltipContent>
														<p>Github repository</p>
													</TooltipContent>
												</Tooltip>
											</TooltipProvider>
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
					<div className='w-full xl:w-[50%]'>
						<Swiper
							spaceBetween={30}
							slidesPerView={1}
							className='xl:h-[520px] mb-12'
							onSlideChange={handleSlideChange}>
							{projects.map((project, index) => {
								return (
									<SwiperSlide key={index}>
										<div className='h-[460px] relative group flex jsutify-center items-center bg-pink-50/20'>
											{/* overlay */}
											<div className='absolute top-0 bottom-0 w-full h-full bg-black/10 z-10'></div>
											{/* image */}
											<div className='relative w-full h-full'>
												<Image
													src={project.image}
													fill
													className='object-cover'
													alt=''
												/>
											</div>
										</div>
									</SwiperSlide>
								);
							})}
							{/* slider buttons */}
							<WorkSliderBtns
								containerStyles={
									"flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
								}
								btnStyles={
									"bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] flex justify-center items-center transition-all"
								}
							/>
						</Swiper>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Work;
