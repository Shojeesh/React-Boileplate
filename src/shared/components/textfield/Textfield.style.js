import styled, {css} from "styled-components";

export const TextfieldBlock = styled.div`
    position: relative;
    width: 100%;
    ${props => props.grouped && css`
        flex-grow: 1;
    `}
`
export const Element = styled.input`
    width: 100%;
    height: 40px;
    border: solid 1px #ddd;
    padding: 0 10px;
    ${props => props.grouped && css`
    `}
    &:focus{
        outline: 0;
    }
    &.hasLeftIcon{
        padding-left: 50px;
    }
    &.hasRightIcon{
        padding-right: 50px;
    }
`;

