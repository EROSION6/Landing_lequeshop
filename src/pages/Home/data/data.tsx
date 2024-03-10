import { MdOutlineTimer } from 'react-icons/md'
import { RiAccountCircleLine, RiMessage2Line } from 'react-icons/ri'

type CardType = {
	icon: string | JSX.Element
	title: string
	display: string
	border: string
}

export const cardRec: CardType[] = [
	{
		icon: '',
		title: '',
		display: 'none',
		border: '1px solid rgba(128, 128, 128, 0.285)',
	},
	{
		icon: <MdOutlineTimer />,
		title: 'Круглосуточная работа',
		border: '1px solid #34dacc',
		display: 'flex',
	},
	{
		icon: <RiMessage2Line />,
		title: 'Быстрая тех. поддержка',
		border: '1px solid #ab49e0',
		display: 'flex',
	},
	{
		icon: <RiAccountCircleLine />,
		title: 'Качественные аккаунты',
		border: '1px solid #e9bd2c',
		display: 'flex',
	},
	{
		icon: '',
		title: '',
		display: 'none',
		border: '1px solid rgba(128, 128, 128, 0.285)',
	},
]
