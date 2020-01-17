import React, { useState } from "react";
import NewTask from "./NewTask";
import TaskList from "./TaskList";
import ITask from "./model/TaskModel";
import "./App.css";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    // "& > *": {
    //   margin: theme.spacing(1)
    // },
    backgroundColor: "#cccccc"
  }
  // extendedIcon: {
  //   marginRight: theme.spacing(1)
  // }
}));

const App: React.FC = () => {
  const initTasks: Array<ITask> = [
    {
      id: 1,
      name: "たすく1",
      completed: false,
      deleted: false,
      description: "すごい難しいタスクだよ",
      estimateDate: new Date()
    },
    {
      id: 2,
      name: "たすく2",
      completed: false,
      deleted: false,
      description: "これは簡単",
      estimateDate: new Date()
    },
    {
      id: 3,
      name: "たすく3",
      completed: false,
      deleted: false,
      description: "まあまあ難しい",
      estimateDate: null
    }
  ];

  const [tasks, setTasks] = useState(initTasks);

  const addTask = (newTask: ITask) => {
    const maxId = tasks.map(task => task.id).reduce((a, b) => (a > b ? a : b));
    newTask.id = maxId + 1;
    setTasks(tasks.concat(newTask));
  };
  const completeTask = (id: number) => {
    const list = tasks.map(task => {
      if (task.id !== id) return task;
      task.completed = !task.completed;
      return task;
    });
    setTasks(list);
  };
  const deleteTask = (id: number) => {
    const list = tasks.map(task => {
      if (task.id !== id) return task;
      task.deleted = !task.deleted;
      return task;
    });
    setTasks(list);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Container fixed>
        <Grid container spacing={3}>
          <Grid item sm={12}>
            <NewTask addTask={addTask} />
          </Grid>
          <TaskList
            tasks={tasks}
            completeTask={completeTask}
            deleteTask={deleteTask}
          />
        </Grid>
      </Container>
    </div>
  );
};

export default App;
