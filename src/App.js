import App1 from "./App1";
import App2 from "./App2";
import LocalMutation from "./Keeping_component_pure/LocalMutution";
import { Routes, Route } from "react-router-dom";
import EveryComponentsArePureFunction from "./Keeping_component_pure/Every_components_are_pure_function";
import Home from "./Layout/Home";
import SideEffects from "./Keeping_component_pure/Side_Effects";
import AppClock from "./Keeping_component_pure/Fix_a_broken_clock/AppClock";
import AppProfile from "./Keeping_component_pure/Fix_a_broken_profile/Problem/AppProfile";
import AppCorrect from "./Keeping_component_pure/Fix_a_broken_profile/Correct/AppCorrect";
import AppProblem from "./Keeping_component_pure/Fix_a_broken_story_tray/Problem/Appproblem";
import AppStoryCorrect1 from "./Keeping_component_pure/Fix_a_broken_story_tray/correct/AppStoryCorrect1";
import AppStoryCorrect2 from "./Keeping_component_pure/Fix_a_broken_story_tray/correct2/AppStoryCorrect2";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="" element={<Home />} />
        <Route
          path="Every-components/pure-function"
          element={<EveryComponentsArePureFunction />}
        />

        <Route path="" element={<App1 />} />
        <Route path="" element={<App2 />} />
        <Route path="local-mutation" element={<LocalMutation />} />
        <Route path="side-effects" element={<SideEffects />} />
        <Route path="clock" element={<AppClock />} />
        <Route path="fix-a-broken-profile-problem" element={<AppProfile />} />
        <Route path="fix-a-broken-profile-correct" element={<AppCorrect />} />
        <Route
          path="fix-a-broken-story-tray-problem"
          element={<AppProblem />}
        />
        <Route
          path="fix-a-broken-story-correct-1"
          element={<AppStoryCorrect1 />}
        />
        <Route
          path="fix-a-broken-story-correct-2"
          element={<AppStoryCorrect2 />}
        />
      </Routes>
    </>
  );
}
