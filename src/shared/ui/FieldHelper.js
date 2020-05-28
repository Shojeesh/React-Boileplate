import React from 'react'
import styled from 'styled-components'

const FieldHelper = styled.div`
	width: 100%;
	font-size: 12px;
	margin-top: 5px;
	&.isSuccess{
		color: green;
	}
	&.isDanger{
		color: red;
	}
`
export default FieldHelper