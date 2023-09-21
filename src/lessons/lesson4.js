import React from "react";
import Star from "./star";

export default function Lesson4() {
    const [contact, setContact] = React.useState({
        firstname: "Ben",
        lastname: "Dover",
        phone: "+84 (82) 550-8616",
        email: "bendover@gmail.com",
        isFavorite: true
    })

    // let starIcon = contact.isFavorite ? "fa-solid fa-star fa-beat display-4" : "fa-regular fa-star fa-beat display-4"
    // if(contact.isFavorite === false) {
    //     starIcon = "fa-regular fa-star fa-beat display-4"
    // } else {
    //     starIcon = "fa-solid fa-star fa-beat display-4"
    // }
    // console.log(starIcon)

    function toggleFavorite() {
        setContact(prevState => {
            return {
                ...prevState,
                isFavorite: !prevState.isFavorite
            }
        })
    }
    return (
        <main>
            <article className="container text-center p-5">
                <img src="images/user.jpg" alt="" className="user-image"/>
                <div>
                    {/* <i className={starIcon} onClick={toggleFavorite}></i> */}
                    <Star isFilled={contact.isFavorite} handleClick={toggleFavorite}/>
                    <h2 className="mt-4 mb-3">{contact.firstname + " " + contact.lastname}</h2>
                    <p>{contact.phone}</p>
                    <p>{contact.email}</p>
                </div>
            </article>
        </main>
    )
}