// Importing CSS file for styling
import "./App.css";

// Importing React components
import { LeftMenu } from "./components/LeftMenu";
import { MainContainer } from "./components/MainContainer";
import { RightMenu } from "./components/RightMenu";

// Main App component
function App() {
  return (
    // App container
    <div className="App">
      {/* Left menu component */}
      <LeftMenu />
      
      {/* Main container component */}
      <MainContainer />
      
      {/* Right menu component */}
      <RightMenu />

      {/* Background element */}
      <div className="background"></div>
    </div>
  );
}

// Exporting the App component as the default export
export default App;
