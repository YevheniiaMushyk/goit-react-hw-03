import css from "./ContactForm.module.css";
import { nanoid } from "nanoid";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
const initialValues = {
	username: "",
	number: "",
};

const ContactForm = () => {
	const nameFieldId = nanoid();
	const numberFieldId = nanoid();
	const handleFormSubmit = (values, actions) => {
		console.log(values);

		actions.resetForm();
	};
	// onSubmit={() => {}}

	return (
		<Formik initialValues={initialValues} onSubmit={handleFormSubmit}>
			<Form className={css.form}>
				<div>
					<label className={css.label} htmlFor={nameFieldId}>
						Name
					</label>
					<Field className={css.field} id={nameFieldId} type="text" name="username" required />
				</div>
				<div>
					<label className={css.label} htmlFor={numberFieldId}>
						Number
					</label>
					<Field className={css.field} id={numberFieldId} type="tel" name="number" required />
				</div>
				<button className={css.button} type="submit">
					Add contact
				</button>
			</Form>
		</Formik>
	);
};

export default ContactForm;
