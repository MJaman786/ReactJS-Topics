import UseSateHook from "./components/Hooks/useState/usestate";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import Hooks from "./components/Hooks/hooks.jsx";
import Props from "./components/Props/props.jsx";

const App = ()=>{
  return(
    <>
      {/* <h1>Hello This is App Component</h1> */}
      <Hooks/>
      {/* <Props/> */}
    </>
  )
}

export default App;