const Calendar = ({ selectedDate, setSelectedDate }) => {
const today = new Date().toISOString().split("T")[0];

  return (
    <div className="calendar_div">
      <input
        type="date"
        value={selectedDate}
        onChange={(e) => setSelectedDate(e.target.value)}
      />
    </div>
  );
};

export default Calendar;
