import { Field, Form, Formik } from "formik";
import styles from "./RegistrationForm.module.css";
import { useDispatch } from "react-redux";
import toast from "react-hot-toast";
import { FcDebian } from "react-icons/fc";


import { register } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, options) => {
    dispatch(register(values))
      .unwrap()
      .then((res) => {
        toast(`Welcome ${res?.user?.name}`);
      })
      .catch(() => {
        toast.error("Спробуй ще раз!");
      });
    options.resetForm();
  };
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };
  return (
    <div className={styles.wrapper}>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form className={styles.form}>
          <Field
            className={styles.field}
            name="name"
            type="text"
            placeholder="Enter name"
            required
          />
          <Field
            className={styles.field}
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
          <Field
            className={styles.field}
            name="password"
            type="password"
            placeholder="Enter password"
            required
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

export default RegistrationForm;