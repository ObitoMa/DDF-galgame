import { useState, useEffect } from 'react'
import { characters } from '../data/gameData'
import { getSettings } from '../utils/settings'
import './DialogueBox.css'

function DialogueBox({ character, text, onNext, isTyping }) {
  const [displayedText, setDisplayedText] = useState('')
  const [showContinue, setShowContinue] = useState(false)
  const [settings, setSettings] = useState(getSettings())

  useEffect(() => {
    setSettings(getSettings())
  }, [])

  useEffect(() => {
    setDisplayedText('')
    setShowContinue(false)
    let currentIndex = 0
    const typingSpeed = settings.textSpeed || 30

    const typingInterval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
        setShowContinue(true)
        // 自动播放
        if (settings.autoPlay) {
          setTimeout(() => {
            onNext()
          }, settings.autoPlaySpeed || 3000)
        }
      }
    }, typingSpeed)

    return () => clearInterval(typingInterval)
  }, [text, settings])

  const handleClick = () => {
    if (showContinue) {
      onNext()
    } else {
      // 快速显示完整文本
      setDisplayedText(text)
      setShowContinue(true)
    }
  }

  // 键盘支持：空格或回车继续
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault()
        if (showContinue) {
          onNext()
        } else {
          setDisplayedText(text)
          setShowContinue(true)
        }
      }
    }

    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [showContinue, text, onNext])

  return (
    <div className="dialogue-container">
      {character && character.image && (
        <div className="character-image-container">
          <img 
            src={character.image} 
            alt={character.name}
            className="character-image"
            onError={(e) => {
              // 如果图片加载失败，隐藏图片容器
              e.target.style.display = 'none'
            }}
          />
        </div>
      )}
      <div className="dialogue-box" onClick={handleClick}>
        {character && (
          <div className="character-info" style={{ color: character.color }}>
            <span className="character-avatar">{character.avatar}</span>
            <span className="character-name">{character.name}</span>
          </div>
        )}
        <div className="dialogue-text">
          {displayedText}
          {!showContinue && <span className="cursor">|</span>}
        </div>
        {showContinue && (
          <div className="continue-hint">点击继续...</div>
        )}
      </div>
    </div>
  )
}

export default DialogueBox

