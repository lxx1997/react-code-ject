/*
 * @Author: Li Xingxing
 * @Email: lixingxing@everimaging.com
 * @Date: 2023-03-03 16:27:25
 * @Description: 
 */
import logo from './logo.svg';
import './App.css';

function App() {

  const handleClick = () => {
    console.log(5)
    return 5
  }
  return (
    <div className="App">
      <button id="button" onClick={handleClick}>click</button>
    </div>
  );
}

export default App;
