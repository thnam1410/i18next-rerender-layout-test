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
Home.getLayout = (page) => {
	return (
		<>
			<Layout />
			{page}
		</>
	);
};
