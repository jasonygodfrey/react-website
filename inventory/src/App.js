import logo from './logo.svg';
import './App.css';
import ReactPlayer from 'react-player';

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
      <ReactPlayer url='https://www.twitch.tv/xrecursionx' width='1280px' height='720px' />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          welcome to my website 

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          external link
        </a>
      </header>
    </div>
  );
}

export default App;
