import css from "./Contact.module.css";
import { IoPersonSharp } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contact = ({ name, number, id, deleteContact }) => {
	return (
		<div className={css.contactCard}>
			<div className={css.contactData}>
				<p>
					<span>
						<IoPersonSharp />
					</span>
					<span className={css.contactValue}>{name}</span>
				</p>
				<p>
					<span>
						<BsFillTelephoneFill />
					</span>
					<span className={css.contactValue}>{number}</span>
				</p>
			</div>
			<button type="button" onClick={() => deleteContact(id)}>
				Delete
			</button>
		</div>
	);
};

export default Contact;
