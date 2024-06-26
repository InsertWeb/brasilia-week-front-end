import { createContext, useContext, useEffect, useState } from "react";
import { Login } from "./services";

const layoutContext = createContext();

export const useGetInfos = () => {
  return useContext(layoutContext);
};

function useProvideGetInfos() {
  const [userLogged, setUserLogged] = useState();

  useEffect(() => {
    if (!userLogged?.data?.id) {
      getMe();
    }
  }, []);

  async function getMe() {
    try {
      const { token } = JSON.parse(localStorage.getItem("token") || "{}");
      if (token) {
        const responseMe = await Login.me();
        if (responseMe.status === 200) {
          setUserLogged(responseMe.data.data);
        }
      }
    } catch (error) {
      console.log(error);
    }
  }

  return userLogged;
}

const ProvideLayout = ({ children }) => {
  const layout = useProvideGetInfos();
  return (
    <layoutContext.Provider value={layout}>{children}</layoutContext.Provider>
  );
};
export default ProvideLayout;
