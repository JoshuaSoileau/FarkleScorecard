import React from "react";

const Button = ({ children, onClick, small, color }) => {
  return (
    <button onClick={() => onClick(children)}>
      <span>{children}</span>

      <style jsx>
        {`
          button {
            border-radius: 70px;
            display: block;
            font-size: 24px;
            border: 1px solid ${color || "orange"};
            background: none;
            position: relative;
            width: 100%;
            padding: 0;
            margin-bottom: 20px;
            cursor: pointer;
          }

          button::before {
            content: "";
            display: block;
            padding-bottom: ${small ? "40%" : "100%"};
          }

          button:focus {
            outline: none;
          }

          button:active {
            outline: none;
            background: #efefef;
          }

          span {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: space-around;
            align-items: center;
          }
        `}
      </style>
    </button>
  );
};

export default Button;
