import React from "react"

export default function Meme(){
    return(
        <div>
        <input
            type="text"
            placeholder="Top text"
        
        />
         <input
            type="text"
            placeholder="Bottom text"
        
        />
       <button>
           Get a new meme image
       </button>
        
        </div>
    )
}