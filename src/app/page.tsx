
"use client"; 

import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  function handleLogin() {
    const correctEmail = 'eduardo.lino@pucpr.br';
    const correctPassword = '123456';

    if (email === correctEmail && password === correctPassword) {
      setMessage('Acessado com sucesso!');
    } else {
      setMessage('Usuário ou senha incorretos!');
    }
  }

  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Tela de login simples em Next.js com TypeScript" />
      </Head>

      <div className="container">
        <div className="loginCard">
          <h1>Login</h1>

          <div className="inputGroup">
            <label htmlFor="email">E-mail:</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Digite seu e-mail"
            />
          </div>

          <div className="inputGroup">
            <label htmlFor="password">Senha:</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha"
            />
          </div>

          <button onClick={handleLogin}>Acessar</button>

          {message && <p className="message">{message}</p>}
        </div>
      </div>

      <style jsx>{`
        .container {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 100vh;
          background-color: #f0f2f5;
          padding: 0 1rem;
        }

        .loginCard {
          background: #ffffff;
          padding: 2rem;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
          width: 100%;
          max-width: 400px;
        }

        .loginCard h1 {
          text-align: center;
          margin-bottom: 1.5rem;
          color: #333;
        }

        .inputGroup {
          margin-bottom: 1rem;
          display: flex;
          flex-direction: column;
        }

        .inputGroup label {
          margin-bottom: 0.5rem;
          font-weight: 500;
          color: #555;
        }

        .inputGroup input {
          padding: 0.75rem 1rem;
          font-size: 1rem;
          border: 1px solid #ccc;
          border-radius: 4px;
          background-color: #f6f6f6; /* Fundo cinza claro */
          transition: border-color 0.2s;
        }

        /* Forçando a cor do texto para os inputs do tipo password */
        .inputGroup input[type="password"] {
          color: #000;
        }

        .inputGroup input:focus {
          border-color: #0070f3;
          outline: none;
        }

        button {
          width: 100%;
          padding: 0.75rem;
          font-size: 1rem;
          border: none;
          border-radius: 4px;
          background-color: #0070f3;
          color: #fff;
          cursor: pointer;
          transition: background-color 0.3s;
        }

        button:hover {
          background-color: #005bb5;
        }

        .message {
          text-align: center;
          margin-top: 1rem;
          color: #333;
          font-weight: 500;
        }
      `}</style>
    </>
  );
}
