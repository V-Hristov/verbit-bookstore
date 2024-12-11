import React, {useState} from 'react';
import { useTranslation } from 'react-i18next';
import {useDispatch, useSelector} from 'react-redux';
import { Book } from '../store/bookSlice';
import { addBookToCart } from '../store/cartSlice';
import {Button, Card, CardContent, Grid, Typography} from '@material-ui/core';
import '../styles/book.scss';

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
    const [stock, setStock] = useState(selectedBook.stock);
    const dispatch = useDispatch();

    const addToCart = () => {
        setStock(stock - 1);
        dispatch(addBookToCart({...selectedBook, stock: 1}));
    };

    return (
        <Card className="book">
            <CardContent>
                <Grid container direction="column" alignItems="flex-start">
                    <Typography variant="h6">{selectedBook.title}</Typography>
                    <Typography>{`${t('authorName')}: ${selectedBook.author}`}</Typography>
                    <Typography>{`${t('price')}: ${selectedBook.price}`}</Typography>
                    <Typography>{`${t('stock')}: ${stock}`}</Typography>
                    <Button variant="contained" color="primary" onClick={addToCart} disabled={stock === 0}>{t('addToCartButton')}</Button>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default BookComponent;