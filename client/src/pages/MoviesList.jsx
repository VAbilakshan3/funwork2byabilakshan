import React, { Component } from 'react'
import ReactTable from "react-table-6";  
import "react-table-6/react-table.css"
import api from '../api'

import styled from 'styled-components'
/* eslint-disable */
const Wrapper = styled.div`
    padding: 0 40px 40px 40px;
`

const Update = styled.div
`
    color: #000000;
    cursor: pointer;
`

const Delete = styled.div`
    color: #000000;
    cursor: pointer;
`
const BtnDU = {
    backgroundColor: '#ffffff',
}

const TableStyle = {
    boxShadow: '0 0 18px 5px #979ca0',
    marginTop: '50px',
    backgroundColor: 'rgb(91, 198, 34)'
};

class UpdateMovie extends Component {
    updateUser = event => {
        event.preventDefault()

        window.location.href = `/movies/update/${this.props.id}`
    }

    render() {
        return <Update style={BtnDU} onClick={this.updateUser}>Update</Update>
    }
}

class DeleteMovie extends Component {
    deleteUser = event => {
        event.preventDefault()

        if (
            window.confirm(
                `Do tou want to delete the movie ${this.props.id} permanently?`,
            )
        ) {
            api.deleteMovieById(this.props.id)
            window.location.reload()
        }
    }

    render() {
        return <Delete style={BtnDU} onClick={this.deleteUser}>Delete</Delete>
    }
}

class MoviesList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            movies: [],
            columns: [],
            isLoading: false,
        }
    }

    componentDidMount = async () => {
        this.setState({ isLoading: true })

        await api.getAllMovies().then(movies => {
            this.setState({
                movies: movies.data.data,
                isLoading: false,
            })
        })
    }

    render() {
        const { movies, isLoading } = this.state
        console.log('TCL: MoviesList -> render -> movies', movies)

        const columns = [
            {
                Header: 'ID',
                accessor: '_id',
                filterable: true,
            },
            {
                Header: 'Name',
                accessor: 'name',
                filterable: true,
            },
            {
                Header: 'Address',
                accessor: 'address',
                filterable: true,
            },
            {
                Header: 'Email',
                accessor: 'email',
                filterable: true,
            },
            {
                Header: 'Quantity',
                accessor: 'rating',
                filterable: true,
            },
            {
                Header: 'Item Name',
                accessor: 'time',
                filterable: true,
                Cell: props => <span>{props.value.join(' / ')}</span>,
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <DeleteMovie id={props.original._id} />
                        </span>
                    )
                },
            },
            {
                Header: '',
                accessor: '',
                Cell: function(props) {
                    return (
                        <span>
                            <UpdateMovie id={props.original._id} />
                        </span>
                    )
                },
            },
        ]

        let showTable = true
        if (!movies.length) {
            showTable = false
        }

        return (
            <Wrapper>
                {showTable && (
                    <ReactTable style={TableStyle}
                        data={movies}
                        columns={columns}
                        loading={isLoading}
                        defaultPageSize={10}
                        showPageSizeOptions={true}
                        minRows={0}
                    />
                )}
            </Wrapper>
        )
    }
}

export default MoviesList