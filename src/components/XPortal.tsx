import { useEffect, useRef } from 'react'
import { createPortal } from 'react-dom'

import { XPortalProps } from '~/typing'

const XPortal = (props: XPortalProps) => {
  const el = useRef(document.createElement('div'))
  const portal = useRef<HTMLElement | null>()

  useEffect(() => {
    const portalId = 'portal-root'
    const portalRoot = document.getElementById(portalId)

    if (!portalRoot) {
      portal.current = document.body.appendChild(document.createElement('div'))
      portal.current.id = portalId
    } else {
      portal.current = document.getElementById(portalId)
    }

    portal.current?.appendChild(el.current)
    return () => {
      portal.current?.removeChild(el.current)
    }
  }, [])

  return createPortal(props.children, el.current)
}

export default XPortal
