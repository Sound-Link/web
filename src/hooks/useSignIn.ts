import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchPhoneNumber = async (phoneNumber: string) => {
  const params = { phone_number: phoneNumber };
  const { data } = await axios.get(
    `https://jsonplaceholder.typicode.com/users`,
    { params },
  );
  return data;
};

export const useSignIn = (phoneNumber: string) => {
  const { status, data, error } = useMutation(["user"], () =>
    fetchPhoneNumber(phoneNumber),
  );
  return { status, data, error };
};
