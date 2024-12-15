// import { useDispatch, useSelector } from 'react-redux';
// import { useEffect } from 'react';
// import { fetchContacts, selectContacts } from '../redux/contacts/slice';

// const ContactsPage = () => {
//   const dispatch = useDispatch();
//   const contacts = useSelector(selectContacts);

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Your Contacts</h1>
//       <ul>
//         {contacts.map((contact) => (
//           <li key={contact.id}>{contact.name} - {contact.phone}</li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default ContactsPage;

// import React from 'react';

const ContactsPage = () => {
  return (
    <div>
      <h1>Your Contacts</h1>
      {/* Тут компонент для відображення та управління контактами */}
    </div>
  );
};

export default ContactsPage;

