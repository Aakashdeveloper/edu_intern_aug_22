import React,{Component} from 'react';
import './Search.css';

class Search extends Component {
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
                        <select>
                            <option>----SELECT YOUR CITY----</option>
                            <option>Delhi</option>
                            <option>Mumbai</option>
                        </select>
                        <select id="restaurants">
                            <option>----SELECT YOUR RESTAURANTS----</option>
                            <option>Wow Momos</option>
                            <option>Park Blue</option>
                        </select>
                    </div>
                </div>
            </>
        )
    }
}

export default Search;