import PropTypes from 'prop-types';
import { Item } from './ContactItem.styled';
import { ItemText } from './ContactItem.styled';
import { ItemButton } from './ContactItem.styled';

const ContactItem = ({ id, name, number, onDeleteContact }) => (
	<Item>
		<ItemText>{name}</ItemText>
		<ItemText>{number}</ItemText>
		<ItemButton onClick={() => onDeleteContact(id)}>Delete</ItemButton>
	</Item>
);

ContactItem.propTypes = {
	id: PropTypes.string.isRequired,
	name: PropTypes.string.isRequired,
	number: PropTypes.string.isRequired,
	onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
