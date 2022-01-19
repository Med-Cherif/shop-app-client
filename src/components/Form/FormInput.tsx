import { useState } from "react";
import "./FormInput.css";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai"

interface IProps {
    name: string;
    type: string;
    placeholder: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const FormInput = ({ name, type, placeholder, onChange }: IProps) => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isFocusField, setIsFocusField] = useState(false)

    const handleFocusOnInput = () => setIsFocusField(true)
    const handleBlurOnInput = () => setIsFocusField(false)  
    
    const togglePasswordVisibility = () => setIsPasswordVisible(prev => !prev)

    const passwordInput = (
        <>
            <input 
                placeholder={placeholder} 
                type={isPasswordVisible ? "text" : "password"} 
                name={name} 
                onChange={onChange} 
                onFocus={handleFocusOnInput}
                onBlur={handleBlurOnInput}
            />
            
            <button type="button" className="password-icon-button">
                {
                    isPasswordVisible ? <AiFillEyeInvisible onClick={togglePasswordVisibility} /> : <AiFillEye onClick={togglePasswordVisibility} />
                }
            </button>
        </>
    )

    return (
        <div className={`input-field ${isFocusField ? "focus" : ""}`}>
            {
                type === "password" || type === "confirmPassword" ? passwordInput 
                : <input 
                    placeholder={placeholder} 
                    type="text" 
                    name={name} 
                    onChange={onChange} 
                    onFocus={handleFocusOnInput}
                    onBlur={handleBlurOnInput}
                />
            }
        </div>
    )
}

export default FormInput
