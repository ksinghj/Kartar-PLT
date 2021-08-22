import React from 'react'
import styles from './App.module.scss'
import BottomNav from '../components/BottomNav'

function App() {
  return (
    <div className={styles.App}>
      <header className="App-header">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
      <footer>
        <BottomNav />
      </footer>
    </div>
  )
}

export default App
