import React, { FC } from 'react'
import styles from './Button.module.scss'

interface ButtonProps {
	children: React.ReactNode
	addClass?: string
}

export const Button: FC<ButtonProps> = ({ children, addClass }) => {
	return <button className={`${styles.btn} ${addClass}`}>{children}</button>
}
