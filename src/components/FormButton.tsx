import "./FormButton.css"

interface IProps {
    loading: boolean;
    text: string;
    disabled: boolean
}

const FormButton = ({ loading, text, disabled }: IProps) => {
    return (
        <div className="submit-button-wrapper">
            <button 
                className="submit-button" 
                type="submit"
                disabled={disabled}
            >
                {loading ? "Loading..." : text}
            </button>
        </div>
    )
}

export default FormButton