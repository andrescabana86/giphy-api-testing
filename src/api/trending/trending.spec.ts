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
    expect(result).toHaveLength(10)
    expect(result[Math.floor(Math.random() * 10)]).toHaveProperty('id')
    expect(result[Math.floor(Math.random() * 10)]).toHaveProperty('title')
    expect(result[Math.floor(Math.random() * 10)]).toHaveProperty('url')
  })
})
