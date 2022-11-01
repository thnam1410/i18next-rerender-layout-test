import Link from "next/link";
import styles from "../styles/Home.module.css";
import Layout from "../Layout";

export default function Home() {
	return (
		<div className={styles.container}>
			<Link href="/another-page">Go to another page</Link>
		</div>
	);
}
// This will resolve the losing state layout
// import { serverSideTranslations } from "next-i18next/serverSideTranslations";

// export const getServerSideProps = async ({ locale }) => {
// 	return {
// 		props: {
// 			...(await serverSideTranslations(locale ?? "en", ["common"])),
// 		},
// 	};
// };
Home.getLayout = (page) => {
	return (
		<>
			<Layout />
			{page}
		</>
	);
};
