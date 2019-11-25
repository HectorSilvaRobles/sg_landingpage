import React, {Component} from 'react'
import {withFormik, Form, Field} from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import './form.scss'

function LpForm(formikProps){
    const {errors, touched, values, handleBlur, handleChange, handleSubmit, isSubmitting} = formikProps
        return (
            <div className='form'>
                <div className='form-title'>
                    <h1>Got A Home Project In Mind?</h1>
                    <h2>Let us help complete that project for you. Fill out the form to schedule an estimate.</h2>
                </div>
                <div className='form-form'>
                    <Form className='form-container' onSubmit={handleSubmit} >
                        <div className='form-section1'>
                            <label htmlFor='name'>Name</label>
                            <Field
                                type='text'
                                name='name'
                                id='name'
                                placeholder='Enter Full Name'
                                onChange={handleChange}
                                value={values.name}
                                onBlur={handleBlur}
                                className='fs1-name'
                             />
                             {touched.name && errors.name && (
                                 <p>{errors.name}</p>
                             )}
                        </div>
                    </Form>
                </div>
            </div>
        )
}

export default LpForm