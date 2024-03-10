import { FC } from 'react'
import styles from './Title.module.scss'

type TitleProps = {
	children: React.ReactNode
}

export const Title: FC<TitleProps> = ({ children }) => {
	return <h1 className={styles.title}>{children}</h1>
}
