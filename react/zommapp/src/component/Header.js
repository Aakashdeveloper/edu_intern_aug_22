import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import './Header.css';

const url = "http://localhost:5100/api/auth/userinfo";

class Header extends Component {

    constructor(){
        super()

        this.state={
            userData:''
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('ltk')
        this.setState({userData:''})
        this.props.history.push('/')
    }

    conditionalHeader = () => {
        if(this.state.userData.name){
            let data = this.state.userData;
            let outArray = [data.name,data.email,data.phone];
            sessionStorage.setItem('userInfo',outArray)
            return(
                <div id="social">
                    <Link to="/" className="btn btn-success">
                        <span className="glyphicon glyphicon-user"></span> Hi {data.name}
                    </Link> &nbsp;
                    <button onClick={this.handleLogout} className="btn btn-danger">
                        <span className="glyphicon glyphicon-log-out"></span> Logout
                    </button>
                </div>
            )
           

        }else{
            return(
                <div id="social">
                    <Link to="/login" className="btn btn-success">
                        <span className="glyphicon glyphicon-log-in"></span> Login
                    </Link> &nbsp;
                    <Link to="/register" className="btn btn-danger">
                        <span className="glyphicon glyphicon-user"></span> Register
                    </Link>
                </div>
            )
        }
        
    }

    render(){
        return(
            <React.Fragment>
                <header>
                    <div id="brand">
                        Developer Funnel &nbsp;
                        <Link className="btn btn-success" to="/">Home</Link>
                    </div>
                    {this.conditionalHeader()}
                    </header> 
            </React.Fragment>
        )
    }


    componentDidMount(){
        fetch(url,{
            method: 'GET',
            headers:{
                'x-access-token':sessionStorage.getItem('ltk'),
            }
        })
        .then((res) => res.json())
        .then((data) => {
            this.setState({
                userData:data
            })
        })
    }
    
}

export default withRouter(Header);