import React, { useState } from "react";
import memesData from "../memesData";

export default function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/345v97.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;

    setMeme((prevState) => ({ ...prevState, randomImage: url }));
  }
  return (
    <main>
      <div className="meme-block" action="">
        <input type="text" className="input-1" placeholder="Top text" />
        <input type="text" className="input-2" placeholder="Bottom text" />
        <button onClick={getMemeImage} type="submit" className="submit-btn">
          Get a new meme image
        </button>
        <img className="meme-image" src={meme.randomImage} alt="meme" />
      </div>
    </main>
  );
}
