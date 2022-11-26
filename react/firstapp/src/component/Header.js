import React,{Component,Fragment} from 'react';
import './Header.css';

class Header extends Component{

    constructor(){
        super()

        this.state={
            title: 'React App',
            keyword:'User Input Here'
        }

    }

    handleChange = (event) => {
        //console.log(event.target.value);
        this.setState({keyword:event.target.value?event.target.value:'User Input Here'})
        this.props.userInput(event.target.value)
    }

    render(){
        console.log("Inside Render")
        return(
            <Fragment>
                <header>
                    <div className="logo">{this.state.title}</div>
                    <input onChange={this.handleChange}/>
                    <div style={{color:'white',fontSize:'20px'}}>{this.state.keyword}</div>
                </header>
            </Fragment>
        )
    }
}

export default Header;