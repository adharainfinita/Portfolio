import { TiCode } from "react-icons/ti";
import github from "../assets/icons/github.svg";
import gmail from "../assets/icons/gmail.svg";
import { FaDev, FaInstagram } from "react-icons/fa";
import { AiFillLinkedin, AiFillTwitterCircle } from "react-icons/ai";
import { useState } from "react";
import { BiBookOpen } from "react-icons/bi";
import { SiNounproject } from "react-icons/si";

const NavBar = () => {
	const [hovered, setHovered] = useState(false);

	const handleHover = () => {
		setHovered(true);
	};

	const handleMouseLeave = () => {
		setHovered(false);
	};

	return (
		<aside>
			<div
				className={`bg-light-ocean dark:bg-background border-4 border-stone-900
				dark:border-0 m-3 rounded-md p-5 w-1/12 flex flex-col items-center content-around 
				h-max float-left fixed top-0 left-0 z-50  ${
					hovered
						? "sm:h-96 md:h-auto lg:h-screen transition-all duration-300"
						: "h-26"
				}`}
				onMouseEnter={handleHover}
				onMouseLeave={handleMouseLeave}
			>
				<section className="mb-6 w-4/5 h-4/5">
					<div
						className={` ${
							hovered ? "hovered transition-all duration-500" : ""
						}`}
					>
						<a href="#Home">
							<TiCode className="h-full w-full pb-2 filter invert dark:filter-none" />
						</a>
					</div>
				</section>
				<section
					className={`mb-6 transition-all duration-300 ${
						hovered ? "visible  transition-all duration-500 " : "hidden"
					} `}
				>
					<a className="justify-center" rel="stylesheet" href="#History">
						<button className="mb-2 bg-pink rounded-full">
							<BiBookOpen className="h-5 w-5 md:w-8 md:h-8 lg:w-10 lg:h-10" />
						</button>
					</a>
					<a rel="stylesheet" href="#Skills">
						<button className="mb-2 bg-pink rounded-full">
							<FaDev className="h-5 w-5 md:w-8 md:h-8 lg:w-10 lg:h-10" />
						</button>
					</a>
					<a rel="stylesheet" href="#Projects">
						<button className="mb-2 bg-pink rounded-full">
							<SiNounproject className="h-5 w-5 md:w-8 md:h-8 lg:w-10 lg:h-10" />
						</button>
					</a>
				</section>

				<section
					className={`flex flex-col content-around m-3 transition-all duration-300 ${
						hovered ? "visible" : "hidden"
					}`}
				>
					<a href="https://github.com/adharainfinita/" target="_blank">
						<img
							className="m-1 h-9 bg-slate-300 rounded-full"
							src={github}
							alt="github"
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/adhara-redruello-81a704262/"
						target="_blank"
					>
						<AiFillLinkedin className="m-1 h-9 w-9 fill-linkedin bg-white" />
					</a>
					<a href="mailto:adharanosalevich@gmail.com">
						<img className="h-9 w-9 m-1" src={gmail} alt="gmail" />
					</a>
					<a href="https://twitter.com/AdharaRedruello" target="_blank">
						<AiFillTwitterCircle className="m-1 h-9 w-9 fill-linkedin bg-white rounded-full" />
					</a>
					<a href="https://www.instagram.com/sexta_vocal/" target="_blank">
						<FaInstagram className="h-9 w-9 m-1 filter invert dark:filter-none" />
					</a>
				</section>
			</div>
		</aside>
	);
};

export default NavBar;
