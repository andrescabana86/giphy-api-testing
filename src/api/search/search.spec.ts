import { enableFetchMocks, disableFetchMocks } from 'jest-fetch-mock'
import { searchGiphy } from './search'

beforeAll(enableFetchMocks)
afterAll(disableFetchMocks)

describe('/search endpoint', () => {
  it('should return empty list when list has no results to show', async () => {
    // Arrange
    const query = 'this is retrieving nothing @@@@@@!!!'
    fetchMock.mockResponseOnce(JSON.stringify({ data: [] }))

    // Act
    const result = await searchGiphy(query)

    // Assert
    expect(result).toHaveLength(0)
  })

  it('should return serialized results when list has results to show', async () => {
    // Arrange
    const query = 'playstation'
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
    const result = await searchGiphy(query)

    // Assert
    const item = Math.floor(Math.random() * 10)
    expect(result).toHaveLength(10)
    expect(result[item]).toHaveProperty('id')
    expect(result[item]).toHaveProperty('title')
    expect(result[item]).toHaveProperty('url')
  })
})
