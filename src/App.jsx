import UseSateHook from "./components/Hooks/useState/usestate";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';

const App = ()=>{
  return(
    <>
      <h1>Hello This is App Component</h1>
      <UseSateHook/>
    </>
  )
}

export default App;