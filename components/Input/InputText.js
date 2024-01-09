'use client';

import { useState } from "react"


function InputText ({ labelTitle, labelStyle, type, containerStyle, defaultValue, placeholder, updateType, name }) {

    // const [value, setValue] = useState(defaultValue)

    // const updateInputValue = (val) => {
    //     setValue(val)
    //     updateFormValue({ updateType, value: val })
    // }

    return (
        <div className={ `form-control w-full ${containerStyle}` }>
            <label className="label">
                <span className={ "label-text text-base-content " + labelStyle }>{ labelTitle }</span>
            </label>
            <input name={ name } type={ type || "text" }  placeholder={ placeholder || "" } className="input  input-bordered w-full " />
        </div>
    )
}


export default InputText