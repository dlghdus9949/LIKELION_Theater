//import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Movie from "./component/Movie";
import Footer from "./component/Footer";
import Home from "./pages/Home";
import MovieInfo from "./pages/MovieInfo";
import Theater from "./pages/Theater";
import Ticketing from "./pages/Ticketing";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import MyPage from "./pages/MyPage";
import MovieDetailView from "./pages/MovieDetailView";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movieinfo" element={<MovieInfo />} />
          <Route path="/moviedetailview/" element={<MovieDetailView />} />
          <Route path="/theater" element={<Theater />} />
          <Route path="/ticketing" element={<Ticketing />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/mypage" element={<MyPage />} />
        </Routes>
        {/* <Movie /> */}
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
