import React from 'react'

import { useState } from 'react'
import "./login.css"

const login = () => {

        const [username, setUsername] = useState("");
        const [password, setPassword] = useState("");
  return (
    <div className="container">
        <form>
            <h1>Faça seu login</h1>
            <div>
               <input type="email" placeholder="E-mail"/>
            </div>
            <div>
                <input type="password" placeholder='Senha' />
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
