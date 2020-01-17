import React from "react";

import ITask from "./model/TaskModel";
import Task from "./Task";

import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";

interface TaskListProp {
  tasks: Array<ITask>;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2)
  }
}));

const TaskList: React.FC<TaskListProp> = props => {
  const classes = useStyles();

  return (
    <>
      <Grid item sm={6}>
        <div>
          <Typography className={classes.root} variant="h5" component="h5">
            未完了のタスク
          </Typography>
          {props.tasks
            .filter((task: ITask) => !task.completed && !task.deleted)
            .map((task: ITask) => (
              <Task
                task={task}
                completeTask={props.completeTask}
                deleteTask={props.deleteTask}
                key={task.id}
              />
            ))}
        </div>
      </Grid>
      <Grid item sm={6}>
        <div>
          <Typography className={classes.root} variant="h5" component="h5">
            完了したタスク
          </Typography>
          {props.tasks
            .filter((task: ITask) => task.completed && !task.deleted)
            .map((task: ITask) => (
              <Task
                task={task}
                completeTask={props.completeTask}
                deleteTask={props.deleteTask}
                key={task.id}
              />
            ))}
        </div>
      </Grid>
    </>
  );
};

export default TaskList;
