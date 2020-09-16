import React, { Component } from 'react'
import styled from 'styled-components'

import Logo from './Logo'
import Links from './Links'

const Container = styled.div.attrs({
    className: 'container-fluid',
})
`background-color: #5BC622 !important;
color: white !important;`

const Nav = styled.nav.attrs({
    className: 'navbar navbar-expand-lg navbar-dark bg-dark',
})`
    margin-bottom: 20 px;
    background-color: #5BC622 !important;
    color: white !important;
`

class NavBar extends Component {
    render() {
        return (
            <Container>
                <Nav>
                    <Logo />
                    <Links />
                </Nav>
            </Container>
        )
    }
}

export default NavBar