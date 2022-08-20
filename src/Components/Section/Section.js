import React from 'react'
import './Section.css'


function Section({ Icon, title, color, selected1, selected2, selected3 }) {



    return (
        <div
            // style={{
            //     borderBottom: `3px solid ${color}`,
            //     color: `${selected1 && color}`
            // }}
            className={`section ${(selected1 === "selected1" && 'section--selected1') || (selected2 === "selected2" && 'section--selected2') || (selected3 === "selected3" && 'section--selected3')}`}>

            <Icon />
            <h4 style={{
                // color: `${selected && color}`

            }}>{title}</h4>



        </div>
    )
}

export default Section