import iconStar from "./assets/icon-star.svg"
import { useState } from "react"
import { CardInicial } from "./components/CardInicial"
import { Cardfinal } from "./components/CardFinal"

export function App() {
  const [nota, setNota] = useState(0)
  const [submited, setSubimit] = useState(false)

 

  return (
   submited === false ? (
    <CardInicial nota={nota} setNota={setNota} setSubimit={setSubimit} />
    
   ) : (
     <Cardfinal nota={nota} />
   )
 )
}