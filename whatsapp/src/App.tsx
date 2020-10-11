import React from "react";

import Layout from "./components/Layout";
import { ChatContextProvider } from "./contexts/ChatContext";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
	return (
		<ChatContextProvider>
			<Layout />
			<GlobalStyles />
		</ChatContextProvider>
	);
}

export default App;
