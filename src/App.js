import logo from './logo.svg';
import './App.css';
import Text from './Text';
import Count from './Count';

function App() {
  let array = ["apple","orange","mango","litchi"]
  return (
    <div className="App">
    <h1>praphanj</h1>
    {array.map((x)=><Text fruits={x}/>)}
    <hr/> 
    <Text/> 
    <Count/>
    </div>
  );
}

export default App;
