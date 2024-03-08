import express, { json } from "express";
import cors from "cors";
import { updateTask } from "./taskActions";
import { Task, taskList } from "./TaskList";

const app = express();
app.use(cors());
app.use(json());

app.get("/api", (req, res) => {
  res.send(taskList);
});

app.get("/api/:id", (req, res) => {
  const id = Number(req.params.id);

  if (!Number.isNaN(id)) {
    if (id < taskList.length) {
      res.status(200).send(taskList[id]);
    } else {
      res.status(404).send({ message: "Couldn't find Task with provided ID." });
    }
  } else {
    res.status(400).send({
      message:
        "String is not allowed as ID. Change this: " + `'${req.params.id}'`,
    });
  }
});

app.patch("/api/:id", (req, res) => {
  updateTask(req.params.id, req.body);
  res.status(200).send("Patch done");
});

app.post("/api", (req, res) => {
  setTimeout(() => {
    // const { title, desc, done } = req.body;

    // if (title !== undefined && desc !== undefined && done !== undefined) {
    //   taskList.push(new Task(title, desc, done, taskList.length));
    //   res.status(200).send({ message: "Task added!" });
    //   return;
    // }

    res.status(400).send({
      message:
        "Provide { title: string, desc: string, done: boolean } correctly.",
    });
  }, 2000);
});

app.listen(3000, () => {
  console.log("Server started!");
});
