import React from "react";
import {Button, makeStyles, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@material-ui/core";

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

const ButtonsBorder = () => {
  const classes = useStyles();
  const [selected, setSelected] = React.useState(1)

  return (
    <div style={{padding: 30}}>
      <div>
        <Button
          className={selected === 1 ? classes.selectedBtn : classes.unselectedBtn}
          onClick={() => setSelected(1)}
        >
          btn 1
        </Button>
        <Button
          className={selected === 2 ? classes.selectedBtn : classes.unselectedBtn}
          onClick={() => setSelected(2)}
        >
          btn 2
        </Button>
      </div>

      <div className={classes.tableWrapper}>
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
      </div>
    </div>
  );
};

const useStyles = makeStyles(theme => ({
  selectedBtn: {
    border: "1px solid #000000",
    borderBottom: "1px solid #ffffff",
    borderRadius: 0
  },
  unselectedBtn: {
    borderRadius: 0
  },
  tableWrapper: {
    borderTop: "1px solid #000000",
    marginTop: "-1px"
  }
}));

export default ButtonsBorder;