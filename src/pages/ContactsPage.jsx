import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';  
import ContactForm from "../components/ContactForm/ContactForm";
import ContactsList from "../components/ContactList/ContactList";

const ContactsPage = () => {
  const dispatch = useDispatch();

  
  useEffect(() => {
    dispatch(fetchContacts()) 
      .then(response => {
        console.log(response.data); 
      })
      .catch(error => {
        console.error('Error fetching contacts:', error); 
      });
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <ContactsList />
    </>
  );
};

export default ContactsPage;