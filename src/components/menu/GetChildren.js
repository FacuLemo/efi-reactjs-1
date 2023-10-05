function getChildren (father, menuItems) { // busca y retorna los hijos de un item padre en una lista
  const children = []
  for (const item of menuItems) {
    if (item.idPadre === father.id) {
      children.push(item)
    }
  }
  return children
}

export default getChildren
