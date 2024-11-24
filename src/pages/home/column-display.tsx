import {Grid,Card} from 'semantic-ui-react'
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
const {data,displayType} = props
let title=displayType==DisplayType.Movies?data[rnd].title:data[rnd].name;
    return (<Grid columns={3} stackable centered verticalAlign="top" padded="vertically">{data.map((displayData:DisplayData)=><Grid.Column key={displayData.id}><Card.Group><Card fluid image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`} header={displayType==DisplayType.Movies?displayData.title:displayData.name} meta={displayType==DisplayType.Movies?`Release Date: ${displayData.release_date} | Rating: ${displayData.vote_average}`:`Rating: ${displayData.vote_average}`} description={displayData.overview.slice(0,350)+"..."}/></Card.Group></Grid.Column>)}</Grid>);
  };