import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { collaboratorActions as a } from "../../../actions/collaboratorActions";
export default function CollaboratorRegis(props) {
  const dispatch = useDispatch();
  const [isAgree, setIsAgree] = useState(false);
  const appTheme = useSelector(state => state.app.appTheme);
  function handleSubmit() {
    if (isAgree)
      dispatch(a.regisCollaborator());
  }
  return (
    <div className="modal center">
      <div className="collaborator-regis-popup">
        <h3>Đăng ký cộng tác viên</h3>
        <h4>Điều khoản</h4>
        <div className="policy">
        </div>
        <div className="row">
          <input id="agree" type="checkbox" checked={isAgree} onChange={() => setIsAgree(!isAgree)} />
          <label htmlFor="agree">Tôi đồng ý vời điều khoản cộng tác viên</label>
        </div>
        <button className="regis"
          style={{ background: isAgree ? appTheme.color_main_1 : "rgb(184, 184, 184)" }}
          onClick={handleSubmit}>
          Xác nhận
        </button>
        <button className="close-btn" onClick={props.handleClose}>
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  )
}