import React from 'react'

import classNames from 'classnames'

import styles from './styles.module.scss'

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  background?: 'white' | 'black'
}

export const Area = ({ background, className, ...otherProps }: Props) => (
  <div
    className={classNames(
      styles.area,
      {
        [styles.black]: background === 'black',
        [styles.white]: background === 'white',
      },
      className,
    )}
    {...otherProps}
  ></div>
)
