import { createElement } from "react";

export const global = () => {};
export const local = a => a;

export const component = type =>
  (classNames = "") =>
    props => {
      const className = `${classNames || ""} ${props.className || ""}`.trim() ||
        null;
      return createElement(type, { ...props, className });
    };
