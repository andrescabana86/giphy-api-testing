import { enableFetchMocks, disableFetchMocks } from 'jest-fetch-mock'
import { getTrending } from './trending'

beforeAll(enableFetchMocks)
afterAll(disableFetchMocks)

describe('/trending endpoint', () => {
  it('should return empty list when list has no results to show', async () => {
    // Arrange
    fetchMock.mockResponseOnce(JSON.stringify({ data: [] }))

    // Act
    const result = await getTrending()

    // Assert
    expect(result).toHaveLength(0)
  })

  it('should return serialized results when list has results to show', async () => {
    // Arrange
    fetchMock.mockResponseOnce(
      JSON.stringify({
        data: Array.from({ length: 10 }, () => {
          const id = Math.floor(Math.random() * 10)
          return {
            id,
            title: `id is ${id}`,
            images: { original: { url: `url from id ${id}` } },
          }
        }),
      }),
    )

    // Act
    const result = await getTrending()

    // Assert
    expect(result.length).toEqual(10)
    expect(result[1]).toHaveProperty('user')
    expect(result[4]).toHaveProperty('id')
    expect(result[7]).toHaveProperty('title')
    expect(result[9]).toHaveProperty('url')
  })
})
