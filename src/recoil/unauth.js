import React from "react";
import { useSetRecoilState } from 'recoil';
import { authorized } from '../recoil/atom';

function unauth(props) {
    const setAuthorized=useSetRecoilState(authorized);
    if(props.false){
        setAuthorized(false);
    }
}
export default BlueButton;