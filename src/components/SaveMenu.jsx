import { useState, useEffect } from 'react'
import { saveGame, loadGame, deleteSave, getAllSaves } from '../utils/saveSystem'
import './SaveMenu.css'

function SaveMenu({ isOpen, onClose, currentSceneId, history, onLoad, mode: initialMode = 'save' }) {
  const [saves, setSaves] = useState([])
  const [mode, setMode] = useState(initialMode) // 'save' or 'load'

  useEffect(() => {
    setMode(initialMode)
  }, [initialMode])

  useEffect(() => {
    if (isOpen) {
      setSaves(getAllSaves())
    }
  }, [isOpen])

  const handleSave = (slot) => {
    saveGame(currentSceneId, history, slot)
    setSaves(getAllSaves())
    alert(`已保存到存档位 ${slot}`)
  }

  const handleLoad = (slot) => {
    const saveData = loadGame(slot)
    if (saveData) {
      onLoad(saveData)
      onClose()
    }
  }

  const handleDelete = (slot, e) => {
    e.stopPropagation()
    if (confirm(`确定要删除存档位 ${slot} 吗？`)) {
      deleteSave(slot)
      setSaves(getAllSaves())
    }
  }

  if (!isOpen) return null

  return (
    <div className="save-overlay" onClick={onClose}>
      <div className="save-menu" onClick={(e) => e.stopPropagation()}>
        <div className="save-header">
          <div className="save-tabs">
            <button
              className={mode === 'save' ? 'active' : ''}
              onClick={() => setMode('save')}
            >
              存档
            </button>
            <button
              className={mode === 'load' ? 'active' : ''}
              onClick={() => setMode('load')}
            >
              读档
            </button>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="save-content">
          {Array.from({ length: 10 }, (_, i) => i + 1).map(slot => {
            const save = saves.find(s => s.slot === slot)
            return (
              <div
                key={slot}
                className={`save-slot ${save ? 'has-save' : 'empty'}`}
                onClick={() => mode === 'save' ? handleSave(slot) : save && handleLoad(slot)}
              >
                <div className="save-slot-info">
                  <span className="save-slot-number">存档位 {slot}</span>
                  {save && (
                    <span className="save-slot-time">
                      {new Date(save.timestamp).toLocaleString('zh-CN')}
                    </span>
                  )}
                  {!save && mode === 'load' && (
                    <span className="save-slot-empty">空存档</span>
                  )}
                </div>
                {save && (
                  <button
                    className="delete-btn"
                    onClick={(e) => handleDelete(slot, e)}
                  >
                    删除
                  </button>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default SaveMenu

