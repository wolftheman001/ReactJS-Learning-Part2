import React from "react";
import memesData from "../data/memesData";

export default function Main() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "https://i.imgflip.com/7vyxoq.jpg"
    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    // const [memeImage, setImage] = React.useState("https://i.imgflip.com/7vyxoq.jpg")

    function getMemeImage() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const url = memesArray[randomNumber].url
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
    return (
        <div className="container p-5">
            <div className="form">
                <input type="text" name="sentence" className="border-input" placeholder="First text"/>
                <input type="text" name="sentence" className="border-input" placeholder="Second text"/>
                <button onClick={getMemeImage} className="button">Get a new meme image</button>
            </div>
            <img src={meme.randomImage} alt="" className="mt-5 w-100 meme-img"></img>
        </div>
    ) 
}