import React from 'react';
import Router from './Router';


const App: React.FC = () => {
    const urlLang = window.location.href.split('/').pop(); // Get the language from the URL
    const lang = urlLang === 'en' || urlLang === 'fr' || urlLang === 'es' ? urlLang : 'en';
    return (
        <div>
            <Router language={lang}/>
        </div>


    )

}

export default App;
