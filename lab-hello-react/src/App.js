import "./App.css";
import icon1 from "./images/icon1.png";
import icon2 from "./images/icon2.png";
import icon3 from "./images/icon3.png";
import icon4 from "./images/icon4.png";
import logo from "./images/ironhack-logo-xs.png";
import menu from "./images/menu-top-xs.png";
const mainContent = [
  {
    icon:icon1,
    title: "Declarative",
    description: "React makes it easy to create interactive UIs",
  },
  {
    icon: icon2,
    title: "Components",
    description: "Build encapsulated compoment that manage their state",
  },
  {
    icon: icon3,
    title: "Single-Way",
    description: "A set of immutable values are passed to the components'",
  },
  {
    icon: icon4,
    title: "JSX",
    description: "Statically-typed. Design to run on modern browsers",
  },
];

function App() {
  return (
    <div className="App">
      <nav className="App-header">
        <div className="top-header">
          <img className="App-logo" src={logo} alt="logo" />
          <img className="menu-icon" src={menu} alt="menu" />
        </div>
        <div className="header-content">
          <h1>Say hello to ReactJS</h1>
          <p>
            We will use the most popular frontend library, and become Super
            Ninja developer.
          </p>
          <button className="btn">Awesome!</button>
        </div>
      </nav>
      <div className="content-area">
        {mainContent.map((item) => {
          return (
            <>
              <div className="card">
                <img className="icon" src={item.icon} alt="icon" />
                <h1>{item.title}</h1>
                <p>{item.description}</p>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}
export default App;
