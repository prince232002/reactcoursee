// import logo from './logo.svg'; 
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
// let name ="prince";
function App() {  
 return (
   <>
   {/*<Navbar/>*/}  
  
   
<Navbar title=" TextUtils3" />  
<div className="container my-3">
  <TextForm heading ={"enter the heading to analyse below"}/>
  {/* <About/> */}

</div>
   </>
 );
}
 
export default App;
