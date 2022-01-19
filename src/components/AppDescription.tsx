import { useNavigate } from "react-router-dom"
import "./AppDescription.css";

const AppDescription = () => {
    const navigate = useNavigate()
    return (
        <div className="application-description-wrapper">
            <h2 className="application-description-heading">Welcome to <span>Bibo Shop</span></h2>
            <p className="application-description-text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore velit architecto voluptatibus cupiditate. Exercitationem, rem! Voluptate non aliquam sint aperiam, at ad quod, dolor delectus deleniti debitis quas modi, consequuntur consectetur amet error sequi recusandae.</p>
            <button onClick={() => navigate('/')} className="application-description-button">Back to Home page</button>
        </div>
    )
}

export default AppDescription
