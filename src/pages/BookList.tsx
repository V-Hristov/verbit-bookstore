import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import {useEffect, useState} from "react";
import {BookType} from "./Book";
import {useNavigate} from "react-router-dom";
import {useDispatch} from "react-redux";
import {Book, setBook} from "../store/bookSlice";
import React from 'react';
import {useTranslation} from "react-i18next";

const BookList = () => {
    const [libraryBooks, setLibraryBooks] = useState<BookType[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { t } = useTranslation();


    useEffect(() => {
        setIsLoading(true);
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
            setIsLoading(false);
        }, 2000);
    }, []);

    const onCardClick = (selectedOption: BookType) => {
        const selectedBook: Book = {
            id: selectedOption?.value,
            title: selectedOption?.label,
            author: selectedOption?.author,
            price: selectedOption?.price,
            stock: selectedOption?.stock
        };
        dispatch(setBook(selectedBook));
        navigate('/book');
    }

    if (isLoading) {
        return <p>{t('loadingLabel')}</p>;
    }

    return (
        <Grid container spacing={3} style={{ backgroundColor: '#f5f5f5' }}>
            {libraryBooks.map((book) => (
                <Grid item xs={12} sm={6} md={4} key={book.value}>
                    <Card onClick={() => onCardClick(book)}>
                        <CardContent>
                            <Typography variant="h5" component="h2">{book.label}</Typography>
                            <Typography variant="body2" component="p">{book.author}</Typography>
                            <Typography variant="body2" component="p">{`Price: ${book.price}`}</Typography>
                            <Typography variant="body2" component="p">{`Stock: ${book.stock}`}</Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    )
}
export default BookList;