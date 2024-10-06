import React, {useState} from 'react';
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ListItem from "./ListItem";
import CategoriesTreeView from "./CategoriesTreeView";
import Product from "./ProductDetails";

const CATEGORIES = [
  {
    name: 'Drogtester multi för urin',
    id: 0,
    products: [
      {
        name: 'LITA Multi-15/EtG, 25st'
      },
      {
        name: 'LITA Multi-15/Ketamin, 25st'
      },
      {
        name: 'LITA Multi-15/Urin-ID, 25st'
      },
      {
        name: 'LITA Multi-4, 25st'
      },
      {
        name: 'LITA Multi-THC/Urin-Id, 25stNY!'
      },
      {
        name: 'LITA Multi-17, 25st'
      }
    ]
  },
  {
    name: 'Drogtester singel för urin',
    id: 1,
    products: [
      {
        name: 'Singel THC 200, 25st'
      },
      {
        name: 'Singel OPI 200, 25st'
      },
      {
        name: 'Singel COC 200, 25st'
      },
      {
        name: 'Singel Fentanyl 200, 25st'
      }
    ]
  },
  {
    name: 'Laboratoriekit',
    id: 2,
    products: [
      {
        name: 'Lab Kit Saliv'
      },
      {
        name: 'Lab Kit Urin'
      },
      {
        name: 'Lab Kit Venblod'
      },
      {
        name: 'Lab Kit Kapillart helbod - pappkort'
      }
    ]
  },
  {
    name: 'Bakterietester',
    id: 3,
    products: []
  },
  {
    name: 'Snabbtest COVID-19',
    id: 4,
    products: [
      {
        name: 'Antikroppstest COVID-19 Kassett, 20 st'
      },
      {
        name: 'Antigentest COVID-19, 5 st'
      },
    ]
  },
  {
    name: 'Övrigt',
    id: 5,
    products: [
      {
        name: 'IR- Termometer'
      },
      {
        name: 'Urin-ID, 25st'
      },
      {
        name: 'Buffertlösning för preparatanalys'
      },
    ]
  },
  {
    name: 'Visa alla',
    id: 6,
    products: [
      {
        name: 'LITA Multi-15/EtG, 25st'
      },
      {
        name: 'LITA Multi-15/Ketamin, 25st'
      },
      {
        name: 'LITA Multi-14/Urin-ID, 25st'
      },
    ]
  },
];

const PRODUCTS = [
  {
    name: 'LITA Multi-21, 25st',
    description: 'AMP/BUP/BZO/COC/EDDP/OPI/MET-MDMA/FYL/OXY/THC25/TML/ZOL/MPD/ETG/ACL/ZOP'
  },
  {
    name: 'LITA Multi-21, 25st',
  },
  {
    name: 'LITA Multi-21, 25st',
    description: 'AMP/BUP/BZO/COC/EDDP/OPI/MET-MDMA/FYL/OXY/THC25/TML/ZOL/MPD/ETG/ACL/ZOP'
  },
  {
    name: 'LITA Multi-21, 25st',
  }, {
    name: 'LITA Multi-21, 25st',
  }, {
    name: 'LITA Multi-21, 25st',
    description: 'AMP/BUP/BZO/COC/EDDP/OPI/MET-MDMA/FYL/OXY/THC25/TML/ZOL/MPD/ETG/ACL/ZOP'
  },
  {
    name: 'LITA Multi-21, 25st',
  },
  {
    name: 'LITA Multi-21, 25st',
    description: 'AMP/BUP/BZO/COC/EDDP/OPI/MET-MDMA/FYL/OXY/THC25/TML/ZOL/MPD/ETG/ACL/ZOP'
  }, {
    name: 'LITA Multi-21, 25st',
  },
  {
    name: 'LITA Multi-21, 25st',
  },
  {
    name: 'LITA Multi-21, 25st',
  },
  {
    name: 'LITA Multi-21, 25st',
  },
  {
    name: 'LITA Multi-21, 25st',
  },
  {
    name: 'LITA Multi-21, 25st',
  }
];

