import React from 'react';

const CategoriesTreeView = props => {
  const {items, selectedCategory, setSelectedCategory, onProductClick, selectedProduct,classes} = props;

  return (
    <ul className={classes.categoriesList}>
      {items && items.length > 0 && items.map(item => (
        <>
          <li key={item.id} className={classes.categoryItem} onClick={() => setSelectedCategory(item.id)}>
            <span
              className={selectedCategory === item.id ? classes.underLineSelected : classes.underline}>{item.name}</span>
          </li>
          {selectedCategory === item.id &&
            <ul className={classes.productsList}>
              {item.products && item.products.length > 0 && item.products.map((item,index) => (
                <li key={index} className={classes.productsItems} onClick={() => onProductClick(item.name)}>
                  <span className={classes.underline}>{item.name}</span>
                </li>
              ))}
            </ul>
          }
        </>
      ))}
    </ul>
  );
};

export default CategoriesTreeView;