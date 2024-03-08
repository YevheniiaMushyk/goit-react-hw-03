import css from "./ContactList.module.css";
import Contact from "../Contact/Contact";

const ContactList = ({ contacts, deleteContact }) => {
	return (
		<ul className={css.list}>
			{contacts.map((contact) => {
				return (
					<li className={css.item} key={contact.id}>
						<Contact name={contact.name} number={contact.number} id={contact.id} deleteContact={deleteContact} />
					</li>
				);
			})}
		</ul>
	);
};

export default ContactList;
