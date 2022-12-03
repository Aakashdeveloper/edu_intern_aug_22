import React from 'react';
import {Link} from 'react-router-dom';

const QuickDisplay = (props) => {

    const listMeal  = ({mealData}) => {
        if(mealData){
            return mealData.map((item) => {
                return(
                    <Link to={`/listing/${item.mealtype_id}`}>
                        <div className="tileContainer" key={item.mealtype_id}>
                            <div className="tileComponent1">
                                <img src={item.meal_image} alt="dinner"/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    <a href="../listing/listing.html">{item.mealtype}</a>
                                </div>
                                <div className="componentSubHeading">
                                    {item.content}
                                </div>
                            </div>
                        </div>
                    </Link>
                )
            })
        }
    }


    return(
        <div id="main">
            {listMeal(props)}
                
        </div>
        
    )
}

export default QuickDisplay;