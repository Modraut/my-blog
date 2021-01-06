import React, { useState } from "react"

export const useForm = (initialValues, validation) => {
  const [ values, setValues ] = useState(initialValues)
  const [ errors, setErrors ] = useState({})
  const [ hasSubmitted, setHasSubmitted ] = useState(false)
  // validate inputs onChange after the first time submission
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value
    })
    hasSubmitted && validation({[name]: value})
  }
  const resetForm = ()=>{
    setValues(initialValues)
    setErrors({})
    setHasSubmitted(false)
  }

  return{
    values,
    setValues,
    errors,
    setErrors,
    hasSubmitted,
    setHasSubmitted,
    handleInputChange,
    resetForm
  }
}