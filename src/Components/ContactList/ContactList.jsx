import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/operations';
import { getVisibleContacts } from '../../redux/selector';
import { FiPhone } from 'react-icons/fi';
import { List, Item, Btn, TextContacts } from './ContactList.styled'



export default function ContactList() {
  const contacts = useSelector(getVisibleContacts);
  const dispatch = useDispatch();

  const onDeleteContact = id => dispatch(deleteContact(id));



    return (
      <List>
        {contacts.map(({ name, number, id }) =>
                
          <Item key={id}>
            <TextContacts>
              <FiPhone size="15" />
              {name}: {number}
            </TextContacts>
            <Btn
              type="button"
              onClick={() => onDeleteContact(id)}>
              Delete
            </Btn>
          </Item>
        )}

      </List>
    )
  
}