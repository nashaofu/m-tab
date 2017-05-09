export default (links = [], action) => {
  switch (action.type) {
    case 'ADD_LINK':
      return [
        ...links,
        action.link
      ]
    case 'DELETE_LINK':
      return links.filter(link => link.id !== action.link.id)
    case 'MODIFY_LINK':
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
