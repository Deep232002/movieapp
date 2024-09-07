import Header from './component/section/header';
import Footer from './component/section/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Movie from './component/pages/movie';
// import Tv from './component/pages/tv';
import Home from './component/pages/home';
import Searchpage from './component/pages/Searchpage';
import Mobilesize from './component/content/Mobilesize';
import axios from 'axios';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setBannerData, setImageUrl } from './store/movieSlice';
import './App.css'
import Detailpage from './component/pages/Detailpage';

function App() {
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      const [configRes, trendingRes] = await Promise.all([
        axios.get('/configuration'),
        axios.get('/trending/movie/week')
      ]);

      dispatch(setImageUrl(configRes.data.images.secure_base_url + 'original'));
      dispatch(setBannerData(trendingRes.data.results));
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <Router>
        <Header />
         
        <Routes>
          <Route path="/:movie" element={<Movie />} />
          <Route path="/:movie/:id" element={<Detailpage />} />
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Searchpage />} />
        </Routes>
         
        <Footer />
        <Mobilesize />
      </Router>
    </>
  );
}

export default App;