import './App.css';
import { saveAs } from 'file-saver';
import { useState } from 'react';

const baseURL = 'https://api.memegen.link/images/';

export default function App() {
  // set state variables
  const [imageName, setImageName] = useState('');
  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');

  // meme template: clear by clicking on label/input AND fill by pressing Enter
  function clearTemplate(event) {
    event.currentTarget.value = '';
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      setImageName(event.currentTarget.value);
    }
  }

  // download image on button click

  function downloadMeme() {
    if (imageName && topText && bottomText) {
      saveAs(`${baseURL}${imageName}/${topText}/${bottomText}.jpg`, 'my-meme');
    }
  }

  // check the value of imageName variable
  // console.log('image name is ' + imageName);

  // rendered page
  return (
    <>
      <header>
        <h1>Create your own meme</h1>
        <ul>
          <li>Type a meme name into "Meme template" box and hit "Enter"</li>
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
              onChange={(event) => {
                setTopText(event.currentTarget.value);
              }}
            />
          </label>

          <label>
            Bottom text
            <input
              onChange={(event) => {
                setBottomText(event.currentTarget.value);
              }}
            />
          </label>

          <button onClick={downloadMeme}>Download</button>
        </div>
        <img
          alt="meme"
          data-test-id="meme-image"
          // eslint-disable-next-line react/jsx-curly-brace-presence
          src={
            imageName !== '' && topText === '' && bottomText === ''
              ? `${baseURL}${imageName}.jpg`
              : imageName !== '' && topText !== '' && bottomText === ''
              ? `${baseURL}${imageName}/${topText}.jpg`
              : imageName !== '' && topText !== '' && bottomText !== ''
              ? `${baseURL}${imageName}/${topText}/${bottomText}.jpg`
              : `${baseURL}preview.jpg`
          }
        />
        `
      </main>
    </>
  );
}
