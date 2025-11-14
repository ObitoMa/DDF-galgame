// 设置系统
const DEFAULT_SETTINGS = {
  textSpeed: 30, // 文字显示速度（毫秒）
  autoPlay: false, // 自动播放
  autoPlaySpeed: 3000, // 自动播放速度（毫秒）
  volume: 1.0, // 音量（0-1）
  fullscreen: false // 全屏
}

export const getSettings = () => {
  const saved = localStorage.getItem('galgame_settings')
  if (saved) {
    return { ...DEFAULT_SETTINGS, ...JSON.parse(saved) }
  }
  return DEFAULT_SETTINGS
}

export const saveSettings = (settings) => {
  localStorage.setItem('galgame_settings', JSON.stringify(settings))
}

export const updateSetting = (key, value) => {
  const settings = getSettings()
  settings[key] = value
  saveSettings(settings)
  return settings
}

