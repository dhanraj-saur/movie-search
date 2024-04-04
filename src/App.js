import logo from './logo.svg';
import './App.css';
import MovieList from './Components/MovieList';
import GenreList from './Components/GenreList';

function App() {
  return (
    <div className="App">
      <GenreList/>
      <MovieList/>
    </div>
  );
}

export default App;
