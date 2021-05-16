import React,{Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import axios from 'axios';


class App extends Component{

    constructor(){

        super()
        this.state={
            fullName:'',
            userName:'',
            email:'',
            password:''

        }

        this.changeFullname = this.changeFullname.bind(this);
        this.changeUserName = this.changeUserName.bind(this);
        this.changeEmail=this.changeEmail.bind(this);
        this.changePassword=this.changePassword.bind(this);
        this.onSubmit=this.onSubmit.bind(this);



    }

    changeFullname(event){
        this.setState({
            fullName:event.target.value
        })
    }

    changeUserName(event){
        this.setState({
            userName:event.target.value
        })
    }

    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    onSubmit(event){
        event.preventDefault();
        const registered ={
            fullName: this.state.fullName,
            userName:this.state.userName,
            email:this.state.email,
            password:this.state.password
        }

        axios.post('http://localhost:4000/app/signup',registered)
        .then(response => console.log(response.data));


        this.setState(

            {
                fullName:'',
                userName:'',
                email:'',
                password:''

            }
        )
    }
    
   

    render (){



        return(

        <div>

            <div className="container">

                <div className="form-div">
                    <form onSubmit={this.onSubmit}>
                        <input type="text"
                        
                        onChange = {this.changeFullname}
                        value ={this.state.fullName}
                        className= 'form-control form-group'
                        />

                        <input type="text"
                        
                        onChange = {this.changeUserName}
                        value ={this.state.userName}
                        className= 'form-control form-group'
                        />

                        <input type="text"
                        
                        onChange = {this.changeEmail}
                        value ={this.state.email}
                        className= 'form-control form-group'
                        />

                        <input type="password"
                        
                        onChange={this.changePassword}
                        value ={this.state.password}
                        className= 'form-control form-group'

                        />

                        <input type="submit" className="btn btn-danger btn-block" value="submit" />


                    </form>

                </div>

            </div>



        </div>

        );

    }

}

export default App;