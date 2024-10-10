import React from 'react'

const login = () => {
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
            <button>Entrar</button>
        </form>
    </div>
  )
}

export default login
