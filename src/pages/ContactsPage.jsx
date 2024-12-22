import ContactForm from "../components/ContactForm/ContactForm";
import ContactsList from "../components/ContactList/ContactList";

const ContactsPage = () => {
  return (
    <>
      <ContactForm />
      <ContactsList />
    </>
  );
};

export default ContactsPage;

// import { useDispatch, useSelector } from 'react-redux';
// import { fetchContacts } from '../redux/contacts/operations';
// import { selectFilteredContacts } from '../redux/filters/slice';

// const ContactsPage = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectFilteredContacts);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Контакти</h1>
//       <ul>
//         {contacts.map(contact => (
//           <li key={contact.id}>
//             {contact.name} - {contact.phone}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactsPage;