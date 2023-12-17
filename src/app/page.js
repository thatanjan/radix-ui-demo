import Image from 'next/image'
import styles from './page.module.css'

import DemoForm from '../Components/DemoForm'
import Accordion from '../Components/Accordion'
import Dialog from '../Components/Dialog'

export default function Home() {
	return (
		<main className={styles.main}>
			<Dialog />
			{/* <Accordion /> */}
		</main>
	)
}
