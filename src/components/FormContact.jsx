import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup';

const schema= Yup.object().shape({
    email: Yup.string().email().required(),
    names: Yup.string().required(),
    comments: Yup.string().required()
});

export const FormContact = () => {

    const { handleSubmit, handleChange, handleReset,errors, values } = useFormik({
        initialValues: {
            email: '',
            names: '',
            comments: ''
        },
        onSubmit: (values) => {
            //console.log(values)
        },
        validationSchema: schema,
    })

    console.log(values);

    return (
        <div className="container mb-5">
            <form onSubmit={handleSubmit} onReset={handleReset}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder='email'
                        name='email'
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <span className='text-danger'>email error</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="names and last names" className="form-label">names and last names</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder='names'
                        name='names'
                        value={values.names}
                        onChange={handleChange}
                    />
                    {errors.names && <span className='text-danger'>names error is required</span>}
                </div>
                <div className="mb-3">
                    <label htmlFor="comments" className="form-label">comments</label>
                    <textarea
                        className="form-control"
                        id="comments" rows="3"
                        name='comments'
                        value={values.comments}
                        onChange={handleChange}
                    >
                    </textarea>
                    {errors.comments && <span className='text-danger'>error comment is required</span>}
                </div>

                <button type="submit" className="btn btn-danger m-2">send </button>
                <button type="reset" className="btn btn-warning">clean </button>
            </form>
        </div>
    )
}
