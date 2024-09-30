import {useTranslation} from "react-i18next";

function App() {
  
  const {t} = useTranslation();  
  
  // use this code in other component to change language 
  // const {i18n} = useTranslation();
  // i18n.changeLanguage("english");

  return (<>
    <h1>{t("greeting")}</h1>
  </>
  );
}

export default App;
   