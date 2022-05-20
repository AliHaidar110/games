import { createContext, useContext, useMemo, useState } from "react";

import { TRANSLATION } from "../resources/constants";
import { translation } from "../resources/translations";

const TranslationContext = createContext();

export const useTranslation = () => useContext(TranslationContext);

const TranslationProvider = ({ children }) => {
	const [language, setLanguage] = useState(TRANSLATION.default);

	const value = useMemo(
		() => ({
			translation: translation[language],
			setLanguage,
		}),
		[language, translation, setLanguage]
	);

	return (
		<TranslationContext.Provider value={value}>
			{children}
		</TranslationContext.Provider>
	);
};

export default TranslationProvider;
