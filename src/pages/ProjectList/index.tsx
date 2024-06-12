import { useEffect, useState } from 'react'
import * as qs from 'qs'
import SearchPanel from './SearchPanel'
import List from './List'
import { cleanObject, useDebounce, useMount } from '~/utils'

const apiUrl = import.meta.env.VITE_API_URL

export default function ProjectList() {
  const [param, setParam] = useState({ name: '', personId: '' })
  const [users, setUsers] = useState([])
  const [list, setList] = useState([])
  const debounceParams = useDebounce(param, 500)

  useEffect(() => {
    fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debounceParams))}`).then(async (response) => {
      if (response.ok)
        setList(await response.json())
    })
  }, [debounceParams])

  useMount(() => {
    fetch(`${apiUrl}/users`).then(async (response) => {
      if (response.ok)
        setUsers(await response.json())
    })
  })
  return (
    <div>
      <SearchPanel param={param} setParam={setParam} users={users} />
      <List users={users} list={list} />
    </div>
  )
}
