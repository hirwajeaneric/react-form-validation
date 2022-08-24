import React, { useState } from 'react'
import FormSignup from './FormSignup';
import FormSuccess from './FormSuccess';
import './Form.css';

const Form = () => {
    const [isSubmitted, setIsSubmtitted] = useState(false);

    function submitForm(){
        setIsSubmtitted(true);
    }
    
    return (
        <>
            <div className='form-container'>
                
                {/* The left side of the form */}
                <span className='close-bt'>x</span>
                <div className='form-content-left'>
                    <img className='form-img' src='img/img-2.svg' alt='spaceship' />
                </div>

                {/* The right side of the form */}
                {!isSubmitted ? (
                    <FormSignup submitForm={submitForm} />
                ):(
                    <FormSuccess />
                )
                }
            </div>
        </>
    )
}

export default Form