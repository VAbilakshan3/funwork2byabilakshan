import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
// import App from 'app.css'

const Collapse = styled.div.attrs({
    className: 'collpase navbar-collapse ',
})
`background-color: #5BC622 !important;
color: white !important;`


const List = styled.div.attrs({
    className: 'navbar-nav mr-auto',
})
`background-color: #5BC622 !important;
color: white !important;`

const Item = styled.div.attrs({
    className: 'collpase navbar-collapse',
})
`background-color:#5BC622 !important;
color: #000000 !important;`


class Links extends Component {
    render() {
        return (
            <React.Fragment>
                <Link to="/" className="navbar-brand  font-weight-bolder">
                    CleanLife
                </Link>
                <Collapse>
                    <List>
                        <Item>
                            <Link to="/movies/list" className="nav-link active font-weight-bold">
                                List Items
                            </Link>
                        </Item>
                        <Item>
                            <Link to="/movies/create"  className="nav-link active font-weight-bold">
                                Input Items
                            </Link>
                        </Item>
                    </List>
                </Collapse>
            </React.Fragment>
        )
    }
}

export default Links