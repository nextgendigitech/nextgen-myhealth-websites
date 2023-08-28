import { useState, useEffect, CSSProperties } from "react";
import colors from "../../config/colors";
import styled from "styled-components";
import axios from "axios";
import Banner from "./components/Banner";
import Summary from "./components/Summary";
import DetailCard from "./components/DetailCard";
import { useParams } from "react-router-dom";


const DoctorProfile = () => {
  return (
    <>
        <Banner />
        <Summary />
        <DetailCard />
    </>
  )
}

export default DoctorProfile;