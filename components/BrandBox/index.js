import React from "react";
import CardContainer from "../../containers/CardContainer";
import { AQI_STANDARDS } from "../../utils/variables";
import AQIStandard from "../AQIStandard";
import Live from "../Live";
import SocialLinks from "../SocialLinks";
import CompareBox from "./CompareBox";

function BrandBox({ cities }) {
  return (
    <div className="flex flex-col md:h-screen left-0 top-0">
      <div className="bg-gray-200 rounded-3xl rounded-tl-none rounded-r-none pt-10"></div>

      <div className="bg-gray-200">
        <CardContainer className="bg-primary rounded-3xl rounded-l-none text-white p-10 mr-10 md:mr-0">
          <Live className="mb-2" />

          <div className="text-3xl font-bold mb-3">Air Quality Monitor</div>

          <SocialLinks />
        </CardContainer>
      </div>

      <div className="flex-1 bg-gray-200 rounded-3xl rounded-bl-none rounded-r-none p-10 pb-0">
        <div className="flex flex-wrap md:max-w-xs">
          {Object.keys(AQI_STANDARDS).map((standard, index) => (
            <AQIStandard
              key={index}
              className="my-1 ml-0 mr-2"
              type={standard}
            />
          ))}
        </div>

        <CompareBox cities={cities} />
      </div>
    </div>
  );
}

export default BrandBox;
