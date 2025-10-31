import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../../constants/Api";

export const useGetTodo = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: async () => {
      const { data } = await axios.get(API);
      return data.data;
    },
  });
};
