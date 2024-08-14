import useWindowWidth from "./hooks/useWindowWidth";

function App() {
  const windowWidth = useWindowWidth();
  return <div>Window width is {windowWidth}px</div>;
}

export default App;
