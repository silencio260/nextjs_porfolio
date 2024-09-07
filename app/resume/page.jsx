"use client";

import { ScrollArea } from "@/components/ui/scroll-area";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { delay, motion } from "framer-motion";
import {
	FaHtml5,
	FaCss3,
	FaJs,
	FaReact,
	FaFigma,
	FaNodeJs,
} from "react-icons/fa";

import { SiTailwindcss, SiNextdotjs } from "react-icons/si";

const about = {
	title: "About me",
	description:
		"I am a dedicated software engineer with a passion for solving complex problems through innovative technology. With 3+ years of experience in full-stack development and a focus on AI and Machine Learning, I continuously strive to push the boundaries of what's possible.",

	info: [
		{
			fieldName: "Name",
			fieldValue: "Faruq Shabi",
		},
		{
			fieldName: "Phone",
			fieldValue: "(+234) 8173538167",
		},
		{
			fieldName: "Experience",
			fieldValue: "3+ years",
		},
		{
			fieldName: "Nationality",
			fieldValue: "Nigeria",
		},
		{
			fieldName: "Email",
			fieldValue: "faruq5840@gmail.com",
		},
		{
			fieldName: "Freelance",
			fieldValue: "Available",
		},
		{
			fieldName: "Languages",
			fieldValue: "English",
		},
	],
};

const experience = {
	icon: "/assets/resume/badge.svg",
	title: "My Experience",
	description:
		"I have gained valuable experience working on various software development projects, from full-stack web applications to advanced machine learning systems. My roles have spanned across startups, internships, and freelance projects, showcasing a diverse set of skills in tech.",
	items: [
		{
			company: "NITDA",
			position: "Software Engineer Intern",
			duration: "Dec 2023 - Present",
			points: [
				"Contributed to developing a machine learning-based attendance system using Python, TensorFlow, and OpenCV.",
				"Collaborated in designing, implementing, and testing machine learning models.",
				"Participated in code reviews, providing valuable feedback to peers.",
			],
		},
		{
			company: "Malead Technologies",
			position: "Full Stack Developer",
			duration: "Sep 2023 - Jan 2024",
			points: [
				"Developed a scalable dashboard for managing complex trading transactions using Svelte.js and Node.js.",
				"Implemented a back-end with Postgres, Prisma, and TypeScript.",
				"Actively engaged in code reviews and contributed to project improvements.",
			],
		},
		{
			company: "Freelance",
			position: "Software Engineer",
			duration: "Jan 2022 - Jan 2023",
			points: [
				"Developed algorithms for analyzing financial markets and executing trading strategies.",
				"Utilized Python, MQL5, and Pinescript for back-testing and optimizing trading strategies.",
				"Created automated systems for executing and monitoring trades.",
			],
		},
		{
			company: "BuzzKarma",
			position: "Full Stack Developer With Mobile",
			duration: "March 2022 - Dec 2023",
			points: [
				"Developed a Flutter-based Android application for online earnings.",
				"Worked on the user management system and admin panel using React.",
				"Built a robust back-end with Node.js, Express, MongoDB, and Redis.",
				"Achieved high user satisfaction through consistent troubleshooting and optimization.",
			],
		},
	],
};

const education = {
	icon: "/assets/resume/badge.svg",
	title: "My Education",
	description:
		"Driven by a passion for technology and innovation, I pursued a BSc. in Software Engineering at Al-Hikmah University, followed by ongoing specialization in AI and Machine Learning at Aptech.",
	items: [
		{
			institution: "Al-Hikmah University Ilorin",
			degree: "Bsc. Software Engineering",
			duration: "2019 - 2023",
		},
		{
			institution: "Aptech",
			degree: "AI and Machine Learning",
			duration: "2022 - Present",
		},
	],
};

