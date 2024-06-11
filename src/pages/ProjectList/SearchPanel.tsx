export interface User {
  id: string
  name: string
  personId: number
  organization: string
  created: number
}

interface SearchPanelProps {
  param: { name: string, personId: string }
  setParam: (param: SearchPanelProps['param']) => void
  users: User[]
}

export default function SearchPanel({ param, setParam, users }: SearchPanelProps) {
  return (
    <form>
      <input type="text" value={param.name} onChange={e => setParam({ ...param, name: e.target.value })} />
      <select value={param.personId} onChange={e => setParam({ ...param, personId: e.target.value })}>
        <option value="">负责人</option>
        {users.map(user => <option value={user.id} key={user.id}>{ user.name}</option>) }
      </select>
    </form>
  )
}
