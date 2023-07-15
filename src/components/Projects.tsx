import Project from "./Project";
import {texts} from '../utils'

const Projects = () => {
	const travCountriesImages = [
		"public/Captura de pantalla 2023-06-01 170428.png",
		"public/Captura de pantalla 2023-06-01 200240.png",
		"public/Captura de pantalla 2023-06-01 200552.png",
		"public/Captura de pantalla 2023-06-01 200614.png",
		"public/Captura de pantalla 2023-06-01 200731.png",
	];
	const RYMImages = [
		"public/unknown_2023.05.06-20.06_1.gif",
		"public/unknown_2023.05.06-19.50_2.gif",
		"https://media.licdn.com/dms/image/D4D22AQH-FAsZGHvlPA/feedshare-shrink_2048_1536/0/1683417222413?e=1692230400&v=beta&t=FGEBMI8c3_g26OLGz8AF8Mud0__HeRma8Ji3tflgX7k",
	];
	const titles = ["Facil Market", "Travelling Counries", "Rick & Morty App"];
	const descriptions = [texts.text1, texts.text2, texts.text3];
	const tags = [
		"3 and half weeks",
		"2 weeks",
		"A month",
	];
	const repositories = [
		"https://github.com/adharainfinita/facil-market-proyect",
		"https://github.com/adharainfinita/traveling_countries_app",
		"https://github.com/adharainfinita/rick-and-morty_app",
	];
	const media = ["public/facilmarket.mp4", travCountriesImages, RYMImages];

	return (
		<>
			<div className="w-4/5 bg-gradient-to-br from-black to-violet-Ocean m-3 p-4" id="Projects">
				<h1 className=" font-Poppins text-pink">Projects</h1>

			</div>
			<Project
				name={titles[0]}
				description={descriptions[0]}
				tags={tags[0]}
				link={repositories[0]}
				media={media[0]}
			/>

			<Project
				name={titles[1]}
				description={descriptions[1]}
				tags={tags[1]}
				link={repositories[1]}
				media={media[1]}
			/>
			<Project
				name={titles[2]}
				description={descriptions[2]}
				tags={tags[2]}
				link={repositories[2]}
				media={media[2]}
			/>
		</>
	);
};

export default Projects;
