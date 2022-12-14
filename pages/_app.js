import "../styles/globals.css";

import { appWithTranslation } from "next-i18next";

const MyApp = ({ Component, pageProps }) => {
	const getLayout = Component.getLayout ?? ((page) => page);

	return <>{getLayout(<Component {...pageProps} />)}</>;
};

export default appWithTranslation(MyApp);
