import React from "react";
import {useQuery} from "@tanstack/react-query";
import {getCurrentUser} from "../services/apiAuth";

export const useUser = () => {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
};

// export default useUser;
