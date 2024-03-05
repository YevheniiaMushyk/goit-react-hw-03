import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts }) => {
	return (
		<ul className={css.list}>
			{contacts.map((contact) => {
				return (
					<li className={css.item} key={contact.id}>
						<Contact name={contact.name} number={contact.number} />
					</li>
				);
			})}
		</ul>
	);
};

export default ContactList;
