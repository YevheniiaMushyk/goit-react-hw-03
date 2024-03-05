import css from "./App.module.css";
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import contacts from "../ContactList/contacs.json";
import { useState, useEffect } from "react";

function App() {
	// Обробка сабміту форми при додаванні нового контакту
	// const [contactValue, setcontactValue] = useState("");
	// const addNewContact = (formData) => {
	// 	// Виконуємо необхідні операції з даними
	// 	console.log(formData);
	// };

	// Обробка інпуту для фільтрації контактів
	const [searchValue, setSearchValue] = useState("");

	const searchInput = (evt) => {
		setSearchValue(evt.target.value);
	};
	// Фільтрація контактів при зміні searchValue
	const [filteredContacts, setFilteredContacts] = useState(contacts);

	useEffect(() => {
		const searchValueLowerCase = searchValue.toLocaleLowerCase();
		const filtered = contacts.filter((contact) => contact.name.toLocaleLowerCase().includes(searchValueLowerCase));
		setFilteredContacts(filtered);
	}, [searchValue]);

	return (
		<div>
			<h1 className={css.title}>Phonebook</h1>
			<ContactForm />
			<SearchBox searchValue={searchValue} searchInput={searchInput} />
			<ContactList contacts={filteredContacts} />
		</div>
	);
}

export default App;
