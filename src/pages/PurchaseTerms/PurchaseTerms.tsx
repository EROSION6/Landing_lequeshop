import { FC } from 'react'
import { Title } from '../../UI'
import { PurchaseTermsBlock } from '../../components/PurchaseTermsBlock/PurchaseTermsBlock'
import styles from './styles/PurchaseTerms.module.scss'

const PurchaseTerms: FC = () => {
	return (
		<div className={styles.purchaseTerms}>
			<div className={styles.content}>
				<Title>Условия покупки</Title>
				<div className={styles.blocks}>
					<PurchaseTermsBlock />
					<PurchaseTermsBlock />
					<PurchaseTermsBlock />
				</div>
			</div>
		</div>
	)
}

export default PurchaseTerms
