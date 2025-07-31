import { Fa0 } from "react-icons/fa6";
import Button from "./components/button";
import SlickSlider from "./components/carousel";
import BasicDropdown from "./components/dropdown";

function App() {
  const handleSelect = (option: string) => {
    console.log("Selected:", option);
  };
  return (
    <>
      <Button label="hellooo" icon={<Fa0 />} />
      <SlickSlider />
      <h1>sdfsd</h1>
      <BasicDropdown
        options={["Option 1", "Option 2", "Option 3"]}
        onSelect={handleSelect}
      />
    </>
  );
}

export default App;
