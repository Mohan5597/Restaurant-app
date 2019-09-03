/*import React from 'react'
//import {Link} from 'react-router-dom'

class RestaurantForm extends React.Component{
    constructor(props){
        super(props)
        this.state={
            name:'',
            location:''
        }
        this.handleNameChange=this.handleNameChange.bind(this)
        this.handleLocationChange=this.handleLocationChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        const formData={
            name:this.state.name,
            location:this.state.location
        }
        this.props.handleSubmit(formData)

    }

    handleNameChange(e){
       const name=e.target.value
       this.setState(() => ({name}))
    }

    handleLocationChange(e){
        const location=e.target.value
        this.setState(() =>({location}))
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name
                    <input type='text' value={this.state.name} onChange={this.handleNameChange}/>
                </label><br/>
                <label>
                    Location
                    <input type='text' value={this.state.location} onChange={this.handleLocationChange}/>
                </label>

                <input type='Submit' />
            </form>
        )
    }
}

export default RestaurantForm */

import React from 'react'
//import {Link} from 'react-router-dom'
import axios from 'axios'
import Select from 'react-select'
import { Input } from 'reactstrap'



class RestaurantForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            cuisines: [],
            cities: [],
            name: '',
            location: '',
            city: '',
            isVeg: false,
            selectedCuisine: [],
            isloading1: true,
            isloading2: true

        }

        this.handleSubmit = this.handleSubmit.bind(this)
    }


    componentDidMount() {
        axios.get('http://localhost:3005/city')
            .then(response => {
                const cities = response.data
                this.setState(() => ({ cities, isloading1: false })
                )
            })
        axios.get('http://localhost:3005/cuisine')
            .then(response => {
                const cuisines = response.data
                this.setState(() => ({ cuisines, isloading2: false })
                )
            })
    }

    handleCuisineChange(selection) {
        const selectedCuisine = selection

        this.setState(() => ({ selectedCuisine }))
    }

    handleCityChange(selection) {
        const city = selection
        console.log("city:" + city)
        this.setState(() => ({ city }))
    }

    handleIsVegChange(selection) {
        const isVeg = selection
        this.setState(() => ({ isVeg }))
    }

    handleNameChange(e) {
        const name = e.target.value
        this.setState(() => ({ name }))
    }

    handleLocationChange(e) {
        const location = e.target.value
        this.setState(() => ({ location }))
    }


    handleSubmit(e) {
        e.preventDefault()

        console.log("Selected:" + this.state.multipleSection)
        var multipleSection = []


        for (let i = 0; i < this.state.selectedCuisine.length; i++) {
            multipleSection.push(this.state.selectedCuisine[i].value)
            console.log(multipleSection)
        }




        const formData = {
            name: this.state.name,
            isVeg: this.state.isVeg.value,
            location: this.state.location,
            city: this.state.city.value,
            cuisines: multipleSection,

        }
        console.log(formData)

        this.props.handleSubmit(formData)
    }



    render() {



        return (
            <div>
                {this.state.isloading1 & this.state.isLoding2 ? (<p> loading </p>) : (

                    <form onSubmit={this.handleSubmit}>

                        <label> Name   <input type="text" value={this.state.name} onChange={this.handleNameChange.bind(this)}></input></label> <br />



                        isVeg

                    <Select value={this.state.isVeg} onChange={this.handleIsVegChange.bind(this)}
                            options={[{ value: true, label: "Veg" },
                            { value: false, label: "Non - Veg" }]}
                        />
                        cuisines

                            <Select value={this.state.cuisine} onChange={this.handleCuisineChange.bind(this)}
                            closeMenuOnSelect={false}
                            isMulti
                            options={this.state.cuisines.map(cuisine => {
                                return { value: cuisine._id, label: cuisine.name }
                            })}
                        />



                        <label> Location
                        <Input type="textarea" value={this.state.location} onChange={this.handleLocationChange.bind(this)}></Input></label> <br />



                        city

                        <Select value={this.state.city} onChange={this.handleCityChange.bind(this)}
                            options={this.state.cities.map(city => {
                                return { value: city._id, label: city.name }
                            })}
                        />



                        <input type="submit" />
                    </form>

                )
                }

            </div >
        )

    }
}
export default RestaurantForm