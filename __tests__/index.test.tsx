import { RouterContext } from 'next/dist/shared/lib/router-context'
import { render, screen } from '@testing-library/react'
import Home from '../src/pages'
import { createMockRouter } from '../src/lib/utils/testUtils/createMockRouter'

//import userEvent from '@testing-library/user-event'
describe('Home', () => {
  it('should render a heading', () => {
    render(
      <RouterContext.Provider value={createMockRouter({})}>
        <Home />
      </RouterContext.Provider>,
    )

    const heading = screen.getByRole('heading', {
      name: 'Next.js template',
    })

    expect(heading).toBeInTheDocument()
  })
})
