import { Route, Routes } from 'react-router-dom';
import Chart from './pages/Chart';
import Home from './pages/Home';
import SearchProvider from './context/SearchContext';

const App = () => {
  return (
    <SearchProvider>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:id' element={<Chart />} />
      </Routes>
    </SearchProvider>
  )
}

export default App