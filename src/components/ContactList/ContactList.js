import PropTypes from 'prop-types';
import s from './ContactList.module.css';
import ContactItem from '../ContactItem/ContactItem';

const ContactList = ({ contacts, onDeleteContact }) => (
	<ul className={s.list}>
		{contacts.map(({ id, name, number }) => (
			<ContactItem
				key={id}
				id={id}
				name={name}
				number={number}
				onDeleteContact={onDeleteContact}
			/>
		))}
	</ul>
);

ContactList.propTypes = {
	contacts: PropTypes.array.isRequired,
	onDeleteContact: PropTypes.func.isRequired,
};

export default ContactList;
