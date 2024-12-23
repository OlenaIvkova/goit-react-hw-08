import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import { TextField, Button, Box, Typography } from '@mui/material';
// import styles from './ContactForm.module.css';

const ContactForm = () => {
  const dispatch = useDispatch();

  const initialValues = { name: '', number: '' };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    number: Yup.string().required('Phone number is required'),
  });

  const handleSubmit = (values, { resetForm }) => {
    dispatch(addContact(values));
    resetForm();
  };

  return (
    <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={handleSubmit}>
      {({ handleChange, values, errors, touched }) => (
        <Form>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <Typography variant="h6">Add a new contact</Typography>
            <TextField
              label="Name"
              name="name"
              value={values.name}
              onChange={handleChange}
              error={touched.name && Boolean(errors.name)}
              helperText={touched.name && errors.name}
              fullWidth
            />
            <TextField
              label="Phone Number"
              name="number"
              value={values.number}
              onChange={handleChange}
              error={touched.number && Boolean(errors.number)}
              helperText={touched.number && errors.number}
              fullWidth
            />
            <Button type="submit" variant="contained" color="primary">
              Add Contact
            </Button>
          </Box>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;

// {/* <Form className={styles.form}> */}
        // <label>
          // Name:
          // <Field type="text" name="name" />
          // <ErrorMessage name="name" component="div" className={styles.error} />
        // </label>
        // <label>
          // Number:
          // <Field type="text" name="number" />
          // <ErrorMessage name="number" component="div" className={styles.error} />
        // </label>
        // <button typ/>e="submit">Add Contact</button>
      // </Form>