import {MdLightMode, MdModeNight } from 'react-icons/md';
import { useGlobalContext } from '../Contexts/ThemeContext';
import { useLanguage} from '../Contexts/LanguageContext';


const AccesibilityComponent = ( ) => {

  const { theme, setTheme } = useGlobalContext();
  const {language, setLanguage} = useLanguage();

  const toggleTheme = () => {
    // Cambiar el tema según el tema actual
    if(theme=='light'){
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
    else {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    }
  };

  const toggleLanguage = () => {
    language === 'en' ? setLanguage('es') : setLanguage('en');
  }


  return (
    <div className='flex justify-end py-2'>
     <button onClick={toggleTheme} 
     className='rounded-full w-12 h-12 bg-ciel border-2 border-light-purple dark:border-0 dark:bg-purple hover:bg-light-purple mx-1' >
        {theme === 'dark'  ? 
        <MdModeNight /> : 
        <MdLightMode/>}
      </button>
      <button className='bg-ciel dark:bg-purple border-2 border-light-purple dark:border-0 rounded-full w-12 h-12 hover:bg-light-purple mx-1'
      onClick={toggleLanguage}
      >
       <span className='text-sm font-Poppins'>{language === 'en' ?'ENG' : 'SPA' } </span>
      </button>
    </div>
  )
}

export default AccesibilityComponent;