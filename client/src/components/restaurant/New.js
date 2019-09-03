import React from 'react'
//import {Link} from 'react-router-dom'
import axios from 'axios'

import RestaurantForm from './Form'

class RestaurantNew extends React.Component {

    constructor(props) {
        super(props)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(formData) {
        axios.post('http://localhost:3005/restaurant', formData, {

        })
            .then(response => {
                console.log(response.data)
                if (response.data.hasOwnProperty('errors')) {
                    alert(response.data.message)
                } else {
                    const id = response.data._id
                    this.props.history.push(`/restaurants/${id}`)
                }
            })
            .catch(err => {
                alert(err)
            })
    }

    render() {
        return (
            <div>
                <h2> Restaurants Details </h2>
                <RestaurantForm handleSubmit={this.handleSubmit} />
            </div>
        )
    }
}


export default RestaurantNew


/*import React from 'react' 
import RestaurantForm from './Form'
//import axios from 'axios'
class RestaurantNew extends React.Component {
   render() {
        return (
            <div>
                <h2> Add Restaurant </h2> 
                <RestaurantForm/>
            </div> 
        )
    }
}

export default RestaurantNew*/
