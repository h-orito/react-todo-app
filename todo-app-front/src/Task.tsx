import React, { useState } from "react";
import ITask from "./model/TaskModel";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Checkbox from "@material-ui/core/Checkbox";

interface TaskProp {
  task: ITask;
  completeTask: (id: number) => void;
  deleteTask: (id: number) => void;
}

const Task: React.FC<TaskProp> = props => {
  const cardClasses = useStyles();

  const [task] = useState(props.task);

  const handleDelete = () => props.deleteTask(task.id);
  const handleComplete = () => props.completeTask(task.id);

  const formatDate = (date: Date) => {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    return year + "/" + month + "/" + day;
  };

  return (
    <Card className={cardClasses.card}>
      <CardActions className={cardClasses.deleteButton} onClick={handleDelete}>
        <Button>x</Button>
      </CardActions>
      <CardContent>
        <Typography
          className={cardClasses.title}
          color="textSecondary"
          gutterBottom
        >
          {task.estimateDate ? formatDate(task.estimateDate) : ""}
        </Typography>
        <div>
          <Typography variant="h5" component="h2">
            {task.name}
          </Typography>
          <CardActions>
            <Checkbox
              className={cardClasses.deleteButton}
              checked={task.completed}
              onChange={handleComplete}
              value="primary"
              inputProps={{ "aria-label": "primary checkbox" }}
            />
            done
          </CardActions>
        </div>
        <Typography variant="body2" component="p">
          {task.description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const useStyles = makeStyles({
  card: {
    minWidth: 275
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  deleteButton: {
    float: "right"
  }
});

export default Task;
