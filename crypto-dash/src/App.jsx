import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router';
import Header from './components/Header';
import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFoundPage from './pages/not-found';

const API_URL = import.meta.env.VITE_API_URL;

const App = () => {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [limit, setLimit] = useState(10);
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('market_cap_desc');

  useEffect(() => {
    const fetchCoins = async () => {
      try {
        const res = await fetch(
          `${API_URL}&order=market_cap_desc&per_page=${limit}&page=1&sparkline=false`,
        );
        if (!res.ok) throw new Error('Failed to fetch data');
        const data = await res.json();
        setCoins(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCoins();
    // fetch(API_URL)
    //   .then((res) => {
    //     if (!res.ok) throw new Error('Failed to fetch data');
    //     return res.json();
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     setCoins(data);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setError(err.message);
    //     setLoading(false);
    //   });
  }, [limit]);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <HomePage
              coins={coins}
              loading={loading}
              error={error}
              limit={limit}
              filter={filter}
              sortBy={sortBy}
              setLimit={setLimit}
              setFilter={setFilter}
              setSortBy={setSortBy}
            />
          }
        />
        <Route path='/about' element={<AboutPage />} />
        {/* always put asterisk at bottom for pages that dont exist */}
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
