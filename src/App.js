import React from 'react'
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom'

import RestaurantList from './components/restaurant/List'
import RestaurantNew from './components/restaurant/New'
import RestaurantShow from './components/restaurant/Show'

class App extends React.Component{
    render(){
        return(
            <BrowserRouter>
             <div>
                <h2>Welcome to Swiggy</h2>
                <ul>
                    <li><Link to='/restaurants'>Restaurant</Link></li>
                </ul>

                <Switch>
                    <Route path='/restaurants' component={RestaurantList} exact={true}/>
                    <Route path='/restaurants/new'component={RestaurantNew} exact={true}/>
                    <Route path='/restaurants/:id'component={RestaurantShow} />
                </Switch>
            </div>
            </BrowserRouter>
          
        )
    }
}
export default App