import styled from '@emotion/styled'
import { useEffect, useRef, useState } from 'react'

import { XButton, XList, XMenuItem, XMenuList } from '~/components'
import type { XMenuListProps, XMenuProps } from '~/typing'

const Menu = styled.div<XMenuProps>`
  position: relative;
`

const XMenu = (props: XMenuProps) => {
  const [menuListProps, setMenuListProps] = useState<XMenuListProps>({
    open: props.open || false,
  })

  const menuRef = useRef<HTMLDivElement>(null)
  const menuListRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (menuRef.current && menuListRef.current) {
      setMenuListProps({
        open: props.open,
        top: menuRef.current.clientHeight,
      })
    }
  }, [menuRef.current, menuListRef.current, props.open])

  return (
    <Menu ref={menuRef}>
      <XButton variant="text" {...props.buttonProps}>
        {props.buttonContent}
      </XButton>
      <XMenuList ref={menuListRef} {...menuListProps}>
        <XList direction="column" {...props.listProps}>
          {props.items?.map(item => (
            <XMenuItem {...item} key={item.key} />
          ))}
        </XList>
      </XMenuList>
    </Menu>
  )
}

export default XMenu
