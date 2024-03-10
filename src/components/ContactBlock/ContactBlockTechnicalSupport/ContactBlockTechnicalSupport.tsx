import { BlockCard } from '../../../UI'
import styles from './ContactBlockTechnicalSupport.module.scss'

type Date = {
	DayOfTheWeek: string
	time: string
	color: string
}

const date: Date[] = [
	{ DayOfTheWeek: 'Понедельник', time: '10:00-19:00', color: 'aqua' },
	{ DayOfTheWeek: 'Вторник', time: '10:00-19:00', color: 'aqua' },
	{ DayOfTheWeek: 'Среда', time: '10:00-19:00', color: 'aqua' },
	{ DayOfTheWeek: 'Четверг', time: '10:00-19:00', color: 'aqua' },
	{ DayOfTheWeek: 'Пятница', time: '10:00-19:00', color: 'aqua' },
	{ DayOfTheWeek: 'Суббота', time: '10:00-19:00', color: 'aqua' },
	{ DayOfTheWeek: 'Воскресенье', time: 'Свободный график', color: 'gray' },
]

export const ContactBlockTechnicalSupport = () => {
	return (
		<div className={styles.containers}>
			<BlockCard
				addClass={styles.blocks}
				border='1px solid rgba(128, 128, 128, 0.285)'
			>
				<div className={styles.title}>
					<h4>Режим работы техподдержка</h4>
				</div>
				<div className={styles.text}>
					<ul>
						{date.map(time => (
							<li key={time.DayOfTheWeek}>
								<span>{time.DayOfTheWeek}</span>
								<span style={{ color: time.color }}>{time.time}</span>
							</li>
						))}
					</ul>
				</div>
			</BlockCard>
		</div>
	)
}
