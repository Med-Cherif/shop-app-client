import "./Footer.css";
import FooterItem from "./FooterItem";
import FooterSection from "./FooterSection";
import FooterItemText from "./FooterItemText";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope, FaTiktok } from "react-icons/fa";
import { HiLocationMarker } from "react-icons/hi";
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer">
        <div className="footer-wrapper">
            <div className="footer-sections">
                <FooterSection title="About us">
                    <FooterItem children={<><BsFillTelephoneFill /> <FooterItemText text="+213 125 456 789" /></>} />
                    <FooterItem children={<><FaEnvelope /> <FooterItemText text="admin@admin.com" /></>} />
                    <FooterItem children={<><HiLocationMarker /> <FooterItemText text="Algeria, Biskra" /></>} />
                </FooterSection>

                <FooterSection title="Products">
                    <FooterItem children={<FooterItemText text="Phones" />} />
                    <FooterItem children={<FooterItemText text="Men Clothes" />} />
                    <FooterItem children={<FooterItemText text="Women Products" />} />
                    <FooterItem children={<FooterItemText text="Fashion" />} />
                    <FooterItem children={<FooterItemText text="Cosmetics & Beauty" />} />
                </FooterSection>

                <FooterSection title="About You">
                    <FooterItem children={<FooterItemText text="Your Account" />} />
                    <FooterItem children={<FooterItemText text="Your Cart" />} />
                    <FooterItem children={<FooterItemText text="Your Purchases" />} />
                </FooterSection>

                <FooterSection title="Follow us">
                    
                    <li className="social-icon">
                        <AiOutlineFacebook />
                    </li>
                    <li className="social-icon">
                        <AiOutlineInstagram />
                    </li>
                    <li className="social-icon">
                        <FaTiktok />
                    </li>
                </FooterSection>
            </div>
        </div>
    </div>
  )
}

export default Footer