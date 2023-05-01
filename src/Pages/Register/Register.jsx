import React, { useState } from 'react';

const Register = () => {

    const [accepted, setAccepted] = useState(false);

    const handleSubmitForm = (event) => {
        
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password);

    }

    const handleCheckBox = (event) => {
        setAccepted(event.target.checked);
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

                <div className="form-group form-check">
                    <input type="checkbox" onClick={handleCheckBox} className="form-check-input" id="exampleCheck1"/>
                        <label className="form-check-label">Check me out</label>
                </div>

                <button type="submit" disabled = {!accepted} className="btn btn-primary">Submit</button>

            </form>

        </div>
    );
};

export default Register;