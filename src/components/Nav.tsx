import { TiCode } from "react-icons/ti";
import github from "../assets/icons/github.svg";
import gmail from "../assets/icons/gmail.svg";
import { FaWordpress, FaDev } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import {useState} from 'react';
import {BiBookOpen} from 'react-icons/bi';
import {SiNounproject} from 'react-icons/si'

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
  <div className="bg-background 
  m-3 
  rounded-md 
  p-5 
   w-1/12
  flex flex-col items-center content-around 
  h-max 
  float-left
    fixed
     top-0 left-0
  "
     onMouseEnter={handleHover}
     onMouseLeave={handleMouseLeave}  >
    <section className="mb-6 w-4/5 h-4/5">
    <div className={`hover-trigger ${hovered ? 'hovered' : ''}`}>
        <TiCode className="h-full w-full pb-2" />
      </div>
    </section>
    <section className={`mb-6 ${hovered ? 'visible' : 'hidden'}`}>
        <a className="justify-center" rel="stylesheet" href="#History">
      <button className="mb-2 bg-pink rounded-full">
          <BiBookOpen  className=" h-9 w-9"/>
        </button>
        </a>
      <a rel="stylesheet" href="#Skills">
      <button className="mb-2 bg-pink rounded-full">
        <FaDev className=" h-9 w-9"/>
        </button>
        </a> 
      <a rel="stylesheet" href="#Projects">
      <button className="mb-2 bg-pink rounded-full">
        <SiNounproject  className=" h-9 w-9"/>
        </button>
        </a> 
    </section>
    <section className={`flex flex-col content-around m-3 ${hovered ? 'visible' : 'hidden'}`}>
      <a href="https://www.linkedin.com/in/adhara-redruello-81a704262/" target="_blank">
        <AiFillLinkedin className="m-1 h-9 w-9 fill-linkedin bg-white" />
      </a>
      <a href="mailto:adharanosalevich@gmail.com">
        <img className="h-9 w-9 m-1" src={gmail} alt="gmail" />
      </a>
      <a href="https://github.com/adharainfinita/" target="_blank">
        <img className="m-1 h-9 bg-slate-300 rounded-full" src={github} alt="github" />
      </a>
      <FaWordpress className="h-9 w-9 m-1 fill-wordpress bg-white rounded-full"/>
    </section>
  </div>
</aside>

	);
};

export default NavBar;
