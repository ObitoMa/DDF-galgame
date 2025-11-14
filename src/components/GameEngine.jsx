import { useState, useEffect } from 'react'
import DialogueBox from './DialogueBox'
import ChoiceBox from './ChoiceBox'
import Background from './Background'
import GameMenu from './GameMenu'
import SaveMenu from './SaveMenu'
import SettingsMenu from './SettingsMenu'
import HistoryMenu from './HistoryMenu'
import { gameScript, characters } from '../data/gameData'
import './GameEngine.css'

function GameEngine() {
  const [currentSceneId, setCurrentSceneId] = useState('start')
  const [history, setHistory] = useState([])
  const [isTyping, setIsTyping] = useState(false)
  const [showSaveMenu, setShowSaveMenu] = useState(false)
  const [saveMenuMode, setSaveMenuMode] = useState('save') // 'save' or 'load'
  const [showSettings, setShowSettings] = useState(false)
  const [showHistory, setShowHistory] = useState(false)

  const currentScene = gameScript.find(scene => scene.id === currentSceneId)

  const handleNext = (nextId) => {
    if (nextId) {
      setHistory([...history, currentSceneId])
      setCurrentSceneId(nextId)
      setIsTyping(true)
    }
  }

  const handleChoice = (nextId) => {
    handleNext(nextId)
  }

  const handleLoad = (saveData) => {
    setCurrentSceneId(saveData.sceneId)
    setHistory(saveData.history || [])
  }

  useEffect(() => {
    setIsTyping(true)
    const timer = setTimeout(() => setIsTyping(false), 500)
    return () => clearTimeout(timer)
  }, [currentSceneId])

  // 键盘快捷键
  useEffect(() => {
    const handleKeyPress = (e) => {
      // ESC 关闭菜单
      if (e.key === 'Escape') {
        if (showSaveMenu) setShowSaveMenu(false)
        if (showSettings) setShowSettings(false)
        if (showHistory) setShowHistory(false)
      }
      // Ctrl+S 存档
      if (e.ctrlKey && e.key === 's') {
        e.preventDefault()
        setSaveMenuMode('save')
        setShowSaveMenu(true)
      }
      // Ctrl+L 读档
      if (e.ctrlKey && e.key === 'l') {
        e.preventDefault()
        setSaveMenuMode('load')
        setShowSaveMenu(true)
      }
      // H 历史记录
      if (e.key === 'h' || e.key === 'H') {
        if (!showSaveMenu && !showSettings && !showHistory) {
          setShowHistory(true)
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [showSaveMenu, showSettings, showHistory])

  if (!currentScene) {
    return (
      <div className="game-engine">
        <Background />
        <div className="end-screen">
          <h1>感谢游玩！</h1>
          <button onClick={() => {
            setCurrentSceneId('start')
            setHistory([])
          }}>重新开始</button>
        </div>
      </div>
    )
  }

  const character = currentScene.character ? characters[currentScene.character] : null

  return (
    <div className="game-engine">
      <Background />
      <GameMenu
        onSave={() => {
          setSaveMenuMode('save')
          setShowSaveMenu(true)
        }}
        onLoad={() => {
          setSaveMenuMode('load')
          setShowSaveMenu(true)
        }}
        onSettings={() => setShowSettings(true)}
        onHistory={() => setShowHistory(true)}
      />
      {currentScene.type === 'dialogue' && (
        <DialogueBox
          character={character}
          text={currentScene.text}
          onNext={() => handleNext(currentScene.next)}
          isTyping={isTyping}
        />
      )}
      {currentScene.type === 'choice' && (
        <ChoiceBox
          text={currentScene.text}
          options={currentScene.options}
          onChoice={handleChoice}
        />
      )}
      {currentScene.type === 'end' && (
        <div className="end-screen">
          <h1>{currentScene.text}</h1>
          <button onClick={() => {
            setCurrentSceneId('start')
            setHistory([])
          }}>重新开始</button>
        </div>
      )}
      <SaveMenu
        isOpen={showSaveMenu}
        onClose={() => setShowSaveMenu(false)}
        currentSceneId={currentSceneId}
        history={history}
        mode={saveMenuMode}
        onLoad={handleLoad}
      />
      <SettingsMenu
        isOpen={showSettings}
        onClose={() => setShowSettings(false)}
      />
      <HistoryMenu
        isOpen={showHistory}
        onClose={() => setShowHistory(false)}
        history={history}
      />
    </div>
  )
}

export default GameEngine

