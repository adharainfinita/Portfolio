import { TranslationsProps } from "../translate/interface";

const Presentation: React.FC<TranslationsProps> = ({ translations }) => {
	return (
		<div
			className="w-full sm:w-3/4 md:w-3/4 lg:w-3/4 h-auto bg-gradient-to-br border-4 border-stone-900 dark:border-0
	 from-light-ocean to-light-ciel dark:from-black dark:to-violet-Ocean 
	 flex flex-col sm:flex-row items-center justify-center shadow-md my-32 p-12 rounded-md"
			id="Home"
		>
			<section className="p-3 mr-4 border-4 dark:border-0 border-stone-900 bg-ciel dark:bg-transparent rounded-lg w-full sm:w-2/4 space-y-5">
				<p className="font-Poppins text-4xl text-stone-900 dark:text-white">
					{translations.pronoum}
				</p>
				<h1 className="text-4xl font-bold font-Poppins text-stone-900 dark:text-white">
					Adhara Redruello
				</h1>
				<h5 className="text-xl border-b font-tittilium text-stone-900 bg-light-pink border-1 dark:bg-transparent dark:text-white">
					{translations.title}{" "}
					<p className="dark:text-ciel inline">{translations.gender[0]}</p>{" "}
					{translations.gender[1]}{" "}
					<p className="dark:text-pink inline">{translations.passion}</p>
				</h5>
			</section>
			<section className="mt-4 sm:mt-0 space-y-3 w-full sm:w-2/4 hover:w-screen transition-all">
				<img
					src="perfil.png"
					alt=""
					className="w-full h-full mx-auto border-4 rounded-lg border-stone-900 dark:border-4
					 dark:border-white"
				/>
				<div className="p-2">
					<p className="font-tittilium text-sm italic text-left text-black dark:text-white">
						{translations.quote}
					</p>
					<p className="font-tittilium text-sm text-right text-black dark:text-white">
						{translations.autor}
					</p>
				</div>
			</section>
		</div>
	);
};
export default Presentation;
