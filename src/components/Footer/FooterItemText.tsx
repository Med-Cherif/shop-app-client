import { Link } from "react-router-dom";

interface IProps {
    text: string;
    to?: string
}

const FooterItemText = ({ text, to }: IProps) => {
  return typeof to === "string" ? <Link className='footer-section-item-text' to="/">{text}</Link> : <span className='footer-section-item-text'>{text}</span>
}

export default FooterItemText