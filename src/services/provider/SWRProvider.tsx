import axios from "axios";
import { ReactNode } from "react";
import { SWRConfig } from "swr";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
});

const fetcher = (url: string) => axiosInstance.get(url).then((res) => res.data);

export default function SWRProvider(props: { children: ReactNode }) {
  return (
    <SWRConfig
      value={{
        fetcher,
        revalidateOnFocus: false
      }}
    >
      {props.children}
    </SWRConfig>
  );
}
