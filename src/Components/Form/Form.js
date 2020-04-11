import React, {Component} from 'react'
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import './form.scss'

const Formik = withFormik({
    mapPropsToValues(props){
        console.log(props)
        return {
            name: '',
            email: '',
            phone: ''
        }
    },
    validationSchema: Yup.object().shape({
        name: Yup.string()
            .min(1, '*Please enter your name')
            .required('*Name is required'),
        phone: Yup.string()
            .min(7, '*Please enter your phone')
            .required('*Phone is required'),
        email: Yup.string()
            .email('*Must be a valid email')
            .max(150, '*Must be shorter than 150 characters')
            .required('*Email is required')
    }),

    handleSubmit(values, {resetForm, setSubmitting}){
        setSubmitting(true)
        console.log('handle submit values', values)
        const {name, email, phone} = values

        axios.post('/api/contact-form', {name, email, phone})
        .then(res => console.log('contact form backend hit'))
        .catch(err => {
            console.log(err, 'this was the error')
        })

        resetForm()
    }
})

function LpForm(formikProps){
    const {errors, touched, values, handleBlur, handleChange, handleSubmit, isSubmitting} = formikProps

    console.log(values)
        return (
            <div className='form'
            id='contact'>
                <div className='form-title'>
                    <h1>Got A Home Project In Mind?</h1>
                    <h2>Let us help complete that project for you. Fill out the form to schedule an estimate.</h2>
                </div>
                <div className='form-form'>
                    <Form className='form-container' onSubmit={handleSubmit} >
                        <div className='form-section1'>
                            <label htmlFor='name'>Full Name</label>
                            <Field
                                type='text'
                                name='name'
                                id='name'
                                // placeholder='Enter Full Name'
                                onChange={handleChange}
                                value={values.name}
                                onBlur={handleBlur}
                                className='fs1-name'
                                size='55'
                             />
                             {touched.name && errors.name && (
                                 <p>{errors.name}</p>
                             )}
                        </div>
                        <div className='form-section1'>
                            <label htmlFor='phone'>Phone</label>
                            <Field
                                type='text'
                                name='phone'
                                id='phone'
                                // placeholder='Enter Phone Number'
                                onChange={handleChange}
                                value={values.phone}
                                onBlur={handleBlur}
                                className='fs1-name'
                             />
                             {touched.phone && errors.phone && (
                                 <p>{errors.phone}</p>
                             )}
                        </div>
                        <div className='form-section1'>
                            <label htmlFor='email'>Email</label>
                            <Field
                                type='email'
                                name='email'
                                id='email'
                                // placeholder='Enter Your Email'
                                onChange={handleChange}
                                value={values.email}
                                onBlur={handleBlur}
                                className='fs1-name'
                             />
                             {touched.email && errors.email && (
                                 <p>{errors.email}</p>
                             )}
                        </div>
                        <button className='send-info' type='submit' disabled={isSubmitting} >Get Started</button>
                    </Form>
                </div>
            </div>
        )
}

export default Formik(LpForm)