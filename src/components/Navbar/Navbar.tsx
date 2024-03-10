import { FC, useState } from 'react'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { CgFileDocument } from 'react-icons/cg'
import { FaBagShopping } from 'react-icons/fa6'
import { RiAccountPinBoxLine, RiHome3Fill } from 'react-icons/ri'
import { RxCross2, RxHamburgerMenu } from 'react-icons/rx'
import { NavLink } from 'react-router-dom'
import { BlockCard, Button } from '../../UI'
import styles from './Navbar.module.scss'

type Links = {
	title: string
	href: string
	icon: JSX.Element
}

const links: Links[] = [
	{ icon: <RiHome3Fill />, title: 'Главная', href: '/' },
	{ icon: <CgFileDocument />, title: 'Условия покупки', href: 'purchaseTerms' },
	{ icon: <BsFillTelephoneFill />, title: 'Контакты', href: 'contact' },
	{ icon: <RiAccountPinBoxLine />, title: 'Личный кабинет', href: '/' },
]

export const Navbar: FC = () => {
	const [isActive, setIsActive] = useState<number>(0)
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<>
			<div className={styles.container}>
				<BlockCard addClass={styles.lefts}></BlockCard>
				<BlockCard addClass={styles.header}>
					<div className={styles.logo}>
						<h1>Logo</h1>
					</div>
					<div className={!isOpen ? styles.list : styles.open}>
						<nav>
							<ul>
								{links.map((item, i) => (
									<li key={i}>
										<NavLink
											onClick={() => setIsActive(i)}
											style={{ color: isActive === i ? 'white' : '#526473' }}
											to={item.href}
										>
											{item.icon}
											{item.title}
										</NavLink>
									</li>
								))}
								<button
									onClick={() => setIsOpen(false)}
									className={styles.cross}
								>
									<RxCross2 />
								</button>
							</ul>
						</nav>
					</div>
					<div className={styles.btns}>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className={styles.burger}
						>
							<RxHamburgerMenu />
						</button>
						<Button addClass={styles.butn}>
							<span>
								<FaBagShopping />
							</span>
							<span>Мои покупки</span>
						</Button>
					</div>
				</BlockCard>
				<BlockCard addClass={styles.rights}></BlockCard>
			</div>
		</>
	)
}
