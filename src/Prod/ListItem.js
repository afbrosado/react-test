import React from 'react';
import {Grid, Typography, withMobileDialog} from "@material-ui/core";

const ListItem = props => {
  const {product, onProductClick, classes} = props;

  return (
    <Grid item xs={12} sm={6} md={4}>
      <Grid container>
        <Grid item xs={12} className={classes.productImageWrapper} onClick={() => onProductClick(product.name)}>
          <img src='/images/productImg.jpg' alt='product image' className={classes.productImage}/>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='subtitle1' className={classes.productNameText} onClick={() => onProductClick(product.name)}>{product.name}</Typography>
        </Grid>
        {product.description &&
        <Grid item xs={12}>
          <Typography variant='caption'>{product.description}</Typography>
        </Grid>
        }
      </Grid>
    </Grid>
  );
};

export default ListItem;