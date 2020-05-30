import React from "react"
import useNavigator from "../hooks/useNavigator"

export default function RandomButton({ style }) {
  const { random } = useNavigator()

  return (
    <button style={style} onClick={random} id="random">
      View a random sample
    </button>
  )
}
