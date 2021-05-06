import React from 'react'
import './App.css';


function Name({nome, email}) {
    return (
        <>
            <p>Meu nome é: {nome}</p>
            <p>Meu e-mail é: {email}</p>
        </>
    )
}

export default Name
