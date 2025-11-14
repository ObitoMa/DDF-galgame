// 游戏数据配置
import { characterImages } from './characterImages'

export const characters = {
  billy: {
    name: '比利·海灵顿',
    color: '#FFD700',
    avatar: '👑',
    description: '森の妖精，英雄联盟NO.1，新日暮里的精神领袖',
    image: characterImages.billy
  },
  narrator: {
    name: '旁白',
    color: '#FFFFFF',
    avatar: ''
  },
  kikuchi: {
    name: '木吉カズヤ',
    color: '#9B59B6',
    avatar: '⚔️',
    description: '英雄联盟NO.2，木吉工业社长，比利的战友&劲敌',
    image: characterImages.kikuchi
  },
  beoland: {
    name: '贝奥兰迪',
    color: '#E74C3C',
    avatar: '🦸',
    description: '英雄联盟NO.3，猎天使魔男，拥有变身能力',
    image: characterImages.beoland
  },
  van: {
    name: 'Van様',
    color: '#1A1A1A',
    avatar: '👹',
    description: '暗黑势力首领，暗の妖精，目的为复活KING石井',
    image: characterImages.van
  },
  kinggold: {
    name: '力の金阁',
    color: '#F39C12',
    avatar: '🔥',
    description: 'Van様手下大将，拥有股间♂布摩擦技能'
  },
  kingsilver: {
    name: '技の银阁',
    color: '#95A5A6',
    avatar: '💃',
    description: 'Van様手下大将，拥有魅惑♂舞蹈能力'
  },
  jono: {
    name: '城之内悠二',
    color: '#8E44AD',
    avatar: '🗡️',
    description: 'Van様手下大将，曾与比利过招'
  },
  kamata: {
    name: '镰田吾作',
    color: '#16A085',
    avatar: '🦀',
    description: '平家♂BOY，拥有变成螃蟹的能力，保持纯真心灵'
  },
  mori: {
    name: '森の大统领',
    color: '#27AE60',
    avatar: '🏛️',
    description: '新日暮里实际掌权者，拥有肉体♂演说能力',
    image: characterImages.mori
  },
  fairy: {
    name: '妖精王',
    color: '#3498DB',
    avatar: '👑',
    description: '名义上的王，掌握新旧日暮里全部秘密'
  },
  aka: {
    name: '赤さん',
    color: '#E91E63',
    avatar: '😊',
    description: '新日暮里唯一真神，守护神'
  },
  iida: {
    name: '池田',
    color: '#FF9800',
    avatar: '📢',
    description: '英雄联盟成员，拥有超级说教能力',
    image: characterImages.iida
  },
  fujio: {
    name: '藤冈',
    color: '#00BCD4',
    avatar: '👨',
    description: '比利的好碰友，曾化解法老诅咒危机',
    image: characterImages.fujio
  },
  darkqueen: {
    name: '暗黑女王',
    color: '#7B1FA2',
    avatar: '👸',
    description: '暗黑古堡主人，饲养半鱼人'
  },
  fishman: {
    name: '半鱼人',
    color: '#0097A7',
    avatar: '🐟',
    description: '暗黑古堡内的奇异生物'
  },
  kingishii: {
    name: 'KING石井',
    color: '#B71C1C',
    avatar: '👺',
    description: '旧日暮里的帝皇，被赤酱毁灭后化为恶魔'
  },
  seven: {
    name: '木吉七本枪',
    color: '#6A1B9A',
    avatar: '⚡',
    description: '木吉工业的精英团队'
  },
  knight: {
    name: '全裸骑士团',
    color: '#0288D1',
    avatar: '🛡️',
    description: '井上大团长领导的骑士团'
  },
  inoue: {
    name: '井上カブレラ',
    color: '#00ACC1',
    avatar: '💧',
    description: '全裸骑士团团长，孤高の汉，擅长水属性招数',
    image: characterImages.inoue
  },
  general: {
    name: '暗之大将军',
    color: '#424242',
    avatar: '🎭',
    description: '新日暮里雇佣军首领，异位同体'
  },
  scholar: {
    name: '森罗万象大贤者',
    color: '#795548',
    avatar: '📚',
    description: '吟游诗人兼历史学家，乳首科里纳'
  },
  kazuyamom: {
    name: '木吉之母',
    color: '#E91E63',
    avatar: '👩',
    description: '木吉的母亲'
  },
  rabbit: {
    name: '兔人',
    color: '#FFC107',
    avatar: '🐰',
    description: '谜之生物，比半鱼人更敏捷'
  },
  cloton: {
    name: 'Cloton ford',
    color: '#607D8B',
    avatar: '👤',
    description: '石井最爱的臣子，最后时刻被石井献祭'
  },
  stud: {
    name: 'Stud Squad',
    color: '#FF5722',
    avatar: '🦸',
    description: '新日暮里的超级英雄组'
  }
}

