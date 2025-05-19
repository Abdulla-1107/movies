import { api } from "@/api"
import { useEffect, useState } from "react"

export const useFetch = (endpoint, params = {}) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(null)


useEffect(() => {
    setLoading(true)
    api
        .get(endpoint, {
            params
        })
        .then(res => setData(res.data))
        .catch(err => setError(err.response.data))
        .finally(() => setLoading(false))
}, [endpoint, JSON.stringify(params)])

    return {data, error, loading}

}