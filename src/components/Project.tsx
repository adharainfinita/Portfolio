export interface ProjectProps{
  name: string;
  description: string;
  tags: string;
  link: string;
  media: string | Array<string>;
}
import github from '../assets/icons/github.svg';
import { Link } from "react-router-dom";
import Slider from './Slider';
import ReactPlayer from 'react-player';

const Project = ({name, description, tags, link, media}: ProjectProps) =>{

  
  return (


    <div className=" w-4/5  bg-background flex flex-row justify-items-center m-5 p-3 rounded-md">
      <section className=" pr-3 m-3 w-2/4">
        <h2 className=" font-Poppins text-ciel text-4xl text-left pb-2">{name}</h2>
        <p className=" text-justify text-sm ">{description}</p>
        <section className=' mt-2 p-3'>
           <h5 className=" text-purple text-left m-2">Development period: {tags}</h5>
        <Link to={link} target="_blank">
          <img className="h-8 filter invert" src={github} alt="github-icon" />
        </Link>
        </section>
      </section>
      <section className=" p-3 m-1 w-2/4">
        {
          Array.isArray(media) ? 
          <Slider images={media} /> :
          <ReactPlayer
          url='https://youtu.be/XQNHgjvIK84'
          height="100%"
          width="100%"
          controls={true}
          playing
          
        />
        }        
      </section>
    </div>
   
  )
}

export default Project;