import React, { Component } from 'react'
import styled from 'styled-components'

import logo from '../lg1.png'

const Wrapper = styled.a.attrs({
    className: 'navbar-brand',
})
`background-color: #5BC622 !important;
color: white !important;`

class Logo extends Component {
    render() {
        return (
            <Wrapper href="lg1.png">
                <img src={logo} width="80" height="40" alt="CleanLife" />
            </Wrapper>
        )
    }
}

export default Logo