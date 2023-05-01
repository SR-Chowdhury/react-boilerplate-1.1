import React from 'react';

const Login = () => {

    const handleSubmitForm = (event) => {
        
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

    }



    return (
        <div className='container'>

            <form onSubmit={handleSubmitForm} className='mt-5'>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" name='email' className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" name='password' className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                </div>

                <button type="submit" className="btn btn-primary">Submit</button>

            </form>

        </div>
    );
};

export default Login;