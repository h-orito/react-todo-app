import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ITask from "./model/TaskModel";

interface NewTaskProp {
  addTask: (newTask: ITask) => void;
}

const NewTask: React.FC<NewTaskProp> = props => {
  const [newTaskName, setNewTaskName] = useState<string>("");

  const handleNewTaskKeyup = (event: any) => {
    setNewTaskName(event.target.value);
  };

  const createTask = () => {
    const newTask: ITask = {
      id: 999,
      name: newTaskName,
      completed: false,
      deleted: false,
      estimateDate: null,
      description: "未整理のタスク"
    };
    props.addTask(newTask);
    setNewTaskName("");
  };

  return (
    <div>
      <TextField
        id="new-task"
        label="新規タスク"
        variant="outlined"
        value={newTaskName}
        onChange={handleNewTaskKeyup}
      />
      <Button variant="contained" color="primary" onClick={createTask}>
        +
      </Button>
    </div>
  );
};

// const useStyles = makeStyles({});

export default NewTask;
