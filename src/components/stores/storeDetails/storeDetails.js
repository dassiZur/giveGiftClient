import { useParams } from 'react-router-dom';
import Geocode from "react-geocode";
import MyLocation from '../myLocation/myLocation';
import { useEffect, useState } from 'react';

const StoreDetails = (props) => {

    const { id } = useParams();

    const [Cenetr, SetCenetr] = useState(null);
    const [Txt, SetTxt] = useState(null);
    const [Zoom, SetZoom] = useState(20);

    useEffect(() => {
        

        Geocode.fromAddress("רמז 53 הרצליה").then(response => {

            const { lat, lng } = response.results[0].geometry.location;
            console.log(lat + " " + lng);
            console.log(response.results[0]);

            SetCenetr({ lat: lat, lng: lng });
            SetTxt(response.results[0].address_components[0].long_name);

        }).catch(error => {
            console.log(error);
        });



    }, []);



    return (<>{Cenetr && Zoom && Txt && <MyLocation center={Cenetr} zoom={Zoom} txt={Txt} />}

    </>);
}

export default StoreDetails;