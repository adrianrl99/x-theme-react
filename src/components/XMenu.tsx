import styled from '@emotion/styled'

import XButton from '~/components/XButton'
import XList from '~/components/XList'
import XPortal from '~/components/XPortal'
import { XMenuProps } from '~/typing'

const Menu = styled.div<XMenuProps>``

const XMenu = (props: XMenuProps) => (
  <Menu {...props}>
    <XButton {...props.buttonProps}>{props.buttonContent}</XButton>
    {props.open && (
      <XPortal>
        <XList />
      </XPortal>
    )}
  </Menu>
)

export default XMenu
