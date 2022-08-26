import React, { useEffect } from "react";
import { Routes, Route } from "react-router";
import { useDispatch, useSelector } from "react-redux";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import LogIn from "./components/LogIn";
import SingUp from "./components/SingUp";
import SearchsGrid from "./components/SearchsGrid";
import SearchView from "./components/SearchView";
import ViewAdmin from "./components/ViewAdmin";
import Profile2 from "./components/Profile2";
import SearchCreate from "./components/SearchCreate";
import SearchUpdate from "./components/SearchUpdate";
import FormProfile from "./commons/FormProfile";
import ProfileMod from "./commons/ProfileMod.jsx";
import Stadistics from "./components/Stadistics";
import { sendAllSearches } from "./redux/search";
import { sendAllRecruiters } from "./redux/recruiters";
import { increment } from "./redux/contSlice";
import { getAlldata } from "./redux/stadistics";
import { getAreasRequest } from "./redux/getAreas";
import { getCountriesRequest } from "./redux/getCountries";

const App = () => {
  const dispatch = useDispatch();
  const condition = useSelector((state) => state.cont);
  const data = useSelector((state) => state.stadistics);
  useEffect(() => {
    if (condition.value === 0) {
      dispatch(sendAllSearches());
      dispatch(sendAllRecruiters());
      dispatch(increment());
      dispatch(getAreasRequest());
      dispatch(getCountriesRequest());
      dispatch(getAlldata());
    }
  }, []);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/sigup" element={<SingUp />} />
        <Route path="/searchs" element={<SearchsGrid />} />
        <Route path="/searchs/:id" element={<SearchView />} />
        <Route path="/admin" element={<ViewAdmin />} />
        <Route path="/profile/:id" element={<Profile2 />} />
        <Route path="/admin/searchs/create" element={<SearchCreate />} />
        <Route path="/admin/searchs/update/:id" element={<SearchUpdate />} />
        <Route path="/admin/profiles/:id" element={<FormProfile />} />
        <Route path="/recruiter/profiles/:id" element={<ProfileMod />} />
        <Route path="/info" element={<Stadistics />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
