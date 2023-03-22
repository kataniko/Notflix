import RouteApp from './RouteApp';
import Intro from '../src/Pages/Intro/Intro'
import {ContextState} from './Pages/contexts/ContextApi';

function App() {

  const { estado, setEstado } = ContextState();

  return (
    <div className="App">
      {estado ? (
        <RouteApp />
      ) : (
      <Intro />
      )}
    </div>
  );
}

export default App;
