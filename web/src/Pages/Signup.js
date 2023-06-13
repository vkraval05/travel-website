import React, { useState } from 'react';
import '../App.css'
import { useDispatch, useSelector } from 'react-redux';
import { login, signup } from '../authUser/userSlice';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [click, setClick] = useState("login");

    const history = useNavigate();

    const dispatch = useDispatch();

    const { user } = useSelector((state) => state.user);
    const logind = (e) => {
        e.preventDefault();
        if(user){
        if (user.email === email) {
            if (user.password === password) {
                history('/');
                dispatch(login({
                    email, password,
                    logIn: 'true'
                }))
            } else {
                alert("Incorrect password");
            }
        } else {
            alert("Email Not Registered");
            setClick("signUp");
        }}else{
            alert("SignUp First")
        }

    }

    const signUp = (e) => {
        e.preventDefault();
        if (name === '' || email === "" || password === "") {
            alert("all field required");
        }
        dispatch(signup({
            name: name, email: email, password: password, signIn: 'true',
        }));
        setClick('login')
        setName("")
        setEmail("")
        setPassword("")
    }


    return (<>
        <div className="sign-up">
            <div>
                <span onClick={() => setClick('login')} >LOGIN</span>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;<span onClick={() => setClick('signUp')}>SIGN UP</span>
            </div>


            <form onSubmit={click === 'login' ? logind : signUp}>
                <div className="form-group">
                    {click === 'signUp' && <input type="text" autoComplete='off' className="form-control" value={name} onChange={(e) => { setName(e.target.value) }} name='name' id="name" placeholder="Enter Name" />}
                    <input type="email" className="form-control" autoComplete='off' value={email} onChange={(e) => { setEmail(e.target.value) }} name='email' id="email" placeholder="Enter email" />
                    <input type="password" className="form-control" value={password} onChange={(e) => { setPassword(e.target.value) }} name='password' id="password" placeholder="Enter Password" />
                    {click === 'login' && <button type="submit" className="form-control">LOGIN</button>}
                    {click === 'signUp' && <button type="submit" className="form-control">SIGN UP</button>}
                </div>
            </form>
        </div>
    </>)
}


export default Signup
