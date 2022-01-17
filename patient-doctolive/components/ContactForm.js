

import {useState} from 'react'

import { TextField } from '@material-ui/core';

import {Row, Col} from 'react-bootstrap'

 export default function ContactForm(props) {
     const [object, setObject] = useState("");
     const [email, setEmail] = useState("");
     const [message, setMessage] = useState("");
     const [errors, setErrors] = useState({});
  
     const validateField = (field) => {
        switch (field) {
            case "object":
                setErrors(errors =>  {return {...errors, object:  object.length < 4}});
                break;
            case "emal-yb":
                setErrors(errors =>  {return {...errors, email:  email.length < 4}});
                break;
            case "message":
                setErrors(errors =>  {return {...errors, message: message.length < 20}});
                break;
            default:
                break;
        }
    }

    return (
        <section className="section-content">
            <div className="container space-below">
                <div className="form partner-form">
                    <div className="card-top">
                        <h2 className="card-heading heading-primary-color"> Formulaire de contact </h2>
                    </div>
                    <div className="card-body">
                        <form>
                            <Row className="pb-5">
                                <Col xs={12} sm={12} md={6} lg={6} className="mt-5 px-5">
                                    <TextField
                                        value= {object}
                                        onChange={(e) => setObject(e.target.value)}
                                        onBlur={ (e) => validateField(e.target.name)} 
                                        error={errors.object}
                                        helperText={errors.object ? "Veiller mentiné l'objet de vore méssage" : ""}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="objet_input"
                                        label="Objet"
                                        name="object"
                                        autoComplete="block"
                                    />
                                   
                                </Col>
                                <Col xs={12} sm={12} md={6} lg={6} className="mt-5 px-5">
                                    <TextField
                                        value= {email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        onBlur={ (e) => validateField(e.target.name)} 
                                        error={errors.email}
                                        helperText={errors.email ? "Veillez entrée une adresse où on peut vous contacter" : ""}
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email_input_yb"
                                        label="Email"
                                        name="emal-yb"
                                        autoComplete="block"
                                    />
                                   
                                </Col>
                                <Col xs={12} sm={12} md={12} lg={12} className="mt-5 px-5">
                                    <TextField
                                        value= {message}
                                        onChange={(e) => setMessage(e.target.value)}
                                        onBlur={ (e) => validateField(e.target.name)} 
                                        error={errors.message}
                                        helperText={errors.message ? "Un bon méssage doit contenir au minimum 20 caractère" : ""}
                                        margin="normal"
                                        required
                                        fullWidth
                                        multiline
                                        id="message_input"
                                        label="Message"
                                        name="message"
                                        autoComplete="block"
                                    />
                                   
                                </Col>

                            </Row>

                        </form>
                    </div>
                </div>
            </div>
        </section>
       
    )
}
