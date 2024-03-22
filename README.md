<!-- # Date Selection Component

This is a simple React component that manages a selected date and displays it in the format of date, month, and year. It utilizes the useState hook from React.

## Installation

To use this component in your React project, you can clone this project and include the Date picker component in you project folder:

Once included, call the component from any of your component where it is required by providing props like this below
Create a state, selectedDate like shown below, or you can use any variable name as per requirement

```code
  const [yourDateVariable, setYourDateVariable] = useState(new Date());

  const handleDateChange = (date) => {
    setYourDateVariable(date);
  };
<DatePicker
    selectedDate={yourDateVariable}
    onDateChange={handleDateChange}
    minDate={new Date(1960, 1, 1)}
    maxDate={new Date(2059, 12, 31)}
/>
```

If you like this project, please star the repo -->

# Date Picker Component

This is a simple React component that manages a selected date and displays it in the format of date, month, and year. It utilizes the useState hook from React.

## Installation

To use this component in your React project, you can follow these steps:

1. Clone this repository to your local machine:

```bash
git clone https://github.com/Vinay-the-dev-bot/Date-Picker
```

2. Copy the Date Picker component into your project directory.

3. Usage
   Once the Date Picker component is included in your project, you can use it in any of your components as follows:

```code
import React, { useState } from 'react';
import DatePicker from './path/to/DatePicker'; // Adjust the path according to you folder structure

function YourComponent() {
  const [yourDateVariable, setYourDateVariable] = useState(new Date());

  const handleDateChange = (date) => {
    setYourDateVariable(date);
  };

  return (
    <div>
      <DatePicker
        selectedDate={yourDateVariable}
        onDateChange={handleDateChange}
        minDate={new Date(1960, 1, 1)}
        maxDate={new Date(2059, 12, 31)}
      />
    </div>
  );
}

export default YourComponent;
```

# Acknowledgments

If you find this project helpful, please consider starring the repository to show your support
