import { Button, ChakraProvider } from "@chakra-ui/react";
import DatePicker from "./Components/DatePicker";
import { useState } from "react";
import "./App.css";

function App() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [sel, setSel] = useState(false);
  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
  const handleDateChange = (date) => {
    setSelectedDate(date);
  };
  return (
    <>
      <ChakraProvider>
        {/* <input type="date" /> */}
        <div className="w-full flex flex-col items-center ">
          <p className="text-2xl">{formattedDate}</p>
          <Button
            colorScheme="green"
            className="   w-1/5 m-auto "
            onClick={() => setSel(!sel)}
          >
            Select Date
          </Button>
          {sel && (
            <DatePicker
              selectedDate={selectedDate}
              onDateChange={handleDateChange}
              // dateFormat="MM/DD/YYYY"
              minDate={new Date(1960, 1, 1)}
              maxDate={new Date(2059, 12, 31)}
            />
          )}
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
