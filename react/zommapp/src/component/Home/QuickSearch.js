import React,{Component} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay'

//const qurl = "https://zomatoapi.onrender.com/quicksearch"
const qurl = "http://3.17.216.66:4000/quicksearch"
class QuickSearch extends Component {

    constructor(){
        super()

        this.state={
            mealType:''
        }
    }

    render(){
        return(
            <>
            <div id="quickSearch">
                <span id="quickHeading">Quick Search</span>
                <span id="quickSubHeading">Find Restaurants By MealType</span>
                <QuickDisplay mealData={this.state.mealType}/>
            </div>
            </>
        )
    }

    // 
    componentDidMount(){
        fetch(qurl,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({mealType:data})
        })
    }
}

export default QuickSearch;