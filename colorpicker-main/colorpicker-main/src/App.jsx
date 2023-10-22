import React from 'react';
import ColorPicker from './component/ColorPicker';
import "./App.css";

const App = () => {
  const colors = ['#FF0000', '#00FF00', '#0000FF', '#FFFF00', '#FF00FF','#00FFFF','#ffa500','#4b0082','#f2b7b2','#108b10','#f15c2b','#4dd7d7','#653d2e','#ff8b25','#5f9ea0','#ede02d'];

  return (
    <div>
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
};

export default App;