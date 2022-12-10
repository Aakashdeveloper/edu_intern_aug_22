import React,{Component} from 'react';
import './Search.css';

// const lurl = "https://zomatoapi.onrender.com/location"
// const rurl = "https://zomatoapi.onrender.com/restaurant?stateId="

const lurl = "http://3.17.216.66:4000/location"
const rurl = "http://3.17.216.66:4000/restaurant?stateId="
class Search extends Component {

    constructor(props){
        super(props)

        this.state={
            location:'',
            restaurant:''
        }
    }

    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>
                        {item.restaurant_name} | {item.address}
                    </option>
                )
            })
        }
    }

    handleCity=(event)=>{
        let stateId = event.target.value;
        fetch(`${rurl}${stateId}`,{method:"GET"})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurant:data})
        })
    }

    render(){
        return(
            <>
                <div id="search">
                    <div id="logo">
                        <span>D!</span>
                    </div>
                    <div id="heading">
                        Find Best Place Near You
                    </div>
                    <div id="dropdown">
                        <select onChange={this.handleCity}>
                            <option>----SELECT YOUR CITY----</option>
                           {this.renderCity(this.state.location)}
                        </select>
                        <select id="restaurants">
                            <option>----SELECT YOUR RESTAURANTS----</option>
                            {this.renderRest(this.state.restaurant)}
                            
                        </select>
                    </div>
                </div>
            </>
        )
    }

    //api calling on page load
    componentDidMount(){
        fetch(lurl,{method:"GET"})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default Search;