import Slide from "./components/Slide/Slide";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import News from "./components/News/News";
import './index.css'
function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Slide></Slide>
      <div>
      <div class="p-10">
                      <div class="dropdown inline-block relative">
                        <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
                          <span class="mr-1">Dropdown</span>
                          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
                        </button>
                        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 z-index-100">
                          <li class=""><a class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">One</a></li>
                          <li class=""><a class="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Two</a></li>
                          <li class=""><a class="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" href="#">Three is the magic number</a></li>
                        </ul>
                      </div>
                    </div>
      </div>
      <div className="md:container md:mx-auto main">
        <div className="left"><News></News></div>
        <div className="right"><Sidebar></Sidebar></div>
      </div>
    </div>
  );
}

export default App;
