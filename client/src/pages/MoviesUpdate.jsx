import React, { Component } from 'react'
import api from '../api'

import styled from 'styled-components'
/* eslint-disable */
const Title = styled.h1.attrs({
    className: 'h1 font-weight-bolder text-center',
})
` color:#ffffff !important;`

const Wrapper = styled.div.attrs({
    className: 'form-group container ',
   
})`
    margin: 0 30px;
`

const Label = styled.label`
    margin: 5px;
    width:400px;
    color:#ffffff !important;
`

const InputText = styled.input.attrs({
    className: 'form-control form-control-sm',
})`
    margin: 5px;
    width: 87%;
    border: #000000;
    box-shadow: 0 0 10px 5px #979ca0;    
    `
    // const img = styled.img({
    // })`
    // height:50px;
    // width:50px;
    // `

const Button = styled.button.attrs({
    className: `btn btn-light`,
})`
    margin: 15px 15px 15px 5px;
    backgroundColor: '#ffffff !important'
`

const CancelButton = styled.a.attrs({
    className: `btn btn-light `,
})`
    margin: 15px 15px 15px 5px;
    backgroundColor: '#ffffff !important'

`
const TableStyle = {
    boxShadow: '0 0 18px 5px #979ca0',
    marginTop: '50px',
    backgroundColor: 'rgb(91, 198, 34)'
};

class MoviesUpdate extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            name: '',
            rating: '',
            address:'',
            email:'',
            time: '',
            ItemImage:'',
        }
    }

    handleChangeInputName = async event => {
        const name = event.target.value
        this.setState({ name })
    }
    handleChangeInputAddress = async event => {
        const address = event.target.value
        this.setState({ address })
    }
    handleChangeInputEmail = async event => {
        const email = event.target.value
        this.setState({ email })
    }

    handleChangeInputRating = async event => {
        const rating = event.target.validity.valid
            ? event.target.value
            : this.state.rating

        this.setState({ rating })
    }

    handleChangeInputTime = async event => {
        const time = event.target.value
        this.setState({ time })
    }
    handleChangeInputItemImage = async event => {
        const ItemImage = event.target.value
        this.setState({ ItemImage })
    }
    handleUpdateMovie = async () => {
        const { id, name, address, email, rating,  time, ItemImage } = this.state
        const arrayTime = time.split('/')
        const payload = { name, address,email, rating  ,time , ItemImage : arrayTime }

        await api.updateMovieById(id, payload).then(res => {
            window.alert(`Item updated successfully`)
            this.setState({
                name: '',
                address:'',
                email:'',
                time: '',
                rating: '',
                ItemImage:'',
            })
        })
    }

    componentDidMount = async () => {
        const { id } = this.state
        const movie = await api.getMovieById(id)

        this.setState({
            name: movie.data.data.name,
            address: movie.data.data.address,
            email: movie.data.data.email,
            rating: movie.data.data.rating,
            time: movie.data.data.time,
            ItemImage: movie.data.data.ItemImage.join('/'),
        })
    }

    render() {
        const { name, rating, time, address, email ,ItemImage} = this.state
        return (
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3 col-sm-3"></div>
                    <div className="col-lg-6 col-md-6 col-sm-6">
                <div className=" table  table-bordered" style={TableStyle}>
                    <div className="">
            <Wrapper>
                <Title>Add Items</Title>

                <Label>Name: </Label>
                <InputText
                    type="text"
                    value={name}
                    onChange={this.handleChangeInputName}
                />
                <Label>Address: </Label>
                <InputText
                    type="text"
                    value={address}
                    onChange={this.handleChangeInputAddress}
                />
                <Label>Email: </Label>
                <InputText
                    type="text"
                    pattern='/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/'
                    value={email}
                    onChange={this.handleChangeInputEmail}
                />
                <Label>Quantity: </Label>
                <InputText
                    type="number"
                    step="1"
                    lang="en-US"
                    min="0"
                    max="1000000"
                    pattern="[0-9]+([,\.][0-9]+)?"
                    value={rating}
                    onChange={this.handleChangeInputRating}
                />

                <Label>Item Name: </Label>
                <InputText
                    type="text"
                    value={time}
                    onChange={this.handleChangeInputTime}
                />
               
			{/* <div className="page">
				<div className="container">
					<h1 className="heading">Add your Image</h1>
					<div className="img-holder">
						<img src="https://pngriver.com/wp-content/uploads/2018/04/Download-Upload-Logo-Png-Image-65028-For-Designing-Projects.png" alt="" id="img" className="img" />
					</div>
					<input type="file" accept="image/*" name="image-upload" id="input" onChange={this.imageHandler} />
					<div className="label">
          <label className="image-upload" htmlFor="input">
						<i className="material-icons">add_photo_alternate</i>
						Choose your Photo
					</label>
          </div>
				</div>
			</div> */}

            <div className="App">
                <input type="file" onChange={this.handleChangeInputItemImage}/>
                {/* <button onClick={this.fileUploadHandeler}>Upload</button> */}
            </div>

                <Button onClick={this.handleUpdateMovie }>Update Item</Button>
                <CancelButton href={'/movies/list'}>Cancel</CancelButton>
            </Wrapper>
            </div>
            </div>
            </div>
            </div>
            <div className="col-lg-3 col-md-3 col-sm-3"></div>
            </div>
        )
    }
}

export default MoviesUpdate