import React, { Suspense, useEffect } from 'react'
import { RecoilRoot } from 'recoil'
import { ErrorBoundary } from 'react-error-boundary'
import { Router, Switch, Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import Start from './pages/Start'
import Log from './pages/Log'
import Volume from './pages/Volume'
import History from './pages/History'
import Layout from './components/Layout'
import ErrorFallback from './components/ErrorFallback'
import Loading from './components/Loading'
import DebugObserver from './state/DebugObserver'
// import DebugButton from './state/DebugButton'

import history from './utils/history'

import { useColorMode } from 'theme-ui'

library.add(fas, far)

function App() {
  const [, setColorMode] = useColorMode()

  useEffect(() => {
    setColorMode('light')
  }, [setColorMode])

  return (
    <RecoilRoot>
      <DebugObserver />
      {/* <DebugButton /> */}
      <Router history={history}>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Suspense fallback={<Loading />}>
            <Switch>
              <Route exact path='/'>
                <Start />
              </Route>
              <Route path='/log'>
                <Layout>
                  <Log />
                </Layout>
              </Route>
              <Route path='/volume'>
                <Layout>
                  <Volume />
                </Layout>
              </Route>
              <Route path='/history'>
                <Layout>
                  <History />
                </Layout>
              </Route>
            </Switch>
          </Suspense>
        </ErrorBoundary>
      </Router>
    </RecoilRoot>
  )
}

export default App
