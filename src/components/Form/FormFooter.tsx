import GoogleAuth from "./GoogleAuth"
import FacebookAuth from "./FacebookAuth"
import "./FormFooter.css"

const FormFooter = () => {
    return (
        <div className="form-footer">
            <div className="form-footer-text-wrapper">
                <span className="line"></span>
                <span className="form-footer-text">Or sign in using:</span>
                <span className="line"></span>
            </div>
            <div className="form-footer-buttons">
                <GoogleAuth />
                <FacebookAuth />
            </div>
        </div>
    )
}

export default FormFooter
