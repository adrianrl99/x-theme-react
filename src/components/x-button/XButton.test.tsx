import '@testing-library/jest-dom'

import { createSerializer, matchers } from '@emotion/jest'
import { render } from 'test-utils'

import { baseTheme } from '../../theme'
import { XThemeColorList } from '../../utils/constants'
import XButton from './XButton'

expect.extend(matchers)
expect.addSnapshotSerializer(createSerializer())

describe('x-button', () => {
  const theme = baseTheme

  test('default x-button', () => {
    const { getByText } = render(<XButton>button</XButton>)

    const element = getByText('button')

    expect(element).toBeInTheDocument()
    expect(element).toMatchSnapshot()
  })

  describe('x-button => variant: fill', () => {
    XThemeColorList.forEach(color => {
      test(`x-button => variant: fill, color: ${color}`, () => {
        const { getByText } = render(
          <XButton variant="fill" color={color}>
            button
          </XButton>,
        )

        const element = getByText('button')

        expect(element).toBeInTheDocument()
        expect(element).toMatchSnapshot()

        expect(element).toHaveStyleRule(
          'color',
          theme.components.XButton.color.contrastText,
        )
        expect(element).toHaveStyleRule(
          'background-color',
          theme.components.XButton.color[color || 'base'],
        )
        expect(element).toHaveStyleRule(
          'box-shadow',
          theme.components.XButton.shadow,
        )
      })
    })
  })

  describe('x-button => variant: text', () => {
    XThemeColorList.forEach(color => {
      test(`x-button => variant: text, color: ${color}`, () => {
        const { getByText } = render(
          <XButton variant="text" color={color}>
            button
          </XButton>,
        )

        const element = getByText('button')

        expect(element).toBeInTheDocument()
        expect(element).toMatchSnapshot()

        expect(element).toHaveStyleRule(
          'color',
          theme.components.XButton.color[color || 'base'],
        )
        expect(element).toHaveStyleRule('background-color', 'transparent')
      })
    })
  })

  describe('x-button => variant: outline', () => {
    XThemeColorList.forEach(color => {
      test(`x-button => variant: outline, color: ${color}`, () => {
        const { getByText } = render(
          <XButton variant="outline" color={color}>
            button
          </XButton>,
        )

        const element = getByText('button')

        expect(element).toBeInTheDocument()
        expect(element).toMatchSnapshot()

        expect(element).toHaveStyleRule(
          'color',
          theme.components.XButton.color[color || 'base'],
        )
        expect(element).toHaveStyleRule('background-color', 'transparent')
      })
    })
  })
})
