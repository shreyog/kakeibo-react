import "./App.scss";
import Navbar from "./components/Navbar";

const App = () => {
  const pages = [
    {
      pageLink: "/",
      // view: Home,
      displayName: "Home",
      showInNavbar: true,
    },
    {
      pageLink: "/about",
      // view: About,
      displayName: "About",
      showInNavbar: true,
    },
  ];
  return (
    <div className="App">
      <Navbar pages={pages} />
    </div>
  );
};

export default App;
