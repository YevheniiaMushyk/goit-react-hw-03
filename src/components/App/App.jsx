import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import contacts from "../ContactList/contacs.json";
import { useState, useEffect } from "react";
import { nanoid } from "nanoid";

function App() {
	const [contactsList, setcontactsList] = useState(() => {
		const savedContacts = window.localStorage.getItem("saved-contacts");
		return savedContacts ? JSON.parse(savedContacts) : contacts;
	});

	useEffect(() => {
		window.localStorage.setItem("saved-contacts", JSON.stringify(contactsList));
	}, [contactsList]);

	// Додавання нового контакту
	const addNewContact = (formData) => {
		const addContactId = {
			...formData,
			id: nanoid(),
		};

		setcontactsList((prevState) => [...prevState, addContactId]);
	};

	// Видалення контакту
	const deleteContact = (contactId) => {
		setcontactsList((prevState) => prevState.filter((contact) => contact.id !== contactId));
	};

	// Фільтрація контактів при зміні searchValue
	const [searchValue, setSearchValue] = useState("");
	const filteredContactsList = contactsList.filter((contact) => contact.name.toLowerCase().includes(searchValue.toLowerCase()));

	return (
		<div>
			<h1 className={css.title}>Phonebook</h1>
			<ContactForm addNewContact={addNewContact} />
			<SearchBox searchValue={searchValue} setSearchValue={(evt) => setSearchValue(evt.target.value)} />
			<ContactList contacts={searchValue ? filteredContactsList : contactsList} deleteContact={deleteContact} />
		</div>
	);
}

export default App;
