import React from 'react'
import Header from '../components/Header'

const notImplemented: React.FC = () => {
  return (
    <main
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '100px'
      }}
    >
      <Header />
      <div
        style={{
          width: '100vw',
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          gap: '40px'
        }}
      >
        <h1 style={{ color: '#3F3D56', textAlign: 'center' }}>
          Pagina ainda não implementada.
        </h1>
        <img
          style={{ width: '50vw' }}
          src="./undraw_add_information_j2wg.svg"
          alt="man creating a website illustration "
        />
      </div>
    </main>
  )
}

export default notImplemented
