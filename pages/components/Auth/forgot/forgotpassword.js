import React,{useState} from 'react'
import { useFormik} from "formik";
import Link from 'next/link';
import styles from '../../styles/login.module.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import { uservalidation1 } from "../Validations/uservalidation1";
import { useRouter } from 'next/router';


const Forgotpassword = () => {
  const router =useRouter();

  const initialValues = {
    email: "",
  };

  const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
    useFormik({
      initialValues,
      validationSchema: uservalidation1,
      validateOnChange: true,
      validateOnBlur: false,
      //// By disabling validation onChange and onBlur formik will validate on submit.
      onSubmit: (values, action) => {

        console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
        //// to get rid of all the values after submitting the form
        router.push('/forgot/verification')
        action.resetForm();
      },
    });

  console.log(errors);

  return (
    <>
    
    <div className={styles.signin}>
        <div className={styles.leftLogin}>
            
        </div>
        <div className={styles.box}>
           <div className={styles.wrapper}>
            <h1>Forgot password</h1>
            
        <form onSubmit={handleSubmit}>
            <div className={styles.inputBox1}>
            <input
                    placeholder='Enter your email'
                    className={styles.inputLogin}
                    type="text"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                />
                 {errors.email && touched.email ? (
                      <p style={{color:'red',marginLeft:'20px'}}>{errors.email}</p>
                    ) : null}
                  <MailOutlineIcon className={styles.iconLogin}/>
            </div>
            {/* <Link href='/forgot/verification'> */}
               <button  type='submit' style={{marginTop:'50px'}}  className={styles.btn}>Submit</button>
            {/* </Link> */}
        </form>
    </div>
    </div>
    </div>
    </>
  )
}

export default Forgotpassword

