import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Label,
} from "recharts";
import { deleteNull } from "../utils/recluterConversor";
import "../sass/stadistics.scss";
import axios from "axios";

const GraficoPie = () => {
  //Cambiar ID del reclutador por el nombre del mismo

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/search/chart/daterecruiter`)
      .then((res) => setData(res.data));
  }, []);

  const newData = data.flat();
  const depurateData = deleteNull(newData);

  console.log(depurateData);


  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={100}
          data={depurateData}
          margin={{
            top: 170,
            right: 70,
            left: 50,
            bottom: 30,
          }}
        >

          <XAxis dataKey="RecruiterId" stroke="#8884d8">
            <Label
              value="Tiempo promedio de las búsquedas por reclutador en días"
              offset={0}
              position="bottom"
            />
          </XAxis>
          <YAxis>
            <Label
              value="Días promedio"
              angle="-90"
              offset={0}
              position="center"
            />
          </YAxis>
          <Tooltip wrapperStyle={{ width: 100, backgroundColor: "#ccc" }} />
          <CartesianGrid stroke="#ccc" strokeDasharray="1 1" />
          <Bar dataKey="avarage" fill="#eb0064" barSize={37}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default GraficoPie;
