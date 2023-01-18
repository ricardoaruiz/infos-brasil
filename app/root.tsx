import cx from 'classnames'

import type { MetaFunction } from '@remix-run/node'
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useNavigation,
} from '@remix-run/react'

import { AppMenu } from './components/AppMenu'
import { NotFound } from './components/NotFound'

import styles from './styles/app.css'

export const meta: MetaFunction = () => ({
  charset: 'utf-8',
  title: 'New Remix App',
  viewport: 'width=device-width,initial-scale=1',
})

export function links() {
  return [{ rel: 'stylesheet', href: styles }]
}

export default function App() {
  const navigation = useNavigation()
  const isLoading = navigation.state === 'loading'

  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>
      <body>
        <div className="grid grid-cols-[300px_minmax(900px,_1fr)] h-screen overflow-hidden">
          <div className="bg-red-100 p-4 shadow-[2px_4px_6px_rgba(0,0,0,0.3)]">
            <AppMenu title="Infos Brasil" />
          </div>

          <div
            className={cx(
              'bg-red-50 p-4',
              isLoading &&
                `
                  opacity-25
                  transition-opacity
                  delay-200,
                  pointer-events-none
                  animate-pulse
                `
            )}
          >
            <Outlet />
          </div>
        </div>

        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  )
}

export function CatchBoundary() {
  return <NotFound />
}
