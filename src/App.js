import { Provider } from "react-redux";
import Footers from "./components/Footers";
import Headers from "./components/Headers";
import Navigation from "./components/Navigation";
import TodoList from "./components/TodoList";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
        <Navigation />
        <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
          <Headers />
          <hr className="mt-4" />
          <TodoList />
          <hr className="mt-4" />
          <Footers />
        </div>
      </div>
    </Provider>
  );
}

export default App;
