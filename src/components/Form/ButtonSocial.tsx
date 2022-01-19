import React from "react"

interface IProps {
    social: "facebook" | "google",
    disabled: boolean | undefined;
    children: React.ReactNode;
    onClick: ((event: React.MouseEvent<HTMLElement, MouseEvent>) => void) | (() => void ) | undefined;
}

const ButtonSocial = ({ social, onClick, disabled, children }: IProps) => {
    return (
        <div onClick={onClick ? onClick : () => {}} className={`social-auth-button ${social}`}>
            {children}
        </div>
    )
}

export default ButtonSocial
