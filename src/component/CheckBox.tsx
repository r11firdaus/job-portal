import { memo } from "react";

type CheckBoxTypes = {
  defCheck: boolean,
  check?: boolean,
  value: string,
  id?: string,
  caption: string,
  addClass?: string,
}

const CheckBox = ({ defCheck, value, id, caption, addClass }: CheckBoxTypes) => {

  return (
    <div className="form-check">
      <input className={`form-check-input ${addClass}`} type="checkbox" defaultChecked={defCheck} value={value} id={id} />
      <small className="form-check-label">{caption}</small>
    </div>
  );
}
 
export default memo(CheckBox);