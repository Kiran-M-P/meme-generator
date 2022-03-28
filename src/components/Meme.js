export default function Meme() {
  return (
    <main>
      <form className="meme-block" action="">
        <input type="text" className="input-1" placeholder="Top text" />
        <input type="text" className="input-2" placeholder="Bottom text" />
        <button type="submit" className="submit-btn">
          Get a new meme image
        </button>
      </form>
    </main>
  );
}
