import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import ContactForm from "../components/ContactForm/ContactForm";
import ContactsList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";
// import styles from './ContactsPage.module.css';
import { Container, Typography } from '@mui/material';

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
      .then(response => {
        console.log('Contacts loaded:', response.payload);
      })
      .catch(error => {
        console.error('Error loading contacts:', error);
      });
  }, [dispatch]);

  return (
    <Container maxWidth="sm" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom>
        Your Contacts
      </Typography>
      <ContactForm />
      <SearchBox />
      <ContactsList />
    </Container>
  );
};

export default ContactsPage;

// return (
    // <div className={styles.contactsPage}>
      // <h1 className={styles.title}>Your Contacts</h1>
      // <ContactForm />
      // <SearchBox />
      // <ContactsList />
    // </div>
  // );