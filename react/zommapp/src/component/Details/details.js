import React,{Component} from 'react';
import axios from 'axios';
import './details.css';

class Details extends Component {
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
                    <h1>Details</h1>
                </div>
            </>
        )
    }

    //api with axios 
    componentDidMount(){
       
    }
}

export default Details;