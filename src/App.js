import './App.css';
import { useState } from 'react';

export default function App() {
  const [imageName, setImageName] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  function clearTemplate(event) {
    event.currentTarget.value = '';
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setImageName(event.currentTarget.value);
    }
  }

  console.log('image name is ' + imageName);
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
            <input onClick={clearTemplate} onKeyDown={handleKeyDown} />
          </label>

          <label>
            Top text
            <input
              onChange={(event) => setTopText(event.currentTarget.value)}
            />
          </label>

          <label>
            Bottom text
            <input
              onChange={(event) => setBottomText(event.currentTarget.value)}
            />
          </label>

          <button>Download</button>
        </div>
        <img
          alt="meme"
          data-test-id="meme-image"
          // eslint-disable-next-line react/jsx-curly-brace-presence
          src={
            imageName !== ''
              ? `https://api.memegen.link/images/${imageName}.jpg`
              : `https://api.memegen.link/images/preview.jpg`
          }
        />
        `
      </main>
    </>
  );
}
