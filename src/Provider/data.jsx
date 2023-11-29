import React, { useEffect, useState } from "react";
import { createContext } from "react";
import languages from "../data/language.json";
import { useSelector } from "react-redux";

export const AppContext = createContext();
function DataProvider({ children }) {
  const language = useSelector((state) => state.languageReducer.lang);

  const [content, setContent] = useState({});
  useEffect(() => {
    if (language === "kurdish") {
      setContent(languages.kurdish);
    } else {
      setContent(languages.english);
    }
  }, [language]);
  return (
    <AppContext.Provider value={{ content }}>{children}</AppContext.Provider>
  );
}

export default DataProvider;
