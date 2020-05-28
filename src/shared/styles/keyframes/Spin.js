import { keyframes } from "styled-components"

const Spin = keyframes`
	from{
		transform: translateY(-50%) rotate(0deg);
	}
	to{
		transform: translateY(-50%) rotate(360deg);
	}
`

export default Spin
