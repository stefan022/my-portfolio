import { email } from "../../constants/email.constant";
import { emailBody } from "../../constants/emailBody.constant";

export const sendEmail = `mailto:${email}?subject=Hi!&body=${encodeURIComponent(
	emailBody
)}`;
