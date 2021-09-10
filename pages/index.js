import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Homepage</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rerum est laboriosam nobis placeat possimus delectus officia expedita itaque tenetur impedit voluptatibus eius esse, quo sed natus culpa! Maiores, iste.</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore, rerum est laboriosam nobis placeat possimus delectus officia expedita itaque tenetur impedit voluptatibus eius esse, quo sed natus culpa! Maiores, iste.</p>
      <Link href="/ninjas">
        <a className={styles.btn}>See Ninjas Listing</a>
      </Link>
    </div>
  )
}
