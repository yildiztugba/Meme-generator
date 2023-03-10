import React from "react"

export default function Meme(){
    const [allMeme,setAllMeme] = React.useState([])
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then((res)=>res.json())
        .then((data)=>setAllMeme(data.data.memes))
    },[])
    
    const [memeData, setMemeData] = React.useState(
        {
            "topText":"",
            "bottomText":"",
            "url":"https://i.imgflip.com/44eggm.png"
        }
    )

        function  handleChange(event){
            setMemeData(prevMemeData=>({
                ...prevMemeData,
                [event.target.name]: event.target.value
            }))
            console.log(memeData)
        }

        function getMemeImage(){
           const randomNumber = Math.floor(Math.random()* allMeme.length)
           const randomImage = allMeme[randomNumber].url

            setMemeData(prevMeme=>({
                ...prevMeme,
                ["url"]: randomImage
            }))
            console.log(memeData)
        }

    return(
        <div className="form">
        <input
            type="text"
            placeholder="Top text"
            className="form--input"
            name="topText"
            value={memeData.topText}
            onChange={handleChange}
        />
        <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
            name="bottomText"
            value={memeData.bottomText}
            onChange={handleChange}
        />
        <button
        className="form--button"
        onClick={getMemeImage}
        >
            Get a new meme image
        </button>
        <div className="meme">
            <h1 className="meme--text top">{memeData.topText}</h1>
            <img 
                src= {memeData.url}
                alt="randomImage"
                className="meme--image"
            />
            <h1 className="meme--text bottom">{memeData.bottomText}</h1>
        </div>
        
        </div>
    )
}