import React from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { Form, Button } from 'react-bootstrap';
import './formLogin.css';

const validationSchema = yup.object().shape({
    formName: yup.string()
        .min(2, "Minimo 2 caracteres")
        .max(100, "Maximo 100 caracteres")
        .required("* Dato requerido"),
    formEmail: yup.string()
        .min(2, "Minimo 2 caracteres")
        .max(100, "Maximo 100 caracteres")
        .required("* Dato requerido"),
});

const formLogin = () => {

    return (
        <>
            <Formik
                initialValues={{ formName: '', formEmail: '' }}
                validationSchema={validationSchema}
                onSubmit={ (values, {setSubmitting, resetForm }) => {
                    setSubmitting(true);
                    resetForm();
                    setSubmitting(false);
                }}
            >
                {
                    ({
                        values,
                        errors,
                        touched,
                        handleChange,
                        handleBlur,
                        handleSubmit,
                        isSubmitting,
                    }) => (
                        <Form onSubmit={handleSubmit} className='p-lg-4'>
                            <Form.Group>
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    type="text"
                                    size="lg"
                                    name="formName"
                                    placeholder="Full Name"
                                    value={values.formName}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={ touched.formName && errors.formName ? "error" : null }
                                />
                                <Form.Text className="text-muted">
                                    { touched.formName && errors.formName 
                                        ? 
                                            ( <div className="error-message">{ errors.formName }</div>) 
                                        : 
                                            null
                                    }
                                </Form.Text>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    type="text"
                                    size="lg"
                                    name="formEmail"
                                    placeholder="Enter Email"
                                    value={values.formEmail}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className={ touched.formEmail && errors.formEmail ? "error" : null }
                                />
                                {/* <FormError touched={touched} errors={errors}></FormError> */}
                                <Form.Text className="text-muted">
                                    { touched.formEmail && errors.formEmail 
                                        ? 
                                            ( <div className="error-message">{ errors.formEmail }</div>) 
                                        : 
                                            null
                                    }
                                </Form.Text>
                            </Form.Group>
                            <Button 
                                variant="primary" 
                                type="submit"
                                disabled={isSubmitting}
                                className="mt-3"
                            >
                                Submit
                            </Button>
                        </Form>
                    )
                }
            </Formik>
        </>
    );
}

export default formLogin;
