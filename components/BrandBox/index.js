import React from "react";
import CardContainer from "../../containers/CardContainer";
import AQIStandard from "../AQIStandard";
import { AQI_STANDARDS } from "../AQIStandard/data";

function BrandBox() {
  return (
    <div className="flex flex-col h-screen sticky left-0 top-0">
      <div className="flex-1 bg-gray-200 rounded-3xl rounded-tl-none rounded-r-none"></div>

      <div className="bg-gray-200">
        <CardContainer className="bg-primary rounded-3xl rounded-l-none text-white p-10">
          <div className="text-md mb-2">
            Live <span className="text-red-600">&bull;</span>
          </div>
          <div className="text-3xl font-bold">
            Air Quality <br /> Monitor
          </div>

          <div className="mt-3 flex flex-wrap" style={{ width: "300px" }}>
            {Object.keys(AQI_STANDARDS).map((standard, index) => (
              <AQIStandard
                key={index}
                className="my-1 ml-0 mr-2"
                type={standard}
              />
            ))}
          </div>
        </CardContainer>
      </div>

      <div className="flex-1 bg-gray-200 rounded-3xl rounded-bl-none rounded-r-none"></div>
    </div>
  );
}

export default BrandBox;
