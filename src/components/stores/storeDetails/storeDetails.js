import { useParams } from 'react-router-dom';
import Geocode from "react-geocode";
import MyLocation from '../myLocation/myLocation';
import { useEffect, useState } from 'react';

const StoreDetails = (props) => {

    const { id } = useParams();
    const { address } = props;

    const [Cenetr, SetCenetr] = useState(null);
    const [Txt, SetTxt] = useState(null);
    const [Zoom, SetZoom] = useState(20);

    let isLoad = false;

    useEffect(() => {
        if (isLoad == false)
            Geocode.fromAddress(
              address,
              "AIzaSyC42dZGLkeXWn1ofLJhRrWcVBxFY1-tf2Q",
              'iw'//לקבלת תוצאות בעברית
            )
              .then((response) => {
                isLoad = true;
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat + " " + lng);
                console.log(response.results[0]);

                SetCenetr({ lat: lat, lng: lng });
                SetTxt(response.results[0].formatted_address);
              })
              .catch((error) => {
                console.log(error);
              });




    }, []);



    return (<>
        <h4>מיקום במפות גוגל</h4>
        {<MyLocation center={Cenetr} address={Txt} />}
    </>);
}

export default StoreDetails;