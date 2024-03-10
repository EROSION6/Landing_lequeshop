import { operatingRules } from '../../pages/PurchaseTerms/data/data'
import styles from './PurchaseTermsBlock.module.scss'

export const PurchaseTermsBlock = () => {
	return (
		<>
			<div className={styles.purchaseTermsBlock}>
				<h2>
					<span>1.</span>
					<span>Правила работы с магазином</span>
				</h2>
				<div className={styles.conditions}>
					{operatingRules.map(operation => (
						<div>
							<span>{operation.num}</span>
							<p>{operation.title}</p>
						</div>
					))}
				</div>
			</div>
		</>
	)
}
