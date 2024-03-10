import { FC } from 'react'
import { BlockCard } from '../../UI'
import styles from './CardRecommendations.module.scss'

interface CardRecommendationsProps {
	title: string
	icon: JSX.Element | string
	border: string
	display: string
}

export const CardRecommendations: FC<CardRecommendationsProps> = ({
	title,
	icon,
	border,
	display,
}) => {
	return (
		<BlockCard addClass={styles.cardsRec} border={border}>
			<div
				style={{ display: display, borderBottom: border }}
				className={styles.image}
			>
				{icon}
			</div>
			<div className={styles.title}>
				<h3>{title}</h3>
			</div>
		</BlockCard>
	)
}
