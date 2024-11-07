import './App.css';
import MyForms from './Components/MyForms';

function App() {
  return (
    <div className="App">
      <h2>Forms</h2>
      <MyForms user={{ name:"Luis henrique",
         email:"luishh205@gmail.com",
          bio:"Sou eletricista dev", 
          role:"admin"}}/>
    </div>
  );
}

export default App;
