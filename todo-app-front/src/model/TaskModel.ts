export default interface ITask {
  id: number;
  name: string;
  description: string | null;
  estimateDate?: Date | null;
  deleted: boolean;
  completed: boolean;
}