const skills = {
	icon: "/assets/resume/badge.svg",
	title: "My Skills",
	description:
		"I have developed a versatile skill set in web development, ranging from front-end technologies to full-stack frameworks, complemented by design proficiency.",
	skillslist: [
		{
			icon: <FaHtml5 />,
			name: "html 5",
		},
		{
			icon: <FaCss3 />,
			name: "css 3",
		},
		{
			icon: <FaJs />,
			name: "javascript",
		},
		{
			icon: <FaReact />,
			name: "React",
		},
		{
			icon: <SiNextdotjs />,
			name: "next.js",
		},
		{
			icon: <FaNodeJs />,
			name: "node.js",
		},
		{
			icon: <FaFigma />,
			name: "figma",
		},
	],
};

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className='min-h-[80vh] flex items-center justify-center py-12 xl:py-0'>
			<div className='container mx-auto'>
				<Tabs
					defaultValue='experience'
					className='flex flex-col xl:flex-row gap-[60px]'>
					<TabsList className='flex flex-col w-full max-w-[380px] mx-auto xl:mx-8 gap-6'>
						<TabsTrigger value='experience'>Experience</TabsTrigger>
						<TabsTrigger value='education'>Edution</TabsTrigger>
						<TabsTrigger value='skills'>Skills</TabsTrigger>
						<TabsTrigger value='about'>About me</TabsTrigger>
					</TabsList>

					{/* content */}
					<div className='min-h-[70vh] w-full'>
						{/* experience */}
						<TabsContent value='experience' className='w-full'>
							<div className='flex flex-col  gap-[30px] text-center xl:text-left'>
								<h3 className='text-4xl font-bold'>{experience.title}</h3>
								<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
									{experience.description}
								</p>
								<ScrollArea className='h-[400px]'>
									<ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
										{experience.items.map((item, index) => {
											return (
												<li
													key={index}
													className='bg-[#232329] h-[1840x] py-6 px-18 rounded-xl flex flex-col justify-center items-center lg:items-star gap-1'>
													<span className='text-accent'>{item.duration}</span>
													<h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
														{item.position}
													</h3>
													<div className='flex items-center gap-3'>
														{/* dot */}
														<span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
														<p className='text-white/60'>{item.company}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* education */}
						<TabsContent value='education' className='w-full'>
							<div className='flex flex-col  gap-[30px] text-center xl:text-left'>
								<h3 className='text-4xl font-bold'>{experience.title}</h3>
								<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
									{education.description}
								</p>
								<ScrollArea className='h-[400px]'>
									<ul className='grid grid-cols-1 lg:grid-cols-2 gap-[30px]'>
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className='bg-[#232329] h-[1840x] py-6 px-18 rounded-xl flex flex-col justify-center items-center lg:items-star gap-1'>
													<span className='text-accent'>{item.duration}</span>
													<h3 className='text-xl max-w-[260px] min-h-[60px] text-center lg:text-left'>
														{item.degree}
													</h3>
													<div className='flex items-center gap-3'>
														{/* dot */}
														<span className='w-[6px] h-[6px] rounded-full bg-accent'></span>
														<p className='text-white/60'>{item.institution}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>
						{/* skills */}
						<TabsContent value='skills' className='w-full h-full'>
							<div className='flex flex-col gap-[30px]'>
								<div className='flex flex-col gap-[30px] text-center xl:text-left'>
									<h3 className='text-4xl font-bold'>{skills.title}</h3>
									<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
										{skills.description}
									</p>
								</div>
								<ul className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px]'>
									{skills.skillslist.map((skill, index) => {
										return (
											<li key={index}>
												<TooltipProvider delayDuration={100}>
													<Tooltip>
														<TooltipTrigger className='w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group'>
															<div className='text-6xl group-hover:text-accent transition-all duration-300'>
																{skill.icon}
															</div>
														</TooltipTrigger>
														<TooltipContent>
															<p className='capitalize'>{skill.name}</p>
														</TooltipContent>
													</Tooltip>
												</TooltipProvider>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
						{/* about */}
						<TabsContent
							value='about'
							className='w-full text-center xl:text-left'>
							<div className='flex flex-col gap-[30px]'>
								<h3 className='text-4xl font-bold'>{about.title}</h3>
								<p className='max-w-[600px] text-white/60 mx-auto xl:mx-0'>
									{about.description}
								</p>
								<ul className='grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0'>
									{about.info.map((item, index) => {
										return (
											<li
												key={index}
												className='flex items-center justify-center xl:justify-start gap-4'>
												<span className='text-white/60'>{item.fieldName}</span>
												<span className='text-xl'>{item.fieldValue}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
