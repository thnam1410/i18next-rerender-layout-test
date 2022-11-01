import React from "react";
import Layout from "../Layout";
function AnotherPage() {
	return <div>another-page</div>;
}

export default AnotherPage;

import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export const getServerSideProps = async ({ locale }) => {
	return {
		props: {
			...(await serverSideTranslations(locale ?? "vi-VN", ["common"])),
		},
	};
};

AnotherPage.getLayout = (page) => {
	return (
		<>
			<Layout />
			{page}
		</>
	);
};
