interface IProps {
    status: null | 'success' | 'error' | 'loading';
    Loading?: React.ReactNode;
    Error?: React.ReactNode;
    Success?: React.ReactNode;
}

const Status = ({ status, Loading, Error, Success }: IProps) => {
    return <>
        {
            status === "loading" ? Loading || null :
            status === "error" ? Error || null :
            status === "success" ? Success : 
            null            
        }
    </>
}

export default Status