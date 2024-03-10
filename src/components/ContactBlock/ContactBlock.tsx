import { BiSolidCopy } from 'react-icons/bi'
import { BlockCard, Button } from '../../UI'
import styles from './ContactBlock.module.scss'

const formOpenProduct: string[] = [
	'Номер примечания №XXXXXXX',
	'Вашу почту (которую указывали при покупке',
	'Указать куплены Аккаунт(ы) или Купон(ы)',
	'Уточните причину обращения (пишите подробно, чтобы мы могли решить проблему как можно быстрее)',
]

export const ContactBlock = () => {
	return (
		<div className={styles.containers}>
			<BlockCard
				addClass={styles.blocks}
				border='1px solid rgba(128, 128, 128, 0.285)'
			>
				<div className={styles.title}>
					<h4>Форма подачи заявки по купленному товару</h4>
				</div>
				<div className={styles.text}>
					<ul>
						{formOpenProduct.map(product => (
							<li>{product}</li>
						))}
					</ul>
				</div>
				<div className={styles.buttonCont}>
					<Button addClass={styles.buttons}>
						<BiSolidCopy
							style={{ color: 'black', width: 18, height: 18, marginRight: 8 }}
						/>
						Скопировать шаблон
					</Button>
				</div>
			</BlockCard>
		</div>
	)
}
