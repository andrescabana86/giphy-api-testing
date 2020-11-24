import React from 'react'
import { GifListContainer } from '@containers/gif-list/gif-list'
import { GifList } from '@components/gif-list/gif-list'
import { SearchInput } from '@components/search-input/search-input'
import './app.sass'

export class App extends React.PureComponent {
  render() {
    return (
      <main className="app">
        <GifListContainer>
          {({ state, ...container }) => (
            <>
              {!!state.favorites.length && (
                <>
                  <h1 className="app__favorites">Favorites</h1>
                  <GifList list={state.favorites} loading={state.loading} />
                </>
              )}

              {/* general list */}
              <h1 className="app__gif-list">Giphy Loader</h1>

              {/* search input */}
              <section className="app__search">
                <span className="app__search-caption">Search for a Gif:</span>
                <SearchInput onSearch={container.onSearch} onClear={container.onClear} />
              </section>

              <GifList list={state.list} loading={state.loading} />
            </>
          )}
        </GifListContainer>
      </main>
    )
  }
}
