import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Navbar from './components/Navbar';
import About from './components/About';
import NewBlog from './components/NewBlog';
import NotFound from './components/NotFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route exact path='/' Component={Home} />

            <Route path='/NewBlog' Component={NewBlog} />

            <Route path='/About' Component={About} />

            <Route path='*' Component={NotFound} />
          </Routes>
        </div>
      </div>
    </Router>

  );
}

export default App;
