import React, { type JSX } from "react";
import { NavLink } from "react-router-dom";

interface Props {
    option: {
        to: string;
        icon: string;
        title: string;
        description: string;
        component: JSX.Element;
    }
}
export const Sidebar = ({ option } : Props )=> {
  return (
    <NavLink
      to={option.to}
      className={({ isActive }) =>
        isActive
          ? "flex justify-center items-center bg-gray-800 rounded-md p-2 transition-colors"
          : "flex justify-center items-center hover:bg-gray-800 rounded-md p-2 transition-colors"
      }
    >
      <i className={`${option.icon} text-2xl text-indigo-400 mr-4`}></i>
      <div className="flex flex-col flex-grow">
        <span className="text-white text-lg font-semibold">{option.title}</span>
        <span className="text-gray-400 text-sm">{option.description}</span>
      </div>
    </NavLink>
  );
};
