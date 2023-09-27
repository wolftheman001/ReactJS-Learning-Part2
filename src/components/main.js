import React from "react";
// import memesData from "../data/memesData";

export default function Main(props) {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/4/58eyvu.jpg"
    })
    const [allMeme, setallMeme] = React.useState([])

    // const [memeImage, setImage] = React.useState("https://i.imgflip.com/7vyxoq.jpg")
    function getMemeImage() {
        // const memesArray = allMeme
        const randomNumber = Math.floor(Math.random() * allMeme.length)
        const url = allMeme[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }
    
    // function getRandomLink() {
    //     let random = memesData.data.memes[Math.floor(Math.random() * memesData.data.memes.length)]
    //     let randomUrl = random.url
    //     console.log(randomUrl)
    // }

    function handleChange(event) {
        const {name, value} = event.target
        setMeme(prevMeme => {
            return {
                ...prevMeme,   
                [name]: value
            }
        })
    }

    React.useEffect(function() {
        fetch(`https://api.imgflip.com/get_memes`).then(res => res.json()).then(dataMeme => setallMeme(dataMeme.data.memes))
        // async function getMemes() {
        //     const res = await fetch(`https://api.imgflip.com/get_memes`)
        //     const dataMeme = await res.json()
        //     setallMeme(dataMeme.data.memes)
        // }
        // getMemes()
    }, [])

    // console.log(meme.topText)
    // console.log(meme.bottomText)
    return (
        <main className={props.dark ? "dark p-5" : "p-5"}>
            <div className="form container">
                <input type="text" name="topText" className={props.dark ? "dark border-input w-100" : "border-input w-100"} placeholder="First text" onChange={handleChange} value={meme.topText}/>
                <input type="text" name="bottomText" className={props.dark ? "dark border-input w-100" : "border-input w-100"} placeholder="Second text" onChange={handleChange} value={meme.bottomText}/>
                <button onClick={getMemeImage} className="button">Get a new meme image</button>
            </div>
            <div className="meme mt-5">
                <img src={meme.randomImage} alt="" className="w-100 meme-img"/>
                <h2 className="meme-text-top">{meme.topText}</h2>
                <h2 className="meme-text-bottom">{meme.bottomText}</h2>
            </div>
        </main>
    ) 
}

/* 
useEffect takes a function as its parameter. If that function returns something, it needs to be a cleanup function. Otherwise it would return nothing. If we make an async function, it automatically returns a promise instead of a funciton or nothing. Therefore, if you want to use the async operation inside of useEffect, you need to define the function separately inside of the callback function
*/

/* 
Quick recap:
- Event listeners
- State
- Conditional rendering
- Forms
- Side effects
*/