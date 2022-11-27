import React,{Component} from 'react';
import './QuickSearch.css';

class QuickSearch extends Component {
    render(){
        return(
           <>
           <div id="quickSearch">
            <span id="quickHeading">Quick Search</span>
            <span id="quickSubHeading">Find Restaurants By MealType</span>
            <div id="main">
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="images/dinner.png" alt="dinner"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            <a href="../listing/listing.html">Dinner</a>
                        </div>
                        <div class="componentSubHeading">
                            Best Place For Dinner Near You
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="https://i.ibb.co/8rPxkWP/lunch.jpg" alt="dinner"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            <a href="../listing/listing.html">Lunch</a>
                        </div>
                        <div class="componentSubHeading">
                            Best Place For Dinner Near You
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="https://i.ibb.co/q1fC2jW/nightlife.jpg" alt="dinner"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            <a href="../listing/listing.html">NightLife</a>
                        </div>
                        <div class="componentSubHeading">
                            Best Place For Dinner Near You
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="https://i.ibb.co/wchCHfb/snacks.jpg" alt="dinner"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            <a href="../listing/listing.html">Snacks</a>
                        </div>
                        <div class="componentSubHeading">
                            Best Place For Dinner Near You
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="https://i.ibb.co/YR0S6fV/drinks.jpg" alt="dinner"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            <a href="../listing/listing.html">Drinks</a>
                        </div>
                        <div class="componentSubHeading">
                            Best Place For Dinner Near You
                        </div>
                    </div>
                </div>
                <div class="tileContainer">
                    <div class="tileComponent1">
                        <img src="https://i.ibb.co/FVhSTWK/breakfast.jpg" alt="dinner"/>
                    </div>
                    <div class="tileComponent2">
                        <div class="componentHeading">
                            <a href="../listing/listing.html">BreakFast</a>
                        </div>
                        <div class="componentSubHeading">
                            Best Place For Dinner Near You
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </>
        )
    }
}

export default QuickSearch;