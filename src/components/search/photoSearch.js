import axios from "axios"
import { useParams } from 'react-router-dom'
import { useEffect, useState } from "react";
const PhotoSearch = (props) => {
    //מביא את האי די מתוך שורת  הניתוב
    // const { id } = useParams();
    const [giftsArr, setGiftsArr] = useState([]);
    const [giftsArr2, setGiftsArr2] = useState([]);
    const GetGiftsByCategoryId = async (id) => {
        axios.get(`http://localhost:5000/gifts/getByIdCategory/${id}`).
            then(succ => {
                console.log("TAMAR REVIVO");
                setGiftsArr(succ.data);
                axios.get(`http://localhost:5000/gifts/getByIdParentCategory/${id}`).
                    then(succ => {
                        console.log("TAMAR REVIVOOOOOOOOOOOOOOOOOOOOOOOOOOOOO");

                        setGiftsArr2(succ.data)
                    }).
                    catch(error => console.log(error));
            }).
            catch(error => console.log(error));
    }
    useEffect(() => {
        GetGiftsByCategoryId(props.idCategory);
    }, []);
    return (<>
        {giftsArr && giftsArr.map((item, index) => <p>{item.nameGift}</p>)}
        {giftsArr2 && giftsArr2.map((item, index) => <p>{item.nameGift}</p>)}
    </>);
}
export default PhotoSearch;
