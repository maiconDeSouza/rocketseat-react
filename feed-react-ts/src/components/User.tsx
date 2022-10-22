import  './User.module.css'

interface UserProps{
    name: string;
    status: string;
}

export function User({name, status}: UserProps){
    return (
        <>
            <strong>{name}</strong>
            <span>{status}</span>
        </>
    )
}