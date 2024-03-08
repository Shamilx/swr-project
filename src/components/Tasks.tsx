import { useRef } from "react";
import { useTasks } from "../services/tasksHook";
import { useAddTask } from "../services/mutations";

export default function Tasks() {
  const { data, isLoading, error } = useTasks();
  const { trigger, isMutating } = useAddTask();

  const titleRef = useRef<HTMLInputElement>(null);
  const descRef = useRef<HTMLInputElement>(null);
  const doneRef = useRef<HTMLInputElement>(null);

  const handleSubmit = async () => {
    if (titleRef.current && descRef.current && doneRef.current) {
      if (titleRef.current.value.length === 0) {
        console.log("Provide better");
        return;
      }

      const title = titleRef.current.value;
      const desc = descRef.current.value;
      const done = doneRef.current.checked;

      const newData: Task = { title, desc, done, id: 12 };
      const optimisticData = data;
      optimisticData?.push(newData);

      trigger(newData, {
        optimisticData,
        rollbackOnError: true
      });
    }
  };

  if (isLoading) return <div>Loading</div>;
  if (error) return <div>Error</div>;
  if (isMutating) {
    console.log(data);
  }
  return (
    <div>
      {data?.map((data) => {
        return (
          <div key={data.id}>
            <h1>{data.title}</h1>
            <p>{data.desc}</p>
            <p>{data.done ? "It is done" : "It is not done"}</p>
            <hr />
          </div>
        );
      })}
      <form style={{ display: "flex" }} onSubmit={(e) => e.preventDefault()}>
        <input placeholder="Title" ref={titleRef} />
        <input placeholder="Desc" ref={descRef} />
        <input placeholder="Done" type="checkbox" ref={doneRef} />
        <button onClick={handleSubmit}>Submit</button>
      </form>
    </div>
  );
}
