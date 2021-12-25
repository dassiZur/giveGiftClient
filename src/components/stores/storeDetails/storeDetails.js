import { useParams } from 'react-router-dom';
import Geocode from "react-geocode";
import MyLocation from '../myLocation/myLocation';
import { useEffect, useState } from 'react';

const StoreDetails = (props) => {

    const { id } = useParams();

    const [Cenetr, SetCenetr] = useState(null);
    const [Txt, SetTxt] = useState(null);
    const [Zoom, SetZoom] = useState(20);

    let isLoad = false;

    useEffect(() => {

        if (isLoad == false)
            Geocode.fromAddress("רמז 53 הרצליה", 'AIzaSyC42dZGLkeXWn1ofLJhRrWcVBxFY1-tf2Q'
            ).then(response => {
                isLoad = true;
                const { lat, lng } = response.results[0].geometry.location;
                console.log(lat + " " + lng);
                console.log(response.results[0]);

                SetCenetr({ lat: lat, lng: lng });
                SetTxt(response.results[0].address_components[0].long_name);

            }).catch(error => {
                console.log(error);
            });




    }, []);



    return (<>
        <h4>מפות גוגל</h4>
        {<MyLocation />}
    </>);
}

export default StoreDetails;