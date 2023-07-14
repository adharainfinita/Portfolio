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

	const handleChangeLevel = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setLevel(Number(event.target.value));
	};

	return (
		<main className=" bg-violet-Ocean m-3 p-4">
			<section className="mb-8">
				<h1 className=" font-Poppins text-pink mb-5">My Skills</h1>
				<select
					className=" w-24 h-7 bg-gray-800 text-ciel border border-gray-Own rounded-md"
					name="skills"
					onChange={handleChangeLevel}
				>
					<option value="0">Everything</option>
          <option value="3">Polished</option>
					<option value="2">Proficient</option>
					<option value="1">Low use</option>
					<option value="-1">Learning</option>
				</select>
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
		</main>
	);
};

export default Skills;
