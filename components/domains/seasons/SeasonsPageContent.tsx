import { FunctionComponent } from 'react'
import { MediaFormat, MediaSeason, useGetSeasonAnimeQuery } from '../../../generated/graphql'

interface SeasonsPageContentProps {
  season: MediaSeason
  year: number
}

export const SeasonsPageContent: FunctionComponent<SeasonsPageContentProps> = ({ season, year }) => {
  const { data, loading, error } = useGetSeasonAnimeQuery({
    variables: {
      page: 1,
      year: year,
      format: MediaFormat.Tv,
      season: season,
    },
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>error... {error.message}</div>
  }

  return (
    <div>
      Seasons Page Content {season} {year} {data?.Page?.media?.length}
      <ul>
        {data?.Page?.media?.map((m, i) => (
          <li key={i}>{m?.title?.romaji}</li>
        ))}
      </ul>
    </div>
  )
}
