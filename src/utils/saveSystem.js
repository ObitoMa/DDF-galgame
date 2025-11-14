// 存档系统
export const saveGame = (sceneId, history, saveSlot = 1) => {
  const saveData = {
    sceneId,
    history,
    timestamp: new Date().toISOString(),
    saveSlot
  }
  localStorage.setItem(`galgame_save_${saveSlot}`, JSON.stringify(saveData))
  return true
}

export const loadGame = (saveSlot = 1) => {
  const saveData = localStorage.getItem(`galgame_save_${saveSlot}`)
  if (saveData) {
    return JSON.parse(saveData)
  }
  return null
}

export const deleteSave = (saveSlot = 1) => {
  localStorage.removeItem(`galgame_save_${saveSlot}`)
}

export const getAllSaves = () => {
  const saves = []
  for (let i = 1; i <= 10; i++) {
    const save = loadGame(i)
    if (save) {
      saves.push({ ...save, slot: i })
    }
  }
  return saves
}

