import React from "react"
import { SuperTag } from "~components"
import Widget from "./style"

export default function TabContentWidgetwo({count,title,text,...rest}) {
  return (
    <Widget {...rest}>
      <Widget.Text>
        <div className="group-list">
          <div>
            <li>Carriles de nado</li>
            <li>Chapoteadero</li>
            <li>Gym</li>
            <li>Spinning</li>
            <li>Yoga</li>
            <li>Vapor y sauna</li>
          </div>
          <div>
            <li>Kids club</li>
            <li>Cine</li>
            <li>Salón inglés</li>
            <li>Salón de fiestas</li>
            <li>Salones lounge</li>
            <li>Business center</li>
          </div>
        </div>
      </Widget.Text>
    </Widget>
  )
}
