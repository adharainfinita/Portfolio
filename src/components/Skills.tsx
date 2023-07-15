import node from "../assets/icons/nodejs.svg";
import git from "../assets/icons/git.svg";
import express from "../assets/icons/expressjs.svg";
import react from "../assets/react.svg";
import typescript from "../assets/icons/typescript.svg";
import sass from "../assets/icons/sass.svg";
import redux from "../assets/icons/reduxToolkit.svg";
import Postgres from "../assets/icons/Postgresql.svg";
import js from "../assets/icons/JavaScript.svg";
import { useState } from "react";


const Skills = () => {
	const [level, setLevel] = useState(0);


	const handleChangeLevel = (value: number) => {
		setLevel(value);
	};

	return (
		< >
			<div className="w-4/5 bg-gradient-to-br from-black to-violet-Ocean m-3 p-4" id="Skills">
				<h1 className=" font-Poppins text-pink">My Skills</h1>
			</div>
			<div className="m-2 bg-violet-Ocean w-4/5 pb-5 rounded-md">
				<section className=" bg-background mb-5">
					<button 
					className=" bg-transparent text-xl"
					data-tooltip-content="Show Everything"
					onClick={()=>{handleChangeLevel(0)}}
					placeholder="everything"
					>↩</button>
					<button
					className=" bg-transparent text-xl"
					onClick={()=>{handleChangeLevel(3)}}
					>💞</button>
					<button
					className=" bg-transparent"
					onClick={()=>{handleChangeLevel(2)} }
					>👍</button>
					<button
					className=" bg-transparent"
					onClick={()=>{ handleChangeLevel(1)}}
					>😬</button>
					<button
					className=" bg-transparent"
					onClick={()=>{ handleChangeLevel(-1)}}
					>🏁👩‍💻</button>
					</section>
			<div className=" grid grid-cols-4 grid-flow-row row-auto gap-3 justify-items-center">
				{(level === 3 || !level )&& (
					<>
						<img className="  h-8" src={node} alt="node-icon" />
						<img
							className=" h-8 bg-slate-50 rounded-r-sm"
							src={express}
							alt="express-icon"
						/>
						<img className=" h-8" src={redux} alt="node-icon" />
						<img className=" h-8" src={js} alt="js-icon" />
						<img className=" h-8" src={react} alt="react-icon" />
						<img className=" h-8" src={typescript} alt="typescript-icon" />
						<img
							className=" h-8"
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
							alt="html"
						/>
						<img className=" h-8" src={Postgres} alt="postgress-icon" />
					</>
				)}
				{(level === 2 || !level ) && (
					<>
						<img className=" h-8" src={git} alt="git-icon" />
						<img
							className=" h-8"
							src="https://www.vectorlogo.zone/logos/gnu_bash/gnu_bash-icon.svg"
							alt="bash-icon"
						/>
						<img
							className=" h-8 bg-slate-50 rounded-r-sm"
							src="https://www.vectorlogo.zone/logos/babeljs/babeljs-icon.svg"
							alt="babel-icon"
						/>
						<img
							className=" h-8"
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
							alt="css-icon"
						/>
						<img
							className=" h-8"
							src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
							alt="tailwind"
						/>
					</>
				)}
				{(level === 1 || !level )&& (
					<>
						<img className=" h-8" src={sass} alt="sass-icon" />
						<img
							className=" h-8"
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg"
							alt="linux"
						/>
						<img
							className=" h-8"
							src="https://www.vectorlogo.zone/logos/jestjsio/jestjsio-icon.svg"
							alt="jest"
						/>

						<img
							className=" h-8"
							src="https://www.vectorlogo.zone/logos/mochajs/mochajs-icon.svg"
							alt="mocha"
						/>
					</>
				)}
				{(level === -1 || !level ) && (
					<>
						<img
							className=" h-8"
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg"
							alt="docker-icon"
						/>

						<img
							className=" h-8"
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/dot-net/dot-net-original-wordmark.svg"
							alt="net-icon"
						/>
						<img
							className=" h-8"
							src="https://upload.wikimedia.org/wikipedia/commons/f/fa/Microsoft_Azure.svg"
							alt="azure-icon"
						/>
						<img
							className=" h-8"
							src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Angular_full_color_logo.svg"
							alt="angular-icon"
						/>
						<img
							className=" h-8"
							src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
							alt="mongodb"
						/>
						<img
							className=" h-8"
							src="https://cdn.worldvectorlogo.com/logos/c--4.svg"
							alt=""
						/>
					</>
				)}
	
			</div>
			</div>
		</>
	);
};

export default Skills;
