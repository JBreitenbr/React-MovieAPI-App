import {Grid,Card,Form} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {DisplayType} from './index'
import {useState} from 'react'
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

export const ColumnDisplay = (props:Props) => {
const {data,displayType} = props
const [rating,setRating] = useState<number>(0)
    return (<Grid columns={3} stackable centered verticalAlign="top" padded="vertically">{data.map((displayData:DisplayData)=><Grid.Column key={displayData.id}><Card.Group>
<Link to={`/React-MovieAPI-App/${displayType==DisplayType.Movies?"movies":"tvshows"}/${displayData.id}`}>
<Card fluid image={`https://image.tmdb.org/t/p/original/${displayData.poster_path}`} header={displayType==DisplayType.Movies?displayData.title:displayData.name} meta={displayType==DisplayType.Movies?`Release Date: ${displayData.release_date} | Rating: ${displayData.vote_average}`:`Rating: ${displayData.vote_average}`} description={displayData.overview.slice(0,350)+"..."}/></Link><Form><Form.Group><Form.Field><Form.Input type="number" min="0" max="10" step="0.5" onChange={(e)=>setRating(Number(e.target.value))} action={{color:"violet",labelPosition:"right",icon:"star",content:"Rate"}}/></Form.Field></Form.Group></Form></Card.Group></Grid.Column>)}</Grid>);
  };