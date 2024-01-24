import React from 'react'
import { useFormik} from "formik";
//import styles from '../../styles/Verification.module.css'
import styles from '../../styles/login.module.css'
import Link from 'next/link';
import { useRouter } from 'next/router';
import { uservalidation3 } from '../Validations/uservalidation1';

//let errors={};
const Verification = () => {
  const router=useRouter();
//   const userValidation=(values)=> {
//       if(!values.num1&&!values.num1&&!values.num1&&!values.num1&&!values.num1&&!values.num1&&!values.num1){
//         return "Enter all fields";
//       }
// }
const initialValues = {
  num1:"",
  num2:"",
  num3:"",
  num4:"",
  num5:"",
  num6:""
};

  function handleInput(event){
      if (!/[0-9a-zA-Z]/.test(event.key)) {
        event.preventDefault();
      }
  }
  
  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
  useFormik({
    initialValues,
    validationSchema: uservalidation3,
    validateOnChange: true,
    validateOnBlur: false,
    //// By disabling validation onChange and onBlur formik will validate on submit.
    onSubmit: (values, action) => {

      console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
      //// to get rid of all the values after submitting the form
      router.push('/forgot/resetpassword')
      action.resetForm();
    },
  });

  const inputValidation=()=>{
    return errors.num1 && errors.num2 && errors.num3 && errors.num4 &&errors.num5&& errors.num6 
  }
  return (
    <>
    
    <div className={styles.signin}>
        <div className={styles.leftLogin}>
            
        </div>
        <div className={styles.box}>
           <div className={styles.wrapper}>
            <h1>Verification Code</h1>
         
        <form onSubmit={handleSubmit}>
        <div className={styles.text99}>
          <h4>Enter Your Verification Code</h4>
        </div>
        <div className={styles.inputBox1}>
               <input
                  className={styles.inputLogin1}
                  type="text"
                  name="num1"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.num1}
                  maxLength={1}
                  onKeyPress={handleInput}
                /> 
            <input
                  className={styles.inputLogin1}
                  type="text"
                  name="num2"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.num2}
                  maxLength={1}
                  onKeyPress={handleInput}
                /> 
            <input
                  className={styles.inputLogin1}
                  type="text"
                  name="num3"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.num3}
                  maxLength={1}
                  onKeyPress={handleInput}
                /> 
            <input
                  className={styles.inputLogin1}
                  type="text"
                  name="num4"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.num4}
                  maxLength={1}
                  onKeyPress={handleInput}
                /> 
            <input
                  className={styles.inputLogin1}
                  type="text"
                  name="num5"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.num5}
                  maxLength={1}
                  onKeyPress={handleInput}
                /> 
            <input
                  className={styles.inputLogin1}
                  type="text"
                  name="num6"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.num6}
                  maxLength={1}
                  onKeyPress={handleInput}
                /> 
            </div>
            {inputValidation()? (
                      <p style={{color:'red',marginLeft:'20px'}}>Enter all fields</p>
                    ) : null}
         <Link href='/forgot/resetpassword'> 
            <button  type='submit' style={{marginTop:'50px'}}  className={styles.btn}>Submit</button>
         </Link>
    </form>
         </div>
         </div>
    </div>
    </>
  )
}

export default Verification
