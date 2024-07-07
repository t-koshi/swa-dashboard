import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
  selectedDate: Date | null;
  onChange: (date: Date | null) => void;
};

export default function InputDate({ selectedDate, onChange }: Props) {
  return (
    <DatePicker
      className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
      selected={selectedDate}
      onChange={(date) => onChange(date)}
      showTimeSelect={false}
      timeIntervals={15}
      dateFormat="yyyy/MM/dd"
    />
  );
}
