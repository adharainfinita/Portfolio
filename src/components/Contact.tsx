import {useState} from 'react';
import gmail from "../assets/icons/gmail.svg";
import { AiFillLinkedin, AiFillSlackCircle } from "react-icons/ai";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { TranslationsProps } from '../translate/interface';

const Contact:React.FC<TranslationsProps> = ({translations}) => {
	const [interesed, setInteresed] = useState(false);
	const [copy, setcopy] = useState(false);


	const handleShowContacts = ( ) => {
		setInteresed(true);
	}

	return (
		<main className="w-full sm:w-3/4 md:w-3/4 lg:w-3/4 h-auto bg-gradient-to-br border-4 border-stone-900 dark:border-0 from-light-ocean to-light-ciel dark:from-black dark:to-violet-Ocean m-3 p-4">
			<div className=" bg-light-pink border-4 border-stone-900 dark:border-0 dark:bg-gradient-to-br dark:from-black dark:to-violet-Ocean m-3 p-4 flex flex-col items-center">
				<h1 className=" font-Poppins text-slate-800 dark:text-pink">{translations.section4}</h1>
				<h5 className='font-Poppins'>{translations.CallToAction}</h5>
				<button onClick={handleShowContacts} className='bg-ciel hover:filter hover:brightness-150	animation-all dark:bg-stone-900'>
					{!interesed ? 
					<h4>💛🤍🖤</h4>
					:
					<div className='flex flex-row'>
					 <a href="https://www.linkedin.com/in/adhara-redruello-81a704262/" target="_blank">
        		<AiFillLinkedin className="m-1 h-9 w-9 fill-linkedin bg-white" />
      			</a>
						<a href="mailto:adharanosalevich@gmail.com">
        			<img className="h-9 w-9 m-1" src={gmail} alt="gmail" />
      			</a>
						<CopyToClipboard text='Adhara Irene Redruello'  
						onCopy={() => setcopy(true)}>
							<AiFillSlackCircle className="m-1 h-9 w-9" />
						</CopyToClipboard>
					</div>}
				</button>
         	 {copy ? 
					 <span className=' font-tittilium text-sm'>{translations.spanMessage}</span> 
					 : null	}	

			</div>
		
		</main>
	);
};

export default Contact;
