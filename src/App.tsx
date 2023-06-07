import { useRoutes } from "react-router-dom";
import { registerRouter, router } from "./router";
import './styles/main.scss';

const App = () => {
  const routerContent = useRoutes(router);
  const registerRouterContent = useRoutes(registerRouter);
  const userData = localStorage.getItem("user");

  return (
    <div className="App">
      {userData !== null ? routerContent : registerRouterContent}
    </div>
  );
}

export default App;