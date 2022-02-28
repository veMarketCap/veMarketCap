import cx from 'classnames'
import React, { ReactNode } from 'react'

interface Props {
  children: ReactNode
  className?: string
}

export function RiskCell({ children, className }: Props) {
  return (
      <span className={cx('RiskCell', className)}>{children}</span>
  )
}
