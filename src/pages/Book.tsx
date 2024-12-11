import React from 'react';
import { useTranslation } from 'react-i18next';


export type BookType = {
    value: number;
    label: string;
    author: string;
    price: number;
    stock: number;
};

interface BookProps {
    book: BookType;
}

const Book: React.FC<BookProps> = ({ book }) => {
    const { t } = useTranslation();
    const addToCart = () => {
        console.log(`Book added`);
    };
    return (
        <div>
            <h2>{book.label}</h2>
            <p>{`${t('authorName')}: ${book.author}`}</p>
            <p>{`Price: ${book.price}`}</p>
            <p>{`Stock: ${book.stock}`}</p>
            <button onClick={addToCart}>Add to Cart</button>
        </div>
    );
};

export default Book;