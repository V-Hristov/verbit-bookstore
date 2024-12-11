import React, { Suspense } from 'react';
import { Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import BookList from './pages/BookList';
import Cart from './pages/Cart';
import UserProfile from './pages/UserProfile';
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/app.scss';
import BookComponent from './pages/Book';
import {useTranslation} from "react-i18next";

const App = () => {
    const { t } = useTranslation();
    return (
        <div className="app">
                    <Header />
                        <main>
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/library" element={<BookList />} />
                                <Route path="/book" element={<BookComponent />} />
                                <Route path="/cart" element={<Cart />} />
                                <Route path="/profile" element={<UserProfile />} />
                            </Routes>
                        </main>
                    <Footer />
        </div>
    )
}

export default App;