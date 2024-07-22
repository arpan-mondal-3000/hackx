import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="grid place-content-center h-screen text-green-700 tracking-widest">
        <span className="text-5xl mx-auto font-bold tracking-[0.15em]">
          Hack X
        </span>
        <span className="text-white mt-5 tracking-[0.3em]">
          <span className="text-green-600">Hack</span> The Limits,
          <span className="text-green-600"> Break</span> The Barriers
        </span>
      </div>
      <div className="third">
        <svg
          width="1177"
          height="1024"
          viewBox="0 0 1177 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M952.314 0.728511C1041.4 81.8033 1081.13 233.124 1140.63 343.11C1201.25 452.473 1282 518.51 1336.6 627.634C1392.33 736.134 1421.15 886.354 1375.31 986.822C1328.34 1087.91 1205.95 1137.89 1073.27 1156.03C938.71 1173.43 794.233 1157.02 729.912 1062.22C665.59 967.414 682.161 790.245 699.363 675.273C717.691 559.677 737.018 504.287 718.848 383.904C699.552 264.144 641.633 80.0148 683.017 -7.25921C724.034 -92.5423 863.229 -80.3462 952.314 0.728511Z"
            fill="url(#paint0_linear_14_31)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_14_31"
              x1="870.197"
              y1="1316.81"
              x2="1522.75"
              y2="214.318"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3CED63" />
              <stop offset="1" stop-color="#124B1E" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="second">
        <svg
          width="793"
          height="1024"
          viewBox="0 0 793 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M759.609 205.11C792.953 329.57 810.963 417.657 826.639 509.179C842.315 600.701 855.562 697.431 835.541 771.076C815.426 846.495 762.042 898.828 709.97 967.237C656.731 1037.36 604.898 1121.79 561.214 1112.39C517.623 1101.21 483.35 994.486 469.637 906.624C454.85 818.705 461.885 746.158 450.187 681.521C437.509 615.055 407.173 556.555 404.351 487.048C401.435 419.315 424.867 342.291 466.925 218.226C508.984 94.1616 569.577 -75.1713 623.675 -79.4499C677.773 -83.7284 726.358 78.8771 759.609 205.11Z"
            fill="url(#paint0_linear_14_35)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_14_35"
              x1="370.848"
              y1="1102.82"
              x2="1177.33"
              y2="844.359"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#F87537" />
              <stop offset="1" stop-color="#FBA81F" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className="first">
        <svg
          width="318"
          height="1024"
          viewBox="0 0 318 1024"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M401.849 -71.2297C438.064 -61.2614 476.053 43.544 485.856 169.604C496.294 297.608 478.442 444.894 480.129 599.067C482.45 755.185 503.352 920.217 497.01 1043.17C491.2 1166.09 457.614 1246.96 420.749 1244.93C383.885 1242.91 343.535 1154.05 304.293 1106.67C264.52 1059.31 225.649 1049.48 194.301 979.923C163.486 910.34 140.519 777.06 143.024 662.221C145.426 545.411 173.3 447.042 177.87 300.452C181.806 151.917 162.969 -44.8665 178.862 -87.2313C194.12 -131.541 244.535 -23.431 287.229 -11.8245C330.026 1.75425 365.53 -83.1703 401.849 -71.2297Z"
            fill="url(#paint0_linear_14_37)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_14_37"
              x1="171.954"
              y1="1258.12"
              x2="850.936"
              y2="1033.24"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3784F8" />
              <stop offset="0.624" stop-color="#9C50EE" />
              <stop offset="1" stop-color="#FB1FE5" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </>
  );
};

export default Home;
