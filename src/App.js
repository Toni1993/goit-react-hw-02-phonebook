import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
import s from './App.module.css';
import ContactForm from 'components/ContactForm/ContactForm';
import ContactList from 'components/ContactList/ContactList';
import Filter from 'components/Filter/Filter';

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
		console.log(this.state);
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
			<div>
				<h1 className={s.title}>Phonebook</h1>
				<ContactForm onSubmit={this.addContact} />
				<h2 className={s.title}>Contacts </h2>
				<Filter value={this.filter} onChange={this.changeFilter} />
				<ContactList
					contacts={visibleContacts}
					onDeleteContact={this.deleteContact}
				/>
			</div>
		);
	}
}
export default App;
