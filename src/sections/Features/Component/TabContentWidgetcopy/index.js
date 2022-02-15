import React from "react"
import { SuperTag } from "~components"
import Widget from "./style"

export default function TabContentWidgetwo({count,title,text,...rest}) {
  return (
    <Widget {...rest}>
      <Widget.Text>
        <div className="group-list">
          <div>
            <li>Alberca infinity</li>
            <li>Asoleadero</li>
            <li>Kids Garden</li>
            <li>Asadores y fogateros</li>
            <li>Cancha de paddle</li>
            <li>Basket 21</li>
            <li>Fútbol 7</li>
            <li>Área de mascotas</li>
          </div>
        </div>
      </Widget.Text>
    </Widget>
  )
}
