import React from "react";
import styled from "styled-components";

import Button from "./BlueButton";


function OauthButton(props) {
    return (
        <>
        {props.kakao&&
        <Button onClick={props.onClick} {...props} color={"#000000"} backgroundColor={"#FEE500"} href={props.href}>
            <Icon>
            <svg 
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            width="22px" height="22px">
            <path fill="rgb(0, 0, 0)"
            d="M10.879,0.969 C4.871,0.969 0.000,4.750 0.000,9.415 C0.000,12.315 1.884,14.873 4.752,16.393 L3.545,20.824 C3.439,21.216 3.884,21.528 4.227,21.301 L9.517,17.792 C9.964,17.835 10.418,17.860 10.879,17.860 C16.888,17.860 21.759,14.079 21.759,9.415 C21.759,4.750 16.888,0.969 10.879,0.969 "/>
            </svg>
            </Icon>
            <div>
                카카오 로그인
            </div>
        </Button>
        }
        {props.google&&
        <Button onClick={props.onClick} {...props} backgroundColor={"#4285F4"} href={props.href}>
        <Icon>
        <svg 
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        width="48px" height="48px">
        <image  x="5px" y="5px" width="48px" height="40px"  xlinkHref="data:img/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEYAAABICAMAAAB8+nPGAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAACHFBMVEX////86Ob2s67xioHtZlvsVkrqSTzqSz3sXFDubmPxhHv3t7L97ev+/v73vrnvcmfqQzXua2D4w775zMjtZVruaF35zsr++fnyk4v0npf+/f398fDual7wfXP97u3tZFj5zMn++vrubWLyj4fuaV70oJn4yMT62db62NX0opvubGH50M361NH9/PvtY1Tzm5T+/PvzmZL967T0jxbqRzP80lj7vAX3pQ3sUy7++u/7vgz6tAfvaCbrT0L98/P95Jz6uwXyghvqRDT0pJ381GH2oiL+9vXL3fzN3vz7yDX80FBChfT6/P77wRr93YPq8f37vQv945rZ5vzO3/zc6P3u9P7XwDP1+vZ8qvdnnPZEhvT9/v6dsik2qFKd1ayXvPhblfX6vQzvuglwrjs0qFNBrV7z+fT7/P5ZlPWRuPj2z1PXuBNPqkiGy5mwzPrI3Pvx5amxtCE7qFCR0KLb6PxJifT5+/77/PtXt3GT0KP9/v3T4vxSj/TM6dRhu3nR69jg8uWEypdCnZpBhfBNjPTx9v5duXaZ06jE5c3W7dzQ69e138CZ06lwwYY1qFQ3n3hAiOOmxvn6/Po1pGE+jcxxo/bt9/A0p1Q7lapgmPXz9/7w+PJeunZXq5rn7/35/PqKzZzI59BZuHJEr2Gn2bS44MNmvX5Lsmel2LL3+/jm9Oqt3LqByZRauHNJsWU7q1lNsmh0w4mm2bTe8eOhXXOUAAAAAWJLR0QAiAUdSAAAAAd0SU1FB+YCAQE3CFGrJAsAAAHWSURBVFjD7dP5OxVRGMDxl2RJNETWyLULWSdL2UqJyq7s4mSnKLtIZElky152hSL5B133zFy3MY/nnLn3p57z/fE9z/k8M+fMALBYLBbrTEbGF0wumpqZW1yyvKzUsLK+wulkY6tIuWrHSbK/Ro04OHIyOTnTKS6unGzXqRQ3d3nF9AaN4qEyhAKepzu9vH18/Xz8AxQoN7WIKlCcBapolaBgUbmlczEhoXQKhIVHYCWUbp+kSP521IniqZcSHcPzsXc47m6cXkw8ry4hMemeXgrc5zUlP9BOHkpKIWEeYSb1dJIm7TEB8wQzT89h0gmYDMxknsNkGYbJNsxL5RjmiHMJGOHC855pJ8/F8rFSUEjA4M+vqLjk7FIpZsoIFIh+wfPlFQi9rJSuVFVjpoaEgVq+rh6pa5AuNApH84qIed3UjDS9+Xf+tgUrLa1ETFs7Euro1Bl3dQsPU0qkALwTGdTTK87e933ox8rAR0IGGrQOGhwaHvk0+nlsHKEvExpmklSBqR4k1/SMWvlK8nsLzbbLOnPzaQuL5ArA0rKsg759p1EAVlbllLElOkXd2roU2di0olYAOre2dZEfP3cUIJp293793j84+LN8+PdIqcFisVj/b8c2qc7of9O03gAAAABJRU5ErkJggg==" />
        </svg>
        </Icon>
        <div>
            Google 계정으로 로그인
        </div>
    </Button>
        }
        </>
    );
}
export default OauthButton;

const Icon=styled.div`
    margin-right:10px;
`