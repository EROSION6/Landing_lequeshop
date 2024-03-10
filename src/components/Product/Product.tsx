import { Card } from './Card/Card'
import styles from './Product.module.scss'

export const Product = () => {
	return (
		<>
			<div className={styles.products}>
				<div className={styles.cardBanner}>
					<div className={styles.blockRight}>
						<h3>Пустые аккаунты</h3>
					</div>
					<div className={styles.blockLeft}></div>
				</div>
				<div className={styles.cards}>
					<Card />
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>
		</>
	)
}
