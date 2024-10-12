import { useState } from "react"

const Counter = () => {
const [num, setNum] = useState(0)

return (
	<>
	<p>{num}</p>
	<button onClick={() => setNum((prevNum) => prevNum + 1 )}>+</button>
	<button onClick={() => setNum((prevNum) => prevNum - 1 )}>-</button>
	</>
)
}

export default Counter