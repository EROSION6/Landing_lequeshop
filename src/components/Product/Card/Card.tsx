import { FaBagShopping } from 'react-icons/fa6'
import { Button } from '../../../UI'
import steam from '../../../assets/svg/steam-svgrepo-com.svg'
import styles from './Card.module.scss'

export const Card = () => {
	return (
		<article className={styles.card}>
			<div className={styles.left}>
				<img src={steam} alt='steam' />
				<h3>[Чистые] - Аккаунты Steam с 0 lvl и работающим трейдом</h3>
			</div>
			<div className={styles.right}>
				<span>
					В наличии: <span>600 шт</span>
				</span>
				<span>
					Цена за 1шт:{' '}
					<span>
						9.60 <b>₽</b> 
					</span>
				</span>
				<Button addClass={styles.button}>
					<span>
						<FaBagShopping />
					</span>
					<span>Купить</span>
				</Button>
			</div>
		</article>
	)
}
