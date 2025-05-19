import React, { lazy } from 'react'
import { Suspense } from '@/utils'
import { useRoutes } from 'react-router-dom'
import Singlemovie from './single-movie/SingleMovie'
const Layout = lazy(() => import("./layout/Layout"))
const Home = lazy(() => import("./home/Home"))
const Movies = lazy(() => import("./movies/Movies"))
const Saved = lazy(() => import("./saved/Saved"))
const Search = lazy(() => import("./search/Search"))

const MainRoutes = () => {
  return useRoutes([
    {
        path: "/",
        element: <Suspense><Layout/></Suspense>,
        children: [
            {
                path: "/",
                element: <Suspense><Home/></Suspense>,
            },
            {
                path: "/movies",
                element: <Suspense><Movies/></Suspense>,
            },
            {
                path: "/saved",
                element: <Suspense><Saved/></Suspense>,
            },
            {
                path: "/search",
                element: <Suspense><Search/></Suspense>,
            },
             {
                path: "/movie/:id",
                element: (
                    <Suspense>
                    <Singlemovie />
                    </Suspense>
                ),
                },
        ]
    }
  ])
}

export default MainRoutes