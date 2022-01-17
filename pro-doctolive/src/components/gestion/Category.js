import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';

import {
  TableHead, TextField, 
  IconButton, Paper, TableRow, 
  TablePagination, TableFooter, TableContainer, 
  TableCell, TableBody, Table, Button
} from '@material-ui/core';
import ColorPicker  from 'rc-color-picker';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';

import {MdFirstPage, MdLastPage, MdKeyboardArrowLeft, MdKeyboardArrowRight, MdAdd, MdSave, MdDeleteSweep, MdCancel} from 'react-icons/md'
import {FcCancel} from 'react-icons/fc'
import {BiEditAlt} from 'react-icons/bi'
import Checkbox from 'components/Inputs/checkbox';

import { useAuth } from "context/Auth";
import NumberFormat from 'react-number-format';

import {StoreTarifs, DeleteTarif, UpdateTarif} from 'services/medecin/MedecinService'


export default function Category(props) {

  return (
        <div className="container">
            <h3 className="text-right"> Liste des catégories et leurs tarifs</h3>
            {
                props.categories ?
                <CustomPaginationActionsTable {...props} />
                :null
            }
        </div>
  )
}


const useStyles1 = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
    flexDirection: "row-reverse"
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
         <MdLastPage /> 
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
         <MdKeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        <MdKeyboardArrowLeft /> 
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        <MdFirstPage /> 
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

// const rows = [ ].sort((a, b) => (a.calories < b.calories ? -1 : 1));

const useStyles2 = makeStyles({
  table: {
    minWidth: 500,
  },
});

