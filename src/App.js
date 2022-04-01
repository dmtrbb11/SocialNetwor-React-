import "./App.css";
import Header from "./Components/Header/Header";
import SideMenu from "./Components/SideMenu/SideMenu";
import Content from "./Components/Content/Content";
import Messages from "./Components/Messages/Messages";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import News from "./Components/News/News";
import Music from "./Components/Music/Music";
import Settings from "./Components/Settings/Settings";




const App = (props) => {

  return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <SideMenu />
        <div className="content_wrapper">
          <Routes>
            <Route
              path="/messages/*"
              element={<Messages users={props.state} messages={props.state} />}
            />
            <Route
              path="/content"
              element={
                <Content
                  posts={props.state}
                  addPost={props.addPost}
                  updateTextArea={props.updateTextArea}
                />
              }
            />
            <Route path="/news" element={<News />} />
            <Route path="/music" element={<Music />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
