import logo from './logo.svg';
import './App.css';
import Accordian from './Components';
import RandomColor from './Components/random-color';
import StarRating from './Components/star-rating';

function App() {
  return (
    <div className="App">
      {/*<Accordian/>*/}
      <RandomColor/>
      <StarRating noOfStar={10}/>
    </div>
  );
}

export default App;
