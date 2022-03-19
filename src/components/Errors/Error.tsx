
interface IProps {
    error: null | string | string[];
}

const Error = ({ error }: IProps) => {

    const displayError = () => {
        if (!error) return null;

        if (typeof error === "string") {
            return <p className="error-message">{error}</p>
        }

        return error.map((singleError) => (
            <p className="error-message">{singleError}</p>
        ))
    }
    return (
        <div className="error-wrapper">
            {displayError()}
        </div>
    )
}

export default Error