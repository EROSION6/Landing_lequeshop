import { FC } from 'react'
import { FaTelegramPlane } from 'react-icons/fa'
import { Banner } from '../../UI'
import { CardRecommendations } from '../../components/CardRecommendations/CardRecommendations'
import { Product } from '../../components/Product/Product'
import { cardRec } from './data/data'
import styles from './styles/Home.module.scss'

const Home: FC = () => {
	return (
		<div className={styles.home}>
			<div className={styles.banners}>
				<Banner variant='black'>
					<FaTelegramPlane style={{ color: 'aqua', width: 20, height: 20 }} />{' '}
					Подпишитесь и узнавайте о завозах первыми! <span>Подписаться</span>
				</Banner>
			</div>
			<div className={styles.cards}>
				{cardRec.map((card, i) => (
					<CardRecommendations key={i} {...card} />
				))}
			</div>
			<div className={styles.product}>
				<Product />
				<Product />
			</div>
		</div>
	)
}

export default Home
