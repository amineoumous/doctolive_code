import React from "react";
import PropTypes from "prop-types";

import { Badge } from 'react-bootstrap'
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import {
  TableHead, 
  IconButton, TableRow, 
  TablePagination, TableFooter,
  TableCell, TableBody, Table, Avatar
} from '@material-ui/core';
import moment from 'moment'
import {MdFirstPage, MdLastPage, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdAdd, MdSave, MdDeleteSweep, MdCancel} from 'react-icons/md'

import styles from "assets/jss/components/tableStyle.js";
import { Link } from 'react-router-dom';
import Config from './../../Config';

import {AiOutlineCheck, AiOutlineClose} from 'react-icons/ai'
const useStyles = makeStyles(styles);




const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));


function TablePaginationActions(props) {
  const classes = useStyles1();

  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
         <MdFirstPage /> 
         
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
      <MdKeyboardArrowLeft /> 
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
         <MdKeyboardArrowRight />
       
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <MdLastPage /> 
      </IconButton>
    </div>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};




export default function CustomTable(props) {
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
  

  const { tableHead, tableData, tableHeaderColor } = props;
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, tableData.length - page * rowsPerPage);

  React.useEffect(() => {
    if( Math.floor(tableData.length / rowsPerPage) < page ){
      setPage(Math.floor(tableData.length / rowsPerPage))
    }
    return () => {
      
    }
  }, [props.tableData])

  return (
    <div className={classes.tableResponsive}>
      <Table className={classes.table}>
        {tableHead !== undefined ? (
          <TableHead className={classes[tableHeaderColor + "TableHeader"]}>
            <TableRow className={classes.tableHeadRow}>
              {tableHead.map((prop, key) => {
                return (
                  <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={key}
                    align={prop.align}
                    // style={{ minWidth: prop.minWidth }}
                  >
                    {prop.label}
                  </TableCell>
                );
              })}
               <TableCell
                    className={classes.tableCell + " " + classes.tableHeadCell}
                    key={"actionshead"}
                    align="right"
                    // style={{ minWidth: prop.minWidth }}
                  >
                    
                  </TableCell>
            </TableRow>
          </TableHead>
        ) : null}
        <TableBody>
          {(rowsPerPage > 0
            ? tableData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : tableData
          ).map((prop, key) => {
            return (
              <TableRow key={key} className={classes.tableBodyRow}>
                  {tableHead.map((column) => 
                    <TableCell key={column.id} className={classes.tableCell} align={column.align}>
                      { column.type === "text" ?
                        <p> {prop[column.id] }</p>
                        :column.type === "date" ?
                        <p> {moment(prop[column.id] + prop.time , 'YYYY/MM/DDHH:mm').calendar() }</p>
                        :column.type === "badge" ?
                        <div> { prop.deleted  ? <Badge variant="danger">  Suprimer </Badge> : prop.blocked ? <Badge variant="danger">  Bloquer </Badge> : prop[column.id] ? <Badge variant="success" > activé </Badge> : <Badge variant="warning">  désactiver </Badge> } </div>
                        :column.type === "icon" ?
                        <div> { prop[column.id] ? <AiOutlineCheck color="#4caf50" />  : <AiOutlineClose color="#f44336" /> } </div>
                        : column.type === "boolean" ?
                        <div> {prop[column.id] ? column.valueTrue : column.valueFalse } </div>
                        :column.type === "cascade" ?
                          <div> {prop[column.id] ? <p> {prop[column.id][column.cascadeId] }</p> : " rien à afficher"} </div>
                        :column.type === "cascadeArray" ?
                          <div> {prop[column.id] ? <p> {prop[column.id].map((el, i) => <label className="ml-2" key={i}> {el[column.cascadeId]} </label>) }</p> : " rien à afficher"} </div>
                        : column.type === "avatar" ?
                        <div> <Avatar src={prop[column.id] === null ? null : `${Config.BACKEND_URL}${prop[column.id]}`} />  </div>
                        :
                        <div>
                          <Link to={ column.path + "/" + prop.id}> {column.content} </Link>
                      </div>
                      }   
                    </TableCell>
                  )}
              </TableRow>
            );
          })}
           {tableData.length === 0 ?
            <TableRow key={"empty"} className={classes.tableBodyRow}>
              <TableCell key={"empty"} className={classes.tableCell} colSpan={tableHead !== undefined ? tableHead.length +1 : 1} > <p> aucun Element à afficher </p> </TableCell>
            </TableRow>
          : null}
           {emptyRows > 0 && (
            <TableRow key={"emptyRows"} className={classes.tableBodyRow} style={{ height: 53 * (emptyRows - 1) }}>
              <TableCell key={"emptyRows"} className={classes.tableCell} colSpan={tableHead !== undefined ? tableHead.length +1 : 1} />
            </TableRow>
          )}
          
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'tous', value: -1 }]}
              colSpan={tableHead !== undefined ? tableHead.length +1 : 1}
              count={tableData.length}
              rowsPerPage={rowsPerPage}
              // page={ (Math.floor(tableData.length / rowsPerPage) < page ) ?  page : Math.floor(tableData.length / rowsPerPage)}
              page={page}
              labelRowsPerPage= 'Nombre de ligne par page'
              SelectProps={{
                inputProps: { 'aria-label':  'Nombre de ligne par page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  );
}

CustomTable.defaultProps = {
  tableHeaderColor: "gray",
  tableHead:[],
  tableData:[],

};

CustomTable.propTypes = {
  tableHeaderColor: PropTypes.oneOf([
    "warning",
    "primary",
    "danger",
    "success",
    "info",
    "rose",
    "gray"
  ]),
  tableHead: PropTypes.arrayOf(PropTypes.object),
  tableData: PropTypes.arrayOf(PropTypes.object)
};
