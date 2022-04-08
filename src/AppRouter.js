import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import BotPage from "./components/pages/BotPage";
import Characters from "./components/pages/Characters";
import ChatPage from "./components/pages/ChatPage";
import CreateHeartPage from "./components/pages/CreateHeartPage";
import EditBotText from "./components/pages/EditBotText";
import EditCharacters from "./components/pages/EditCharacters";
import HeartPage from "./components/pages/HeartPage";
import Setting from "./components/pages/Setting";
import TalkPage from "./components/pages/TalkPage";

export default function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}>
        <Route path="/" element={<HeartPage></HeartPage>}></Route>
        <Route path="/characters" element={<Characters></Characters>}></Route>
        <Route path="/talk" element={<TalkPage></TalkPage>}></Route>
        <Route path="/setting" element={<Setting></Setting>}></Route>
        <Route
          path="/heart"
          element={<CreateHeartPage></CreateHeartPage>}
        ></Route>
        <Route path="/bot" element={<BotPage></BotPage>}></Route>
        <Route path="/edit-bot" element={<EditBotText></EditBotText>}></Route>
        <Route
          path="/edit-char"
          element={<EditCharacters></EditCharacters>}
        ></Route>
      </Route>
      <Route path="/chat" element={<ChatPage></ChatPage>}></Route>
    </Routes>
  );
}
