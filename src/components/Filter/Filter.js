import PropTypes from 'prop-types';
import { FilterLable } from './Filter.styled';
import { FilterInput } from './Filter.styled';

const Filter = ({ value, onChange }) => (
	<FilterLable>
		Find contacts by name
		<FilterInput
			type="text"
			value={value}
			onChange={onChange}
			placeholder="Name contact"
		/>
	</FilterLable>
);

Filter.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func.isRequired,
};

export default Filter;
