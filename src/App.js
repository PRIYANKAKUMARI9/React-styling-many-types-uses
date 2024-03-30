import './App.css';
import './Styleee.css'
import Inlinee from './component/Inlinee';
import style from './style.module.css'


function App() {
  return (
    <div className="App">
      <Inlinee/>
      <h1 className='anotherfile'>This is seprate file uses another file uses</h1>
      <h1 className={style.Modulecss}>Style.module.css uses hereee</h1>
    </div>
  );
}

export default App;
