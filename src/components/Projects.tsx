import Project from "./Project";
import { TranslationsProps } from "../translate/interface";

const Projects: React.FC<TranslationsProps> = ({translations}) => {
	const travCountriesImages = [
		"Captura de pantalla 2023-06-01 170428.png",
		"Captura de pantalla 2023-06-01 200240.png",
		"Captura de pantalla 2023-06-01 200552.png",
		"Captura de pantalla 2023-06-01 200614.png",
		"Captura de pantalla 2023-06-01 200731.png",
	];
	const RYMImages = [
		"unknown_2023.05.06-20.06_1.gif",
		"unknown_2023.05.06-19.50_2.gif",
		"https://media.licdn.com/dms/image/D4D22AQH-FAsZGHvlPA/feedshare-shrink_2048_1536/0/1683417222413?e=1692230400&v=beta&t=FGEBMI8c3_g26OLGz8AF8Mud0__HeRma8Ji3tflgX7k",
	];
	const titles = ["Facil Market", "Travelling Counries", "Rick & Morty App"];
	const descriptions = [translations.text1, translations.text2, translations.text3];
	const repositories = [
		"https://github.com/adharainfinita/facil-market-proyect",
		"https://github.com/adharainfinita/traveling_countries_app",
		"https://github.com/adharainfinita/rick-and-morty_app",
	];
	const media = ["public/facilmarket.mp4", travCountriesImages, RYMImages];

	return (
		<div className="w-screen h-auto bg-gradient-to-br border-4 border-stone-900 dark:border-0 from-light-ocean to-light-ciel dark:from-black dark:to-violet-Ocean flex flex-col items-center 
    justify-center shadow-md my-32 p-12 rounded-md">
			<section className="bg-light-pink border-4 border-stone-900 dark:border-0 dark:bg-gradient-to-br dark:from-black dark:to-violet-Ocean m-3 p-4" id="Projects">
				<h1 className=" font-Poppins text-slate-800 dark:text-pink lg:text-5xl md:text-2xl text-sm">{translations.section3}</h1>
			</section>
		
				<Project
				name={titles[0]}
				description={descriptions[0]}
				tags={translations.times[0]}
				link={repositories[0]}
				media={media[0]}
			/>

			<Project
				name={titles[1]}
				description={descriptions[1]}
				tags={translations.times[1]}
				link={repositories[1]}
				media={media[1]}
			/>
			<Project
				name={titles[2]}
				description={descriptions[2]}
				tags={translations.times[2]}
				link={repositories[2]}
				media={media[2]}
			/>
			
			
		</div>
	);
};

export default Projects;
