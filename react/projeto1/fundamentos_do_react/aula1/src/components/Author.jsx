import styles from './Author.module.css'

export function Author({nome, funcao}){
    return (
        <>
            <strong>{nome}</strong>
            <span>{funcao}</span>
        </>
    )
}