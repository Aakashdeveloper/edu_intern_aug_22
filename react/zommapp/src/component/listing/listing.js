import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';

//const lurl = "https://zomatoapi.onrender.com/restaurant?mealtype_id="
const lurl = "http://localhost:9700/restaurant?mealtype_id="

class Listing extends Component {
    constructor(props){
        super(props)

        this.state={
            restaurantList:''
        }
    }

    render(){
        return(
            <>
                <div className="row">
                    <div id="mainListing">
                        <div id="filter">

                        </div>
                        <ListingDisplay listData={this.state.restaurantList}/>
                    </div>
                </div>
            </>
        )
    }

    //api with axios 
    componentDidMount(){
        let mealId = this.props.match.params.mealId;
        sessionStorage.setItem('mealId',mealId)
        axios.get(`${lurl}${mealId}`)
        .then((res) => {this.setState({restaurantList:res.data})})
    }
}

export default Listing;