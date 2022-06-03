import Main from "./components/Main";
import Details from "./components/Details";
import Sidebar from "./components/Sidebar";
import { ContextProvider } from "./context";

function App() {
    return (
        <div className="App">
            <ContextProvider>
                <Main />
                <Details />
                <Sidebar />
            </ContextProvider>
        </div>
    );
}

export default App;
