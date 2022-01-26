import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import { Link } from 'react-router-dom';
// pages
import Category from './pages/Category';
import Homepage from './pages/Homepage'
import ReviewDetails from './pages/ReviewDetails'
// components
import Header from './components/Header'


function App() {
  return (
    <div className="App">
      <Header/>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/category/:id" element={<Category />} />
        <Route path="/details/:id" element={<ReviewDetails />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
