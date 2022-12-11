import React,{Component} from 'react';
import Header from '../Header';

const url = "http://localhost:5100/api/auth/register";

class Register extends Component{

    constructor(){
        super()

        this.state={
            name:"Nikita",
            email:"nikki@gmail.com",
            password:'12345678',
            phone:79878879
        }
    }

    handleChange=(event) => {
        this.setState({[event.target.name]:event.target.value})
    }

    handleSubmit = () => {
        fetch(url,{
            method: 'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(this.state)
        })
        .then(this.props.history.push('/'))
    }

    render(){
        return(
            <>
            <Header/>
                <div className="container">
                    <div className="panel panel-danger">
                        <div className="panel-heading">
                            <h3>Register</h3>
                        </div>
                        <div className="panel-body">
                            <div className="row">
                                <div class="form-group col-md-6">
                                    <label for="firstname">FirstName</label>
                                    <input type="text" name="name" class="form-control"
                                    value={this.state.name} onChange={this.handleChange}  />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="email">Email</label>
                                    <input type="text" name="email" class="form-control"
                                    value={this.state.email} onChange={this.handleChange}  />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="password">Password</label>
                                    <input type="text" name="password" class="form-control"
                                    value={this.state.password} onChange={this.handleChange}  />
                                </div>
                                <div class="form-group col-md-6">
                                    <label for="phone">Phone</label>
                                    <input type="text" name="phone" class="form-control"
                                    value={this.state.phone} onChange={this.handleChange}  />
                                </div>
                            </div>
                            <button className="btn btn-success" onClick={this.handleSubmit}>
                                Register
                            </button>

                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Register