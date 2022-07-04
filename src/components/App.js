import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';
import { Box } from './Box';

class App extends Component {
	state = {
		contacts: [
			{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
			{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
			{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
			{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
		],
		filter: '',
		name: '',
		number: '',
	};

	addContact = ({ name, number }) => {
		const contact = {
			id: uuidv4(),
			name,
			number,
		};

		const normolizedName = name.toLowerCase();
		if (
			this.state.contacts.find(
				contact => contact.name.toLowerCase() === normolizedName,
			)
		) {
			return alert(`${name} is already in contacts`);
		}

		this.setState(({ contacts }) => ({
			contacts: [contact, ...contacts],
		}));
	};

	changeFilter = e => {
		this.setState({ filter: e.currentTarget.value });
	};

	getVisibleContacts = () => {
		const { contacts, filter } = this.state;
		const normolizedFiter = filter.toLowerCase();
		return contacts.filter(contact =>
			contact.name.toLowerCase().includes(normolizedFiter),
		);
	};

	deleteContact = contactId => {
		this.setState(prevState => ({
			contacts: prevState.contacts.filter(contact => contact.id !== contactId),
		}));
	};

	render() {
		const visibleContacts = this.getVisibleContacts();
		return (
			<Box display="flex" alignItems="center" flexDirection="column">
				<Box>
					<h1>Phonebook</h1>
					<ContactForm onSubmit={this.addContact} />
				</Box>
				<h2>Contacts </h2>
				<Filter value={this.filter} onChange={this.changeFilter} />
				<ContactList
					contacts={visibleContacts}
					onDeleteContact={this.deleteContact}
				/>
			</Box>
		);
	}
}
export default App;