function CustomPaginationActionsTable(props) {
  const classes = useStyles2();
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [addCategory, setAddCategory] = useState(false);
  const [updateCategory, setUpdateCategory] = useState();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("200");
  const [colorPicker, setColorPicker] = useState("#ff0000");
  const [active, setActive] = useState(true);
  const [errors, setErrors] = useState({});

  const {UserData} = useAuth();
  const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.categories.length - page * rowsPerPage);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const choisingColor =(event) => {
    setColorPicker(event.color)
  } 

  const saveCategory = () => {
    let data = [{ name, color: colorPicker, active }];

    StoreTarifs(data, UserData.token)
      .then(response =>{
        if(response.status === 201){
          if (!response.data.error) { 
            setAddCategory(false)
            props.setNewCategory(response.data.category)
            
          }else{
            // setErrors( (errors) => {return {events: true}})
          }
        }
       
      })
      .catch(err=> {

        if(err.response){
          if(err.response.status === 500){
  
          }
          if(err.response.status === 403){
            let setingError= {};
            err.response.data.errors.map(error => {
              return setingError[error.param] = true
            })
            setErrors(setingError)
          }
        }
      });
  }
  const setSaveUpdate = (categorie) => {
    console.log(categorie)
    let data = { name, color: colorPicker, price };

    // Axios.put(`${backendUrl}category/${categorie.id}`, data,{headers: {'Content-Type': 'application/json'}})
    UpdateTarif(data, categorie.id, UserData.token)
      .then(response =>{
        
        if(response){
          if (!response.data.error) { 
            console.log(response.data.updatedTarif)
            // const isUpdated = props.setUpdated(response.data.category);
            props.setCategories(oldCat => {
              let index = oldCat.findIndex(ctg=> ctg.id === categorie.id);
              if(index !== -1){
                  let cloneCat = [...oldCat];
                  
                  cloneCat[index] = {...data, id: categorie.id};
                  // setCategories(cloneCat)
                  setUpdateCategory()

                  return cloneCat
              }
      
              
            })
              
          }else{
            // setErrors( (errors) => {return {events: true}})
          }
        }
       
      })
      .catch(err=> {
        if(err.response){
          if(err.response.status === 500){
  
          }
        }
      });

  }
  const _setUpdateCategory = (category) => {
    setName(category.name);
    setColorPicker(category.color);
    setPrice(category.price);
    setActive(category.active);
    setUpdateCategory(category.id)
  }

  const _setCancelUpdate = () => {
    setName("");
    setColorPicker("");
    setActive(true);
    setUpdateCategory()
  }

  const setDelete = (categorie) => {
    DeleteTarif(categorie.id, UserData.token)
    .then(response => {

      props.setCategories(oldCat => {
        let clonCat = [...oldCat];
        let index = clonCat.findIndex(c => c.id === categorie.id);
        clonCat.splice(index, 1);

        return clonCat
      })
    })
    .catch(err => {

    })
  }

  return (
    <TableContainer component={Paper} >
      <Table className={classes.table} aria-label="custom pagination table">
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
              
               <TableCell
                  key="add"
                  align="right"
                  style={{ minWidth: 120 }}
                >
                    <span className="actions-button" onClick={() => setAddCategory(true)}>
                         <p> ajouter une catégorie </p>
                        <MdAdd size="2rem" />
                    </span>
                  
                </TableCell>
            </TableRow>
          </TableHead>
        <TableBody>
          { addCategory ?
           <TableRow key= "add">
              <TableCell component="th" scope="categorie" align="left" >
                <TextField label=" Nom de la catégorie" variant="outlined" InputLabelProps={{style: {width: "100%"}}} value={name} onChange={ (e) => setName(e.target.value)} />
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
              <FormControl fullWidth variant="outlined">
                      <InputLabel htmlFor="formatted-text-mask-input"> Prix </InputLabel>
                      <OutlinedInput
                        label="Prix"
                        value={price}
                        onChange={(e) => setPrice(e.event.target)}
                        name="price"
                        id="formatted-numberformat-input"
                        inputComponent={NumberFormatCustom}
                      />
                  </FormControl>
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                <ColorPicker onChange={choisingColor} />
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
              <span className="actions-button" onClick={saveCategory}>
                  <p> enregister </p>
                  <MdSave />
                </span>
                <span className="actions-button mt-1" onClick={() => setAddCategory(false)}>
                  <p> annuler </p>
                  <MdCancel />
                </span>
              </TableCell>
            </TableRow>
            : null
          }
         
       
          {(rowsPerPage > 0
            ? props.categories.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : props.categories
          ).map((categorie) => {
            let thisCategorieEvents = props.events.filter((event) => event.tarif?.id === categorie.id);
            
            let numberOfEvents = thisCategorieEvents.length;
            return(
            updateCategory === categorie.id ?
            <TableRow key={categorie.id}>
              <TableCell component="th" align="left" scope="categorie">
                <TextField label="name of category" variant="outlined" value={name} onChange={ (e) => setName(e.target.value)} />
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
              <FormControl fullWidth variant="outlined">
                      <InputLabel htmlFor="formatted-text-mask-input"> Prix </InputLabel>
                      <OutlinedInput
                        label="Prix"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                        name="price"
                        id="formatted-numberformat-input"
                        inputComponent={NumberFormatCustom}
                      />
                  </FormControl>
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                <ColorPicker onChange={choisingColor} />
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
              { numberOfEvents === 0 ? <span className="actions-button" onClick={ () => setDelete(categorie)}>
                  <p> Supprimer </p>
                  <MdDeleteSweep color="red" />
                </span>
                :
                <span className="actions-button" disabled={true}>
                  <p> Vous pouvez pas supprimer </p>
                  <FcCancel />
                </span>
              }
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                <span className="actions-button" onClick={ () => setSaveUpdate(categorie)}>
                  <p> enregistrer </p>
                  <MdSave />
                </span>
                <span className="actions-button mt-1" onClick={_setCancelUpdate}>
                  <p> annuler </p>
                  <MdCancel />
                </span>
              </TableCell>
            </TableRow>
            :
            <TableRow key={categorie.id}>
              <TableCell component="th" align="left" scope="categorie">
                {categorie.name}
              </TableCell>
              <TableCell component="th" align="left" scope="categorie">
                {categorie.price}
              </TableCell>
              {/* <TableCell style={{ width: 160 }} align="center">
                {categorie.active ? "active": "inactive"}
              </TableCell> */}
              <TableCell style={{ width: 160 }} align="center">
                <span className="categorie-color" style={{backgroundColor: categorie.color}} >  </span>
              </TableCell>
              <TableCell style={{ width: 160 }} align="center">
                {numberOfEvents}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                <span className="actions-button" onClick={() => _setUpdateCategory(categorie)}>
                  <p> Modifier </p>
                  <BiEditAlt size="1.3rem" />
                </span>
              </TableCell>
            </TableRow>
          )}
          )}

          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'tous', value: -1 }]}
              colSpan={5}
              count={props.categories.length}
              rowsPerPage={rowsPerPage}
              page={page}
              labelRowsPerPage='nombre de ligne par page'
              SelectProps={{
                inputProps: { 'aria-label': 'nombre de ligne par page' },
                native: true,
              }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}

const columns = [
  { id: 'name', label: 'Nom', minWidth: 170, align:"left" },
  { id: 'price', label: 'Prix', minWidth: 100, align: 'left', },
  {
    id: 'color',
    label: 'Couleur',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'number',
    label: 'Nombre de consultation',
    minWidth: 170,
    align: 'center',
    format: (value) => value.toLocaleString('en-US'),
  },
];

function NumberFormatCustom(props) {
  const { inputRef, onChange, ...other } = props;

  return (
    <NumberFormat
      {...other}
      getInputRef={inputRef}
      onValueChange={(values) => {
        onChange({
          target: {
            name: props.name,
            value: values.value,
          },
        });
      }}
      thousandSeparator
      isNumericString
      prefix="MAD : "
    />
  );
}