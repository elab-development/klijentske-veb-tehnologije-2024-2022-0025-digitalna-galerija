import NavBar from "./components/NavBar";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import imagePath from './assets/graphics.png'


function App() {
  let items = ["Home", "Login", "Gallery", "About us"];
  return (
    <div className="App">
      <NavBar 
        imageSrcPath={imagePath}
        navItems={items}/>
    
      

    </div>
  )
}

export default App
