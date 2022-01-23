import { ReactNode } from 'react'
import './Base.scss'

interface BaseProps {
  children: ReactNode
}

export default function Base({ children }: BaseProps) {
  return <div id="base">{children}</div>
}
