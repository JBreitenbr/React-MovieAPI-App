import {Segment,Header} from 'semantic-ui-react'
import {useParams} from 'react-router-dom'
export const TvShow = () => {
  const {id} = useParams<string>()
  return <div style={{marginTop:80}}>
    <Segment><Header></Header>
    </Segment></div>;
}