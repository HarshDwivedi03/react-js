import { createContext } from "react"
import Child1 from "./child1"

let cdata =createContext()
let name ="harsh"

function App() {
  

  return (
    <>
     <cdata.Provider value={name}>
     <Child1/>
     </cdata.Provider>
    </>
  )
}

export default App
export {cdata}
