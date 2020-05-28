import React from "react"
import styled from "styled-components"

const Element = styled.select`
	appearance: none;
	width: 100%;
	height: 40px;
	border: solid 1px #ddd;
	padding: 0 10px;
	&:focus{
		outline: 0;
	}
`
const Option = styled.option`
`
const Select = ({options}) => {
	return(
		<Element>
			{ options.map( (v)=> <Option>{v}</Option> ) }
		</Element>
	)
};

export default Select
