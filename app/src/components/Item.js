import React from "react";
import {NavLink} from 'react-router-dom';
import { Button, Card, CardMedia, Typography } from '@mui/material';
const Item = ({items}) =>{
	return (
		<>
			<Card
				key={items.id}
				sx={{
					width: '250px',
					maxHeight: '450px',
				}}
			>
				<CardMedia
					component="img"
					width="250px"
					height="250px"
					image={items.image}
					alt={items.image}
				/>
				<Typography variant="body1" color="initial">
					{items.title}
				</Typography>
				<Typography variant="h5" color="initial">
					${items.price}
				</Typography>

				<Button variant="contained" color="primary">
					<NavLink
						to={`/item/${items.id}`}
						style={{
							color: 'white',
							textDecoration: 'none',
						}}
					>
						Ver detalle
					</NavLink>
				</Button>
			</Card>
		</>
	)
}
export default Item;