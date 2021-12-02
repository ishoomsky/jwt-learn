import { FC, useEffect } from "react";
import LoginForm from "./components/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import { checkAuth, logout } from "./store/actions/authActions";
import { userListFetch } from "./store/actions/userListActions";
import { localStorageCheck } from "./services/LocalStorageAPI";

const App: FC = () => {
  const dispatch = useDispatch();
  const { isLoading, isAuth, user } = useSelector((state: any) => state.auth);
  const { userList } = useSelector((state: any) => state.userList);

  useEffect(() => {
    if (localStorageCheck("token")) {
      dispatch(checkAuth());
    }
  }, []);

  if (isLoading) {
    return <h5>Loading .........</h5>;
  }

  if (!isAuth) {
    return (
      <>
        <LoginForm />
        <button onClick={() => dispatch(userListFetch())}>Get users</button>
      </>
    );
  }

  return (
    <div>
      <h1>{`Пользователь ${user.email} авторизован!`}</h1>
      <h5>{user.isActivated ? `Акаунт активирован` : `Активируйте аккаунт`}</h5>
      <button onClick={() => dispatch(userListFetch())}>Get users</button>
      <button onClick={() => dispatch(logout())}>Logout</button>
      <div>
        {userList.map((user: any) => (
          <div key={user.email}>{user.email}</div>
        ))}
      </div>
    </div>
  );
};

export default App;
