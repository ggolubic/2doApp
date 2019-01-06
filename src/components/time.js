import React from "react";
function Time(props) {
  const dani = [
    "Ponedjeljak",
    "Utorak",
    "Srijeda",
    "Četvrtak",
    "Petak",
    "Subota",
    "Nedjelja"
  ];
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];
  const d = new Date();
  return (
    <h3 className="date">
      {dani[d.getDay()]}, {months[d.getMonth()]} {d.getDate()}
    </h3>
  );
}
export default Time;
