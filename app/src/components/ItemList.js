import Item from './Item';
import { memo } from 'react';
import { Grid, Typography } from '@mui/material';
const ItemList = ({productos}) =>{
	return (
		<>
			<Typography variant="h4" sx={{ padding: '1rem' }}>
				Productos:
			</Typography>

			<Grid container>
				{productos.map((productos) => (
					<Item items={productos}/>
				))}
			</Grid>
		</>
	)
}
export default memo (ItemList);



// productos.map((productos) =>{
// 	return <Item items={productos}/>
// })