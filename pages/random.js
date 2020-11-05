import { useQuery } from 'react-query'

export default function Random() {
  const { data, isLoading } = useQuery('qiita-random', () => 
    fetch('http://localhost:3000/api/hello').then(x => x.json()),
    {
      refetchInterval: 500,
    })

  return (
    <>
    <h1>Random</h1>
    {!isLoading ? 
      (<>Value: {data.value}</>) : 'Loading...'}
    </>
  )
}
