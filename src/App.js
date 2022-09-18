
import './App.css';
import add from './Calculator/Calci';
// import Greet from './component/Greet';
// import Para from './covid traker/Para'
// import FetchApi from './Api/FetchApi'
//import FetchApiAxios from './Api/FetchApiAxios';
import {Add,Multi,Sub,Div} from './Calculator/Calci';

function App() {
  let f1 = 23;
  let f2 = 4;
  return (
    <div className="App">
      <h1> {`Sum of ${f1} + ${f2} is ${Add(f1,f2)}`}</h1>
      <h1> {`Substract of ${f1} - ${f2} is ${Sub(f1,f2)}`}</h1>
      <h1> {`Multiplication of ${f1} * ${f2} is ${Multi(f1,f2)}`}</h1>
      <h1> {`Division of ${f1} % ${f2} is ${Div(f1,f2)}`}</h1>

    </div>
  );
}

export default App;

