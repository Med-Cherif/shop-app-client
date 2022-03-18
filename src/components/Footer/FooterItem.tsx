interface IProps {
    children: JSX.Element;
}

const FooterItem = ({ children }: IProps) => {
  return (
    <li className='footer-section-item'>
        {children}
    </li>
  )
}

export default FooterItem