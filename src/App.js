import './App.css';

export default function App() {
  return (
    <>
      <header>
        <h1>Create your own meme</h1>
        <ul>
          <li>Type a meme name into "Meme template" box</li>
          <li>Check out the image in the preview</li>
          <li>
            Type in your own phrase using "Top text" and "Bottom text" boxes
          </li>
          <li>Download the finished image</li>
        </ul>
      </header>

      <main>
        <div className="user-input">
          <label>
            Meme template
            <input />
          </label>

          <label>
            Top text
            <input />
          </label>

          <label>
            Bottom text
            <input />
          </label>

          <button>Download</button>
        </div>

        <img
          src="https://api.memegen.link/images/buzz/memes/memes_everywhere.jpg?height=400&width=400"
          alt="preview"
          data-test-id="meme-image"
        />
      </main>
    </>
  );
}
