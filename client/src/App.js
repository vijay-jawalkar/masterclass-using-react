import { SideNavigation, MainContent } from './component';
import './App.css';

function App() {
  return (
    <div className="flex justify-start ">
      <SideNavigation/>
      <MainContent/>
    </div>
  );
}

export default App;
