import { useState } from 'react'
import { useEffect } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div>
          <img  />
      </div>
      <h1>Bienvenue sur Poulpadémie</h1>
      <h2>Connectez-vous</h2>
      <table className='login'>
        <tr>
          <td>Identifiant</td>
          <td>Mot de passe</td>
        </tr>
        <tr>
          <td><input type="text" placeholder="Identifiant" /></td>
          <td><input type="text" placeholder="Mot de passe" /></td>
        </tr>
        <tr>
          <td colSpan="2">
            <button type='submit'>Se connecter</button>
          </td>
        </tr>
      </table>
    </>
  )
}

export default App
