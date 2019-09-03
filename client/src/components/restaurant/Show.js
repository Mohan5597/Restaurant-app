/*import React from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

class RestaurantShow extends React.Component{
    constructor(props){
        super(props)
        this.state={
            restaurant:{},
            
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`http://localhost:3005/restaurant/${id}`)
             .then(response =>{
                 console.log(response.data)
                 const restaurant=response.data
                 this.setState(() =>({restaurant}))
             })
    }
    render(){
        return(
            <div>
                <h2>Name:{this.state.restaurant.name}</h2>
                     
                
                <h3>location:{this.state.restaurant.location}</h3>
                <Link to='/restaurants'>back</Link>
            </div>
        )
    }
}
export default RestaurantShow */

import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'

class RestaurantShow extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            restaurant: {},
            cuisines: ""
        }

    }

    componentDidMount() {
        const id = this.props.match.params.id
        axios.get(`http://localhost:3005/restaurant/${id}`)
            .then(response => {

                console.log(response.data)

                const restaurant = response.data

                var cuisines = restaurant.cuisines[0].name

                for (let i = 1; i < restaurant.cuisines.length; i++) {
                    cuisines = cuisines + ',' + restaurant.cuisines[i].name
                }

                this.setState(() => ({ restaurant, cuisines }))

            })

    }


    handleRemove = () => {
        const confirm = window.confirm("Are you sure?")
        if (confirm) {
            const id = this.props.match.params.id

            axios.delete(`http://localhost:3005/restaurant/${id}`
            ).then(response => {
                console.log("restaurant")
                this.props.history.push("/retsurants")

            })
        }
    }

    render() {
        return (
            <div>
                <h2> Restaurant Details</h2>


                {Object.keys(this.state.restaurant).length !== 0 &&
                    <Table>
                        <tbody>
                            <tr><th>Name</th><td>{this.state.restaurant.name}</td></tr>
                            <tr><th>isVeg</th><td>{this.state.restaurant.isVeg ? ("Yes") : ("NO")}</td></tr>
                            <tr><th>Location</th><td>{this.state.restaurant.location}</td></tr>
                            <tr><th>City</th><td>{this.state.restaurant.city.name}</td></tr>
                            <tr><th>Cuisines</th><td>{this.state.cuisines}</td></tr>
                            <tr><td><button onClick={this.handleRemove}> remove</button></td><td><Link to='/restaurants'>back</Link></td></tr>
                        </tbody>
                    </Table>
                }


            </div>
        )

    }
}

export default RestaurantShow
