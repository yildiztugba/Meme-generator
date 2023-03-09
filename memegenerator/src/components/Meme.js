import React from "react"

export default function Meme(){
    const [allMeme,setAllMeme] = React.useState([])
    React.useEffect(()=>{
        fetch("https://api.imgflip.com/get_memes")
        .then((res)=>res.json())
        .then((data)=>setAllMeme(data.data.memes))
    },[])
    console.log(allMeme)
    return(
        <div className="form">
        <input
            type="text"
            placeholder="Top text"
            className="form--input"
        />
        <input
            type="text"
            placeholder="Bottom text"
            className="form--input"
        />
        <button
        className="form--button"
        >
            Get a new meme image
        </button>
        
        </div>
    )
}