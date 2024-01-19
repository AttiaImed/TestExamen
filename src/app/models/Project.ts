export class Project{
  id!: number;
  type !: string;
  description !: string;
  tasks : Tasks[]=[];

}
export class Tasks{
  id!: number;
  title !: string;
  DateD !:string;
  DateF !:string;
  status !:string;
  project !:Project;
}
