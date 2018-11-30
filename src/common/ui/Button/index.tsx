import React from 'react'

import styles from './Button.module.scss'

interface Props {
  onClick: () => void
  children: React.ReactNode
}

const Button = (props: Props) => {
  return (
    <a href="javascript:;" className={styles.Button} onClick={props.onClick}>
      {props.children}
    </a>
  )
}

export default Button
