import { useContext } from 'react'
import './App.css'
import { ColorContext } from './context/colorContext'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js'

export default function App() {
  const { theme, toggleTheme } = useContext(ColorContext)
  let style = {
    backgroundColor: `${theme === 'light' ? '#fff' : '#000'}`,
    color: `${theme === 'light' ? '#000' : '#fff'}`
  }
  return (
    <>
      <div className="container=fluid d-flex flex-column main-container" style={style}>
        <h1>Click me To toggle</h1>
        <button className='p-2 rounded btn btn-primary' onClick={toggleTheme}>Switch to : {theme === 'light' ? 'dark' : 'light'}</button>
      </div>
    </>
  )
}