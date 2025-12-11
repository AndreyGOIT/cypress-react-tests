import React from 'react'
import '@testing-library/jest-dom/extend-expect'
import {render} from '@testing-library/react'

import Message from './Message'

afterEach(cleanup)

describe('Message', () => {
    it('renderöi viestin tekstin ja pos-tyylin', () => {
        const message = 'Added new Customer'
        const isPositive = true

        render(<Message message={message} isPositive={isPositive} />)

        expect(screen.getByText(message)).toBeInTheDocument()
        expect(screen.getByText(message)).toHaveClass('pos')
    })

    it('renderöi viestin tekstin ja neg-tyylin', () => {
        const message = 'Added new Customer'
        const isPositive = false

        render(<Message message={message} isPositive={isPositive} />)

        expect(screen.getByText(message)).toBeInTheDocument()
        expect(screen.getByText(message)).toHaveClass('pos')
    })
})

test('Testataan, että Messagen teksti renderöityy oikein', () => {

    const message = "Lisättiin kurssi: SQL perusteet!"

    const component = render(<Message message={message} />)


    expect(component.container).toHaveTextContent("Lisättiin kurssi: SQL perusteet!")

    
    //mahdollisuus debugata testiä
    component.debug()

}

)