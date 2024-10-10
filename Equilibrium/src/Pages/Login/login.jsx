import React from 'react'

import { useState } from 'react'
import "./login.css"

const login = () => {

        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");

        const handleSubmit = (event) => {
            event.preventDefault()

            alert("Dados enviados:" + username + " - " + password)
        };
  return (
    <div className="container">
        <form onSubmit={handleSubmit}>
            <h1>Faça seu login</h1>
            <div>
               <input type="email" placeholder="E-mail" onChange={(e) => setUsername(e.target.value)}/>
            </div>
            <div>
                <input type="password" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} />
            </div>

            <div className="recall-forget">
                <label>
                    <input type="checkbox" />
                    Lembre de mim
                </label>
                <a href="#">Esqueceu a senha?</a>
            </div>

            <button>Entrar</button>

            <div className="signup-link">
                <p>Não  tem uma conta? <a href="#">Registre-se</a></p>
            </div>
        </form>
    </div>
  )
}

export default login