// 游戏脚本
export const gameScript = [
  {
    id: 'start',
    type: 'dialogue',
    character: 'narrator',
    text: '新日暮里，一个与我们所生活的次元隔绝但又暗里存在着各种微妙联系的梦想乡。',
    next: 'prologue1'
  },
  {
    id: 'prologue1',
    type: 'dialogue',
    character: 'narrator',
    text: '政治上的领袖为森の大统领，而精神上的领袖则是比利·海灵顿——森の妖精，英雄联盟的NO.1。',
    next: 'prologue2'
  },
  {
    id: 'prologue2',
    type: 'dialogue',
    character: 'narrator',
    text: '上古时期，比利和木吉争夺第一把交椅时，激烈的战斗打裂了恶魔之门，放出了第一只恶魔——Van様。',
    next: 'prologue3'
  },
  {
    id: 'prologue3',
    type: 'dialogue',
    character: 'narrator',
    text: '为了弥补过失，双巨头重归于好，展开了"ANIKI西征"，铲除恶魔。但Van様的目的从未改变——复活旧日暮里的王，恶魔KING石井。',
    next: 'scene0'
  },
  {
    id: 'scene0',
    type: 'dialogue',
    character: 'narrator',
    text: '2018年3月2日，新日暮里。',
    next: 'scene1'
  },
  {
    id: 'scene1',
    type: 'dialogue',
    character: 'narrator',
    text: '比利·海灵顿险些遭遇车祸，然而英雄联盟的成员们并不觉得此事这么简单...',
    next: 'scene2'
  },
  {
    id: 'scene2',
    type: 'dialogue',
    character: 'billy',
    text: '这绝对不是意外！我能感觉到...这是Van様的气息！',
    next: 'scene3'
  },
  {
    id: 'scene3',
    type: 'dialogue',
    character: 'kikuchi',
    text: '比利，我们曾经一起封印了恶魔之门，但Van様的力量似乎正在恢复...',
    next: 'scene4'
  },
  {
    id: 'scene4',
    type: 'dialogue',
    character: 'beoland',
    text: '如果Van様真的恢复了力量，他一定会再次尝试复活KING石井！我们必须阻止他！',
    next: 'scene5'
  },
  {
    id: 'scene5',
    type: 'dialogue',
    character: 'mori',
    text: '作为新日暮里的实际掌权者，我建议你们立即调查此事。英雄联盟的基地已经准备好了。',
    next: 'scene6'
  },
  {
    id: 'scene6',
    type: 'dialogue',
    character: 'aka',
    text: '...',
    next: 'scene7'
  },
  {
    id: 'scene7',
    type: 'dialogue',
    character: 'narrator',
    text: '赤さん露出了天真无邪的笑容，似乎在暗示着什么...',
    next: 'scene8'
  },
  {
    id: 'scene8',
    type: 'dialogue',
    character: 'billy',
    text: '赤さん...你在告诉我们什么吗？',
    next: 'scene9'
  },
  {
    id: 'scene9',
    type: 'dialogue',
    character: 'aka',
    text: '...',
    next: 'scene10'
  },
  {
    id: 'scene10',
    type: 'dialogue',
    character: 'narrator',
    text: '赤さん的笑容变得更加灿烂，仿佛在给予你们力量...',
    next: 'scene11'
  },
  {
    id: 'scene11',
    type: 'dialogue',
    character: 'billy',
    text: '我明白了。我们必须立即行动，阻止Van様的计划！',
    next: 'choice1'
  },
  {
    id: 'choice1',
    type: 'choice',
    text: '作为英雄联盟的领袖，你决定如何开始调查？',
    options: [
      {
        text: '前往健身房，那里是Van様经常出现的地方',
        next: 'route1'
      },
      {
        text: '召集木吉七本枪，利用木吉工业的情报网络',
        next: 'route2'
      },
      {
        text: '联系全裸骑士团，调查暗黑女王的古堡',
        next: 'route3'
      },
      {
        text: '拜访森の大统领，了解政治层面的情报',
        next: 'route4'
      }
    ]
  },
  {
    id: 'route1',
    type: 'dialogue',
    character: 'billy',
    text: '健身房是Van様经常出现的地方，也是许多经典战役的发生地。我们去那里看看！',
    next: 'route1_1'
  },
  {
    id: 'route1_1',
    type: 'dialogue',
    character: 'narrator',
    text: '你们来到了由镰田吾作经营的健身房。这里人声鼎沸，许多兄贵正在锻♂炼...',
    next: 'route1_2'
  },
  {
    id: 'route1_2',
    type: 'dialogue',
    character: 'kamata',
    text: '比利！木吉！你们来了！最近这里有些奇怪的事情发生...',
    next: 'route1_3'
  },
  {
    id: 'route1_3',
    type: 'dialogue',
    character: 'billy',
    text: '镰田，发生了什么？',
    next: 'route1_4'
  },
  {
    id: 'route1_4',
    type: 'dialogue',
    character: 'kamata',
    text: 'Van様最近经常出现在更衣室，而且...我感觉到一股邪恶的气息。',
    next: 'route1_5'
  },
  {
    id: 'route1_5',
    type: 'dialogue',
    character: 'kikuchi',
    text: '更衣室？那里是进行摔跤竞技的地方。Van様一定在策划什么！',
    next: 'route1_6'
  },
  {
    id: 'route1_6',
    type: 'dialogue',
    character: 'narrator',
    text: '突然，更衣室传来一阵诡异的笑声...',
    next: 'route1_7'
  },
  {
    id: 'route1_7',
    type: 'dialogue',
    character: 'van',
    text: 'FXXK♂YOU！比利，你终于来了！',
    next: 'route1_8'
  },
  {
    id: 'route1_8',
    type: 'dialogue',
    character: 'billy',
    text: 'Van様！你果然在这里！你想要做什么？',
    next: 'route1_9'
  },
  {
    id: 'route1_9',
    type: 'dialogue',
    character: 'van',
    text: '我要复活KING石井！这次，没有人能阻止我！',
    next: 'route1_10'
  },
  {
    id: 'route1_10',
    type: 'dialogue',
    character: 'narrator',
    text: 'Van様开始使用召唤咒语，更衣室中出现了许多恶魔...',
    next: 'route1_11'
  },
  {
    id: 'route1_11',
    type: 'dialogue',
    character: 'jono',
    text: '比利，我们又见面了！这次，我不会再输给你！',
    next: 'route1_12'
  },
  {
    id: 'route1_12',
    type: 'dialogue',
    character: 'billy',
    text: '城之内！你也被Van様召唤了？',
    next: 'route1_choice'
  },
  {
    id: 'route1_choice',
    type: 'choice',
    text: '面对Van様的召唤恶魔，你决定如何应对？',
    options: [
      {
        text: '使用炒饭烧，直接攻击Van様',
        next: 'route1_fight1'
      },
      {
        text: '与木吉联手，使用神之救济',
        next: 'route1_fight2'
      },
      {
        text: '先击败城之内，再对付Van様',
        next: 'route1_fight3'
      }
    ]
  },
  {
    id: 'route1_fight1',
    type: 'dialogue',
    character: 'billy',
    text: '炒饭烧！',
    next: 'route1_fight1_1'
  },
  {
    id: 'route1_fight1_1',
    type: 'dialogue',
    character: 'narrator',
    text: '比利使出了必杀技炒饭烧，但Van様轻松躲过...',
    next: 'route1_fight1_2'
  },
  {
    id: 'route1_fight1_2',
    type: 'dialogue',
    character: 'van',
    text: '太慢了！比利，你变弱了！',
    next: 'route1_fight1_3'
  },
  {
    id: 'route1_fight1_3',
    type: 'dialogue',
    character: 'billy',
    text: '看来必须使用更强的力量...',
    next: 'route1_merge'
  },
  {
    id: 'route1_fight2',
    type: 'dialogue',
    character: 'kikuchi',
    text: '比利，让我们联手！神之救济！',
    next: 'route1_fight2_1'
  },
  {
    id: 'route1_fight2_1',
    type: 'dialogue',
    character: 'narrator',
    text: '木吉使出了神之救济，时间仿佛暂停了...',
    next: 'route1_fight2_2'
  },
  {
    id: 'route1_fight2_2',
    type: 'dialogue',
    character: 'billy',
    text: '好机会！',
    next: 'route1_fight2_3'
  },
  {
    id: 'route1_fight2_3',
    type: 'dialogue',
    character: 'narrator',
    text: '比利和木吉的联合攻击击中了Van様，但他似乎没有受到太大伤害...',
    next: 'route1_merge'
  },
  {
    id: 'route1_fight3',
    type: 'dialogue',
    character: 'billy',
    text: '城之内，让我们先解决我们的恩怨！',
    next: 'route1_fight3_1'
  },
  {
    id: 'route1_fight3_1',
    type: 'dialogue',
    character: 'jono',
    text: '比利，这次我不会再犯同样的错误！',
    next: 'route1_fight3_2'
  },
  {
    id: 'route1_fight3_2',
    type: 'dialogue',
    character: 'narrator',
    text: '比利与城之内展开了激烈的摔跤，但Van様趁机加强了召唤...',
    next: 'route1_merge'
  },
  {
    id: 'route1_merge',
    type: 'dialogue',
    character: 'van',
    text: '够了！是时候展现真正的力量了！Deep♂Dark♂Fantasy！',
    next: 'route1_merge1'
  },
  {
    id: 'route1_merge1',
    type: 'dialogue',
    character: 'narrator',
    text: 'Van様变身为真♂Van様，开启了Deep♂Dark♂Fantasy状态，力量大增！',
    next: 'route1_merge2'
  },
  {
    id: 'route1_merge2',
    type: 'dialogue',
    character: 'billy',
    text: '不好！他开启了Deep♂Dark♂Fantasy状态！我们必须联手！',
    next: 'route1_merge3'
  },
  {
    id: 'route1_merge3',
    type: 'dialogue',
    character: 'beoland',
    text: '比利！我来帮你！猎天使魔男，变身！',
    next: 'route1_merge4'
  },
  {
    id: 'route1_merge4',
    type: 'dialogue',
    character: 'narrator',
    text: '贝奥兰迪变身为猎天使魔男，与比利联手对抗真♂Van様...',
    next: 'route1_merge5'
  },
  {
    id: 'route1_merge5',
    type: 'dialogue',
    character: 'billy',
    text: '贝奥兰迪，就像我们之前那样！',
    next: 'route1_merge6'
  },
  {
    id: 'route1_merge6',
    type: 'dialogue',
    character: 'narrator',
    text: '经过激烈的战斗，比利和贝奥兰迪艰难地击败了真♂Van様...',
    next: 'route1_merge7'
  },
  {
    id: 'route1_merge7',
    type: 'dialogue',
    character: 'van',
    text: '可恶...但我的计划还没有结束！KING石井...一定会复活！',
    next: 'route1_merge8'
  },
  {
    id: 'route1_merge8',
    type: 'dialogue',
    character: 'narrator',
    text: 'Van様消失了，但留下了一个神秘的线索...',
    next: 'route1_aftermath'
  },
  {
    id: 'route1_aftermath',
    type: 'dialogue',
    character: 'kamata',
    text: '比利，木吉...谢谢你们。虽然我加入了暗黑组织，但我永远不会忘记自己的初心。',
    next: 'route1_aftermath1'
  },
  {
    id: 'route1_aftermath1',
    type: 'dialogue',
    character: 'billy',
    text: '镰田，我知道你保持着一颗纯真的心灵。即使家族被诅咒，你也没有失去自我。',
    next: 'route1_aftermath2'
  },
  {
    id: 'route1_aftermath2',
    type: 'dialogue',
    character: 'kamata',
    text: '我会继续经营健身房，这里永远是兄贵们锻♂炼的地方。',
    next: 'route1_aftermath3'
  },
  {
    id: 'route1_aftermath3',
    type: 'dialogue',
    character: 'kikuchi',
    text: '镰田，如果有什么需要帮助的，随时来找我们。',
    next: 'route1_aftermath4'
  },
  {
    id: 'route1_aftermath4',
    type: 'dialogue',
    character: 'narrator',
    text: '你们在健身房发现了一张地图，上面标记着旧日暮里废墟的位置...',
    next: 'route1_choice2'
  },
  {
    id: 'route1_choice2',
    type: 'choice',
    text: '你发现了Van様留下的地图，决定如何行动？',
    options: [
      {
        text: '立即前往旧日暮里废墟',
        next: 'route1_urgent'
      },
      {
        text: '先回英雄联盟基地，制定计划',
        next: 'route1_plan'
      },
      {
        text: '寻找更多线索',
        next: 'route1_search'
      }
    ]
  },
  {
    id: 'route1_urgent',
    type: 'dialogue',
    character: 'billy',
    text: '我们必须立即行动！Van様可能已经在旧日暮里废墟了！',
    next: 'route1_urgent1'
  },
  {
    id: 'route1_urgent1',
    type: 'dialogue',
    character: 'kikuchi',
    text: '比利，这样太危险了！我们应该先准备一下！',
    next: 'route1_urgent2'
  },
  {
    id: 'route1_urgent2',
    type: 'dialogue',
    character: 'billy',
    text: '木吉，我知道危险，但时间不等人！',
    next: 'choice2'
  },
  {
    id: 'route1_plan',
    type: 'dialogue',
    character: 'billy',
    text: '你说得对，我们应该先制定一个周密的计划。',
    next: 'route1_plan1'
  },
  {
    id: 'route1_plan1',
    type: 'dialogue',
    character: 'kikuchi',
    text: '我们需要召集更多英雄联盟成员，还要准备应对KING石井怨念的方法。',
    next: 'route1_plan2'
  },
  {
    id: 'route1_plan2',
    type: 'dialogue',
    character: 'billy',
    text: '好，让我们回基地，召集所有人！',
    next: 'choice2'
  },
  {
    id: 'route1_search',
    type: 'dialogue',
    character: 'billy',
    text: '让我们在健身房再找找，看看有没有其他线索。',
    next: 'route1_search1'
  },
  {
    id: 'route1_search1',
    type: 'dialogue',
    character: 'narrator',
    text: '你们在更衣室的角落里发现了一本日记...',
    next: 'route1_search2'
  },
  {
    id: 'route1_search2',
    type: 'dialogue',
    character: 'kikuchi',
    text: '这是...Van様的日记？',
    next: 'route1_search3'
  },
  {
    id: 'route1_search3',
    type: 'dialogue',
    character: 'billy',
    text: '上面写着...他需要三样东西来复活KING石井：怨念、护甲、还有...妖精三信？',
    next: 'route1_search4'
  },
  {
    id: 'route1_search4',
    type: 'dialogue',
    character: 'kikuchi',
    text: '妖精三信？那是新日暮里的核心信念！Van様想要利用它？',
    next: 'route1_search5'
  },
  {
    id: 'route1_search5',
    type: 'dialogue',
    character: 'billy',
    text: '我们必须阻止他！这个情报非常关键！',
    next: 'choice2'
  },
  {
    id: 'route2',
    type: 'dialogue',
    character: 'billy',
    text: '木吉，召集你的七本枪！我们需要木吉工业的情报网络！',
    next: 'route2_1'
  },
  {
    id: 'route2_1',
    type: 'dialogue',
    character: 'kikuchi',
    text: '好的！木吉七本枪，集合！',
    next: 'route2_2'
  },
  {
    id: 'route2_2',
    type: 'dialogue',
    character: 'seven',
    text: '社长！我们来了！',
    next: 'route2_3'
  },
  {
    id: 'route2_3',
    type: 'dialogue',
    character: 'kikuchi',
    text: '我需要你们调查Van様的动向，以及任何与KING石井相关的线索！',
    next: 'route2_4'
  },
  {
    id: 'route2_4',
    type: 'dialogue',
    character: 'seven',
    text: '了解！我们立即开始调查！',
    next: 'route2_5'
  },
  {
    id: 'route2_5',
    type: 'dialogue',
    character: 'narrator',
    text: '几天后，木吉七本枪带回了重要情报...',
    next: 'route2_6'
  },
  {
    id: 'route2_6',
    type: 'dialogue',
    character: 'seven',
    text: '社长！我们发现Van様的暗黑势力正在DARK总部集结！',
    next: 'route2_7'
  },
  {
    id: 'route2_7',
    type: 'dialogue',
    character: 'kikuchi',
    text: 'DARK总部？那里是Van様的大本营！他们一定在准备什么大动作！',
    next: 'route2_8'
  },
  {
    id: 'route2_8',
    type: 'dialogue',
    character: 'billy',
    text: '我们必须立即行动！木吉，让我们去DARK总部！',
    next: 'route2_9'
  },
  {
    id: 'route2_9',
    type: 'dialogue',
    character: 'narrator',
    text: '你们来到了DARK总部，这里伪装成一家建筑公司...',
    next: 'route2_10'
  },
  {
    id: 'route2_10',
    type: 'dialogue',
    character: 'kinggold',
    text: '比利！木吉！你们竟然敢闯入这里！',
    next: 'route2_11'
  },
  {
    id: 'route2_11',
    type: 'dialogue',
    character: 'kingsilver',
    text: '哥哥，让我们用我们的力量击败他们！',
    next: 'route2_12'
  },
  {
    id: 'route2_12',
    type: 'dialogue',
    character: 'kinggold',
    text: '股间♂布摩擦！',
    next: 'route2_13'
  },
  {
    id: 'route2_13',
    type: 'dialogue',
    character: 'narrator',
    text: '金阁通过股间摩擦生火，向你们发动攻击...',
    next: 'route2_14'
  },
  {
    id: 'route2_14',
    type: 'dialogue',
    character: 'kingsilver',
    text: '魅惑♂舞蹈！',
    next: 'route2_15'
  },
  {
    id: 'route2_15',
    type: 'dialogue',
    character: 'narrator',
    text: '银阁的魅惑舞蹈试图俘获你们的身心...',
    next: 'route2_choice'
  },
  {
    id: 'route2_choice',
    type: 'choice',
    text: '面对金银二阁的联合攻击，你决定如何应对？',
    options: [
      {
        text: '比利使用光の力，对抗金阁的火焰',
        next: 'route2_fight1'
      },
      {
        text: '木吉使用未知领域，暂停时间',
        next: 'route2_fight2'
      },
      {
        text: '联手攻击，先击败银阁的魅惑',
        next: 'route2_fight3'
      }
    ]
  },
  {
    id: 'route2_fight1',
    type: 'dialogue',
    character: 'billy',
    text: '光の力！开启光明形态！',
    next: 'route2_fight1_1'
  },
  {
    id: 'route2_fight1_1',
    type: 'dialogue',
    character: 'narrator',
    text: '比利开启了光明形态，光明属性的攻击克制了金阁的火焰...',
    next: 'route2_fight1_2'
  },
  {
    id: 'route2_fight1_2',
    type: 'dialogue',
    character: 'kinggold',
    text: '可恶！光明属性的力量！',
    next: 'route2_merge'
  },
  {
    id: 'route2_fight2',
    type: 'dialogue',
    character: 'kikuchi',
    text: '未知领域！',
    next: 'route2_fight2_1'
  },
  {
    id: 'route2_fight2_1',
    type: 'dialogue',
    character: 'narrator',
    text: '木吉使出了未知领域，时间暂停了...',
    next: 'route2_fight2_2'
  },
  {
    id: 'route2_fight2_2',
    type: 'dialogue',
    character: 'billy',
    text: '好机会！趁现在！',
    next: 'route2_merge'
  },
  {
    id: 'route2_fight3',
    type: 'dialogue',
    character: 'billy',
    text: '木吉，我们先击败银阁！',
    next: 'route2_fight3_1'
  },
  {
    id: 'route2_fight3_1',
    type: 'dialogue',
    character: 'kikuchi',
    text: '了解！',
    next: 'route2_fight3_2'
  },
  {
    id: 'route2_fight3_2',
    type: 'dialogue',
    character: 'narrator',
    text: '你们联手击败了银阁，但金阁趁机加强了攻击...',
    next: 'route2_merge'
  },
  {
    id: 'route2_merge',
    type: 'dialogue',
    character: 'narrator',
    text: '经过激烈的战斗，你们击败了金银二阁...',
    next: 'route2_merge1'
  },
  {
    id: 'route2_merge1',
    type: 'dialogue',
    character: 'kinggold',
    text: 'Van様...不会放过你们的...',
    next: 'route2_merge2'
  },
  {
    id: 'route2_merge2',
    type: 'dialogue',
    character: 'billy',
    text: 'Van様在哪里？',
    next: 'route2_merge3'
  },
  {
    id: 'route2_merge3',
    type: 'dialogue',
    character: 'kingsilver',
    text: '他...他正在准备复活KING石井的仪式...在旧日暮里的废墟...',
    next: 'route2_merge4'
  },
  {
    id: 'route2_merge4',
    type: 'dialogue',
    character: 'billy',
    text: '旧日暮里的废墟？那里不是被赤酱毁灭了吗？',
    next: 'route2_merge5'
  },
  {
    id: 'route2_merge5',
    type: 'dialogue',
    character: 'kikuchi',
    text: '看来Van様找到了进入旧日暮里废墟的方法...我们必须阻止他！',
    next: 'route2_aftermath'
  },
  {
    id: 'route2_aftermath',
    type: 'dialogue',
    character: 'narrator',
    text: '你们在DARK总部发现了一些文件，揭示了更多关于Van様计划的信息...',
    next: 'route2_aftermath1'
  },
  {
    id: 'route2_aftermath1',
    type: 'dialogue',
    character: 'billy',
    text: '这些文件显示...Van様不仅想要复活KING石井，还想要打开恶魔之门？',
    next: 'route2_aftermath2'
  },
  {
    id: 'route2_aftermath2',
    type: 'dialogue',
    character: 'kikuchi',
    text: '恶魔之门？就是我们曾经打裂的那个？如果它再次打开...',
    next: 'route2_aftermath3'
  },
  {
    id: 'route2_aftermath3',
    type: 'dialogue',
    character: 'billy',
    text: '那将是一场灾难！我们必须阻止他！',
    next: 'route2_aftermath4'
  },
  {
    id: 'route2_aftermath4',
    type: 'dialogue',
    character: 'seven',
    text: '社长！我们发现了一些关于木吉工业的间谍活动！',
    next: 'route2_aftermath5'
  },
  {
    id: 'route2_aftermath5',
    type: 'dialogue',
    character: 'kikuchi',
    text: '什么？木吉工业有间谍？',
    next: 'route2_aftermath6'
  },
  {
    id: 'route2_aftermath6',
    type: 'dialogue',
    character: 'seven',
    text: '是的，Van様派了人潜入我们公司，试图获取工业技术来制造某种装置。',
    next: 'route2_aftermath7'
  },
  {
    id: 'route2_aftermath7',
    type: 'dialogue',
    character: 'billy',
    text: '看来Van様的计划比我们想象的更复杂...',
    next: 'route2_choice2'
  },
  {
    id: 'route2_choice2',
    type: 'choice',
    text: '发现了Van様的更大阴谋，你决定如何应对？',
    options: [
      {
        text: '立即前往旧日暮里废墟，阻止Van様',
        next: 'route2_urgent'
      },
      {
        text: '先清理木吉工业的间谍',
        next: 'route2_clean'
      },
      {
        text: '寻找更多关于恶魔之门的信息',
        next: 'route2_research'
      }
    ]
  },
  {
    id: 'route2_urgent',
    type: 'dialogue',
    character: 'billy',
    text: '时间紧迫，我们必须立即行动！',
    next: 'choice2'
  },
  {
    id: 'route2_clean',
    type: 'dialogue',
    character: 'kikuchi',
    text: '好，让我们先清理这些间谍，确保木吉工业的安全。',
    next: 'route2_clean1'
  },
  {
    id: 'route2_clean1',
    type: 'dialogue',
    character: 'seven',
    text: '我们已经找到了所有间谍的位置，随时可以行动！',
    next: 'route2_clean2'
  },
  {
    id: 'route2_clean2',
    type: 'dialogue',
    character: 'kikuchi',
    text: '木吉七本枪，行动！',
    next: 'route2_clean3'
  },
  {
    id: 'route2_clean3',
    type: 'dialogue',
    character: 'narrator',
    text: '木吉七本枪迅速行动，清理了所有间谍...',
    next: 'route2_clean4'
  },
  {
    id: 'route2_clean4',
    type: 'dialogue',
    character: 'kikuchi',
    text: '好，现在我们可以安心地去阻止Van様了。',
    next: 'choice2'
  },
  {
    id: 'route2_research',
    type: 'dialogue',
    character: 'billy',
    text: '我们需要更多关于恶魔之门的信息。',
    next: 'route2_research1'
  },
  {
    id: 'route2_research1',
    type: 'dialogue',
    character: 'kikuchi',
    text: '也许我们应该去找森罗万象大贤者，他应该知道这些历史。',
    next: 'route2_research2'
  },
  {
    id: 'route2_research2',
    type: 'dialogue',
    character: 'billy',
    text: '好主意！乳首科里纳是历史学家，他一定知道恶魔之门的秘密。',
    next: 'route2_research3'
  },
  {
    id: 'route2_research3',
    type: 'dialogue',
    character: 'scholar',
    text: '比利，木吉，你们来了。关于恶魔之门...那是一个危险的禁忌。',
    next: 'route2_research4'
  },
  {
    id: 'route2_research4',
    type: 'dialogue',
    character: 'scholar',
    text: '如果恶魔之门再次打开，将会有无数恶魔涌入新日暮里。我们必须阻止Van様！',
    next: 'route2_research5'
  },
  {
    id: 'route2_research5',
    type: 'dialogue',
    character: 'billy',
    text: '我们会的！谢谢你提供的信息。',
    next: 'choice2'
  },
  {
    id: 'route3',
    type: 'dialogue',
    character: 'billy',
    text: '全裸骑士团！我们需要你们的帮助！',
    next: 'route3_1'
  },
  {
    id: 'route3_1',
    type: 'dialogue',
    character: 'knight',
    text: '比利！我们全裸骑士团随时待命！',
    next: 'route3_2'
  },
  {
    id: 'route3_2',
    type: 'dialogue',
    character: 'billy',
    text: '我需要你们调查暗黑女王的古堡，看看她是否与Van様有联系。',
    next: 'route3_3'
  },
  {
    id: 'route3_3',
    type: 'dialogue',
    character: 'knight',
    text: '了解！我们立即前往暗黑古堡！',
    next: 'route3_4'
  },
  {
    id: 'route3_4',
    type: 'dialogue',
    character: 'narrator',
    text: '全裸骑士团前往暗黑古堡进行调查...',
    next: 'route3_5'
  },
  {
    id: 'route3_5',
    type: 'dialogue',
    character: 'darkqueen',
    text: '全裸骑士团？你们竟然敢闯入我的古堡！',
    next: 'route3_6'
  },
  {
    id: 'route3_6',
    type: 'dialogue',
    character: 'knight',
    text: '暗黑女王！我们只是来调查，不想与你为敌！',
    next: 'route3_7'
  },
  {
    id: 'route3_7',
    type: 'dialogue',
    character: 'darkqueen',
    text: '调查？你们是想知道Van様的事情吧？',
    next: 'route3_8'
  },
  {
    id: 'route3_8',
    type: 'dialogue',
    character: 'knight',
    text: '你知道Van様的计划？',
    next: 'route3_9'
  },
  {
    id: 'route3_9',
    type: 'dialogue',
    character: 'darkqueen',
    text: '虽然我们同属暗黑势力，但Van様和我是不同的团体。不过...我确实知道一些事情。',
    next: 'route3_10'
  },
  {
    id: 'route3_10',
    type: 'dialogue',
    character: 'fishman',
    text: '...',
    next: 'route3_11'
  },
  {
    id: 'route3_11',
    type: 'dialogue',
    character: 'darkqueen',
    text: 'Van様正在寻找复活KING石井的方法。他需要旧日暮里的力量...',
    next: 'route3_12'
  },
  {
    id: 'route3_12',
    type: 'dialogue',
    character: 'knight',
    text: '旧日暮里的力量？那里不是被赤酱毁灭了吗？',
    next: 'route3_13'
  },
  {
    id: 'route3_13',
    type: 'dialogue',
    character: 'darkqueen',
    text: '虽然旧日暮里被毁灭了，但KING石井的怨念还在。Van様想要利用这股怨念...',
    next: 'route3_14'
  },
  {
    id: 'route3_14',
    type: 'dialogue',
    character: 'knight',
    text: '我们必须立即告诉比利！',
    next: 'route3_15'
  },
  {
    id: 'route3_15',
    type: 'dialogue',
    character: 'darkqueen',
    text: '等等！如果你们能帮我一个忙，我可以提供更多情报。',
    next: 'route3_choice'
  },
  {
    id: 'route3_choice',
    type: 'choice',
    text: '暗黑女王提出了条件，你决定如何回应？',
    options: [
      {
        text: '答应她的条件，听听她要什么',
        next: 'route3_deal1'
      },
      {
        text: '拒绝，直接离开',
        next: 'route3_deal2'
      },
      {
        text: '询问具体条件是什么',
        next: 'route3_deal3'
      }
    ]
  },
  {
    id: 'route3_deal1',
    type: 'dialogue',
    character: 'knight',
    text: '什么条件？',
    next: 'route3_deal1_1'
  },
  {
    id: 'route3_deal1_1',
    type: 'dialogue',
    character: 'darkqueen',
    text: '帮我找回半鱼人。它最近失踪了，我怀疑与Van様有关。',
    next: 'route3_deal1_2'
  },
  {
    id: 'route3_deal1_2',
    type: 'dialogue',
    character: 'knight',
    text: '好，我们帮你找。',
    next: 'route3_merge'
  },
  {
    id: 'route3_deal2',
    type: 'dialogue',
    character: 'knight',
    text: '我们没有时间了！',
    next: 'route3_deal2_1'
  },
  {
    id: 'route3_deal2_1',
    type: 'dialogue',
    character: 'darkqueen',
    text: '那你们就得不到完整的情报了！',
    next: 'route3_merge'
  },
  {
    id: 'route3_deal3',
    type: 'dialogue',
    character: 'knight',
    text: '什么条件？',
    next: 'route3_deal3_1'
  },
  {
    id: 'route3_deal3_1',
    type: 'dialogue',
    character: 'darkqueen',
    text: '帮我找回半鱼人。它最近失踪了，我怀疑与Van様有关。',
    next: 'route3_deal3_2'
  },
  {
    id: 'route3_deal3_2',
    type: 'dialogue',
    character: 'knight',
    text: '好，我们帮你找。',
    next: 'route3_merge'
  },
  {
    id: 'route3_merge',
    type: 'dialogue',
    character: 'darkqueen',
    text: 'Van様的计划是：在旧日暮里的废墟中，利用KING石井的怨念，打开通往古日暮里的通道。',
    next: 'route3_merge1'
  },
  {
    id: 'route3_merge1',
    type: 'dialogue',
    character: 'knight',
    text: '古日暮里？那是什么？',
    next: 'route3_merge2'
  },
  {
    id: 'route3_merge2',
    type: 'dialogue',
    character: 'darkqueen',
    text: '那是比旧日暮里更古老的时代。传说那里有法老的魔法护甲...Van様想要得到它。',
    next: 'route3_merge3'
  },
  {
    id: 'route3_merge3',
    type: 'dialogue',
    character: 'knight',
    text: '我们必须立即告诉比利！',
    next: 'route3_merge4'
  },
  {
    id: 'route3_merge4',
    type: 'dialogue',
    character: 'narrator',
    text: '全裸骑士团带着重要情报返回，向比利报告...',
    next: 'route3_aftermath'
  },
  {
    id: 'route3_aftermath',
    type: 'dialogue',
    character: 'inoue',
    text: '比利，我们回来了。暗黑女王提供了重要情报。',
    next: 'route3_aftermath1'
  },
  {
    id: 'route3_aftermath1',
    type: 'dialogue',
    character: 'billy',
    text: '井上，你们做得很好。关于古日暮里的法老护甲...',
    next: 'route3_aftermath2'
  },
  {
    id: 'route3_aftermath2',
    type: 'dialogue',
    character: 'inoue',
    text: '暗黑女王说，法老护甲现在在藤冈那里。但Van様可能已经知道了。',
    next: 'route3_aftermath3'
  },
  {
    id: 'route3_aftermath3',
    type: 'dialogue',
    character: 'billy',
    text: '藤冈？他曾经帮助法老消弭怨念...我们必须保护他！',
    next: 'route3_aftermath4'
  },
  {
    id: 'route3_aftermath4',
    type: 'dialogue',
    character: 'fujio',
    text: '比利，我在这里。法老的护甲确实在我这里，但我已经净化了它的力量。',
    next: 'route3_aftermath5'
  },
  {
    id: 'route3_aftermath5',
    type: 'dialogue',
    character: 'billy',
    text: '藤冈，你做得很好。但Van様可能还会来找你。',
    next: 'route3_aftermath6'
  },
  {
    id: 'route3_aftermath6',
    type: 'dialogue',
    character: 'fujio',
    text: '我知道。但我会保护法老护甲，不会让Van様得逞。',
    next: 'route3_choice2'
  },
  {
    id: 'route3_choice2',
    type: 'choice',
    text: '得知法老护甲在藤冈那里，你决定如何行动？',
    options: [
      {
        text: '让藤冈加入队伍，一起行动',
        next: 'route3_join'
      },
      {
        text: '让藤冈隐藏起来，保护护甲',
        next: 'route3_hide'
      },
      {
        text: '寻找更安全的地方存放护甲',
        next: 'route3_safe'
      }
    ]
  },
  {
    id: 'route3_join',
    type: 'dialogue',
    character: 'billy',
    text: '藤冈，和我们一起行动吧。这样我们可以更好地保护护甲。',
    next: 'route3_join1'
  },
  {
    id: 'route3_join1',
    type: 'dialogue',
    character: 'fujio',
    text: '好，我会和你们一起。WHY DON\'T YOU GET FU@K！',
    next: 'choice2'
  },
  {
    id: 'route3_hide',
    type: 'dialogue',
    character: 'billy',
    text: '藤冈，你找个安全的地方隐藏起来，保护好护甲。',
    next: 'route3_hide1'
  },
  {
    id: 'route3_hide1',
    type: 'dialogue',
    character: 'fujio',
    text: '了解。我会保护好它的。',
    next: 'choice2'
  },
  {
    id: 'route3_safe',
    type: 'dialogue',
    character: 'billy',
    text: '也许我们应该把护甲放在更安全的地方...比如英雄联盟基地？',
    next: 'route3_safe1'
  },
  {
    id: 'route3_safe1',
    type: 'dialogue',
    character: 'fujio',
    text: '好主意。英雄联盟基地应该是最安全的地方。',
    next: 'route3_safe2'
  },
  {
    id: 'route3_safe2',
    type: 'dialogue',
    character: 'narrator',
    text: '你们将法老护甲转移到了英雄联盟基地，加强了守卫...',
    next: 'choice2'
  },
  {
    id: 'route4',
    type: 'dialogue',
    character: 'billy',
    text: '森の大统领，我们需要你的帮助。',
    next: 'route4_1'
  },
  {
    id: 'route4_1',
    type: 'dialogue',
    character: 'mori',
    text: '比利，作为新日暮里的实际掌权者，我会全力支持英雄联盟。',
    next: 'route4_2'
  },
  {
    id: 'route4_2',
    type: 'dialogue',
    character: 'mori',
    text: '我通过肉体♂演说，已经了解到了一些情况...',
    next: 'route4_3'
  },
  {
    id: 'route4_3',
    type: 'dialogue',
    character: 'billy',
    text: '什么情况？',
    next: 'route4_4'
  },
  {
    id: 'route4_4',
    type: 'dialogue',
    character: 'mori',
    text: 'Van様正在利用政治手段，试图在新日暮里制造混乱。他想要削弱英雄联盟的影响力。',
    next: 'route4_5'
  },
  {
    id: 'route4_5',
    type: 'dialogue',
    character: 'billy',
    text: '政治手段？',
    next: 'route4_6'
  },
  {
    id: 'route4_6',
    type: 'dialogue',
    character: 'mori',
    text: '他正在煽动一些势力，试图推翻现有的秩序。而且...他似乎在寻找什么。',
    next: 'route4_7'
  },
  {
    id: 'route4_7',
    type: 'dialogue',
    character: 'fairy',
    text: '森の大统领说得对。',
    next: 'route4_8'
  },
  {
    id: 'route4_8',
    type: 'dialogue',
    character: 'narrator',
    text: '妖精王出现了。作为名义上的王，他掌握着新旧日暮里的全部秘密。',
    next: 'route4_9'
  },
  {
    id: 'route4_9',
    type: 'dialogue',
    character: 'fairy',
    text: 'Van様想要复活KING石井。但要做到这一点，他需要三样东西。',
    next: 'route4_10'
  },
  {
    id: 'route4_10',
    type: 'dialogue',
    character: 'billy',
    text: '三样东西？',
    next: 'route4_11'
  },
  {
    id: 'route4_11',
    type: 'dialogue',
    character: 'fairy',
    text: '第一，旧日暮里的怨念。第二，古日暮里的法老护甲。第三...妖精三信的力量。',
    next: 'route4_12'
  },
  {
    id: 'route4_12',
    type: 'dialogue',
    character: 'billy',
    text: '妖精三信？戒の心、赞の心、许の心？',
    next: 'route4_13'
  },
  {
    id: 'route4_13',
    type: 'dialogue',
    character: 'fairy',
    text: '没错。如果Van様得到了这三样东西，他就能复活KING石井，甚至可能打开恶魔之门。',
    next: 'route4_14'
  },
  {
    id: 'route4_14',
    type: 'dialogue',
    character: 'billy',
    text: '我们必须阻止他！',
    next: 'route4_15'
  },
  {
    id: 'route4_15',
    type: 'dialogue',
    character: 'mori',
    text: '我会动用所有政治资源，支持英雄联盟的行动。',
    next: 'route4_16'
  },
  {
    id: 'route4_16',
    type: 'dialogue',
    character: 'aka',
    text: '...',
    next: 'route4_17'
  },
  {
    id: 'route4_17',
    type: 'dialogue',
    character: 'narrator',
    text: '赤さん再次露出了天真无邪的笑容，似乎在给予你们祝福...',
    next: 'route4_aftermath'
  },
  {
    id: 'route4_aftermath',
    type: 'dialogue',
    character: 'fairy',
    text: '比利，作为掌握新旧日暮里全部秘密的人，我必须告诉你一件事。',
    next: 'route4_aftermath1'
  },
  {
    id: 'route4_aftermath1',
    type: 'dialogue',
    character: 'billy',
    text: '什么事？',
    next: 'route4_aftermath2'
  },
  {
    id: 'route4_aftermath2',
    type: 'dialogue',
    character: 'fairy',
    text: 'Van様的计划不仅仅是复活KING石井。他还想要...打开通往现实世界的通道。',
    next: 'route4_aftermath3'
  },
  {
    id: 'route4_aftermath3',
    type: 'dialogue',
    character: 'billy',
    text: '什么？！如果新日暮里和现实世界连接...',
    next: 'route4_aftermath4'
  },
  {
    id: 'route4_aftermath4',
    type: 'dialogue',
    character: 'fairy',
    text: '那将是一场灾难。两个世界的平衡都会被打破。',
    next: 'route4_aftermath5'
  },
  {
    id: 'route4_aftermath5',
    type: 'dialogue',
    character: 'mori',
    text: '作为新日暮里的实际掌权者，我会动用所有政治资源，支持英雄联盟。',
    next: 'route4_aftermath6'
  },
  {
    id: 'route4_aftermath6',
    type: 'dialogue',
    character: 'billy',
    text: '我们必须阻止Van様！这不仅是为了新日暮里，也是为了现实世界！',
    next: 'route4_choice2'
  },
  {
    id: 'route4_choice2',
    type: 'choice',
    text: '得知Van様的更大阴谋，你决定如何应对？',
    options: [
      {
        text: '立即行动，阻止Van様',
        next: 'route4_urgent'
      },
      {
        text: '先联系现实世界的异位同体',
        next: 'route4_contact'
      },
      {
        text: '制定更详细的计划',
        next: 'route4_detail'
      }
    ]
  },
  {
    id: 'route4_urgent',
    type: 'dialogue',
    character: 'billy',
    text: '时间紧迫，我们必须立即行动！',
    next: 'choice2'
  },
  {
    id: 'route4_contact',
    type: 'dialogue',
    character: 'mori',
    text: '也许我们应该联系暗之大将军，他曾经成功穿越到现实世界。',
    next: 'route4_contact1'
  },
  {
    id: 'route4_contact1',
    type: 'dialogue',
    character: 'general',
    text: '比利，我来了。关于现实世界...异位同体的联系确实存在。',
    next: 'route4_contact2'
  },
  {
    id: 'route4_contact2',
    type: 'dialogue',
    character: 'general',
    text: '如果Van様真的打开了通道，两个世界都会受到影响。我们必须阻止他。',
    next: 'route4_contact3'
  },
  {
    id: 'route4_contact3',
    type: 'dialogue',
    character: 'billy',
    text: '暗之大将军，我们需要你的帮助。',
    next: 'route4_contact4'
  },
  {
    id: 'route4_contact4',
    type: 'dialogue',
    character: 'general',
    text: '我会动用雇佣军的力量，支持英雄联盟。',
    next: 'choice2'
  },
  {
    id: 'route4_detail',
    type: 'dialogue',
    character: 'billy',
    text: '我们需要一个更详细的计划。',
    next: 'route4_detail1'
  },
  {
    id: 'route4_detail1',
    type: 'dialogue',
    character: 'fairy',
    text: 'Van様需要三样东西：旧日暮里的怨念、古日暮里的护甲、还有妖精三信的力量。',
    next: 'route4_detail2'
  },
  {
    id: 'route4_detail2',
    type: 'dialogue',
    character: 'billy',
    text: '我们必须阻止他获得这三样东西。',
    next: 'route4_detail3'
  },
  {
    id: 'route4_detail3',
    type: 'dialogue',
    character: 'mori',
    text: '我会派人保护妖精三信，确保Van様无法利用它。',
    next: 'route4_detail4'
  },
  {
    id: 'route4_detail4',
    type: 'dialogue',
    character: 'billy',
    text: '好，那我们分头行动，阻止Van様的计划！',
    next: 'choice2'
  },
  {
    id: 'choice2',
    type: 'dialogue',
    character: 'narrator',
    text: '所有路线的情报都汇集到了一起。现在，英雄联盟对Van様的计划有了全面的了解...',
    next: 'choice2_prep'
  },
  {
    id: 'choice2_prep',
    type: 'dialogue',
    character: 'billy',
    text: 'Van様需要三样东西：旧日暮里的怨念、古日暮里的法老护甲、还有妖精三信的力量。',
    next: 'choice2_prep1'
  },
  {
    id: 'choice2_prep1',
    type: 'dialogue',
    character: 'kikuchi',
    text: '我们必须阻止他获得这三样东西。但问题是，我们应该先阻止哪一个？',
    next: 'choice2'
  },
  {
    id: 'choice2',
    type: 'choice',
    text: '现在你知道了Van様的计划，你决定如何阻止他？',
    options: [
      {
        text: '前往旧日暮里的废墟，阻止Van様收集怨念',
        next: 'action1'
      },
      {
        text: '前往古日暮里，保护法老护甲不被Van様得到',
        next: 'action2'
      },
      {
        text: '守护妖精三信，防止Van様获得这股力量',
        next: 'action3'
      },
      {
        text: '联合所有英雄联盟成员，直接攻击Van様',
        next: 'action4'
      }
    ]
  },
  {
    id: 'action1',
    type: 'dialogue',
    character: 'billy',
    text: '我们必须前往旧日暮里的废墟，阻止Van様收集KING石井的怨念！',
    next: 'action1_prep'
  },
  {
    id: 'action1_prep',
    type: 'dialogue',
    character: 'kikuchi',
    text: '比利，旧日暮里的废墟很危险。那里被赤酱毁灭后，充满了怨念的气息。',
    next: 'action1_prep1'
  },
  {
    id: 'action1_prep1',
    type: 'dialogue',
    character: 'billy',
    text: '我知道危险，但我们必须去。谁愿意和我一起去？',
    next: 'action1_prep2'
  },
  {
    id: 'action1_prep2',
    type: 'dialogue',
    character: 'beoland',
    text: '我！猎天使魔男的力量可以对抗怨念！',
    next: 'action1_prep3'
  },
  {
    id: 'action1_prep3',
    type: 'dialogue',
    character: 'kikuchi',
    text: '我也去！我们曾经一起封印恶魔之门，这次也要一起！',
    next: 'action1_prep4'
  },
  {
    id: 'action1_prep4',
    type: 'dialogue',
    character: 'billy',
    text: '好！让我们出发！',
    next: 'action1_1'
  },
  {
    id: 'action1_1',
    type: 'dialogue',
    character: 'narrator',
    text: '你们来到了旧日暮里的废墟。这里被赤酱毁灭后，只剩下残垣断壁...',
    next: 'action1_1_1'
  },
  {
    id: 'action1_1_1',
    type: 'dialogue',
    character: 'narrator',
    text: '空气中弥漫着不祥的气息，仿佛有无数怨灵在低语...',
    next: 'action1_2'
  },
  {
    id: 'action1_2',
    type: 'dialogue',
    character: 'kingishii',
    text: '比利...你终于来了...',
    next: 'action1_3'
  },
  {
    id: 'action1_3',
    type: 'dialogue',
    character: 'billy',
    text: 'KING石井！你的怨念还在？',
    next: 'action1_4'
  },
  {
    id: 'action1_4',
    type: 'dialogue',
    character: 'kingishii',
    text: '我的怨念永远不会消失...直到我重新统治日暮里！',
    next: 'action1_5'
  },
  {
    id: 'action1_5',
    type: 'dialogue',
    character: 'van',
    text: 'KING石井！我已经收集了足够的怨念！现在，让我们完成仪式！',
    next: 'action1_5_1'
  },
  {
    id: 'action1_5_1',
    type: 'dialogue',
    character: 'narrator',
    text: 'Van様开始进行仪式，旧日暮里废墟中的怨念开始聚集...',
    next: 'action1_5_2'
  },
  {
    id: 'action1_5_2',
    type: 'dialogue',
    character: 'kingishii',
    text: '我的力量...正在恢复...',
    next: 'action1_6'
  },
  {
    id: 'action1_6',
    type: 'dialogue',
    character: 'billy',
    text: 'Van様！我不会让你得逞的！',
    next: 'action1_6_1'
  },
  {
    id: 'action1_6_1',
    type: 'dialogue',
    character: 'kikuchi',
    text: '比利，我们必须阻止这个仪式！',
    next: 'action1_6_2'
  },
  {
    id: 'action1_6_2',
    type: 'dialogue',
    character: 'beoland',
    text: '让我来！猎天使魔男，变身！',
    next: 'action1_7'
  },
  {
    id: 'action1_7',
    type: 'dialogue',
    character: 'narrator',
    text: '比利使用光の力，试图净化KING石井的怨念...',
    next: 'action1_8'
  },
  {
    id: 'action1_8',
    type: 'dialogue',
    character: 'aka',
    text: '...',
    next: 'action1_9'
  },
  {
    id: 'action1_9',
    type: 'dialogue',
    character: 'narrator',
    text: '赤さん的力量降临，帮助比利净化了怨念...',
    next: 'action1_10'
  },
  {
    id: 'action1_10',
    type: 'dialogue',
    character: 'kingishii',
    text: '不...我的怨念...被净化了...',
    next: 'action1_11'
  },
  {
    id: 'action1_11',
    type: 'dialogue',
    character: 'van',
    text: '可恶！但我的计划还没有结束！',
    next: 'action1_12'
  },
  {
    id: 'action1_12',
    type: 'dialogue',
    character: 'narrator',
    text: 'Van様逃走了，但旧日暮里废墟中突然出现了异象...',
    next: 'action1_13'
  },
  {
    id: 'action1_13',
    type: 'dialogue',
    character: 'cloton',
    text: '比利...你终于来了...',
    next: 'action1_14'
  },
  {
    id: 'action1_14',
    type: 'dialogue',
    character: 'billy',
    text: '你是谁？',
    next: 'action1_15'
  },
  {
    id: 'action1_15',
    type: 'dialogue',
    character: 'cloton',
    text: '我是Cloton ford...石井最爱的臣子...最后时刻被石井献祭...',
    next: 'action1_16'
  },
  {
    id: 'action1_16',
    type: 'dialogue',
    character: 'cloton',
    text: '我的灵魂被困在这里...但我知道石井的秘密...',
    next: 'action1_17'
  },
  {
    id: 'action1_17',
    type: 'dialogue',
    character: 'billy',
    text: '什么秘密？',
    next: 'action1_18'
  },
  {
    id: 'action1_18',
    type: 'dialogue',
    character: 'cloton',
    text: '石井的怨念...可以通过妖精三信的力量来彻底净化...但需要三个人的力量...',
    next: 'action1_19'
  },
  {
    id: 'action1_19',
    type: 'dialogue',
    character: 'billy',
    text: '三个人？',
    next: 'action1_20'
  },
  {
    id: 'action1_20',
    type: 'dialogue',
    character: 'cloton',
    text: '戒の心、赞の心、许の心...需要三个拥有这些信念的人...',
    next: 'action1_21'
  },
  {
    id: 'action1_21',
    type: 'dialogue',
    character: 'narrator',
    text: 'Cloton ford的灵魂逐渐消散，但他的话语给了你们希望...',
    next: 'ending1'
  },
  {
    id: 'action2',
    type: 'dialogue',
    character: 'billy',
    text: '我们必须前往古日暮里，保护法老的魔法护甲！',
    next: 'action2_prep'
  },
  {
    id: 'action2_prep',
    type: 'dialogue',
    character: 'fujio',
    text: '比利，让我一起去。我曾经帮助法老消弭了怨念，对那里比较熟悉。',
    next: 'action2_prep1'
  },
  {
    id: 'action2_prep1',
    type: 'dialogue',
    character: 'billy',
    text: '藤冈，谢谢你。但古日暮里很危险，你确定要去吗？',
    next: 'action2_prep2'
  },
  {
    id: 'action2_prep2',
    type: 'dialogue',
    character: 'fujio',
    text: '当然。法老的护甲不应该被用来作恶。我必须保护它。',
    next: 'action2_prep3'
  },
  {
    id: 'action2_prep3',
    type: 'dialogue',
    character: 'billy',
    text: '好，那我们出发。还有谁愿意一起去？',
    next: 'action2_prep4'
  },
  {
    id: 'action2_prep4',
    type: 'dialogue',
    character: 'inoue',
    text: '我！全裸骑士团会保护你们！',
    next: 'action2_prep5'
  },
  {
    id: 'action2_prep5',
    type: 'dialogue',
    character: 'billy',
    text: '井上，谢谢你。让我们出发！',
    next: 'action2_1'
  },
  {
    id: 'action2_1',
    type: 'dialogue',
    character: 'narrator',
    text: '你们前往古日暮里，那里充满了古老而神秘的气息...',
    next: 'action2_1_1'
  },
  {
    id: 'action2_1_1',
    type: 'dialogue',
    character: 'fujio',
    text: '这里就是古日暮里...法老的护甲应该就在附近...',
    next: 'action2_2'
  },
  {
    id: 'action2_2',
    type: 'dialogue',
    character: 'billy',
    text: '藤冈，谢谢你。',
    next: 'action2_3'
  },
  {
    id: 'action2_3',
    type: 'dialogue',
    character: 'narrator',
    text: '你们来到了古日暮里，这里充满了古老的气息...',
    next: 'action2_4'
  },
  {
    id: 'action2_4',
    type: 'dialogue',
    character: 'van',
    text: '比利！你们来晚了！法老的护甲已经在我手中！',
    next: 'action2_5'
  },
  {
    id: 'action2_5',
    type: 'dialogue',
    character: 'fujio',
    text: 'Van様！法老的护甲不应该被用来作恶！',
    next: 'action2_6'
  },
  {
    id: 'action2_6',
    type: 'dialogue',
    character: 'van',
    text: '藤冈，你曾经帮助法老消弭怨念。但现在，护甲的力量属于我了！',
    next: 'action2_7'
  },
  {
    id: 'action2_7',
    type: 'dialogue',
    character: 'fujio',
    text: '法老的灵魂已经升天，但护甲中还有残留的力量...我必须阻止你！',
    next: 'action2_8'
  },
  {
    id: 'action2_8',
    type: 'dialogue',
    character: 'narrator',
    text: '藤冈使用对妖精哲学的深刻理解，试图净化护甲中的力量...',
    next: 'action2_9'
  },
  {
    id: 'action2_9',
    type: 'dialogue',
    character: 'van',
    text: '不可能！护甲的力量正在消失！',
    next: 'action2_10'
  },
  {
    id: 'action2_10',
    type: 'dialogue',
    character: 'fujio',
    text: '法老的护甲...终于得到了真正的安息...',
    next: 'action2_11'
  },
  {
    id: 'action2_11',
    type: 'dialogue',
    character: 'van',
    text: '可恶！但我的计划还没有结束！',
    next: 'action2_12'
  },
  {
    id: 'action2_12',
    type: 'dialogue',
    character: 'narrator',
    text: 'Van様逃走了，但古日暮里中突然出现了法老的幻影...',
    next: 'action2_13'
  },
  {
    id: 'action2_13',
    type: 'dialogue',
    character: 'narrator',
    text: '法老的灵魂出现了，他感谢藤冈的帮助...',
    next: 'action2_14'
  },
  {
    id: 'action2_14',
    type: 'dialogue',
    character: 'fujio',
    text: '法老...你的怨念已经消弭了...',
    next: 'action2_15'
  },
  {
    id: 'action2_15',
    type: 'dialogue',
    character: 'narrator',
    text: '法老的灵魂升天，被赤さん感化...',
    next: 'action2_16'
  },
  {
    id: 'action2_16',
    type: 'dialogue',
    character: 'aka',
    text: '...',
    next: 'action2_17'
  },
  {
    id: 'action2_17',
    type: 'dialogue',
    character: 'narrator',
    text: '赤さん露出了天真无邪的笑容，似乎在认可你们的努力...',
    next: 'action2_18'
  },
  {
    id: 'action2_18',
    type: 'dialogue',
    character: 'fujio',
    text: '法老的护甲...现在真正安全了...',
    next: 'ending2'
  },
  {
    id: 'action3',
    type: 'dialogue',
    character: 'billy',
    text: '我们必须守护妖精三信！这是新日暮里的核心信念！',
    next: 'action3_prep'
  },
  {
    id: 'action3_prep',
    type: 'dialogue',
    character: 'billy',
    text: '戒の心、赞の心、许の心...这些信念不能被Van様利用！',
    next: 'action3_prep1'
  },
  {
    id: 'action3_prep1',
    type: 'dialogue',
    character: 'iida',
    text: '比利，让我用说教能力，向所有兄贵传达妖精三信的真谛！',
    next: 'action3_prep2'
  },
  {
    id: 'action3_prep2',
    type: 'dialogue',
    character: 'billy',
    text: '池田，拜托你了。但我们需要更多人的帮助。',
    next: 'action3_prep3'
  },
  {
    id: 'action3_prep3',
    type: 'dialogue',
    character: 'mori',
    text: '作为新日暮里的实际掌权者，我会用肉体♂演说，向所有人传达妖精三信的重要性。',
    next: 'action3_prep4'
  },
  {
    id: 'action3_prep4',
    type: 'dialogue',
    character: 'billy',
    text: '很好！让我们开始！',
    next: 'action3_1'
  },
  {
    id: 'action3_1',
    type: 'dialogue',
    character: 'narrator',
    text: '英雄联盟开始在新日暮里各处传达妖精三信的真谛...',
    next: 'action3_1_1'
  },
  {
    id: 'action3_1_1',
    type: 'dialogue',
    character: 'narrator',
    text: '兄贵们开始重新思考这些信念的意义...',
    next: 'action3_2'
  },
  {
    id: 'action3_2',
    type: 'dialogue',
    character: 'iida',
    text: '比利，让我用说教能力，向所有兄贵传达妖精三信的真谛！',
    next: 'action3_3'
  },
  {
    id: 'action3_3',
    type: 'dialogue',
    character: 'billy',
    text: '池田，拜托你了！',
    next: 'action3_4'
  },
  {
    id: 'action3_4',
    type: 'dialogue',
    character: 'iida',
    text: '所有兄贵们！记住妖精三信：戒の心、赞の心、许の心！这些信念属于我们，不能被黑暗利用！',
    next: 'action3_5'
  },
  {
    id: 'action3_5',
    type: 'dialogue',
    character: 'narrator',
    text: '池田的超级说教能力传遍了整个新日暮里，所有兄贵都重新坚定了信念...',
    next: 'action3_6'
  },
  {
    id: 'action3_6',
    type: 'dialogue',
    character: 'van',
    text: '可恶！妖精三信的力量正在抵抗我的侵蚀！',
    next: 'action3_7'
  },
  {
    id: 'action3_7',
    type: 'dialogue',
    character: 'billy',
    text: 'Van様，妖精三信是兄贵们的信念，你永远无法夺走！',
    next: 'action3_8'
  },
  {
    id: 'action3_8',
    type: 'dialogue',
    character: 'van',
    text: '但我的计划还没有结束！',
    next: 'action3_9'
  },
  {
    id: 'action3_9',
    type: 'dialogue',
    character: 'narrator',
    text: 'Van様逃走了，但新日暮里的兄贵们重新坚定了信念...',
    next: 'action3_10'
  },
  {
    id: 'action3_10',
    type: 'dialogue',
    character: 'iida',
    text: '所有兄贵们！记住妖精三信：戒の心、赞の心、许の心！',
    next: 'action3_11'
  },
  {
    id: 'action3_11',
    type: 'dialogue',
    character: 'narrator',
    text: '兄贵们齐声回应，妖精三信的力量在新日暮里回荡...',
    next: 'action3_12'
  },
  {
    id: 'action3_12',
    type: 'dialogue',
    character: 'billy',
    text: '这就是新日暮里的力量...这就是哲学♂的传承...',
    next: 'action3_13'
  },
  {
    id: 'action3_13',
    type: 'dialogue',
    character: 'mori',
    text: '作为新日暮里的实际掌权者，我会继续支持英雄联盟，维护新日暮里的和平。',
    next: 'action3_14'
  },
  {
    id: 'action3_14',
    type: 'dialogue',
    character: 'aka',
    text: '...',
    next: 'action3_15'
  },
  {
    id: 'action3_15',
    type: 'dialogue',
    character: 'narrator',
    text: '赤さん露出了天真无邪的笑容，似乎在认可英雄联盟的努力...',
    next: 'ending3'
  },
  {
    id: 'action4',
    type: 'dialogue',
    character: 'billy',
    text: '所有英雄联盟成员，集结！我们要直接攻击Van様，阻止他的计划！',
    next: 'action4_prep'
  },
  {
    id: 'action4_prep',
    type: 'dialogue',
    character: 'kikuchi',
    text: '比利，让我们再次联手，就像ANIKI西征时那样！',
    next: 'action4_prep1'
  },
  {
    id: 'action4_prep1',
    type: 'dialogue',
    character: 'billy',
    text: '木吉，这次我们要彻底击败Van様！',
    next: 'action4_prep2'
  },
  {
    id: 'action4_prep2',
    type: 'dialogue',
    character: 'beoland',
    text: '我也来！这次我们一定要成功！',
    next: 'action4_prep3'
  },
  {
    id: 'action4_prep3',
    type: 'dialogue',
    character: 'seven',
    text: '木吉七本枪，随时待命！',
    next: 'action4_prep4'
  },
  {
    id: 'action4_prep4',
    type: 'dialogue',
    character: 'knight',
    text: '全裸骑士团，随时待命！',
    next: 'action4_prep5'
  },
  {
    id: 'action4_prep5',
    type: 'dialogue',
    character: 'billy',
    text: '很好！所有英雄联盟成员，向DARK总部进发！',
    next: 'action4_1'
  },
  {
    id: 'action4_1',
    type: 'dialogue',
    character: 'narrator',
    text: '英雄联盟全体成员集结，向Van様的DARK总部进发...',
    next: 'action4_1_1'
  },
  {
    id: 'action4_1_1',
    type: 'dialogue',
    character: 'narrator',
    text: '这是一场决定新日暮里命运的战斗...',
    next: 'action4_2'
  },
  {
    id: 'action4_2',
    type: 'dialogue',
    character: 'beoland',
    text: '我也来！猎天使魔男，变身！',
    next: 'action4_3'
  },
  {
    id: 'action4_3',
    type: 'dialogue',
    character: 'seven',
    text: '木吉七本枪，参战！',
    next: 'action4_4'
  },
  {
    id: 'action4_4',
    type: 'dialogue',
    character: 'knight',
    text: '全裸骑士团，参战！',
    next: 'action4_5'
  },
  {
    id: 'action4_5',
    type: 'dialogue',
    character: 'billy',
    text: '很好！让我们开始！为了新日暮里，为了哲学♂的传承！',
    next: 'action4_6'
  },
  {
    id: 'action4_6',
    type: 'dialogue',
    character: 'narrator',
    text: '英雄联盟全体成员集结，向Van様的DARK总部发起了总攻...',
    next: 'action4_7'
  },
  {
    id: 'action4_7',
    type: 'dialogue',
    character: 'van',
    text: 'FXXK♂YOU！你们以为这样就能阻止我吗？Deep♂Dark♂Fantasy！',
    next: 'action4_8'
  },
  {
    id: 'action4_8',
    type: 'dialogue',
    character: 'narrator',
    text: 'Van様变身为真♂Van様，开启了Deep♂Dark♂Fantasy状态...',
    next: 'action4_9'
  },
  {
    id: 'action4_9',
    type: 'dialogue',
    character: 'billy',
    text: '贝奥兰迪，就像我们之前那样！',
    next: 'action4_10'
  },
  {
    id: 'action4_10',
    type: 'dialogue',
    character: 'beoland',
    text: '了解！',
    next: 'action4_11'
  },
  {
    id: 'action4_11',
    type: 'dialogue',
    character: 'narrator',
    text: '比利和贝奥兰迪联手，艰难地对抗真♂Van様...',
    next: 'action4_12'
  },
  {
    id: 'action4_12',
    type: 'dialogue',
    character: 'kikuchi',
    text: '比利，我也来！神之救济！',
    next: 'action4_13'
  },
  {
    id: 'action4_13',
    type: 'dialogue',
    character: 'narrator',
    text: '木吉使出了神之救济，为比利和贝奥兰迪创造了机会...',
    next: 'action4_14'
  },
  {
    id: 'action4_14',
    type: 'dialogue',
    character: 'billy',
    text: '就是现在！炒饭烧！',
    next: 'action4_15'
  },
  {
    id: 'action4_15',
    type: 'dialogue',
    character: 'narrator',
    text: '比利的炒饭烧击中了真♂Van様，但似乎还不够...',
    next: 'action4_16'
  },
  {
    id: 'action4_16',
    type: 'dialogue',
    character: 'aka',
    text: '...',
    next: 'action4_17'
  },
  {
    id: 'action4_17',
    type: 'dialogue',
    character: 'narrator',
    text: '赤さん的力量降临，帮助英雄联盟击败了真♂Van様...',
    next: 'action4_18'
  },
  {
    id: 'action4_18',
    type: 'dialogue',
    character: 'van',
    text: '不可能...我竟然...败了...但KING石井的怨念...还在...',
    next: 'action4_19'
  },
  {
    id: 'action4_19',
    type: 'dialogue',
    character: 'narrator',
    text: '真♂Van様被击败，但英雄联盟也付出了代价...',
    next: 'action4_20'
  },
  {
    id: 'action4_20',
    type: 'dialogue',
    character: 'billy',
    text: '我们成功了...但Van様说得对，KING石井的怨念还在...',
    next: 'action4_21'
  },
  {
    id: 'action4_21',
    type: 'dialogue',
    character: 'kikuchi',
    text: '比利，我们还需要继续ANIKI西征，彻底铲除Van様的势力。',
    next: 'action4_22'
  },
  {
    id: 'action4_22',
    type: 'dialogue',
    character: 'beoland',
    text: '但至少，我们赢得了这场战斗。新日暮里暂时安全了。',
    next: 'action4_23'
  },
  {
    id: 'action4_23',
    type: 'dialogue',
    character: 'seven',
    text: '木吉七本枪会继续守护新日暮里！',
    next: 'action4_24'
  },
  {
    id: 'action4_24',
    type: 'dialogue',
    character: 'knight',
    text: '全裸骑士团也会继续战斗！',
    next: 'action4_25'
  },
  {
    id: 'action4_25',
    type: 'dialogue',
    character: 'billy',
    text: '很好！只要我们团结一致，新日暮里就不会被黑暗吞噬！',
    next: 'action4_26'
  },
  {
    id: 'action4_26',
    type: 'dialogue',
    character: 'aka',
    text: '...',
    next: 'action4_27'
  },
  {
    id: 'action4_27',
    type: 'dialogue',
    character: 'narrator',
    text: '赤さん露出了天真无邪的笑容，似乎在认可英雄联盟的努力...',
    next: 'ending4'
  },
  {
    id: 'ending1',
    type: 'dialogue',
    character: 'narrator',
    text: '虽然Van様逃走了，但KING石井的怨念被净化，他的复活计划暂时被阻止了。',
    next: 'ending1_1'
  },
  {
    id: 'ending1_1',
    type: 'dialogue',
    character: 'billy',
    text: '我们成功阻止了Van様收集怨念，但这场战斗还没有结束。',
    next: 'ending1_2'
  },
  {
    id: 'ending1_2',
    type: 'dialogue',
    character: 'kikuchi',
    text: '比利，我们还需要继续ANIKI西征，彻底铲除Van様的势力。',
    next: 'ending1_3'
  },
  {
    id: 'ending1_3',
    type: 'dialogue',
    character: 'billy',
    text: '没错。只要Van様还在，新日暮里就不会真正安全。但至少，我们赢得了时间。',
    next: 'ending1_4'
  },
  {
    id: 'ending1_4',
    type: 'dialogue',
    character: 'aka',
    text: '...',
    next: 'ending1_5'
  },
  {
    id: 'ending1_5',
    type: 'dialogue',
    character: 'narrator',
    text: '赤さん露出了天真无邪的笑容，似乎在认可英雄联盟的努力...',
    next: 'ending1_6'
  },
  {
    id: 'ending1_6',
    type: 'dialogue',
    character: 'billy',
    text: 'Cloton ford告诉我们的秘密...也许我们可以用妖精三信的力量来彻底净化KING石井的怨念...',
    next: 'ending1_7'
  },
  {
    id: 'ending1_7',
    type: 'dialogue',
    character: 'kikuchi',
    text: '戒の心、赞の心、许の心...需要三个拥有这些信念的人...',
    next: 'ending1_8'
  },
  {
    id: 'ending1_8',
    type: 'dialogue',
    character: 'billy',
    text: '我们一定会找到方法的。新日暮里的和平，由我们来守护！',
    next: 'end'
  },
  {
    id: 'ending2',
    type: 'dialogue',
    character: 'narrator',
    text: '法老的护甲被净化，Van様失去了获得古日暮里力量的机会。',
    next: 'ending2_1'
  },
  {
    id: 'ending2_1',
    type: 'dialogue',
    character: 'fujio',
    text: '法老的护甲终于得到了真正的安息。这是新日暮里少有的温情时刻...',
    next: 'ending2_2'
  },
  {
    id: 'ending2_2',
    type: 'dialogue',
    character: 'billy',
    text: '藤冈，你做得很好。虽然Van様逃走了，但他无法再获得法老护甲的力量。',
    next: 'ending2_3'
  },
  {
    id: 'ending2_3',
    type: 'dialogue',
    character: 'fujio',
    text: '比利，我们还需要继续战斗。但只要妖精三信还在，新日暮里就不会被黑暗吞噬。',
    next: 'ending2_4'
  },
  {
    id: 'ending2_4',
    type: 'dialogue',
    character: 'billy',
    text: '藤冈，你帮助法老消弭怨念的故事，是新日暮里少有的温情时刻。',
    next: 'ending2_5'
  },
  {
    id: 'ending2_5',
    type: 'dialogue',
    character: 'fujio',
    text: '有时候，最强大的力量不是对抗，而是理解与宽容。这就是许の心。',
    next: 'ending2_6'
  },
  {
    id: 'ending2_6',
    type: 'dialogue',
    character: 'billy',
    text: '没错。妖精三信不仅是信念，更是新日暮里的根基。',
    next: 'end'
  },
  {
    id: 'ending3',
    type: 'dialogue',
    character: 'narrator',
    text: '妖精三信的力量被守护，所有兄贵都重新坚定了信念。',
    next: 'ending3_1'
  },
  {
    id: 'ending3_1',
    type: 'dialogue',
    character: 'iida',
    text: '戒の心、赞の心、许の心...这些信念永远不会被黑暗利用！',
    next: 'ending3_2'
  },
  {
    id: 'ending3_2',
    type: 'dialogue',
    character: 'billy',
    text: '池田，你的说教能力拯救了新日暮里。妖精三信是兄贵们的信念，也是新日暮里的根基。',
    next: 'ending3_3'
  },
  {
    id: 'ending3_3',
    type: 'dialogue',
    character: 'mori',
    text: '作为新日暮里的实际掌权者，我会继续支持英雄联盟，维护新日暮里的和平。',
    next: 'ending3_4'
  },
  {
    id: 'ending3_4',
    type: 'dialogue',
    character: 'billy',
    text: '虽然Van様逃走了，但只要妖精三信还在，新日暮里就不会被黑暗吞噬。',
    next: 'ending3_5'
  },
  {
    id: 'ending3_5',
    type: 'dialogue',
    character: 'iida',
    text: '戒の心、赞の心、许の心...这些信念永远不会被黑暗利用！',
    next: 'ending3_6'
  },
  {
    id: 'ending3_6',
    type: 'dialogue',
    character: 'billy',
    text: '池田，你的说教能力拯救了新日暮里。这就是赞の心的力量。',
    next: 'ending3_7'
  },
  {
    id: 'ending3_7',
    type: 'dialogue',
    character: 'mori',
    text: '作为新日暮里的实际掌权者，我会继续支持英雄联盟，维护新日暮里的和平。',
    next: 'ending3_8'
  },
  {
    id: 'ending3_8',
    type: 'dialogue',
    character: 'billy',
    text: '只要我们团结一致，新日暮里就会永远存在！',
    next: 'end'
  },
  {
    id: 'ending4',
    type: 'dialogue',
    character: 'narrator',
    text: '英雄联盟全体成员联手，在赤さん的帮助下，成功击败了真♂Van様...',
    next: 'ending4_1'
  },
  {
    id: 'ending4_1',
    type: 'dialogue',
    character: 'billy',
    text: '我们成功了！但Van様说KING石井的怨念还在...',
    next: 'ending4_2'
  },
  {
    id: 'ending4_2',
    type: 'dialogue',
    character: 'kikuchi',
    text: '比利，虽然我们击败了Van様，但这场ANIKI西征还没有结束。',
    next: 'ending4_3'
  },
  {
    id: 'ending4_3',
    type: 'dialogue',
    character: 'beoland',
    text: '只要KING石井的怨念还在，Van様就有可能卷土重来。',
    next: 'ending4_4'
  },
  {
    id: 'ending4_4',
    type: 'dialogue',
    character: 'billy',
    text: '没错。但至少，我们赢得了这场战斗。新日暮里暂时安全了。',
    next: 'ending4_5'
  },
  {
    id: 'ending4_5',
    type: 'dialogue',
    character: 'aka',
    text: '...',
    next: 'ending4_6'
  },
  {
    id: 'ending4_6',
    type: 'dialogue',
    character: 'narrator',
    text: '赤さん露出了天真无邪的笑容，似乎在认可英雄联盟的努力。新日暮里的和平得以维护，哲学♂文化将继续传承下去。',
    next: 'ending4_7'
  },
  {
    id: 'ending4_7',
    type: 'dialogue',
    character: 'billy',
    text: '只要英雄联盟还在，只要妖精三信还在，新日暮里就会永远存在！',
    next: 'end'
  },
  {
    id: 'end',
    type: 'dialogue',
    character: 'narrator',
    text: '新日暮里的故事还在继续。ANIKI西征远未结束，英雄联盟将继续守护这片土地...',
    next: 'end1'
  },
  {
    id: 'end1',
    type: 'dialogue',
    character: 'billy',
    text: '只要英雄联盟还在，只要妖精三信还在，新日暮里就会永远存在！',
    next: 'end2'
  },
  {
    id: 'end2',
    type: 'dialogue',
    character: 'narrator',
    text: '感谢游玩《新日暮里♂传说》！',
    next: 'end_final'
  },
  {
    id: 'end_final',
    type: 'end',
    text: '游戏结束',
    next: null
  }
]

