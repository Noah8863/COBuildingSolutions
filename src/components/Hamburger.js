import Hamburger from 'hamburger-react'
import styled from 'styled-components'

export default function HamburgerButton() {

    const AppStyles = styled.main`
        display: none;
        @media (max-width: 530px){
            display: flex;
            top: -10px;
        }
    `

    return (
        <AppStyles>
            <h1 className="test1">Hello</h1>
            <Hamburger className="hamburgerBtn" size={30} onToggle={toggled => {
                if (toggled) {
                    const test1 = document.getElementsByClassName('test1');
                    test1.classList.add('hide');
                } else {
                    // close a menu
                }
            }} />
        </AppStyles>
    )
}
