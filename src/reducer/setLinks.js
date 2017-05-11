export default (links = [], action) => {
  switch (action.type) {
    case 'add_link':
      return [
        ...links,
        action.link
      ]
    case 'delete_link':
      return links.filter(link => link.id !== action.link.id)
    case 'modify_link':
      return links.map(link => {
        if (link.id === action.link.id) {
          return action.link
        }
        return link
      })
    default:
      return links
  }
}
