interface UserData {
  name: string,
  lastProject: string,
  projects: {
    [key: string]: {
      desc: string,
      current: string,
      folders: {
        [key: string]: [key: string]
      }
    }
  }
}

export default UserData