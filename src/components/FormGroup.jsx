import useClassNames from "../hooks/useClassNames"

const FormGroup = ( { label, className, ...props } ) => {
  return (
    <div className="form-group">
      <label>{label}</label>
      <input type="text" {...props} className={useClassNames( 'form-control', className )}/>
    </div>
  )
}

export default FormGroup
