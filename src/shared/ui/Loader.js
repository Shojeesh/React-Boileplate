import styled from "styled-components"
import Spin from "../styles/keyframes/Spin"

const Loader = styled.div`
    height: 15px;
    width: 15px;
    position: absolute;
    top: 50%;
    left: calc(50% - 7.5px);
    background-color: transparent;
    box-sizing: border-box;
    transition: all 0.5s ease;
    animation-name: ${Spin};
    animation-duration: 0.5s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    border: 2px solid #fff;
    border-radius: 50%;
    border-right-color: transparent;
    border-top-color: transparent;
    opacity: 0;
`

export default Loader