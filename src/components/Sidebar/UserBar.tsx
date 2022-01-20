import { useRef, useState, CSSProperties, useEffect } from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logoutAction } from "../../redux/actions/authActions";
import "./UserBar.css";

interface IProps {
    isUserBarVisible: boolean;
}

const UserBar = ({ isUserBarVisible }: IProps) => {

    const dispatch = useDispatch()
    const wrapperRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const navigate = useNavigate()

    const signout = () => {
        dispatch(logoutAction(navigate))
    }

    let wrapperStyles: CSSProperties = {
        overflow: "hidden",
        height: 0,
    }

    useEffect(() => {
        if (isUserBarVisible) {
            wrapperRef.current!.style.height = listRef.current!.offsetHeight + 'px';
        } else {
            wrapperRef.current!.style.height = 0 + 'px';
        }
        
    }, [isUserBarVisible])

    

    return <div style={wrapperStyles} className="user-bar" ref={wrapperRef}>
        <ul className="user-bar-list" ref={listRef}>
            <li onClick={signout} className="user-bar-item">
                <FaSignOutAlt />
                <span className="user-bar-text">Sign out</span>
            </li>
        </ul>
    </div>;
};

export default UserBar;
