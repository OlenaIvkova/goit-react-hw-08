import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchContacts } from '../redux/contacts/operations';
import ContactForm from "../components/ContactForm/ContactForm";
import ContactsList from "../components/ContactList/ContactList";
import SearchBox from "../components/SearchBox/SearchBox";

const ContactsPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts())
      .then(response => {
        console.log('Контакти завантажено:', response.payload);
      })
      .catch(error => {
        console.error('Помилка завантаження контактів:', error);
      });
  }, [dispatch]);

  return (
    <>
      <ContactForm />
      <SearchBox /> {}
      <ContactsList />
    </>
  );
};

export default ContactsPage;