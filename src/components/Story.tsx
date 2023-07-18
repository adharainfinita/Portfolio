import {TranslationsProps} from '../translate/interface';


const Story: React.FC<TranslationsProps> = ({translations}) => {
	return (
		<div
			className="w-4/5 h-auto bg-gradient-to-br border-4 border-stone-900 dark:border-0 from-light-ocean to-light-ciel dark:from-black dark:to-violet-Ocean flex flex-col items-center 
    justify-center shadow-md my-32 p-12 rounded-md"
			id="History"
		>
			<section className=" bg-light-pink border-4 border-stone-900 dark:border-0 dark:bg-gradient-to-br dark:from-black dark:to-violet-Ocean m-3 p-4 ">
				<h1 className=" font-Poppins text-slate-800 dark:text-pink ">
					{translations.section1}
				</h1>
			</section>
			<section className="m-2 border-4 border-stone-900 dark:border-0 bg-ciel transition-all dark:bg-violet-Ocean  w-4/5 p-10 rounded-md">
				<p className=" font-tittilium antialiased tracking-wide leading-relaxed text-justify text-black dark:text-white">
					{translations.introduction}
					<em>
						{translations.p1}{" "}
						<strong className=" inline-flex font-bold dark:text-ciel mr-1">
							{translations.conjunction}
						</strong>
						{translations.p2}{" "}
						<strong className=" inline-flex font-bold dark:text-ciel mr-1">
							{translations.adjective}
						</strong>
						.
					</em>
					<em>
						{translations.p3}{" "}
						<strong className=" inline-flex font-bold dark:text-ciel">
							{translations.disruptionWord}
						</strong>
						{translations.p4}{" "}
						<strong className=" inline-flex font-bold dark:text-ciel mr-1">
							{translations.disruptionWord2}
						</strong>
						{translations.p5}
					</em>
					
				</p><p className=" inline-flex dark:text-detail mr-1">
						{translations.p6}
					</p>
			</section>
		</div>
	);
};

export default Story;
