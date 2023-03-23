import RouteApp from './RouteApp';
import Intro from '../src/Pages/Intro/Intro'
import {ContextState} from './Pages/contexts/ContextApi';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { estado, setEstado } = ContextState();

  return (
    <div className="App">
      <ToastContainer autoClose={3000}/>
      {estado ? (
        <RouteApp />
      ) : (
      <Intro />
      )}
    </div>
  );
}

export default App;

