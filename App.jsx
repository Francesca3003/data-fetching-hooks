import { useState } from "react";
import "./App.css";
import Clock from "./components/Clock";
import { LanguageContext } from "./components/LanguageContext";

import { GithubUsers } from "./components/GithubUsers";

const App = () => {
  return (
    <div>
      <GithubUsers />
    </div>
  );
};

export default App;
