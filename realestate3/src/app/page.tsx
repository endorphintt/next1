import Intro from '@/components/intro/Intro'
import styles from './page.module.scss'

export default function Home() {
    return (
        <main className={styles.main}>
            <Intro />
        </main>
    )
}
