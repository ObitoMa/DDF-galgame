# 新日暮里♂传说 - Galgame


## 功能特点

- 📖 完整的视觉小说系统
- 💬 逐字显示对话效果（可调节速度）
- 🎯 多分支选择系统（4个主要路线，4个不同结局）
- 💾 存档/读档系统（10个存档位）
- ⚙️ 设置菜单（文字速度、音量、自动播放）
- 📜 历史记录查看
- ⌨️ 键盘快捷键支持
- 🎨 精美的UI设计
- 📱 响应式布局

## 技术栈

- React 18
- Vite
- CSS3

## 安装和运行

1. 安装依赖：
```bash
npm install
```

2. 启动开发服务器：
```bash
npm run dev
```

3. 构建生产版本：
```bash
npm run build
```

## 游戏说明

游戏讲述了2018年3月2日，比利·海灵顿险些遭遇车祸后，在新日暮里展开的调查冒险。玩家需要通过选择不同的行动路线，影响故事的发展，最终达成不同的结局。

### 游戏操作

### 基本操作
- **点击对话框**或**按空格/回车**继续剧情
- 在出现选择时，点击选项按钮进行选择
- 游戏支持重新开始

### 快捷键
- `Ctrl + S` - 打开存档菜单
- `Ctrl + L` - 打开读档菜单
- `H` - 打开历史记录
- `ESC` - 关闭当前菜单
- `空格/回车` - 继续对话

### 存档系统
- 支持10个存档位
- 存档会保存当前场景和游戏历史
- 可以随时存档和读档

### 设置选项
- **文字速度**：调节对话显示速度（10-100ms）
- **音量**：调节游戏音量（0-100%）
- **自动播放**：开启后对话会自动继续

## 项目结构

```
word_game/
├── src/
│   ├── components/           # React组件
│   │   ├── GameEngine.jsx    # 游戏引擎主组件
│   │   ├── DialogueBox.jsx   # 对话框组件
│   │   ├── ChoiceBox.jsx     # 选择框组件
│   │   ├── Background.jsx    # 背景组件
│   │   ├── GameMenu.jsx      # 游戏菜单
│   │   ├── SaveMenu.jsx      # 存档/读档菜单
│   │   ├── SettingsMenu.jsx  # 设置菜单
│   │   └── HistoryMenu.jsx   # 历史记录菜单
│   ├── utils/                # 工具函数
│   │   ├── saveSystem.js     # 存档系统
│   │   └── settings.js       # 设置系统
│   ├── data/
│   │   └── gameData.js       # 游戏数据（脚本、角色）
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
└── vite.config.js
```

## 自定义内容

可以在 `src/data/gameData.js` 中修改：
- 角色信息（名称、颜色、头像）
- 游戏脚本（对话、选择、结局）
- 对话内容
- 选择分支和路线

### 添加新角色
```javascript
newCharacter: {
  name: '角色名',
  color: '#颜色代码',
  avatar: '表情符号'
}
```

### 添加新场景
```javascript
{
  id: 'scene_id',
  type: 'dialogue', // 或 'choice', 'end'
  character: 'character_key',
  text: '对话内容',
  next: 'next_scene_id'
}
```

## 许可证

MIT

