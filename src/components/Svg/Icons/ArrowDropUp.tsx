import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 14 12" {...props}>
      <path
        d="M8.3195 0.764085C8.38717 0.830005 8.6765 1.07891 8.9145 1.31076C10.4113 2.67008 12.8613 6.21611 13.6092 8.07209C13.7293 8.35395 13.9837 9.06657 14 9.44731C14 9.81214 13.916 10.1599 13.7457 10.4918C13.5077 10.9055 13.1332 11.2374 12.691 11.4192C12.3842 11.5363 11.466 11.7181 11.4497 11.7181C10.4452 11.9 8.813 12 7.00933 12C5.29083 12 3.72517 11.9 2.7055 11.7511C2.68917 11.734 1.54817 11.5522 1.15733 11.3533C0.443333 10.9885 2.05602e-08 10.2759 2.96544e-08 9.51323L3.04405e-08 9.44731C0.0175 8.95064 0.460833 7.90615 0.477167 7.90615C1.22617 6.15019 3.556 2.68599 5.10417 1.29372C5.10417 1.29372 5.502 0.901607 5.7505 0.731124C6.1075 0.465172 6.54967 0.333332 6.99183 0.333332C7.48533 0.333332 7.945 0.482221 8.3195 0.764085Z"
      />
    </Svg>
  );
};

export default Icon;
