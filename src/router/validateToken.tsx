import { useSelector } from "react-redux";
import { IRootState } from "@/store";

export const IsUserAuthenticated = (): boolean => {
  const token = useSelector((state: IRootState) => state.user.token);
  return !!token;
};
