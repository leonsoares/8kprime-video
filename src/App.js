// import logo from './logo.svg';
import './App.css';
import Row from './Row'
import requests from './requests'




function App() {
  return (
    <div className="App">
      <h1>8kprime video</h1>
      < Row title="NETFLIX ORIGINALS"  fetchUrl={requests.fetchNetFlixOriginals}/>
      < Row title="Trending Now" fetchUrl={requests.fetchTrending}/>
      
    </div>
  );
}

export default App;
