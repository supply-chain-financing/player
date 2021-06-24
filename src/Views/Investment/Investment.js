import React from "react";
import { makeStyles, createMuiTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import Checkbox from "@material-ui/core/Checkbox";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import { green } from "@material-ui/core/colors";
import AddIcon from "@material-ui/icons/Add";
//table 欄位
const columns = [
  { id: "code", label: "代碼", minWidth: 70 },
  { id: "name", label: "公司名稱", minWidth: 40 },
  { id: "buy", label: "買進", minWidth: 40, align: "right" },
  {
    id: "sell",
    label: "賣出",
    minWidth: 40,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "finalPrice",
    label: "成交價",
    minWidth: 40,
    align: "right",
    format: (value) => value.toLocaleString("en-US"),
  },
  {
    id: "UpsAndDowns",
    label: "漲跌",
    minWidth: 40,
    align: "right",
    format: (value) => value.toFixed(2),
  },
  {
    id: "buyBtn",
    label: "購入",
    minWidth: 40,
    align: "right",
  },
];

function createData(code, name, buy, sell, finalPrice, UpsAndDowns, object) {
  return { code, name, buy, sell, finalPrice, UpsAndDowns, object };
}
//拿投資資料
const rows = [
  createData(8644, "華研國際", 208.5, 210.0, 210.0, 1.0),
  createData(8644, "華研國際", 208.5, 210.0, 210.0, 1.0),
  createData(8644, "華研國際", 208.5, 210.0, 210.0, 1.0),
  createData(8644, "華研國際", 208.5, 210.0, 210.0, 1.0),
  createData(8644, "華研國際", 208.5, 210.0, 210.0, 1.0),
];
const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  container: {
    maxHeight: 440,
    // border: "2px solid black",
  },
  button: {
    marginRight: theme.spacing(1),
    border: "2px solid black",
  },
}));
const theme = createMuiTheme({
  palette: {
    primary: green,
  },
});

export default function Investment() {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper className={classes.root}>
      <TableContainer className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <>
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        </>
                      );
                    })}
                    {/* <Button
                      variant="contained"
                      color="primary"
                      className={classes.button}
                      endIcon={<AddIcon />}
                    ></Button> */}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
