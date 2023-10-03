import './App.css';
import { Window } from './View/Draw/Window';
import { Stage, Layer, Rect, Text, Circle, Line } from 'react-konva';
function App() {
  return (
    <div className="App">
       {/* <Stage width={100} height={100}>
       <Layer>
        <Rect
          x={10}
          y={10}
          width={10}
          height={10}
          fill=""
          stroke="blue"
          onClick={clicka}
        /></Layer>
       
       </Stage>
      
            <Stage width={10} height={10}>
      <Layer>
        <Text text="Some text on canvas" fontSize={15} />
        <Rect
          x={105}
          y={195}
          width={10}
          height={10}
          fill=""
          stroke="blue"
          onClick={clicka}
        />
        <Circle x={200} y={100} radius={50} fill="green" />
        <Line
          x={10}
          y={200}
          points={[0, 0, 100, 0]}
          stroke="black"
          onClick={clicka}
        />
        <Line
          x={5}
          y={195}
          points={[0, 0, 10, 0,10,10,0,10,0,0]}
          stroke="red"
          fill='red'
          onClick={clicka}>
        </Line>
      </Layer>
    </Stage> */}
        <Window/>
    </div>
  );
}
function clicka(){
  console.log("line click")
}
export default App;
