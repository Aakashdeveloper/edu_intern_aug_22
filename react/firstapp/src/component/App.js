import React,{Component} from 'react';
import Header from './Header';
import Footer from './Footer';
import JSON from './db.json';
import Product from './ProdDiaplay';

class App extends Component{
    constructor(){
        super()

        this.state={
            productData:JSON,
            filteredData:JSON
        }
    }

    filterData=(keyword)=> {
        let output = this.state.productData.filter((data) => {
            return (data.name.toLowerCase().indexOf(keyword.toLowerCase())>-1)
        })

        this.setState({filteredData:output})
    }

    render(){
       // console.log(this.state.productData)
        return(
            <React.Fragment>
                <Header userInput={(data) => {this.filterData(data)}}/>
                <Product prodData={this.state.filteredData}/>
                <Footer year="2023" month="Jan"/>
            </React.Fragment>
        )
    }
   
}

export default App;