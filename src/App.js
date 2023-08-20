import './App.css';
import {Outlet} from "react-router-dom";
import Layout from "./components/Layout";

function App() {
  return (
    <Layout>
      <div className="container container-fluid">
        <Outlet/>
      </div>
    </Layout>
  );
}

export default App;
