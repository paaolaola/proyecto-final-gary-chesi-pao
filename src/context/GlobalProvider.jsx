import { createContext, useState } from "react";

export const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
	const [data, setData] = useState(null);

	const state = { data, setData };

	return (
		<GlobalContext.Provider value={state}>
			{children}
		</GlobalContext.Provider>
	);
};

export default GlobalProvider;
