import React from 'react'
import './App.css';

import Name from './Name';

function Formtext() {
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  })

  function handleSubmit (e){
    e.preventDefault()
  }

  function handleChange ({target}){
    const {id, value} = target;
    setForm({ ...form, [id]: value})
  }

  return (
    <div>
    <form onSubmit={handleSubmit}>
    <label htmlFor="nome">Digite seu nome:</label>
    <input type="text" id="nome" value={form.nome} onChange={handleChange}/>
    <input type="email" id="email" value={form.email} onChange={handleChange}/>
    {/* {form.name}
    {form.email} */}
 
    <button type='submit'>Enviar</button>
   
    </form>
   

        <Name nome={form.nome} email={form.email}/>
       
    </div>
    
  );
}

export default Formtext;
