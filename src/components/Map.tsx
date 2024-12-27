import React, { memo } from 'react';
import { ComposableMap, Geographies, Geography, } from 'react-simple-maps';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { Country } from '../types';
import africaGeo from '../data/custom.geo.json';

const MapChart: React.FC = () => {
  const navigate = useNavigate();
  const setSelectedCountry = useStore((state) => state.setSelectedCountry);

  const handleCountryClick = (geo: any) => {
    const country: Country = {
      name: geo.properties.name,
      code: geo.properties.iso_a2,
      flag: `https://flagcdn.com/w320/${geo.properties.iso_a2.toLowerCase()}.png`,
      coordinates: geo.geometry.coordinates[0][0],
    };
    setSelectedCountry(country);
    navigate(`/country/${geo.properties.iso_a2.toLowerCase()}`);
  };

  return (
    <div className="w-full h-[800px] bg-slate-900 rounded-xl overflow-hidden">
      <ComposableMap
        projection="geoMercator"
        projectionConfig={{
          scale: 350,
          center: [20, -5]
        }}
      >
          <Geographies geography={africaGeo}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  onClick={() => handleCountryClick(geo)}
                  style={{
                    default: {
                      fill: "#2D3748",
                      stroke: "#4A5568",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    hover: {
                      fill: "#4299E1",
                      stroke: "#4A5568",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                    pressed: {
                      fill: "#2B6CB0",
                      stroke: "#4A5568",
                      strokeWidth: 0.5,
                      outline: "none",
                    },
                  }}
                />
              ))
            }
          </Geographies>
      </ComposableMap>
    </div>
  );
};

export const Map = memo(MapChart);

// import React from 'react';
// // import './AfricaMap.css'; // External CSS for styling (optional)

// interface AfricaMapProps {
//   onCountryClick?: (countryId: string) => void;
// }

// const Map: React.FC<AfricaMapProps> = ({ onCountryClick }) => {
//   const handleCountryClick = (countryId: string) => {
//     if (onCountryClick) {
//       onCountryClick(countryId);
//     }
//   };

//   return (
//     <div className="w-full h-[600px] bg-slate-900 rounded-xl overflow-hidden">
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 800 800"
//         width="800"
//         height="800"
//         id="mapsection"
//       >
//         <path
//           id="Benin"
//           d="M110 130 L..." // Replace with actual path data
//           onClick={() => handleCountryClick('Benin')}
//           className="country"
//         />
//         <path
//           id="Nigeria"
//           d="M120 150 L..." // Replace with actual path data
//           onClick={() => handleCountryClick('Nigeria')}
//           className="country"
//         />
//         <path
//           id="Zambia"
//           d="M200 300 L..." // Replace with actual path data
//           onClick={() => handleCountryClick('Zambia')}
//           className="country"
//         />

//         {/* Add all other country paths */}

//       </svg>
//     </div>
//   );
// };

// export default Map;