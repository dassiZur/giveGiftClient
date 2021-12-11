import React, { useEffect, useState } from "react";
import Gallery from 'react-grid-gallery';


const Logo = (props) => {
    const [giftsArr, setGiftsArr] = useState([]);
    const [chars, setChars] = useState([]);
    const [filterArr, setFilterArr] = useState([])
    const [priceFilter, setPriceFilter] = useState(null)
    const [prices, setPrices] = useState([])
    const giftToimg = (array) => {
        var arrImg = [];
        debugger;
        array.forEach(element => {
            let im = "http://localhost:5000/" + element.gifPhoto;
            arrImg.push({
                src: im,
                thumbnail: im,
                thumbnailWidth: 400,
                thumbnailHeight: 265,
                caption: element.nameGift
            })
        });
        setGiftsArr(arrImg);
    }
    useEffect(() => {
        console.log(props.giftsArr);
        debugger
        giftToimg(props.giftsArr);

        let gg = []
        props.giftsArr.forEach((g) => { g.character && (gg.indexOf(g.character) == -1) && gg.push(g.character) })
        console.log(gg);
        setChars(gg);

        let min = props.giftsArr[0] && props.giftsArr[0].price[0], max = props.giftsArr[0] && props.giftsArr[0].price[1];
        props.giftsArr.forEach((g) => { min = g.price[0] < min ? g.price[0] : min; max = g.price[1] > max ? g.price[1] : max; })
        console.log(min, max);
        setPrices([min, max])
        // g.ageRange
    }, [props.giftsArr])

    function cbSelect(selectName) {
        if (filterArr.includes(selectName)) {
            //    let arry = filterArr.filter(item => item !== selectName)
            setFilterArr(filterArr.filter(item => item !== selectName))
        }
        else
            setFilterArr([...filterArr, selectName])
    }
    function priceSelect(e) {
        setPriceFilter(e.target.value!=0?e.target.value:null)
    }
    function submitFilter() {
        let u;
        // if (filterArr == [] || filterArr.length == 0 || filterArr == undefined)
        //     if (priceFilter == null) {
        //         giftToimg(props.giftsArr)
        //         return;
        //     }
        //     else {
        //         u = props.giftsArr.filter((st) => { return priceFilter >= st.price[0] && priceFilter <= st.price[1] })
        //         // let u = props.giftsArr.map((st) => { return filterArr.includes(st.area) && st })
        //     }
        // else
        //     if (priceFilter == null) {
        //         u = props.giftsArr.filter((st) => { return filterArr.includes(st.character) })

        //     }
        //     else
                u = props.giftsArr.filter((st) => { 
                    return (filterArr.length!=0?filterArr.includes(st.character):true) && (priceFilter!=null?(priceFilter >= st.price[0] && priceFilter <= st.price[1]):true) })
        giftToimg(u)

    }
    return (
        <div>
            <div className="sidebarfltr">
                <h3>סינון</h3>
                {chars.map((char, index) => {
                    return <>
                        <input type="checkbox" id={"cb" + index} value={char} onChange={(e) => cbSelect(char)} />
                        <label htmlFor={"cb" + index}>{char}</label>
                        <br />
                    </>
                })}
                <h4>סינון מחיר</h4>
                <label>הכנס מחיר בין {prices[0]} ל{prices[1]}</label><input type='number' onChange={priceSelect} />
                <button onClick={submitFilter}>סנן</button>
            </div>
            {/* <div style={{marginRight: '15vw'}}> */}
            <Gallery images={giftsArr} showLightboxThumbnails={true} />
            {/* </div> */}

        </div>)
}
export default Logo;