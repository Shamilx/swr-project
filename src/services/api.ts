import { axiosInstance } from "./provider/SWRProvider";

export async function addTask(
  url: string,
  { arg }: { arg: { title: string; desc: string; done: boolean } }
) {
  const title = arg.title;
  const desc = arg.desc;
  const done = arg.done;

  await axiosInstance.post(url, { title, desc, done });
}
