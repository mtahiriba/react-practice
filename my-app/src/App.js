import './App.css';
// import StyleSheet from './Components/StyleSheet';
// import './Components/styleSheet.css'
// import style from './Components/styleSheet.module.css'
import Navbar from './Components/navebar'

function App() {
  return (
    <div className='App'>
      {/* <StyleSheet primary={true}/>
      <h1 className='error'>Error</h1>
      <h1 className={style.sucess}>Success</h1> */}
      <Navbar></Navbar>
    </div>
  );
}

export default App;
