import { useState } from "react";
import "./FormInput.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"

interface IProps {
    name: string;
    type: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({ name, type, onChange }: IProps) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const passwordInput = (
        <>
            <input type={isPasswordVisible ? "text" : "password"} name={name} onChange={onChange} />
            
            <button className="password-icon-button">
                {
                    isPasswordVisible ? <AiFillEyeInvisible /> : <AiFillEye />
                }
            </button>
        </>
    )

    return (
        <div className="input-field">
            {
                type === "password" || type === "confirmPassword" ? passwordInput : <input type="text" name={name} onChange={onChange} />
            }
        </div>
    )
}

export default FormInput
