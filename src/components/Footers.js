import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorChanged, statusChanged } from "../redux/filters/actionCreator";
const numberOfTodos = (number) => {
  switch (number) {
    case 0:
      return " No task";
    case 1:
      return " 1 task";

    default:
      return `${number} tasks`;
  }
};

const Footers = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const remainingTask = todos.filter((todo) => !todo.completed).length;
  const { status, color } = filters;

  const handleStatusChanged = (status) => {
    dispatch(statusChanged(status));
  };

  const handleColorChanged = (newColor) => {
    if (color.includes(newColor)) {
      dispatch(colorChanged(newColor, "remove"));
    } else {
      dispatch(colorChanged(newColor, "added"));
    }
  };
  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numberOfTodos(remainingTask)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "all" && "font-bold"}`}
          onClick={() => handleStatusChanged("all")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "incomplete" && "font-bold"}`}
          onClick={() => handleStatusChanged("incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "complete" && "font-bold"}`}
          onClick={() => handleStatusChanged("complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${
            color.includes("green") && "bg-green-500"
          }`}
          onClick={() => handleColorChanged("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${
            color.includes("red") && "bg-red-500"
          }`}
          onClick={() => handleColorChanged("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${
            color.includes("yellow") && "bg-yellow-500"
          }`}
          onClick={() => handleColorChanged("yellow")}
        ></li>
      </ul>
    </div>
  );
};

export default Footers;
