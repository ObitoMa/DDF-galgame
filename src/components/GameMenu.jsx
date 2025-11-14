import './GameMenu.css'

function GameMenu({ onSave, onLoad, onSettings, onHistory }) {
  return (
    <div className="game-menu">
      <button className="menu-btn" onClick={onSave} title="存档">
        💾
      </button>
      <button className="menu-btn" onClick={onLoad} title="读档">
        📂
      </button>
      <button className="menu-btn" onClick={onHistory} title="历史">
        📜
      </button>
      <button className="menu-btn" onClick={onSettings} title="设置">
        ⚙️
      </button>
    </div>
  )
}

export default GameMenu

