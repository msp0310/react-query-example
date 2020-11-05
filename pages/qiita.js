import { useQuery } from 'react-query'

export default function Qiita() {
  const { data, isLoading } = useQuery('qiita', () => 
    fetch('https://qiita.com/api/v2/items?query=react%3Aquery')
        .then(x => x.json()))

  return (
    <>
    <h1>記事</h1>
    {!isLoading ? 
      (<ul>
        {data.map(x => <li key={x.title}>{x.title}</li>)}
      </ul>) : 'Loading...'}
    </>
  )
}