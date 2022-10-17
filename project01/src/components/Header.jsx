import style from './Header.module.css'
import logo from '../assets/images/Ignite.svg'
export function Header(){
    return (
        <header className={style.header}>
            <img 
             src={logo} 
             alt="Logo Ignite" />
            <strong>Ignite Feed</strong>
        </header>
    )
}