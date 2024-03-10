import classNames from 'classnames'
import { FC } from 'react'
import styles from './Banner.module.scss'

type Banner = {
	children: React.ReactNode
	variant: string
	addClass?: string
}

export const Banner: FC<Banner> = ({ variant, children, addClass }) => {
	const typeBanner = classNames({
		[styles.bannerBlack]: variant === 'black',
		[styles.bannerBlue]: variant === 'blue',
	})

	return (
		<div className={`${typeBanner} ${addClass}`}>
			<h2>{children}</h2>
		</div>
	)
}
