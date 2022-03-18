interface IProps {
    children: JSX.Element[] | JSX.Element,
    title: string
}

const FooterSection = ({ children, title }: IProps) => {
  return (
    <div className='footer-section'>
        <h2 className="footer-section-title">{title}</h2>
        <ul className="footer-section-list">
            {children}
        </ul>
    </div>
  )
}

export default FooterSection