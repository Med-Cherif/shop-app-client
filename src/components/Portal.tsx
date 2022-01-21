import { createPortal } from "react-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "./Portal.css";

const Portal = () => {
  const { loading } = useSelector((state: RootState) => state.auth)

  return (loading.isLoading && loading.type === 'sign') ? createPortal(
        <div className={`cover`}></div>, 
        document.getElementById('portal') as HTMLDivElement
    ) : null;
};

export default Portal;