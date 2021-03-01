import React, { Suspense } from 'react'
import { RecoilRoot } from 'recoil'
import { jsx, ThemeProvider } from '@emotion/react'
import { ErrorBoundary } from 'react-error-boundary'
import { Router, Switch, Route } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'

import Start from './pages/Start'
import Log from './pages/Log'
import history from './utils/history'
import Layout from './components/Layout'
import ErrorFallback from './components/ErrorFallback'
import Loading from './components/Loading'

library.add(fas, far)

function App() {
  return (
    <RecoilRoot>
      <Router history={history}>
        <Layout>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Suspense fallback={<Loading />}>
              <Switch>
                <Route exact path='/'>
                  <Start />
                </Route>
                <Route path='/log'>
                  <Log />
                </Route>
              </Switch>
            </Suspense>
          </ErrorBoundary>
        </Layout>
      </Router>
    </RecoilRoot>
  )
}

export default App
