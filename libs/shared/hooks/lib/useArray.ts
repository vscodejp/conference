interface Member {
  name: string
  url?: string
  iconName?: string
  iconFilename?: string
}

export function useArray() {
  const sortArray = (members: Member[]) => {
    return members.sort((a, b) => {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      return 0
    })
  }
  return { sortArray }
}
