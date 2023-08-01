import {TranslationsProps} from '../translate/interface';


const Story: React.FC<TranslationsProps> = ({translations}) => {
	return (
		<div className="w-full sm:w-3/4 md:w-3/4 lg:w-3/4 bg-gradient-to-br border-4 border-stone-900 dark:border-0
		 from-light-ocean to-light-ciel dark:from-black dark:to-violet-Ocean 
		 flex flex-col items-center justify-center shadow-md my-32 p-12 rounded-md" 
		 id="History">
  <section className="bg-light-pink border-4 border-stone-900 dark:border-0 
	dark:bg-gradient-to-br dark:from-black dark:to-violet-Ocean m-3 p-4">
    <h1 className="font-Poppins text-slate-800 dark:text-pink text-center lg:text-5xl md:text-2xl text-sm">
  {translations.section1}
</h1>

  </section>
  <section className="m-2 border-4 border-stone-900 dark:border-0 bg-ciel 
	 dark:bg-violet-Ocean  sm:w-4/5 p-10 rounded-md md:w-4/5 w-screen">
    <p className=" antialiased tracking-wide leading-relaxed text-justify
		 text-black dark:text-white ">
      {translations.introduction}<br/>	
      <em className='not-italic'>
        {translations.p1}{" "}
        <strong className="inline-flex font-bold dark:text-ciel mr-1">
          {translations.conjunction}
        </strong>
        {translations.p2}{" "}
        <strong className="inline-flex font-bold dark:text-ciel mr-1">
          {translations.adjective}.
        </strong>
      </em>
      <em className='not-italic'>
        {translations.p3}{" "}
        <strong className="inline-flex font-bold dark:text-ciel">
          {translations.disruptionWord}
        </strong>
        {translations.p4}{" "}
        <strong className="inline-flex font-bold dark:text-ciel mr-1">
         {translations.disruptionWord2}
        </strong>
        {translations.p5}
      </em>
    </p>
    <p className="text-center dark:text-detail">
      {translations.p6}
    </p>
  </section>
</div>

	);
};

export default Story;
