import jsVectorMap from "jsvectormap";
import "jsvectormap/dist/css/jsvectormap.css";
import React, { useEffect } from "react";
import "../../js/fr-merc-en";  // Ensure this import points to the correct file for the French map

const MapOne: React.FC = () => {
  useEffect(() => {
    const mapOne = new jsVectorMap({
      selector: "#mapOne",
      map: "fr_merc_en", // Update this to the appropriate map code for France
      zoomButtons: true,

      regionStyle: {
        initial: {
          fill: "#C8D0D8",
        },
        hover: {
          fillOpacity: 1,
          fill: "#3056D3",
        },
      },
      regionLabelS"use client";
      import jsVectorMap from "jsvectormap";
      import "jsvectormap/dist/css/jsvectormap.css";
      import React, { useEffect } from "react";
      import "../../js/us-aea-en";
      
      const MapOne: React.FC = () => {
        useEffect(() => {
          const mapOne = new jsVectorMap({
            selector: "#mapOne",
      …tyle: {
        initial: {
          fontFamily: "Satoshi",
          fontWeight: "semibold",
          fill: "#fff",
        },
        hover: {
          cursor: "pointer",
        },
      },

      labels: {
        regions: {
          render(code: string) {
            // Update the label rendering logic if needed, based on how French regions are coded
            return code.split("-")[1]; // You may need to adjust this depending on the actual data format
          },
        },
      },
    });

    return () => {
      mapOne.destroy();
    };
  }, []);

  return (
    <div className="col-span-12 rounded-sm border border-stroke bg-white px-7.5 py-6 shadow-default dark:border-strokedark dark:bg-boxdark xl:col-span-7">
      <h4 className="mb-2 text-xl font-semibold text-black dark:text-white">
        Region labels
      </h4>
      <div className="h-90">
        <div id="mapOne" className="mapOne map-btn"></div>
      </div>
    </div>
  );
};

export default MapOne;
