import React from "react";
import {Grid, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

const items = [
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
  {
    name: "andre"
  },
];

function createData(name, calories, fat, carbs, protein) {
  return {name, calories, fat, carbs, protein};
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const Grids = () => {
  return (
    <Grid container>
      {/*Left side*/}
      <Grid item xs={10}>
        <Grid container>
          {/*Chart*/}
          <Grid item xs={12}>
            <img src="/referral.png" alt="image" style={{width: "100%", height: "500px"}}/>
          </Grid>
          {/*Table*/}
          <Grid item xs={12} style={{marginTop: 50}}>
            <TableContainer>
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Calories</TableCell>
                    <TableCell align="right">Fat&nbsp;(g)</TableCell>
                    <TableCell align="right">Carbs&nbsp;(g)</TableCell>
                    <TableCell align="right">Protein&nbsp;(g)</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow key={row.name}>
                      <TableCell component="th" scope="row">
                        {row.name}
                      </TableCell>
                      <TableCell align="right">{row.calories}</TableCell>
                      <TableCell align="right">{row.fat}</TableCell>
                      <TableCell align="right">{row.carbs}</TableCell>
                      <TableCell align="right">{row.protein}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Grid>
        </Grid>
      </Grid>
      {/*Right side*/}
      <Grid item xs={2}>
        {items.map(item => (
          <h6 key={item.name}>{item.name}</h6>
        ))}
      </Grid>
    </Grid>
  )
};

export default Grids;