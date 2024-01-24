import React,{useState} from 'react'
import { useFormik} from "formik";
import { useRouter } from 'next/navigation';
import styles from '../../styles/login.module.css'
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import { uservalidation2
 } from '../Validations/uservalidation1';

const Resetpassword = () => {
   const [showPassword,setShowPassword] = useState(false);

   const handlePassword=()=>{
        setShowPassword(!showPassword);
   }

   const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
   };
 
   const { values, handleBlur, handleChange, handleSubmit, errors, touched } =
     useFormik({
       initialValues,
       validationSchema: uservalidation2,
       validateOnChange: true,
       validateOnBlur: false,
       //// By disabling validation onChange and onBlur formik will validate on submit.
       onSubmit: (values, action) => {
 
         console.log("🚀 ~ file: App.jsx ~ line 17 ~ App ~ values", values);
         //// to get rid of all the values after submitting the form
         router.push('/')
         action.resetForm();
       },
     });
 
   console.log(errors);
  // let userDeatails={ email: '', password1: '',password2:'' };
  // const userValidation=(values)=> {
  //   const errors = {};
  //   if (!values.email) {
  //     errors.email = 'Required';
  //   } else if (
  //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
  //   ) {
  //     errors.email = 'Invalid email address';
  //   }
  //   if(values.password1===values.password2){
  //       errors.passwordmatch='Password does not matched';
  //   }
  //   return errors;
  // }

  // const submitUserData=(values, { setSubmitting }) => {
  //   setTimeout(() => {
  //     alert(JSON.stringify(values, null, 3));
  //     setSubmitting(false);
  //   }, 400);
  // }
  return (
    <>
    {/* <div className={styles.logoContainer}>
        <div className={styles.logoinsta}></div>
        <div><h1 className={styles.title}><span className='text'>in</span>stanpe</h1></div>
    </div>  */}
    
    <div className={styles.signin}>
        <div className={styles.leftLogin}>
            
        </div>
        <blockquote className={styles.boxshodow}>
        <div className={styles.box}>
           <div className={styles.wrapper}>
            <h1>Reset password</h1>
            
        
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
            
            <div className={styles.inputBox1}>
                   <input
                     placeholder='New password'
                     className={styles.inputLogin}
                     type={
                        showPassword ? "text" : "password"
                    } 
                     name="password"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.password}
                     />
                     {errors.password && touched.password ? (
                      <p style={{color:'red',marginLeft:'20px'}}>{errors.password}</p>
                    ) : null}
                  <VisibilityOffOutlinedIcon onClick={handlePassword} className={styles.iconLogin}/>
            </div>
            <div className={styles.inputBox1}>
                   <input
                     placeholder='Confirm new password'  
                     className={styles.inputLogin}
                     type='password' 
                     name="confirm_password"
                     onChange={handleChange}
                     onBlur={handleBlur}
                     value={values.confirm_password}
                     />
                     {errors.confirm_password && touched.confirm_password ? (
                      <p style={{color:'red',marginLeft:'20px'}}>{errors.confirm_password}</p>
                    ) : null}
                  <KeyIcon className={styles.iconLogin}/>
            </div>
            <div className={styles.forgot}>
                <span>Forgot password?</span>
            </div>

            <button type='submit' className={styles.btn}>Submit</button>
            
        </form>
       
    </div>
    </div>
    </blockquote>
    </div>
    </>
  )
}

export default Resetpassword

