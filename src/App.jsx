import { useState } from "react"

function App(){
  const [sum,setNum] = useState(0);
  function addNum(){
    setNum(sum + 1);
  }
  function subNum(){
    setNum(sum - 1);

  }
  return(
  <>
      <h1>Hello World</h1>
      <p>{sum}</p>
      <button onClick={addNum}>Start</button>
      <button onClick={subNum}>Return</button>
    </>
  );
}

export default App