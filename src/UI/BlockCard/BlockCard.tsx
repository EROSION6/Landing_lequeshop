import { FC } from 'react'
import styles from './BlockCard.module.scss'

type BlockCard = {
	children?: React.ReactNode
	border?: string
	addClass?: string
}

export const BlockCard: FC<BlockCard> = ({ children, border, addClass }) => {
	return (
		<div
			className={`${styles.card} ${addClass}`}
			style={{ borderBottom: border }}
		>
			{children}
		</div>
	)
}
