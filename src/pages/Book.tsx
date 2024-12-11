import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Book } from '../store/bookSlice';


export type BookType = {
    value: number | null;
    label: string;
    author: string;
    price: number;
    stock: number;
};

const BookComponent: React.FC = () => {
    const { t } = useTranslation();
    const selectedBook: Book = useSelector((state: any) => state.book.item);
    const addToCart = () => {
        console.log(`Book added`);
    };
    return (
        <div>
            <h2>{selectedBook.title}</h2>
            <p>{`${t('authorName')}: ${selectedBook.author}`}</p>
            <p>{`Price: ${selectedBook.price}`}</p>
            <p>{`Stock: ${selectedBook.stock}`}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default BookComponent;