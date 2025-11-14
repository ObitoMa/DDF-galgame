import { useState } from 'react'
import { gameScript, characters } from '../data/gameData'
import './HistoryMenu.css'

function HistoryMenu({ isOpen, onClose, history }) {
  if (!isOpen) return null

  const historyScenes = history
    .map(id => gameScript.find(s => s.id === id))
    .filter(Boolean)
    .slice(-20) // 只显示最近20条

  return (
    <div className="history-overlay" onClick={onClose}>
      <div className="history-menu" onClick={(e) => e.stopPropagation()}>
        <div className="history-header">
          <h2>历史记录</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="history-content">
          {historyScenes.length === 0 ? (
            <div className="history-empty">暂无历史记录</div>
          ) : (
            historyScenes.map((scene, index) => {
              const character = scene.character ? characters[scene.character] : null
              return (
                <div key={index} className="history-item">
                  {character && (
                    <div className="history-character" style={{ color: character.color }}>
                      {character.avatar} {character.name}
                    </div>
                  )}
                  <div className="history-text">{scene.text}</div>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}

export default HistoryMenu

