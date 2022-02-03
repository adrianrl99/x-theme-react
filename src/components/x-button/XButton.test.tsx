import '@testing-library/jest-dom'

import { render } from 'test-utils'

import XButton from './XButton'

test('render x-button', function t() {
  const { container, getByText } = render(<XButton>button</XButton>)
  expect(getByText('button')).toBeInTheDocument()
  expect(container).toMatchSnapshot()
})
