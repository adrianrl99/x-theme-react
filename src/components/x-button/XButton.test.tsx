import '@testing-library/jest-dom'

import { createSerializer, matchers } from '@emotion/jest'
import { render } from 'test-utils'

import { baseTheme } from '../../theme'
import { XThemeColorList, XThemeSizeList } from '../../utils/constants'
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
    describe('x-button => variant: fill, color', () => {
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

    describe('x-button => variant: fill, animation', () => {
      test('x-button => variant: fill, animation: { onActive: false, onHover: false }', () => {
        const { getByText } = render(
          <XButton
            variant="fill"
            animation={{ onActive: false, onHover: false }}
          >
            button
          </XButton>,
        )

        const element = getByText('button')

        expect(element).toBeInTheDocument()
        expect(element).toMatchSnapshot()

        expect(element).not.toHaveStyleRule(
          'transition',
          theme.functions.transition(
            theme.components.XButton.transition.base?.properties || [],
            theme.components.XButton.transition.base?.speed || 'fast',
          ),
        )
        expect(element).not.toHaveStyleRule(
          'transform',
          theme.components.XButton.transform.onHover,
          { target: ':hover' },
        )
        expect(element).not.toHaveStyleRule(
          'transform',
          theme.components.XButton.transform.onActive,
          { target: ':active' },
        )
      })
      test('x-button => variant: fill, animation: { onActive: true, onHover: false }', () => {
        const { getByText } = render(
          <XButton
            variant="fill"
            animation={{ onActive: true, onHover: false }}
          >
            button
          </XButton>,
        )

        const element = getByText('button')

        expect(element).toBeInTheDocument()
        expect(element).toMatchSnapshot()

        expect(element).toHaveStyleRule(
          'transition',
          theme.functions.transition(
            theme.components.XButton.transition.base?.properties || [],
            theme.components.XButton.transition.base?.speed || 'fast',
          ),
        )
        expect(element).toHaveStyleRule(
          'transform',
          theme.components.XButton.transform.onActive,
          { target: ':active' },
        )
      })
      test('x-button => variant: fill, animation: { onActive: false, onHover: true }', () => {
        const { getByText } = render(
          <XButton
            variant="fill"
            animation={{ onActive: false, onHover: true }}
          >
            button
          </XButton>,
        )

        const element = getByText('button')

        expect(element).toBeInTheDocument()
        expect(element).toMatchSnapshot()

        expect(element).toHaveStyleRule(
          'transition',
          theme.functions.transition(
            theme.components.XButton.transition.base?.properties || [],
            theme.components.XButton.transition.base?.speed || 'fast',
          ),
        )
        expect(element).toHaveStyleRule(
          'transform',
          theme.components.XButton.transform.onHover,
          { target: ':hover' },
        )
      })
    })
  })

  describe('x-button => variant: text', () => {
    describe('x-button => variant: text, color', () => {
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
  })

  describe('x-button => variant: outline', () => {
    describe('x-button => variant: outline, color', () => {
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

  describe('x-button => size', () => {
    XThemeSizeList.forEach(size => {
      test(`x-button => size: ${size}`, () => {
        const { getByText } = render(<XButton size={size}>button</XButton>)

        const element = getByText('button')

        expect(element).toBeInTheDocument()
        expect(element).toMatchSnapshot()

        expect(element).toHaveStyleRule(
          'font-size',
          theme.functions.spacing([
            theme.components.XButton.size[size || 'normal'].fontSize,
          ]),
        )
        expect(element).toHaveStyleRule(
          'padding',
          theme.functions.spacing(
            theme.components.XButton.size[size || 'normal'].padding,
          ),
        )
        expect(element).toHaveStyleRule(
          'height',
          theme.functions.spacing([
            theme.components.XButton.size[size || 'normal'].height,
          ]),
        )
      })
    })
  })
})
