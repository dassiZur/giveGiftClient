import { Slider, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Gallery from 'react-grid-gallery';


const Logo = (props) => {
    const [giftsArr, setGiftsArr] = useState([]);
    const [chars, setChars] = useState([]);
    const [filterArr, setFilterArr] = useState([])
    const [priceFilter, setPriceFilter] = useState(null)
    const [prices, setPrices] = useState([])
    const [ageFilter, setAgeFilter] = useState(null)
    const [ages, setAges] = useState([])
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

        initPrice()
        initAge()
        // g.ageRange
    }, [props.giftsArr])

    function initPrice() {
        let min = props.giftsArr[0] && props.giftsArr[0].price[0], 
        max = props.giftsArr[0] && props.giftsArr[0].price[1];
        props.giftsArr.forEach((g) => { min = g.price[0] < min ? g.price[0] : min; max = g.price[1] > max ? g.price[1] : max; })
        console.log(min, max);
        setPrices([min, max])
        setMovePrice((min + max) / 2)
    }

    function initAge() {
        let min = props.giftsArr[0] && props.giftsArr[0].ageRange[0], 
        max = props.giftsArr[0] && props.giftsArr[0].ageRange[1];
        props.giftsArr.forEach((g) => { min = g.ageRange[0] < min ? g.ageRange[0] : min; max = g.ageRange[1] > max ? g.ageRange[1] : max; })
        console.log(min, max);
        setAges([min, max])
        setMoveAge((min + max) / 2)
    }

    function cbSelect(selectName) {
        if (filterArr.includes(selectName)) {
            //    let arry = filterArr.filter(item => item !== selectName)
            setFilterArr(filterArr.filter(item => item !== selectName))
        }
        else
            setFilterArr([...filterArr, selectName])
    }

    function submitFilter() {
        let u;
        {// if (filterArr == [] || filterArr.length == 0 || filterArr == undefined)
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
        }
        u = props.giftsArr.filter((st) => {
            return (filterArr.length != 0 ? filterArr.includes(st.character) : true) 
            && (priceFilter != null ? (priceFilter >= st.price[0] && priceFilter <= st.price[1]) : true)
            && (ageFilter != null ? (ageFilter >= st.ageRange[0] && ageFilter <= st.ageRange[1]) : true)
        })
        giftToimg(u)

    }
    const [moveAge, setMoveAge] = useState(500);
    const ageRangeSelector = (e, newValue) => {
        if (moveAge != newValue){
            setMoveAge(newValue);
            ageSelect(newValue)
        }
        console.log(moveAge)
    };
    function ageSelect(e) {
        setAgeFilter(e != 0 ? e : null)
    }
    const [movePrice, setMovePrice] = useState(500);
    const priceRangeSelector = (e, newValue) => {
        if (movePrice != newValue) {
            setMovePrice(newValue);
            priceSelect(newValue)
        }
        console.log(movePrice)
    };
    function priceSelect(e) {
        setPriceFilter(e != 0 ? e : null)
    }
    return (
        <div>
            <div className="sidebarfltr">
                <h3>סינון</h3>
                {chars.map((char, index) => {
                    return <div className='cb-char-filter' key={index}>
                        <input type="checkbox" id={"cb" + index} value={char} onChange={(e) => cbSelect(char)} />
                        <label htmlFor={"cb" + index}>{char}</label>
                    </div>
                })}

                {/* *******  סינון מחיר   ******** */}
                <h4>סינון מחיר</h4>
                <Typography id="range-slider" gutterBottom>
                    בחר מחיר בין {prices[0]} ל{prices[1]}:
                </Typography>
                <Slider
                    value={movePrice}
                    onChange={priceRangeSelector}
                    valueLabelDisplay="auto"
                    min={prices[0]}
                    max={prices[1]}

                />
                {/* <label>הכנס מחיר בין {prices[0]} ל{prices[1]}</label>
                <input type="number" min={prices[0]} max={prices[1]} className='num-input' onChange={priceSelect} /> */}

                {/* *******  סינון גיל   ******** */}
                <h4>סינון גיל</h4>
                <Typography id="range-slider" gutterBottom>
                    בחר גיל בין {ages[0]} ל{ages[1]}:
                </Typography>
                <Slider
                    value={moveAge}
                    onChange={ageRangeSelector}
                    valueLabelDisplay="auto"
                    min={ages[0]}
                    max={ages[1]}

                />
                <button className='filter-button' onClick={submitFilter}>סנן</button>
            </div>
            {/* <div style={{marginRight: '15vw'}}> */}
            <Gallery images={giftsArr} showLightboxThumbnails={true} />
            {/* </div> */}

        </div>)
}
export default Logo;