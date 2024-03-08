import useSWR from "swr";

export function useTasks() {
  return useSWR<Task[]>("/api");
}
