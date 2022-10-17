import { Route, Routes } from "react-router-dom";

import loadable from "@loadable/component";
import { AuthProvider } from "./contexts/AuthContext";
import RequireAuth from "./helps/RequireAuth";
import ApiProvider from "./contexts/ApiContext";
const Home = loadable(() => import("./pages/home/Home"));
const Detail = loadable(() => import("./pages/detail/Detail"));
const Denied = loadable(() => import("./pages/denied/Denied"));
const Login = loadable(() => import("./pages/login/Login"));
const AdminLayout = loadable(() => import("./pages/admin/AdminLayout"));
const AdminUser = loadable(() => import("./pages/admin/user/AdminUser"));
const AdminPost = loadable(() => import("./pages/admin/post/AdminPost"));

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
          <Route path="/denied" element={<Denied />} />
          {/* admin management */}
          <Route
            path="/admin"
            element={
              <RequireAuth>
                <AdminLayout />
              </RequireAuth>
            }
          >
            <Route path="user" element={<AdminUser />} />
            <Route path="post" element={<AdminPost />} />
          </Route>
        </Routes>
      </AuthProvider>
    </ApiProvider>
  );
};

export default App;
