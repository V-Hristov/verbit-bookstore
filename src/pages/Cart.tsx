import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Card, CardContent, Grid, Typography } from '@material-ui/core';
import { IoTrashBinOutline } from 'react-icons/io5';
import { Book } from '../store/bookSlice';
import { removeAllBooksFromCart, removeBookFromCart } from '../store/cartSlice';
import '../styles/cart.scss';
import { useTranslation } from 'react-i18next';

const Cart = () => {
	const dispatch = useDispatch();
	const cartItems = useSelector((state: any) => state?.cart?.items) as Book[];
	const [isSubmitted, setIsSubmitted] = useState(false);
	const totalPrice = cartItems.reduce((a, b) => a + b.price * b.stock, 0);
	const { t } = useTranslation();

	const handleRemoveBook = (book: Book) => {
		dispatch(removeBookFromCart(book));
	};

	const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
		event.preventDefault();
		dispatch(removeAllBooksFromCart());
		setIsSubmitted(true);
	};

	return (
		<div className="cart">
			{cartItems.map((book) => (
				<Card className="cartItem" key={book.id}>
					<CardContent>
						<Grid container justifyContent="space-between" alignItems="center">
							<Grid item>
								<Typography variant="h6">{book.title}</Typography>
								<Typography color="textSecondary">{book.author}</Typography>
								<Typography>{`$${(book.price * book.stock).toFixed(2)}`}</Typography>
							</Grid>
							<Grid item>
								<IoTrashBinOutline
									onClick={() => handleRemoveBook(book)}
									style={{ fontSize: '1.5em', cursor: 'pointer' }}
								/>
							</Grid>
						</Grid>
					</CardContent>
				</Card>
			))}
			<Typography variant="h4">Total Price: {totalPrice.toFixed(2)}</Typography>
			<Button
				onClick={handleSubmit}
				variant="contained"
				color="primary"
				disabled={cartItems.length === 0}
			>
				{t('submitButton')}
			</Button>
			{isSubmitted && <div>{t('success')}</div>}
		</div>
	);
};

export default Cart;
