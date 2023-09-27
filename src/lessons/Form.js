import React from "react";

export default function Form() {
    const [signupData, setData] = React.useState({email: "", password: "", confirmPassword: "", isJoined: false})
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })

    }
    // console.log(signupData.email)
    // console.log("Password", signupData.password)
    // console.log("Confirm password", signupData.confirmPassword)

    function handleSubmit(event) {
        if(signupData.password === signupData.confirmPassword) {
            console.log("Successfully signed up")
            if(signupData.isJoined === true) {
                console.log("Thanks for signing up our newsletter")
            }
        } else {
            console.log("Password mismatched")
        }
        // {signupData.password !== signupData.confirmPassword ? console.log("Password mismatched") : console.log(signupData)}
        event.preventDefault()
    }
    return (
        <div className="container p-5">
            <form onSubmit={handleSubmit}>
                <input type="email" name="email" placeholder="Email address" className="w-100" onChange={handleChange} vlaue={signupData.email}/>
                <input type="password" name="password" id="password" placeholder="Password" className="w-100" onChange={handleChange} vlaue={signupData.password}/>
                <input type="password" name="confirmPassword" placeholder="Confirm Password" className="w-100" onChange={handleChange} vlaue={signupData.confirmPassword}/>
                <div className="d-flex">
                    <input type="checkbox" name="isJoined" id="isJoined" className="box mr-1" checked={signupData.isJoined} onChange={handleChange}/>
                    <label htmlFor="isJoined">I want to join the newsletter</label>
                </div>
                <button className="w-100">Sign up</button>
            </form>
        </div>
    )
}