import React from "react";
import {useSelector, useDispatch} from 'react-redux';
import Goods from "../components/Goods";
import {
    selectGoods
} from '../store/goodsSlice'

// get data from store
// list data


function GoodsList() {
    const goods = useSelector(selectGoods);
    const dispatch = useDispatch();

    return (
        <>
            <div class="goods-field">
                {goods.map(item => <Goods 
                    title={item.title} 
                    cost={item.cost} 
                    image={item.image}
                    articul={item.articul}
                    key={item.articul}/>)}
            </div>
        </>
    )
}
export default GoodsList;