// import logo from './logo.svg'; 
import './App.css';
let name ="prince"
function App() {
  // return (
  //   <>
  //   <h1>this is me </h1>
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React wiht priyansh
  //       </a>
  //     </header>
  //   </div>
  //   </>
  // );                                                                 
//  return(
//     <div className="blank">Lovely</div>
//   );
 return (
   <>
   <nav>
     <li>Hoome</li>
     <li>About</li>
     <li>Contact</li>
   </nav>
   <div className="container">
     <h1>helloo {name}</h1>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste repellendus dolores dolorum provident ipsum at veniam repudiandae illum laudantium. Nihil voluptate dignissimos ex!</p>
   </div>
   </>
 )
}

export default App;
// in terminal write to start react app >> npm start
/* here
we use jsx for writing javascipt within html using {} braces with jss code 
>>we use classname here as class is reserved keyword and same as for etc . (use camel case )

in return we have used jsx frangment <> </> to return only  
return paraenthesis is used to avoid javasript from adding semicolon which can harm our code
 
>>2.return is used to returning  Lovely and its property is defined by app.css ( color )
*/