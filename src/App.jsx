import React, { useState } from "react";
import MonthBox from "./components/MonthBox";

function App() {
  const [months, setMonths] = useState([
    "Jan",
    "Feb",
    "Mar",
    "April",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ]);
  const [presentMonths, setPresentMonths] = useState(["Jan", "Feb", "May"]);
  const [selectedMonth, setSelectedMonth] = useState([]);

  function handleAddMonth(addMonth) {
    setSelectedMonth((prev) => [...prev, addMonth]);
  }

  function handleRemoveMonth(removeMonth) {
    const newArr = selectedMonth.filter((month) => month !== removeMonth);
    setSelectedMonth(newArr);
  }

  function handleSubmit(e) {
    console.log(selectedMonth);
  }

  return (
    <div>
      <div>
        {months.map((month, index) => (
          <MonthBox
            key={index}
            month={month}
            handleAddMonth={handleAddMonth}
            handleRemoveMonth={handleRemoveMonth}
            selectedMonth={selectedMonth}
            presentMonths={presentMonths}
          />
        ))}
      </div>
      <button type="button" onClick={handleSubmit}>
        submit months
      </button>
    </div>
  );
}

export default App;

// array of month names -> render it as dropdown -> check box -> submit btn -> console the check month names
// array of months jan, feb, may ->
//
