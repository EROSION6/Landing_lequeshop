import { FC, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { BlockCard, Button } from '../../UI'
import styles from './Footer.module.scss'

const links: string[] = [
	'Главная',
	'Условия покупки',
	'Контакты',
	'Личный кабинет',
]

const Footer: FC = () => {
	const [isActive, setIsActive] = useState<number>(0)
	const [isOpen, setIsOpen] = useState<boolean>(false)

	return (
		<>
			<div className={styles.container}>
				<BlockCard addClass={styles.one} />
				<BlockCard addClass={styles.footer}>
					<div className={styles.cont}>
						<div className={styles.logo}>
							<h1>Logo</h1>
						</div>
						<div className={!isOpen ? styles.list : styles.open}>
							<nav>
								<ul>
									{links.map((item, i) => (
										<li>
											<NavLink
												onClick={() => setIsActive(i)}
												style={{ color: isActive === i ? 'white' : 'gray' }}
												to='#'
											>
												{item}
											</NavLink>
										</li>
									))}
								</ul>
							</nav>
						</div>
						<div className={styles.btns}>
							<button
								onClick={() => setIsOpen(!isOpen)}
								className={styles.burger}
							></button>
							<Button>Мои покупки</Button>
						</div>
					</div>
					<BlockCard addClass={styles.blockFooter}>
						<div className={styles.left}>
							<span>2024</span>
							<span>Все права зарегистрированы</span>
						</div>
						<div className={styles.right}>
							<Link to='#'>Публичная офферта</Link>
							<Link to='#'>Пользовательское соглашение</Link>
						</div>
					</BlockCard>
				</BlockCard>
				<BlockCard addClass={styles.three} />
			</div>
		</>
	)
}

export default Footer
