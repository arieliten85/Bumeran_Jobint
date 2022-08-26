import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Label,
} from "recharts";
import { getAlldata } from "../redux/stadistics";
import countryConversor from "../utils/countryConversor";

const GraficosBarras = () => {
  const dispatch = useDispatch();
  const datos = useSelector((state) => state.stadistics);
  const data = [
    { ...datos[0] },
    { ...datos[1] },
    { ...datos[2] },
    { ...datos[3] },
    { ...datos[4] },
  ];

  const newData = countryConversor(data);
  useEffect(() => {
    dispatch(getAlldata());
  }, []);

  return (
    <ResponsiveContainer width="100%" aspect={3}>
      <BarChart
        width={300}
        height={100}
        data={newData}
        margin={{
          top: 50,
          right: 100,
          left: 50,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="CountryId">
          <Label
            value="Evolución de las busquedas por país"
            position="bottom"
            fontSize={15}
          />
        </XAxis>
        <YAxis>
          <Label
            value="Cantidad de busquedas"
            angle="-90"
            offset={0}
            position="center"
            fontSize={15}
          />
        </YAxis>
        <Tooltip />
        <Legend
          width={100}
          wrapperStyle={{
            top: 50,
            right: 20,
            backgroundColor: "#f5f5f5",
            border: "1px solid #d5d5d5",
            borderRadius: 3,
          }}
        />
        <Bar dataKey="En_Proceso" fill="#00DCD4" barSize={50} />
        <Bar dataKey="No_Iniciada" fill="#eb0064" barSize={50} />
        <Bar dataKey="Finalizada" fill="#000cf1" barSize={50} />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default GraficosBarras;
