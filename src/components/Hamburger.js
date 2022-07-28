import Hamburger from 'hamburger-react'
import styled from 'styled-components'

export default function HamburgerButton (){

    const AppStyles = styled.main`
        display: none;
        @media (max-width: 530px){
            display: flex;
            top: -10px;
        }
    `

    return (
        <AppStyles>
            <Hamburger className="hamburgerBtn" size={30} />
        </AppStyles>
    )
}
