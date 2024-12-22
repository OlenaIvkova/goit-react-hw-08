import { Field, Form, Formik } from "formik";
import styles from "./LoginForm.module.css";
import { useDispatch } from "react-redux";
import { logIn } from "../../redux/auth/operations";
import { FcDebian } from "react-icons/fc";


const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(logIn(values));
    options.resetForm();
  };
  const initialValues = {
    email: "",
    password: "",
  };

  return (
    <div className={styles.wrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={styles.form}>
          <Field className={styles.field} name="email" placeholder="Enter email" />
          <Field
            className={styles.field}
            name="password"
            type="password"
            placeholder="Enter password"
          />
          <div className={styles.buttonBox}>
            <button className={styles.button} type="submit">
              <span>Submit</span>
              <FcDebian size="20" className={styles.icon} />
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;