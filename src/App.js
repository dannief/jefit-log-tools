import React, { Suspense } from 'react'
import { RecoilRoot } from 'recoil'
import { jsx, ThemeProvider } from '@emotion/react'
import { ErrorBoundary } from 'react-error-boundary'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import theme from './theme'
import Start from './pages/Start'
import Log from './pages/Log'
import Layout from './components/Layout'

function App() {
  return (
    <RecoilRoot>
      <Router>
        <ThemeProvider theme={theme}>
          <Layout>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
              <Suspense fallback={<h1>Loading log data...</h1>}>
                <Switch>
                  <Route exact path='/'>
                    <Start />
                  </Route>
                  <Route exact path='/log/:date'>
                    <Log />
                  </Route>
                </Switch>
              </Suspense>
            </ErrorBoundary>
          </Layout>
        </ThemeProvider>
      </Router>
    </RecoilRoot>
  )
}

function ErrorFallback({ error, resetErrorBoundary }) {
  return (
    <div role='alert'>
      <p>Something went wrong:</p>
      <pre>{error.message}</pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}

export default App
