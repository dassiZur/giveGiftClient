import React, { Component, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => (
  <div style={{ width: "10vw" }}>
    <div
      style={{
        backgroundColor: "brown",
        width: "15px",
        height: "15px",
        borderRadius: "61px 0px 61px 44px",
      }}
    ></div>
    <h4 style={{ padding: "0 -900px" }}>{text}</h4>
  </div>
);

const MyLocation = (props) => {
  const { center, address } = props;

  return (
    <div style={{ height: "48vh" }}>
      {center && (
        <GoogleMapReact
          bootstrapURLKeys={{
            key: "AIzaSyC42dZGLkeXWn1ofLJhRrWcVBxFY1-tf2Q",
            language: "he",
            region: "he",
            libraries: ["places"],
          }}
          // defaultCenter={{ lat: 32.088787897721865, lng: 34.83906039343857 }}
          defaultCenter={{
            lat: center?.lat,
            lng: center?.lng,
          }}
          defaultZoom={14}
        >
          {/* <p style={{position: 'absolute', left: '9px'}}>"dfghjkl"</p> */}
          <AnyReactComponent
            lat={center?.lat}
            lng={center?.lng}
            //   lat={center?.lat + 0.005}
            //   lng={center?.lng + 0.006}
            text={address}
          />
        </GoogleMapReact>
      )}
    </div>
  );
};

export default MyLocation;

// import React, { Component, useEffect, useState } from "react";
// import GoogleMapReact from "google-map-react";

// const AnyReactComponent = ({ text }) => <div>{text}</div>;

// const MyLocation = (props) => {
//   useEffect(() => {}, []);
// let {center}=props
//   return (
//     <div style={{ height: "400px", width: "500px" }}>
//       <GoogleMapReact
//         bootstrapURLKeys={{ key: "AIzaSyC42dZGLkeXWn1ofLJhRrWcVBxFY1-tf2Q" }}
//         defaultCenter={{ lat: 32.95, lng: 30.33 }}
//         defaultZoom={15}
//       >
//         <AnyReactComponent lat={32.95} lng={30.33} text={"props.txt"} />
//       </GoogleMapReact>
//     </div>
//   );
// };

// export default MyLocation;
