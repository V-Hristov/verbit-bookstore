import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import Cart from './pages/Cart';
import UserProfile from './pages/UserProfile';
import Header from './components/Header';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/library" element={<BookList />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/profile" element={<UserProfile />} />
                </Routes>
            </main>
            <Footer />
        </div>
    )
}

export default App;
