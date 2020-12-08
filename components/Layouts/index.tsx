import React from 'react'
import { AppHeader } from '@/components/Header'

interface Props {
  children: React.ReactNode
}

export const AppLayout: React.FunctionComponent<Props> = (props) => {
  return (
    <React.Fragment>
      <AppHeader></AppHeader>
      <main>{props.children}</main>
    </React.Fragment>
  )
}