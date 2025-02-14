import { useAppSelector } from "@/redux/hook";

const useAuth = () => {
  const { token, user } = useAppSelector((state) => state.auth);
  return {
    token,
    user,
  };
};

export default useAuth;
