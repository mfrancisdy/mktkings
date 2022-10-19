import NavPath from "./components/navpath";
import './assets/scss/main.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import SEO from './SEO/Header'

function App() {
  return (
    <div className="App">
      <SEO />
      <NavPath />
    </div>
  );
}

export default App;
