import React from "react";

export default function Lesson6() {
    const [formData, setFormData] = React.useState({firstname: "", lastname: "", email: "", comments: "", isGood: true, employment: "", favColor: ""})
    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormData(prevData => {
            return {
                ...prevData,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }
    function handleSubmit(event) {
        event.preventDefault()
        console.log(formData)
    }
    return(
        <form className="p-5" onSubmit={handleSubmit}>
            <input type="text" placeholder="First Name" name="firstname" onChange={handleChange} value={formData.firstname}/>
            <input type="text" placeholder="Last Name" name="lastname" onChange={handleChange} value={formData.lastname}/>
            <input type="email" placeholder="Email" name="email" onChange={handleChange} value={formData.email}/>
            <textarea placeholder="Comments" name="comments" onChange={handleChange} value={formData.comments}/>
            <div className="d-flex">
                <input type="checkbox" name="isGood" id="isGood" className="box" checked={formData.isGood} onChange={handleChange}/>
                <label htmlFor="isGood">Are you good?</label>
            </div>
            <fieldset className="d-flex">
                <legend className="work-status">Current employment status</legend><br/>
                <input type="radio" name="employment" value="unemployed" id="unemployed" className="box" checked={formData.employment === "unemployed"} onChange={handleChange}/>
                <label htmlFor="unemployed">Unemployed</label>
                <input type="radio" name="employment" value="partTime" id="partTime" className="box" checked={formData.employment === "partTime"} onChange={handleChange}/>
                <label htmlFor="partTime">Part-time</label>
                <input type="radio" name="employment" value="fullTime" id="fullTime" className="box" checked={formData.employment === "fullTime"} onChange={handleChange}/>
                <label htmlFor="fullTime">Full-time</label>
            </fieldset>
            <label htmlFor="favColor">What is your favorite color?</label> <br/>
            <select name="favColor" id="favColor" value={formData.favColor} onChange={handleChange}>
                <option value="red">Red</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>  
                <option value="purple">Purple</option>
                <option value="orange">Orange</option>
            </select>
            <br/>
            <br/>
            <button>Submit</button>
        </form>
    )
}