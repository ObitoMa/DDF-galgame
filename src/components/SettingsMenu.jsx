import { useState, useEffect } from 'react'
import { getSettings, updateSetting } from '../utils/settings'
import './SettingsMenu.css'

function SettingsMenu({ isOpen, onClose }) {
  const [settings, setSettings] = useState(getSettings())

  useEffect(() => {
    if (isOpen) {
      setSettings(getSettings())
    }
  }, [isOpen])

  const handleTextSpeedChange = (e) => {
    const newSpeed = parseInt(e.target.value)
    const newSettings = updateSetting('textSpeed', newSpeed)
    setSettings(newSettings)
  }

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value)
    const newSettings = updateSetting('volume', newVolume)
    setSettings(newSettings)
  }

  const handleAutoPlayChange = (e) => {
    const newSettings = updateSetting('autoPlay', e.target.checked)
    setSettings(newSettings)
  }

  if (!isOpen) return null

  return (
    <div className="settings-overlay" onClick={onClose}>
      <div className="settings-menu" onClick={(e) => e.stopPropagation()}>
        <div className="settings-header">
          <h2>设置</h2>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>
        <div className="settings-content">
          <div className="setting-item">
            <label>文字速度</label>
            <input
              type="range"
              min="10"
              max="100"
              value={settings.textSpeed}
              onChange={handleTextSpeedChange}
            />
            <span>{settings.textSpeed}ms</span>
          </div>
          <div className="setting-item">
            <label>音量</label>
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              value={settings.volume}
              onChange={handleVolumeChange}
            />
            <span>{Math.round(settings.volume * 100)}%</span>
          </div>
          <div className="setting-item">
            <label>
              <input
                type="checkbox"
                checked={settings.autoPlay}
                onChange={handleAutoPlayChange}
              />
              自动播放
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SettingsMenu

