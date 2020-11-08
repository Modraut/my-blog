import React, { Fragment }from "react"

import { Link } from "react-router-dom";
import resume from "../../common/assets/documents/Chad.Liu_CV.pdf"

export const Resume = () => {
  return(
    <Fragment>
      <a href={resume} target="_blank" />
    </Fragment>
  )
}