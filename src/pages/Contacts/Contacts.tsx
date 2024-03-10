import { FC } from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { FaTelegramPlane } from 'react-icons/fa'
import { Banner, Title } from '../../UI'
import { ContactBlock } from '../../components/ContactBlock/ContactBlock'
import { ContactBlockTechnicalSupport } from '../../components/ContactBlock/ContactBlockTechnicalSupport/ContactBlockTechnicalSupport'
import styles from './styles/Contacts.module.scss'

const Contacts: FC = () => {
	return (
		<div className={styles.contact}>
			<div className={styles.content}>
				<Title>
					<BsFillTelephoneFill
						style={{ marginRight: 15, color: 'aqua', width: 30, height: 30 }}
					/>
					Контакты
				</Title>
				<div className={styles.blocks}>
					<ContactBlock />
					<ContactBlockTechnicalSupport />
				</div>
				<Banner addClass={styles.banners} variant='blue'>
					<FaTelegramPlane style={{ color: 'aqua', width: 20, height: 20 }} />
					<span></span>Агент поддержка <b>#nickname</b>в Telegram.
					<b>Нажмите чтобы написать</b>
				</Banner>
			</div>
		</div>
	)
}

export default Contacts
