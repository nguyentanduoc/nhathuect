import { Route, Routes } from "react-router-dom";

import loadable from "@loadable/component";
import { AuthProvider } from "./contexts/AuthContext";
import RequireAuth from "./helps/RequireAuth";
import ApiProvider from "./contexts/ApiContext";
const Home = loadable(() => import("./pages/home/Home"));
const Detail = loadable(() => import("./pages/detail/Detail"));
const Denied = loadable(() => import("./pages/denied/Denied"));
const Login = loadable(() => import("./pages/login/Login"));

const App = () => {
  return (
    <ApiProvider>
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
          <Route path="/login" element={<Login />} />
          {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
          {/* <Route path="*" element={<NotFound />} /> */}
          <Route path="/denied" element={<Denied />} />
        </Routes>
      </AuthProvider>
    </ApiProvider>
  );
};

export default App;
