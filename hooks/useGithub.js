import React, { useState, useEffect } from 'react'
import axios from 'axios'

const github_url = 'https://api.github.com'

function useGithubRepos(){

    const [githubRepos, setGithubRepos] = useState()
    const [githubError, setGithubError] = useState()

    useEffect(async () => {
        if (!process.browser) return
        try {
            const response = await axios.get(`${github_url}/users/PurinatG-01/repos`)
            setGithubRepos(response.data)
        } catch (error) {
            console.error(`> error : `, error)
            setGithubError(error)
        }
    }, [])

    return { githubRepos, githubError }
}

export default { useGithubRepos }