import  './User.module.css'

export function User({name, status}){
    return (
        <>
            <strong>{name}</strong>
            <span>{status}</span>
        </>
    )
}