import {DisplayType} from './index'
interface DisplayData {
  id: number;
  overview: string;
  poster_path: string;
  title?: string;
  name?:string;
  vote_average: number;
  release_date: string;
}

interface Props {
  data: DisplayData[];
  displayType: DisplayType;
}
let rnd=Math.floor(Math.random()*10)
export const ColumnDisplay = (props:Props) => {
    return (<div>{props.displayType==DisplayType.Movies?props.data[rnd].title:props.data[rnd].name}</div>)
  }