import React from 'react';
import {Button, Grid, Hidden, Typography} from "@material-ui/core";

const ProductDetails = {
  name: 'LITA Multi-15/EtG, 25st',
  articleNumber: 'Artnr: ULM15-EtG ',
  description: 'Lita urintester är CE-märkta och kontrolleras noga genom alla produktionssteg och vid ankomst. Testet detekterar följande substanser:',
  substances: 'THC 25, Amp 300, Opi 200, Bzo 200, Met 300-MDMA, Bup 10, TML 100, Coc 100, EDDP 100, Oxy 100, FYL 10, MPD 150, ZOL 50, ETG 500',
  quantity: '25'
}

const Product = props => {
  const {classes} = props;
  return (
    <Grid container spacing={4}>
      {/*Product image*/}
      <Grid item xs={12} sm={6}>
        <Grid container>
          <Grid item xs={12}>
            <img src='/images/productImg.jpg' alt='product image' className={classes.productDetailsImage}/>
          </Grid>
          <Hidden mdDown>
            <Grid item xs={12} style={{marginTop: 20}}>
              <Grid container justify='space-between'>
                <Grid item xs={4} className={classes.productSmallImagesWrapper}>
                  <img src='/images/productImg.jpg' alt='product image' className={classes.productSmallImages}/>
                </Grid>
                <Grid item xs={4} className={classes.productSmallImagesWrapper}>
                  <img src='/images/productImg.jpg' alt='product image' className={classes.productSmallImages}/>
                </Grid>
                <Grid item xs={4} className={classes.productSmallImagesWrapper}>
                  <img src='/images/productImg.jpg' alt='product image' className={classes.productSmallImages}/>
                </Grid>
              </Grid>
            </Grid>
          </Hidden>
        </Grid>
      </Grid>

      {/*Product description*/}
      <Grid item xs={12} sm={6}>
        <Grid container>
          <Grid item xs={12} className={classes.productDetailsNameWrapper}>
            <Typography variant='h6'>{ProductDetails.name}</Typography>
          </Grid>
          <Grid item xs={12} className={classes.productDetailsArticleNumberWrapper}>
            <Typography variant='subtitle1'>{ProductDetails.articleNumber}</Typography>
          </Grid>
          <Grid item xs={12} className={classes.productDetailDescriptionWrapper}>
            <Typography variant='subtitle1'>{ProductDetails.description}</Typography>
          </Grid>
          <Grid item xs={12} className={classes.productDetailSubstancesWrapper}>
            <Typography variant='subtitle1'><strong>{ProductDetails.substances}</strong></Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='subtitle1'>{`${ProductDetails.quantity} per Kartong`}</Typography>
          </Grid>
          <Grid item xs={12} className={classes.buyButtonWrapper}>
            <Button
              variant='contained'
              className={classes.buyButton}
            >
              Köp
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Product;