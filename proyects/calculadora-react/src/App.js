import './App.css';
import freecodecampLogo from './imagenes/freecodecamp-logo.png'

function App() {
  return (
    <div className='App'>
      <div className='freecodecamp-logo-container'>
        <img src={freecodecampLogo} className='freecodecamp-logo' alt='freecodecamp logo' />
      </div>
      <div className='contenedor-calculadora'>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div> 
        <div className='fila'></div>
      </div>
    </div>
  );
}

export default App;
