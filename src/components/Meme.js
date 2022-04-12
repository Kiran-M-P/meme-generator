import React from "react";
import memesData from "../memesData";

export default function Meme() {
  const [memeImage, setMemeImage] = React.useState("");

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url);
  }
  return (
    <main>
      <div className="meme-block" action="">
        <input type="text" className="input-1" placeholder="Top text" />
        <input type="text" className="input-2" placeholder="Bottom text" />
        <button onClick={getMemeImage} type="submit" className="submit-btn">
          Get a new meme image
        </button>
        <img className="meme-image" src={memeImage} alt="meme" />
      </div>
    </main>
  );
}
