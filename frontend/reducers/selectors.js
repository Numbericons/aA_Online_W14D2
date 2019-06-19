export const selectAllPokemon = (state) => {
    return Object.values(state.entities.pokemon)
}

export const selectItemsByIds = (state, itemIds) => {
    if (!itemIds) {return []};
    return itemIds.map(id => {
        return state.entities.items[id]
    })
}


export const selectItemById = (state, itemId) => {
    return state.entities.items[itemId];
}

