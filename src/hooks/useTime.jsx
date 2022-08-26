import { useState } from "react";

function useTime(diff) {
  const [time, setTime] = useState("");
  if (diff > 1) {
    setTime(`Publicado hace ${parseInt(diff)} días`);
    return time;
  } else if (parseInt(diff) === 1) {
    setTime("Publicado hace 1 día");
    return time;
  } else if (diff * 24 < 24 && diff * 24 * 60 > 120) {
    setTime(`Publicado hace ${parseInt(diff * 24)} horas`);
    return time;
  } else if (diff * 24 * 60 < 60) {
    setTime("Nuevo");
    return time;
  }
}

export default useTime;
