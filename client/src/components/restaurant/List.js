import React from 'react'
import axios from 'axios'
import{Link} from 'react-router-dom'

class RestaurantList extends React.Component{
    constructor(props){
        super(props)
        this.state={
            restaurants:[]
        }
    }

    componentDidMount(){
        axios.get('http://localhost:3005/restaurant')
              .then(response =>{
                  const restaurants=response.data
                  this.setState(() =>({restaurants}))
              })
              .catch(err =>{
                  alert(err)
              })
    }
    render(){
        return(
            <div>
                <h2>Listing Restaurants</h2>
                <ul>
                    {this.state.restaurants.map(restaurant =>{
                        return <li key={restaurant._id}><Link to= {`/restaurants/${restaurant._id}`}>{restaurant.name}</Link></li>
                    })}
                </ul>

                <Link to="/restaurants/new">Add Restaurant</Link>
            </div>
        )
    }
}
export default RestaurantList