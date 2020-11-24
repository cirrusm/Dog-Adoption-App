import './index.css';
import routes from './routes/routes'
import NavBar from './components/NavBar'

function App() {
  return (
    <div className="App">
    <NavBar />
     { routes }
    </div>
  );
}

export default App;
