import React, { useState } from "react";
import DatePicker from "react-multi-date-picker";
import Toolbar from "react-multi-date-picker/plugins/toolbar"
import colors from "react-multi-date-picker/plugins/colors"

export default function Calendar() {
  const [value, setValue] = useState(new Date());
  const [props, setProps] = useState({
    value: value,
    onChange: setValue,
    multiple: true,
    plugins: [
        <Toolbar 
          position="bottom" 
          sort={["deselect"]} 
        />,
        colors({colors: ["green", "yellow"]})],
  });

  return <DatePicker
    {...props}
    onPropsChange={setProps}
    />;
}