import React from 'react'

export default class Login extends React.Component{
    state={

        loading: true,
        person:null
    };
   async componentDidMount(){
        const url="https://reqres.in/api/users/2";
        const response =await fetch(url);
        const data =await response.json();
        this.setState({person:data.data,loading:false});
        console.log(data);

    }
    submitHandler=()=>{
        const email=document.getElementById("username").value;
        const pass=document.getElementById("password").value;
        if (email===this.state.person.email && pass===this.state.person.first_name) {
            alert("Login Succesfull");
        }
        else{
            alert("Login Failed");
        }
    }

    render(){
    return (
        <form onSubmit={this.submitHandler}>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

            <div id="login-box">

                <div class="left-box">
                    <h1>Login</h1>
                    <p>Sign in to your account</p>


                    <div class="input-container">
                        <i class="fa fa-user icon"></i>
                        <input class="input-field" type="text" placeholder="Username" name="usrnm" id="username" />
                    </div>


                    <div class="input-container">
                        <i class="fa fa-key icon"></i>
                        <input class="input-field" type="password" placeholder="Password" name="psw" id="password" />
                    </div>

                    <input type="submit" name="login-button" value="Login" />
                    <p><a href="void"> Forgot password?</a></p>

                </div>
                <div class="right-box">
                    <span class="signinwith">Sign up</span>
                    <p>New to website dont worry we got you cover
                        Just Provide us basic information and Sign up
          </p><br /><br />
                    <input type="submit" name="login-button" value="Register Now!"/>
                </div>
            </div>
        </form>

    )
}
}

