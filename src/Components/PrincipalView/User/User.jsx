import { useContexts } from "../../../Hooks/useContexts";
import person from "../../../assets/person.svg";
import close from "../../../assets/close.svg";
import "./user.css";
import { useNavigate } from "react-router-dom";

export function User() {
  const { userDetails, handleCloseShowModal } = useContexts();
  const navigate = useNavigate();

  const handleCloseSession = () => {
    navigate("/")
  }

  console.log(userDetails);
  return (
    <aside className="account">
      {userDetails && (
        <>
          <div className="account__container">
            <figure className="account__close">
              <img src={close} alt="close" onClick={handleCloseShowModal} />
            </figure>
            <figure className="account__figure">
              <img src={person} alt="img of user" />
            </figure>
            <div className="account__texts">
              <p>{`${userDetails.name.firstname} ${userDetails.name.lastname}`}</p>
              <p>{userDetails.email}</p>
            </div>
          </div>
          <div className="account__closeSession" onClick={handleCloseSession}>
            <p>Sign off</p>
          </div>
        </>
      )}
    </aside>
  );
}
