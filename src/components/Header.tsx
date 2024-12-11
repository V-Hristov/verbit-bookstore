import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
const logoUrl = 'https://verbit.ai/wp-content/uploads/2024/03/Verbit-logo-redesign.svg';
import '../styles/header.scss';
import { FaUser, FaShoppingCart } from 'react-icons/fa';
import Select from 'react-select';
import {Book} from '../store/bookSlice';
import {BookType} from '../pages/Book';
import {bookSearchFilter} from '../helpers/filters';
import {useDispatch} from 'react-redux';
import { setBook } from '../store/bookSlice';
import { useNavigate } from 'react-router-dom';


const Header = () => {
    const [libraryBooks, setLibraryBooks] = useState<BookType[]>([]);
    const [load, setLoad] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        setLoad(true);
        setTimeout(() => {
            const mockData: Book[] = [
                {
                    id: 1,
                    title: 'React for Beginners',
                    author: 'John Doe',
                    price: 19.99,
                    stock: 5,
                },
                {
                    id: 2,
                    title: 'Advanced JavaScript',
                    author: 'Jane Smith',
                    price: 29.99,
                    stock: 3,
                },
                {
                    id: 3,
                    title: 'Understanding TypeScript',
                    author: 'Michael Brown',
                    price: 24.99,
                    stock: 7,
                },
                {
                    id: 4,
                    title: 'Mastering Node.js',
                    author: 'Sarah Williams',
                    price: 34.99,
                    stock: 2,
                },
                {
                    id: 5,
                    title: 'CSS for Dummies',
                    author: 'Emily Davis',
                    price: 15.99,
                    stock: 8,
                },
                {
                    id: 6,
                    title: 'Web Performance Optimization',
                    author: 'David Johnson',
                    price: 39.99,
                    stock: 4,
                },
                {
                    id: 7,
                    title: 'React Native in Action',
                    author: 'Richard Lee',
                    price: 49.99,
                    stock: 6,
                },
                {
                    id: 8,
                    title: 'JavaScript: The Good Parts',
                    author: 'Douglas Crockford',
                    price: 14.99,
                    stock: 10,
                },
                {
                    id: 9,
                    title: 'Building Scalable Web Applications',
                    author: 'Anna Taylor',
                    price: 29.99,
                    stock: 3,
                },
                {
                    id: 10,
                    title: 'Python for Data Science',
                    author: 'Chris Martin',
                    price: 39.99,
                    stock: 5,
                },
            ];

            const options:BookType[] = mockData.map(item => ({ value: item.id, label: item.title, author: item.author, price: item.price, stock: item.stock }));
            setLibraryBooks(options);
            setLoad(false);
        }, 2000);
    }, []);

    const handleChange = (selectedOption: BookType) => {
        const selectedBook: Book = {
            id: selectedOption?.value,
            title: selectedOption?.label,
            author: selectedOption?.author,
            price: selectedOption?.price,
            stock: selectedOption?.stock
        };
        dispatch(setBook(selectedBook));
        navigate(selectedOption ? '/book' : '/');
    }
    return (
        <nav className="header">
            <div className="header-container">
                <header>
                    <Link to="/"> <img src={logoUrl} alt="Verbit Logo"/></Link>
                </header>
                <div className="search-bar">
                    {load ? <p>Loading...</p> :
                        <Select
                            options={libraryBooks}
                            isSearchable={true}
                            onChange={handleChange}
                            isClearable={true}
                            backspaceRemovesValue={true}
                            filterOption={bookSearchFilter}
                        />
                    }
                </div>
                <div className="header-links">
                    <Link to="/profile"><FaUser/></Link>
                    <Link to="/cart"><FaShoppingCart/></Link>
                </div>
            </div>
        </nav>
    )
}

export default Header;