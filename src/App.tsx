import Presentation from "./components/Presentation";
import "./App.css";
import Story from "./components/Story";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import NavBar from "./components/Nav";
import Contact from "./components/Contact";
import { useState, useEffect } from "react";
import AccesibilityComponent from "./components/Accesibility";
import { Theme } from "./Contexts/ThemeContext";
import { LanguageContext} from "./Contexts/LanguageContext";
import { EN_translations } from "./translate/en";
import { SP_translations } from "./translate/es";

function App() {
	const [theme, setTheme] = useState("light");
	const [language, setLanguage] = useState<"es" | "en">("en");
  const translations = language === "es" ? SP_translations : EN_translations;

	useEffect(() => {
    document.body.classList.toggle("dark", theme === "dark");
  }, [theme]);


	return (
		<Theme.Provider value={{ theme, setTheme }}>
			<LanguageContext.Provider value={{language, setLanguage}}>
			<div>
				<AccesibilityComponent />
				<NavBar />
				<main className="flex flex-col items-center">
					<Presentation translations={translations}/>
					<Story translations={translations}/>
					<Skills translations={translations}/>
					<Projects translations={translations}/>
					<Contact translations={translations}/>
				</main>
			</div>
			</LanguageContext.Provider>
		</Theme.Provider>
	);
}

export default App;
