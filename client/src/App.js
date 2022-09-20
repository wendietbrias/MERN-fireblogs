import { Auth, Home, Profile, Blogs, Admin, Detail, Create } from "./pages";
import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import { GetAllPost } from "./action/post";
import { useDispatch } from "react-redux";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetAllPost(setIsLoading));
  }, []);

  return (
    <div className="App bg-gray-50 min-h-screen">
      <Routes>
        <Route index path="/" element={<Home loading={isLoading} />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/blogs" element={<Blogs loading={isLoading} />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
}

export default App;
