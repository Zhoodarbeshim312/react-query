import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import { API } from "../../constants/Api";

type Tvalues = {
  name: string;
  age: string;
};

export const useCreateTodo = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["create-todo"],
    mutationFn: async (body: Tvalues) => {
      const response = await axios.post(API, body);
      return response.data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });
};
