import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Home from './components/Home';
import { Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import FavList from './components/FavList';

function App() {
  return (
    <>
      <Navbar />
      <Container className="my-4">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/favlist' element={<FavList />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
