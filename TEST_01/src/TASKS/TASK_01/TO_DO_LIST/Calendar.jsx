import { memo } from "react";

const Calendar = memo(({selectedDate,setSelectedDate})=>{
  return (
    <div className="calendar_div">
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => {
            setSelectedDate(e.target.value);
          }
        }
      />
    </div>
  );
});

export default Calendar;
