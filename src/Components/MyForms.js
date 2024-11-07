import React from 'react'
import './MyForms.css'
import { useState } from 'react'

const MyForms = ({user}) => {
//6 controlled inputs

//3 gerenciamento de dados
const [name, setName] = useState(user ? user.name : '');
const [email, setEmail] = useState(user ? user.email : '');

const [bio, setBio] = useState(user ? user.bio : '');
const [role, setRole] = useState(user ? user.role : '');

const handleName = (e) =>{
    setName(e.target.value);
}

const handleSubmit = (e) => {
 e.preventDefault();
 console.log("Enviando o formulario");
 console.log(name, email,bio,role);

 //validar e enviar apara api

 //limpar form
 setEmail("");
 setName("");
 setBio("");
};

  return (
    <div>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name: </label>
                <input type="text"
                 name="name"
                  placeholder="Digite seu nome" 
                  onChange={handleName} value={name} 
                  />
            </div>
            {/* simplificao de input*/}
            <label>
                <span>E-mail</span>
                <input
                 type="text"
                  name="email" 
                  placeholder='Digite seu e-mail' 
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                   />
            </label>
            {/* texte area */}
            <label>
                <span>Bio:</span>
                <textarea name="bio"
                 placeholder='Descriçao do usuario' 
                 onChange={(e) => setBio(e.target.value)} value={bio}></textarea>
            </label>
             {/* select */}
             <label>
                <span>Select</span>
                <select name="role" value={role} onChange={(e) => setRole(e.target.value)}>
                    <option value="user">Usuario</option>
                    <option value="editor">Editor</option>
                    <option value="admin">Administrador</option>
                </select>
             </label>
            <input type="submit" value="Enviar"/>
        </form>
    </div>
  )
}

export default MyForms