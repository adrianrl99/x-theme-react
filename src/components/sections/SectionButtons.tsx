import { XButton, XCenter, XGap } from '~/components'

export default function SectionButtons() {
  return (
    <XCenter>
      <XGap all={2}>
        <XButton>button</XButton>
        <XButton color="success">button</XButton>
        <XButton color="error">button</XButton>
        <XButton color="info">button</XButton>
        <XButton color="warning">button</XButton>
      </XGap>
    </XCenter>
  )
}
