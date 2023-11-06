import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const ContactForm = () => {
    const initialValues = {
        name: '',
        email: '',
        message: '',
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string().required('Name is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        message: Yup.string().required('Message is required'),
    });

    const handleSubmit = (values, { resetForm }) => {
        console.log(values);
        resetForm();
    };

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                <Form>
                    <div>
                        <Field type="text" id="name" name="name" className="bg-white p-4 rounded-md w-full text-lg" placeholder="Name" />
                        <ErrorMessage name="name" component="div" className="error text-xs text-red-500" />
                    </div>

                    <div className='mt-5'>
                        <Field type="text" id="email" name="email" className="bg-white p-4 rounded-md w-full text-lg" placeholder="Email Address" />
                        <ErrorMessage name="email" component="div" className="error text-xs text-red-500" />
                    </div>

                    <div className='mt-5'>
                        <Field as="textarea" id="message" name="message" className="bg-white p-4 rounded-md w-full text-lg resize-none	" placeholder="Message..." />
                        <ErrorMessage name="message" component="div" className="error text-xs text-red-500" />
                    </div>

                    <div className='mt-7'>
                        <button type='submit' className="bg-green-400 text-white hover:bg-white hover:text-green-400 border border-green-400 transition ease-in duration-300 px-4 py-2 w-32 rounded-md">Submit</button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default ContactForm;
