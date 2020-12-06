import React from 'react';
import { TodoList } from "./components/TodoList"

// function App() {
//   return (
//     <div className="App"></div>
//   );
// }

const App: React.FC = () => {
  const todos = [{id: "T1", text: "TSの練習"}];
  return (
    <div className="App">
      <TodoList items={todos} />
    </div>
  )
}

export default App;

//function() {...}の構文でFunction Component(FC)を定義することも問題なし！
//: React.FCをつけるかはPJによって変わるが少なくとも「型」をつけることにはメリットがある。