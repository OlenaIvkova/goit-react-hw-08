// import React from 'react';
import { Card, CardContent, Typography, Button, CardActions } from '@mui/material';

const ContactCard = ({ contact, onDelete, onEdit }) => (
  <Card sx={{ marginBottom: 2 }}>
    <CardContent>
      <Typography variant="h5">{contact.name}</Typography>
      <Typography variant="body2" color="text.secondary">
        Email: {contact.email}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Phone: {contact.phone}
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" onClick={() => onEdit(contact)}>Edit</Button>
      <Button size="small" color="error" onClick={() => onDelete(contact.id)}>Delete</Button>
    </CardActions>
  </Card>
);

export default ContactCard;