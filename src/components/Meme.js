import memesData from "../memesData";

export default function Meme() {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    console.log(url);
  }
  return (
    <main>
      <div className="meme-block" action="">
        <input type="text" className="input-1" placeholder="Top text" />
        <input type="text" className="input-2" placeholder="Bottom text" />
        <button onClick={getMemeImage} type="submit" className="submit-btn">
          Get a new meme image
        </button>
      </div>
    </main>
  );
}
