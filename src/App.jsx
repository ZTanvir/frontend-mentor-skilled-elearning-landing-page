import "./App.css";
import Button from "./components/Button";

function App() {
  return (
    <>
      <Button
        text="get started"
        bgColor="#13183F"
        color="white"
        hoverColor="#666CA3"
      />
      <Button
        text="get started"
        bgColor="linear-gradient(#4851FF, #F02AA6)"
        color="white"
        hoverColor="linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(180deg, #4851ff -54.32%, #f02aa6 100%)"
      />
      <Button
        text="get started"
        bgColor="linear-gradient(#FF6F48, #F02AA6)"
        color="white"
        hoverColor="linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), linear-gradient(180deg, #ff6f48 0%, #f02aa6 100%)"
      />
    </>
  );
}

export default App;
