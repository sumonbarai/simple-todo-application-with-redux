import Footers from "./components/Footers";
import Headers from "./components/Headers";
import Navigation from "./components/Navigation";
import TodoList from "./components/TodoList";

function App() {
  return (
    <div class="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      <Navigation />
      <div class="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        <Headers />
        <hr class="mt-4" />
        <TodoList />
        <hr class="mt-4" />
        <Footers />
      </div>
    </div>
  );
}

export default App;
