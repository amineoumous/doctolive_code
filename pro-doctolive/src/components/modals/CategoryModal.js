import React, { useState } from 'react';
import {
  TableHead, TextField, 
  IconButton, Paper, TableRow, 
  TablePagination, TableFooter, TableContainer, 
  TableCell, TableBody, Table
} from '@material-ui/core';
import { MdSave, MdCancel } from 'react-icons/md';
import ColorPicker  from 'rc-color-picker';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import NumberFormat from 'react-number-format';
import {Modal, Button, Row, Col, Collapse, Form} from 'react-bootstrap';



const CategoryModal = ({show, handleClose, saveCategory }) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [active, setActive] = useState(false);
  const [colorPicker, setColorPicker] = useState('#333');


  const choisingColor = (e) => {
    setColorPicker(e.target.value);
  };
  const saveCategoryE = () => {
    let data = [{ name, color: colorPicker, active,price }];
    saveCategory(data);
  }
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Ajouter une nouvelle catégorie</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formCategoryName">
            <Form.Label>Nom de la catégorie</Form.Label>
            <Form.Control
              type="text"
              placeholder="Entrez le nom de la catégorie"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formCategoryPrice" className="mt-3">
            <Form.Label>Prix</Form.Label>
            <Form.Control
              as={NumberFormatCustom}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formCategoryColor" className="mt-3">
            <Form.Label>Couleur</Form.Label>
    
            <input type='color' onChange={choisingColor} />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="primary" onClick={saveCategoryE} startIcon={<MdSave />}>
          Enregistrer
        </Button>
        {/* <Button variant="secondary" onClick={handleClose} startIcon={<MdCancel />}>
          Annuler
        </Button> */}
      </Modal.Footer>
    </Modal>
  );
};


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
export default CategoryModal;