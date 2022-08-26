import React from "react";

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

import "../sass/stadistics.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import areaConversor from "../utils/areaConversor";

const GraficoBarras2 = () => {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/search/chart/datearea`)
      .then((res) => setInfo(res.data));
  }, []);

  const infoCopy = info.flat();
  const newInfo = areaConversor(infoCopy);

  console.log(newInfo);

  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>
        <BarChart
          width={500}
          height={100}
          data={newInfo.filter((info) => info.AreaId !== null)}
          margin={{
            top: 170,
            right: 70,
            left: 50,
            bottom: 30,
          }}
        >
          {/* Le tengo que pasar el area */}
          <XAxis dataKey="AreaId" stroke="#8884d8">
            <Label
              value="Tiempo promedio de las búsquedas por area"
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
          <Bar dataKey="avarage" fill="#434bf0" barSize={37}></Bar>
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default GraficoBarras2;