const ProductListing = () => {
  const classes = useStyles();

  const [selectedCategory, setSelectedCategory] = useState(0);
  const [selectedProduct, setSelectedProduct] = useState('');

  return (
    <Grid container spacing={4}>
      {/*Categories*/}
      <Grid item xs={12} sm={4}>
        <Grid container>
          <Grid item xs={12} className={classes.categoriesHeaderWrapper}>
            Produkter
          </Grid>
          <Grid item xs={12}>
            <CategoriesTreeView
              items={CATEGORIES}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              classes={classes}
            />
          </Grid>
        </Grid>
      </Grid>

      {/*Content*/}
      <Grid item xs={12} sm={8}>
        <Grid container>
          <Grid item xs={12} className={classes.breadcrumbs}>
            {`HEM  /  SNABBTESTER  /  DROGTESTER MULTI FOR URIN`}
          </Grid>
          <Grid item xs={12}>
            {selectedProduct && selectedProduct !== '' ?
              (<Product classes={classes}/>)
              :
              (
                <Grid container spacing={3}>
                  {PRODUCTS && PRODUCTS.length > 0 && PRODUCTS.map((product, index) => (
                    <ListItem product={product} onProductClick={setSelectedProduct} classes={classes} key={index}/>
                  ))}
                </Grid>
              )
            }
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

const useStyles = makeStyles(theme => ({
  categoriesHeaderWrapper: {
    backgroundColor: '#E41937',
    padding: '15px 10px',
    color: '#ffffff'
  },
  categoriesList: {
    listStyleType: 'none',
    margin: 0,
    padding: '0px 0px 0px 5px'
  },
  categoryItem: {
    color: "#222222",
    cursor: "pointer",
    margin: '18px 0px',
  },
  underLineSelected: {
    position: 'relative',
    "&:after": {
      content: '""',
      bottom: '-5px',
      position: 'absolute',
      left: 0,
      width: '100%',
      borderWidth: '0px 0px 2px 0px',
      borderStyle: 'solid',
      borderColor: '#E41937',
      transition: 'width .3s ease',
    }
  },
  underline: {
    position: 'relative',
    "&:after": {
      content: '""',
      bottom: '-5px',
      position: 'absolute',
      left: 0,
      width: '0%',
      borderWidth: '0px 0px 2px 0px',
      borderStyle: 'solid',
      borderColor: '#E41937',
      transition: 'width .3s ease',
    },
    "&:hover::after": {
      width: "100%",
      position: 'absolute',
    }
  },
  productsList: {
    listStyleType: 'none',
    margin: 0,
    padding: '0px 0px 0px 15px'
  },
  productsItems: {
    color: "#222222",
    cursor: "pointer",
    margin: '18px 0px',
  },
  breadcrumbs: {
    backgroundColor: '#f4f4f4',
    padding: '15px 10px',
    marginBottom: 40
  },
  listTittleWrapper: {
    marginBottom: 20
  },
  subTitleWrapper: {
    marginBottom: 15
  },
  productImageWrapper: {
    border: '1px solid #dfdfdf',
    overflow: 'hidden',
    cursor: 'pointer'
  },
  productImage: {
    width: '100%',
    height: '100%',
    transition: 'transform 0.3s',
    '&:hover': {
      transform: 'scale(1.05)'
    }
  },
  productNameText: {
    marginTop: 10,
  },
  productDetailsImage: {
    maxWidth: 400
  },
  productSmallImagesWrapper: {
    border: '1px solid #dfdfdf',
    cursor: 'pointer',
    maxHeight: 120,
    maxWidth: 120
  },
  productSmallImages: {
    width: '100%',
    height: '100%',
  },
  productDetailsNameWrapper: {
    marginBottom: 20
  },
  productDetailsArticleNumberWrapper: {
    marginBottom: 40
  },
  productDetailDescriptionWrapper: {
    marginBottom: 20
  },
  productDetailSubstancesWrapper: {
    marginBottom: 20
  },
  buyButtonWrapper: {
    textAlign: 'right'
  },
  buyButton: {
    backgroundColor: '#008CBA',
    borderColor: '#007095',
    color: '#ffffff',
    borderRadius: 0,
    boxShadow: 'none',
    textTransform: 'capitalize',
    padding: '9px 25px'
  }
}));

export default ProductListing;