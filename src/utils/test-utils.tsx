import '#/window.ts'

import type { RenderOptions } from '@testing-library/react'
import { render } from '@testing-library/react'
import type { PropsWithChildren, ReactElement, ReactNode } from 'react'

import { XThemeProvider } from '~/theme'

const AllTheProviders = ({ children }: PropsWithChildren<ReactNode>) => (
  <XThemeProvider>{children}</XThemeProvider>
)

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from '@testing-library/react'
export { customRender as render }
