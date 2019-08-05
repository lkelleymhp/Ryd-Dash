import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'
import { ConnectedRouter } from 'connected-react-router'
import Loadable from 'react-loadable'

import Loader from 'components/LayoutComponents/Loader'
import IndexLayout from 'layouts'
import NotFoundPage from 'pages/404'

const loadable = loader =>
  Loadable({
    loader,
    delay: false,
    loading: () => <Loader />,
  })

const routes = [
  // System Pages
  {
    path: '/user/login',
    component: loadable(() => import('pages/user/login')),
    exact: true,
  },
  {
    path: '/user/forgot',
    component: loadable(() => import('pages/user/forgot')),
    exact: true,
  },

  // Dashboards
  {
    path: '/dashboard/alpha',
    component: loadable(() => import('pages/dashboard/alpha')),
  },
  

  // Default Pages
  {
    path: '/pages/login-alpha',
    component: loadable(() => import('pages/pages/login-alpha')),
    exact: true,
  },
  

  // Layout
  {
    path: '/layout/bootstrap',
    component: loadable(() => import('pages/layout/bootstrap')),
    exact: true,
  },
  {
    path: '/layout/card',
    component: loadable(() => import('pages/layout/card')),
    exact: true,
  },
  {
    path: '/layout/utilities',
    component: loadable(() => import('pages/layout/utilities')),
    exact: true,
  },
  {
    path: '/layout/typography',
    component: loadable(() => import('pages/layout/typography')),
    exact: true,
  },
  {
    path: '/layout/mail-templates',
    component: loadable(() => import('pages/layout/mail-templates')),
    exact: true,
  },

  // Icons
  {
    path: '/icons/fontawesome',
    component: loadable(() => import('pages/icons/fontawesome')),
    exact: true,
  },
  {
    path: '/icons/linear',
    component: loadable(() => import('pages/icons/linear')),
    exact: true,
  },
  {
    path: '/icons/icomoon',
    component: loadable(() => import('pages/icons/icomoon')),
    exact: true,
  },

  // Charts
  {
    path: '/charts/chartist',
    component: loadable(() => import('pages/charts/chartist')),
    exact: true,
  },
  {
    path: '/charts/chart',
    component: loadable(() => import('pages/charts/chart')),
    exact: true,
  },
  {
    path: '/charts/peity',
    component: loadable(() => import('pages/charts/peity')),
    exact: true,
  },
  {
    path: '/charts/c3',
    component: loadable(() => import('pages/charts/c3')),
    exact: true,
  },
]

class Router extends React.Component {
  render() {
    const { history } = this.props
    return (
      <ConnectedRouter history={history}>
        <IndexLayout>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/dashboard/alpha" />} />
            {routes.map(route => (
              <Route
                path={route.path}
                component={route.component}
                key={route.path}
                exact={route.exact}
              />
            ))}
            <Route component={NotFoundPage} />
          </Switch>
        </IndexLayout>
      </ConnectedRouter>
    )
  }
}

export default Router
