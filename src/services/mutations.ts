import useSWRMutation from "swr/mutation";
import { addTask } from "./api";
import { useTasks } from "./tasksHook";

export function useAddTask() {
  const { mutate } = useTasks();

  return useSWRMutation("/api", addTask, {
    onError(err) {
      console.log(err);
    },
    onSuccess() {
      mutate();
    },
  });
}
