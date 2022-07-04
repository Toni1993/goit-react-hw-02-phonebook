import PropTypes from 'prop-types';
import ContactItem from '../ContactItem/ContactItem';
import { List } from './ContactList.styled';

const ContactList = ({ contacts, onDeleteContact }) => (
	<List>
		{contacts.map(({ id, name, number }) => (
			<ContactItem
				key={id}
				id={id}
				name={name}
				number={number}
				onDeleteContact={onDeleteContact}
			/>
		))}
	</List>
);

ContactList.propTypes = {
	contacts: PropTypes.array.isRequired,
	onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
