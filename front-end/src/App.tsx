import { Route, Routes } from "react-router-dom";

import loadable from "@loadable/component";
import { AuthProvider } from "./contexts/AuthContext";
import RequireAuth from "./helps/RequireAuth";
const Home = loadable(() => import("./pages/home/Home"));
const Detail = loadable(() => import("./pages/detail/Detail"));
const Denied = loadable(() => import("./pages/denied/Denied"));

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/detail"
          element={
            <RequireAuth>
              <Detail />
            </RequireAuth>
          }
        />
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        {/* <Route path="*" element={<NotFound />} /> */}
        <Route path="/denied" element={<Denied />} />
      </Routes>
    </AuthProvider>
  );
};

export default App;
