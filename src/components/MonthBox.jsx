import React, { useEffect, useState } from "react";
import "./MonthBox.css";

function MonthBox({ month, handleAddMonth, handleRemoveMonth, presentMonths }) {
  const [check, setCheck] = useState(false);

  useEffect(() => {
    const monthAlreadyPresent = presentMonths.find(
      (presentMonth) => presentMonth.toLowerCase() == month.toLowerCase()
    );
    // console.log(monthAlreadyPresent);
    if (monthAlreadyPresent) {
      setCheck(true);
      handleAddMonth(month);
    }
  }, []);

  function handleCheckBox(e) {
    if (check) {
      setCheck(false);
      handleRemoveMonth(month);
    } else {
      setCheck(true);
      handleAddMonth(month);
    }
  }

  return (
    <div className="monthBox">
      <input type="checkbox" onChange={handleCheckBox} checked={check} />
      <div>{month}</div>
    </div>
  );
}

export default MonthBox;
