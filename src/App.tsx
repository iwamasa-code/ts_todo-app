import React from 'react';

// function App() {
//   return (
//     <div className="App"></div>
//   );
// }

const App: React.FC = () => {
  return <div className="App"></div>
}

export default App;

//function() {...}の構文でFunction Component(FC)を定義することも問題なし！
//: React.FCをつけるかはPJによって変わるが少なくとも「型」をつけることにはメリットがある。