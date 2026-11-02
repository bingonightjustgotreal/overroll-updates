/* script.js */
/**
 * Overroll - Endless Runner Game
 * v1.0.0 - Mega Worm smoothed, cave rock texture, boss music, trapped player.
 */

 var W = 900, H = 500;
 var GROUND_Y = 420;
 var WATER_LINE_Y = GROUND_Y - 35;
 var LOW_COIN_Y = GROUND_Y - 22;
 var HIGH_COIN_Y = GROUND_Y - 54;
 var GRAVITY = 0.50;
 var JUMP_FORCE = -12.5;
 var PLAYER_SIZE = 28;
 var SCROLL_START = 3.0;
 var SCROLL_MAX = 15.0;
 var PLAYER_MOVE_SPEED = 4.2;
 var COIN_R = 11;
 var FONT = '"Trebuchet MS", "Segoe UI", system-ui, -apple-system, sans-serif';
 var DAY_CYCLE_DURATION = 90;
 var GAME_VERSION = 'v1.0.0';
 var PLAYER_MAX_HP = 100;
 var PLAYER_INVULN_TIME = 1.2;
 var SPIKE_DAMAGE = 20;
 var SPIKE_W = 22;
 var SPIKE_H = 20;
 var PROJ_BASE_FIRE_INTERVAL = 0.35;
 var PROJ_SPEED = 10;
 var PROJ_LIFETIME = 2.5;
 var PROJ_FIRE_RATE_BONUS = 0.005;
 var PROJ_MAX_DAMAGE_LEVEL = 10;
 var PROJ_MAX_RATE_LEVEL = 20;
 var FIRE_DOT_TOTAL = 3;
 var FIRE_DOT_DURATION = 3;
 var ICE_FREEZE_DURATION = 3;
 var FLYER_HP = 15;
 var FLOATER_HP = 10;
 var MEGA_HP = 80;
 var WORMY_CONTACT_DAMAGE = 10;
 var FLYER_PROJECTILE_DAMAGE = 12;
 var FLOATER_CONTACT_DAMAGE = 15;
 var FLYER_CONTACT_DAMAGE = 12;
 var MEGA_CONTACT_DAMAGE = 15;
 var INVINCIBILITY_CHANCE = 0.008;
 var HEART_CHANCE = 0.02;
 var INVINCIBILITY_DURATION = 10;
 var INVINCIBILITY_SPEED_MULT = 2.0;
 var INVINCIBILITY_POINTS_MULT = 1.5;
 var INVINCIBILITY_COIN_MULT = 2;
 var HEART_HEAL = 10;
 var AVATAR_PRICE_POINTS = 1000;
 var AVATAR_PRICE_COINS = 10;
 var ABILITY_PRICE_POINTS = 5000;
 var ABILITY_PRICE_COINS = 50;
 var DMG_UPGRADE_BASE_POINTS = 1000;
 var DMG_UPGRADE_BASE_COINS = 10;
 var RATE_UPGRADE_BASE_POINTS = 500;
 var RATE_UPGRADE_BASE_COINS = 5;
 var CONVERT_POINTS_COST = 10000;
 var CONVERT_COINS_REWARD = 100;
 var TRAIL_MAX_GHOSTS = 24;
 var TRAIL_LIFE_DECAY = 2.8;
 var TRAIL_MIN_SPEED = 0.5;
 var SHAKE_DURATION = 0.3;
 var SHAKE_ON_HIT = 6;
 var SHAKE_ON_DEATH = 10;
 var COMBO_WINDOW = 2.0;
 var COMBO_POP_TIME = 0.4;
 var COMBO_MIN_SHOW = 3;
 var AIR_JUMP_COOLDOWN = 0.35;
 var AIR_JUMP_FORCE_MULT = 0.92;
 var DASH_DURATION = 0.20;
 var DASH_COOLDOWN = 1.20;
 var DASH_SPEED = 9;
 var MAGNET_MAX_LEVEL = 3;
 var JUMP_PRICE_DOUBLE = { pts: 7500, coins: 75 };
 var JUMP_PRICE_TRIPLE = { pts: 15000, coins: 150 };
 var DASH_PRICE = { pts: 8000, coins: 80 };
 var MAGNET_PRICES = [{ pts: 3000, coins: 30 },{ pts: 6000, coins: 60 },{ pts: 12000, coins: 120 }];
 var BIOME_LENGTH = 1500;
 var BIOME_TRANSITION_TIME = 1.6;
 var BOSS_INTERVAL = 2500;
 var ENDLESS_BOSS_HP = 30;
 var ENDLESS_BOSS_TIMER = 60;
 var ENDLESS_BOSS_COIN_BONUS = 50;
 var ENDLESS_BOSS_POINT_BONUS = 500;
 var ENDLESS_BOSS_CONTACT_DAMAGE = 12;
 var ENDLESS_BOSS_FORMATION_DX = 200;
 var ENDLESS_BOSS_FORMATION_DY = -120;
 var ENDLESS_BOSS_DAMP_LAMBDA = 3.0;
 var ENDLESS_BOSS_FLEE_TIME = 2.0;
 var CURRENT_DIFFICULTY = 'normal';
 var ACHIEVEMENT_BANNER_TIME = 3.0;
 var ACHIEVEMENTS = [
     { key: 'score_1000',  name: 'Getting Started',  desc: 'Reach 1000 score',            reward: 500  },
     { key: 'coins_50',    name: 'Coin Rush',        desc: 'Collect 50 coins in one run', reward: 500  },
     { key: 'level_10',    name: 'Boss Slayer',      desc: 'Complete Level 10',           reward: 2500 },
     { key: 'survive_3m',  name: 'Survivor',         desc: 'Survive 3 min in endless',    reward: 1000 },
     { key: 'boss_kill',   name: 'UFO Down',         desc: 'Defeat an endless boss',      reward: 1000 },
     { key: 'max_upgrade', name: 'Fully Loaded',     desc: 'Max any shop upgrade',        reward: 1000 },
     { key: 'total_coins', name: 'Coin Collector',   desc: 'Collect 100 coins total',     reward: 500  }
 ];
 var TRAILS = [
     { key: 'none', name: 'None', pricePts: 0, priceCoins: 0 },
     { key: 'sparkle', name: 'Sparkle', pricePts: 1000, priceCoins: 10 },
     { key: 'flame', name: 'Flame', pricePts: 2500, priceCoins: 25 },
     { key: 'rainbow', name: 'Rainbow', pricePts: 5000, priceCoins: 50 }
 ];
 var TIMED_RUNNER_DURATION = 60;
 var TIMED_PLATFORMER_DURATION = 120;
 var TIMED_REWARD_POINTS = 2500;
 var TIMED_REWARD_COINS = 15;
 var TIMED_DAILY_MAX_WINS = 5;
 var SCORE_BOOSTER_REWARD = 20000;
 var SCORE_BOOSTER_DIAMOND_COST = 25;
 var SPIN_WHEEL_SEGMENTS = 6;
 
 var DAILY_REWARD_CYCLE_DAYS = 30;
 var DAILY_REWARDS = [
     { type: 'coins', amount: 5, label: '5 Coins' },
     { type: 'coins', amount: 10, label: '10 Coins' },
     { type: 'diamonds', amount: 1, label: '1 Diamond' },
     { type: 'diamonds', amount: 3, label: '3 Diamonds' },
     { type: 'diamonds', amount: 5, label: '5 Diamonds' },
     { type: 'coins', amount: 20, label: '20 Coins' },
     { type: 'coins', amount: 30, label: '30 Coins' },
     { type: 'coins', amount: 50, label: '50 Coins' },
     { type: 'diamonds', amount: 10, label: '10 Diamonds' },
     { type: 'trial', setKey: 'solar', label: 'Solar Set Trial (1hr)' },
     { type: 'coins', amount: 70, label: '70 Coins' },
     { type: 'coins', amount: 80, label: '80 Coins' },
     { type: 'coins', amount: 90, label: '90 Coins' },
     { type: 'diamonds', amount: 12, label: '12 Diamonds' },
     { type: 'coins', amount: 100, label: '100 Coins' },
     { type: 'coins', amount: 110, label: '110 Coins' },
     { type: 'coins', amount: 120, label: '120 Coins' },
     { type: 'diamonds', amount: 15, label: '15 Diamonds' },
     { type: 'coins', amount: 150, label: '150 Coins' },
     { type: 'trial', setKey: 'pool', label: 'Pool Set Trial (1hr)' },
     { type: 'coins', amount: 160, label: '160 Coins' },
     { type: 'coins', amount: 180, label: '180 Coins' },
     { type: 'coins', amount: 200, label: '200 Coins' },
     { type: 'coins', amount: 210, label: '210 Coins' },
     { type: 'coins', amount: 220, label: '220 Coins' },
     { type: 'coins', amount: 230, label: '230 Coins' },
     { type: 'coins', amount: 240, label: '240 Coins' },
     { type: 'coins', amount: 250, label: '250 Coins' },
     { type: 'coins', amount: 300, label: '300 Coins' },
     { type: 'trial', setKey: 'sports', label: 'Sports Set Trial (1hr)' }
 ];
 
 var DIAMOND_SETS = {
     solar: { name: 'Solar System Set', cost: 100, keys: ['sun','mercury','venus','earth','moon','mars','jupiter','saturn','uranus','neptune'], desc: 'All Solar System celestial bodies' },
     pool: { name: 'Pool Ball Set', cost: 120, keys: ['billiard_1','billiard_2','billiard_3','billiard_4','billiard_5','billiard_6','billiard_7','billiard_8','billiard_9','billiard_10','billiard_11','billiard_12','billiard_13','billiard_14','billiard_15'], desc: 'Billiard balls 1–15' },
     sports: { name: 'Sports Set', cost: 150, keys: ['basketball','pickleball','football','volleyball','bowling','tennis','golf','baseball'], desc: 'Basketball, soccer, volleyball & more' }
 };
 
 var SET_LOCKED_KEYS = [];
 (function() {
     for (var sk in DIAMOND_SETS) {
         if (DIAMOND_SETS.hasOwnProperty(sk)) {
             for (var i = 0; i < DIAMOND_SETS[sk].keys.length; i++) {
                 SET_LOCKED_KEYS.push(DIAMOND_SETS[sk].keys[i]);
             }
         }
     }
 })();
 
 var AVATARS = {
     'Ball': { key: 'ball', pricePts: 0, priceCoins: 0 },
     'Wheel': { key: 'wheel', pricePts: 5000, priceCoins: 50 },
     'Penny': { key: 'penny', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Nickel': { key: 'nickel', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Dime': { key: 'dime', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Quarter': { key: 'quarter', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Gumball': { key: 'gumball', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Watermelon': { key: 'watermelon', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Blueberry': { key: 'blueberry', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Pizza': { key: 'pizza', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Donut': { key: 'donut', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Plate': { key: 'plate', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Clock': { key: 'clock', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Pomegranate': { key: 'pomegranate', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'CD': { key: 'cd', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Compass': { key: 'compass', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Button': { key: 'button', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Orange Slice': { key: 'orange_slice', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Orange': { key: 'orange', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Apple': { key: 'apple', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Cookie': { key: 'cookie', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Pancake': { key: 'pancake', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Hula-hoop': { key: 'hula_hoop', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS },
     'Coconut': { key: 'coconut', pricePts: AVATAR_PRICE_POINTS, priceCoins: AVATAR_PRICE_COINS }
 };
 var AVATAR_KEYS = Object.keys(AVATARS).map(function(k) { return AVATARS[k].key; });
 var ALL_SKIN_KEYS = [];
 (function() {
     for (var k in AVATARS) if (AVATARS.hasOwnProperty(k)) ALL_SKIN_KEYS.push(AVATARS[k].key);
     for (var i = 0; i < SET_LOCKED_KEYS.length; i++) ALL_SKIN_KEYS.push(SET_LOCKED_KEYS[i]);
 })();
 
 var COLOR_PALETTE = {
     'Yellow': '#FFD966', 'Red': '#E63946', 'Orange': '#F77F00', 'Light Green': '#8BC34A',
     'Dark Green': '#2E7D32', 'Sky Blue': '#87CEEB', 'Blue': '#1976D2', 'Dark Blue': '#0D47A1',
     'Indigo': '#3F51B5', 'Violet': '#9C27B0', 'Aquamarine': '#7FFFD4', 'Pink': '#F48FB1',
     'Brown': '#8B6B4D', 'Black': '#1a1a2e', 'White': '#FFFFFF', 'Gray': '#9E9E9E'
 };
 
 var BIOMES = [
     { name: 'GRASS', grass: '#5E8A44', dirt: '#5C4530', skyTop: '#4A90D9', skyBot: '#87CEEB', wTop: '#4C8EB0', wBot: '#1E3E5C', mountain: '#6A96B5', spike: '#E63946', spikeShadow: 'rgba(120, 20, 30, 0.35)', spikeHi: 'rgba(255, 150, 150, 0.55)' },
     { name: 'DESERT', grass: '#E8C87A', dirt: '#A88850', skyTop: '#7AA8C8', skyBot: '#F5D8A0', wTop: '#7A98B0', wBot: '#4A5868', mountain: '#C0A878', spike: '#D4A020', spikeShadow: 'rgba(100, 70, 20, 0.4)', spikeHi: 'rgba(255, 240, 150, 0.6)' },
     { name: 'LAVA', grass: '#8B3A2A', dirt: '#4A1810', skyTop: '#4A1515', skyBot: '#B03A2E', wTop: '#8B1508', wBot: '#200404', mountain: '#6E2020', spike: '#FF6020', spikeShadow: 'rgba(80, 10, 0, 0.5)', spikeHi: 'rgba(255, 200, 80, 0.75)' },
     { name: 'ICE', grass: '#D8EAF8', dirt: '#A8C0D8', skyTop: '#88B0D8', skyBot: '#D8E8F4', wTop: '#7AA8C8', wBot: '#2A4A6A', mountain: '#B0C8DC', spike: '#80D0FF', spikeShadow: 'rgba(40, 80, 120, 0.4)', spikeHi: 'rgba(220, 240, 255, 0.7)' }
 ];
 
 function getLevelMagnification(levelIndex) {
     return 1.0 + levelIndex * 0.03;
 }
 
 var LEVELS = [
     { name: 'Runner', type: 'runner', hint: 'SPACE to jump. Avoid gaps!', goalX: 2600, ground: [[0, 500], [600, 700], [1400, 900], [2400, 400]], platforms: [], spikes: [], coins: [[200, -22], [260, -22], [720, -22], [780, -22], [1550, -22], [1620, -22]], enemies: [] },
     { name: 'Free Roam', type: 'platformer', hint: '← → to move, SPACE to jump', goalX: 2200, ground: [[0, 500], [700, 1500]], platforms: [], spikes: [], coins: [[200, -22], [260, -22], [320, -22], [800, -22], [860, -22], [1300, -22]], enemies: [] },
     { name: 'Careful Steps', type: 'platformer', hint: 'Spikes hurt! Jump over them.', goalX: 2400, ground: [[0, 900], [1050, 1400]], platforms: [], spikes: [400, 700, 1500, 1900], coins: [[200, -22], [260, -22], [600, -22], [900, -22], [1400, -22], [1700, -22]], enemies: [] },
     { name: 'The Climb', type: 'platformer', hint: 'Jump onto platforms.', goalX: 2500, ground: [[0, 700], [1300, 1300]], platforms: [[750, -70, 160], [950, -120, 120]], spikes: [500], coins: [[200, -22], [300, -22], [780, -90], [1000, -140], [1400, -22]], enemies: [] },
     { name: 'Leap of Faith', type: 'platformer', hint: 'Longer jumps ahead.', goalX: 2700, ground: [[0, 600], [800, 400], [1400, 400], [2000, 1000]], platforms: [], spikes: [], coins: [[200, -22], [900, -22], [1500, -22], [2100, -22]], enemies: [] },
     { name: 'Worm Watch', type: 'platformer', hint: 'Worms! Jump over them.', goalX: 2600, ground: [[0, 2600]], platforms: [], spikes: [900], coins: [[200, -22], [400, -22], [800, -22], [1200, -22], [1800, -22], [2200, -22]], enemies: [['wormy', 600], ['wormy', 1500]] },
     { name: 'Sky Birds', type: 'platformer', hint: 'Press S to shoot!', goalX: 2800, ground: [[0, 2800]], platforms: [], spikes: [600, 1600], coins: [[200, -22], [500, -22], [900, -22], [1400, -22], [2000, -22]], enemies: [['flyer', 1000, -130], ['flyer', 2000, -130]] },
     { name: 'Charge!', type: 'platformer', hint: 'Dodge the spiked floaters.', goalX: 2800, ground: [[0, 1400], [1500, 1300]], platforms: [], spikes: [400, 1000, 2000], coins: [[200, -22], [700, -22], [1600, -22], [2200, -22]], enemies: [['floater', 800, -80], ['floater', 1800, -80]] },
     { name: 'The Gauntlet', type: 'platformer', hint: 'Everything at once.', goalX: 3200, ground: [[0, 500], [700, 700], [1600, 700], [2500, 700]], platforms: [[520, -80, 140], [1550, -80, 160]], spikes: [200, 900, 1800], coins: [[300, -22], [550, -100], [1000, -22], [1600, -100], [2100, -22]], enemies: [['wormy', 1200], ['flyer', 1400, -130], ['floater', 2200, -80]] },
     { name: 'Mega-Flyer', type: 'platformer', boss: true, hint: 'Defeat the Mega-Flyer!', goalX: 5000, ground: [[0, 4000]], platforms: [[800, -80, 200], [1400, -100, 200], [2200, -80, 200], [3000, -100, 200]], spikes: [], coins: [[400, -22], [1600, -22], [2800, -22]], enemies: [['mega', 1100, -130]] },
     { name: 'Swarm', type: 'platformer', hint: 'Watch the skies!', goalX: 3200, ground: [[0, 3200]], platforms: [[800, -80, 160], [1400, -100, 160], [2200, -90, 160]], spikes: [500, 1200, 2000, 2600], coins: [[200, -22], [600, -22], [900, -110], [1500, -22], [1700, -130], [2300, -22]], enemies: [['flyer', 700, -130], ['flyer', 1200, -130], ['flyer', 1900, -130]] },
     { name: 'Ground War', type: 'platformer', hint: 'Worms and floaters incoming.', goalX: 3200, ground: [[0, 3200]], platforms: [], spikes: [400, 1200, 2200], coins: [[200, -22], [700, -22], [1400, -22], [2000, -22], [2600, -22]], enemies: [['wormy', 500], ['wormy', 1500], ['floater', 1000, -80], ['floater', 2400, -80]] },
     { name: 'Crumbling', type: 'platformer', hint: 'Watch your step.', goalX: 3400, ground: [[0, 400], [600, 400], [1200, 400], [1800, 400], [2400, 500], [3000, 400]], platforms: [], spikes: [700, 1500, 2300], coins: [[200, -22], [800, -22], [1400, -22], [2000, -22], [2600, -22], [3200, -22]], enemies: [['flyer', 1100, -130], ['flyer', 2100, -130]] },
     { name: 'Aerial Assault', type: 'platformer', hint: 'Sky battle.', goalX: 3600, ground: [[0, 3600]], platforms: [[600, -100, 200], [1400, -120, 200], [2200, -100, 200], [3000, -120, 200]], spikes: [400, 1300, 2200, 3100], coins: [[200, -22], [700, -120], [1500, -140], [2300, -120], [3100, -140], [3400, -22]], enemies: [['flyer', 900, -140], ['flyer', 1800, -140], ['flyer', 2700, -140]] },
     { name: 'Rolling Thunder', type: 'platformer', hint: 'Charging floaters.', goalX: 3400, ground: [[0, 3400]], platforms: [], spikes: [300, 900, 1600, 2200, 2900], coins: [[200, -22], [600, -22], [1200, -22], [1800, -22], [2500, -22], [3100, -22]], enemies: [['floater', 700, -80], ['floater', 1500, -80], ['floater', 2400, -80], ['floater', 3000, -80]] },
     { name: 'All Hands', type: 'platformer', hint: 'Everything at you.', goalX: 3600, ground: [[0, 3600]], platforms: [[500, -100, 160], [1200, -100, 160], [2000, -100, 160], [2900, -100, 160]], spikes: [700, 1500, 2400, 3100], coins: [[200, -22], [900, -120], [1300, -22], [2100, -120], [2500, -22], [3200, -22]], enemies: [['wormy', 600], ['flyer', 1000, -130], ['floater', 1700, -80], ['flyer', 2600, -130], ['wormy', 2900]] },
     { name: 'Leap and Bounds', type: 'platformer', hint: 'Big gaps ahead.', goalX: 3800, ground: [[0, 500], [700, 500], [1500, 500], [2300, 500], [3100, 700]], platforms: [[550, -80, 150], [1400, -100, 150], [2200, -80, 150], [3000, -100, 150]], spikes: [800, 1800, 2800], coins: [[200, -22], [900, -100], [1700, -22], [2500, -100], [3300, -22]], enemies: [['flyer', 1200, -130], ['floater', 2000, -80], ['flyer', 3000, -130]] },
     { name: 'Fortress', type: 'platformer', hint: 'Multiple threats.', goalX: 3800, ground: [[0, 3800]], platforms: [[400, -100, 180], [1000, -120, 180], [1800, -100, 180], [2600, -120, 180], [3300, -100, 180]], spikes: [600, 1400, 2300, 3100], coins: [[200, -22], [600, -120], [1200, -140], [1500, -22], [2000, -120], [2800, -140], [3500, -22]], enemies: [['wormy', 800], ['floater', 1500, -80], ['flyer', 2200, -130], ['floater', 2800, -80], ['flyer', 3400, -130]] },
     { name: 'Storm', type: 'platformer', hint: 'Chaos.', goalX: 4000, ground: [[0, 700], [1000, 600], [1900, 700], [2900, 800]], platforms: [[750, -90, 200], [1650, -100, 200], [2600, -90, 200], [3500, -100, 200]], spikes: [1100, 2000, 3000], coins: [[200, -22], [850, -110], [1300, -22], [1750, -120], [2500, -22], [3550, -120], [3800, -22]], enemies: [['flyer', 900, -140], ['wormy', 1400], ['floater', 2100, -80], ['flyer', 2900, -140], ['floater', 3400, -80]] },
     { name: 'Cave Entrance', type: 'platformer', hint: 'Enter the cave...', goalX: 2600, ground: [[0, 2600]], platforms: [], spikes: [], coins: [], enemies: [] },
     { name: 'ABYSSAL COLOSSUS', levelNumber: 21, type: 'platformer', boss: true, wormBoss: true, hint: 'SPACE to aim, S to fire!', goalX: 5000, ground: [[0, 5000]], platforms: [], spikes: [], coins: [], enemies: [['megaworm', 1800, 0]] }
 ];
 function hasLocalProgress() {
     return ['rrBankPoints','rrBankCoins','rrBankDiamonds','rrOwnedAvatars','rrLevelsCompleted','rrTotalCoins','rrAchievements','rrSaveUpdatedAt','pixelBest']
         .some(function(key) { return localStorage.getItem(key) !== null; });
 }
 function localSavePayload() {
     var data = {};
     for (var i = 0; i < localStorage.length; i++) {
         var key = localStorage.key(i);
         if (key && (key.indexOf('rr') === 0 || key === 'pixelBest')) data[key] = localStorage.getItem(key);
     }
     return { version: 1, updatedAt: Date.now(), data: data };
 }
 function applyLocalSave(payload) {
     if (!payload || payload.version !== 1 || !payload.data || typeof payload.data !== 'object') return false;
     Object.keys(payload.data).forEach(function(key) {
         if ((key.indexOf('rr') === 0 || key === 'pixelBest') && typeof payload.data[key] === 'string') localStorage.setItem(key, payload.data[key]);
     });
     localStorage.setItem('rrSaveUpdatedAt', String(payload.updatedAt || Date.now()));
     return true;
 }
 function rand(min, max) { return Math.random() * (max - min) + min; }
 function randInt(min, max) { return Math.floor(rand(min, max + 1)); }
 function clamp01(v) { return v < 0 ? 0 : (v > 1 ? 1 : v); }
 function lerp(a, b, t) { return a + (b - a) * t; }
 function damp(a, b, lambda, dt) { return lerp(a, b, 1 - Math.exp(-lambda * dt)); }
 function easeOutCubic(t) { return 1 - Math.pow(1 - t, 3); }
 
 function roundRectPath(ctx, x, y, w, h, r) {
     if (r > w / 2) r = w / 2; if (r > h / 2) r = h / 2;
     ctx.beginPath(); ctx.moveTo(x + r, y);
     ctx.lineTo(x + w - r, y); ctx.quadraticCurveTo(x + w, y, x + w, y + r);
     ctx.lineTo(x + w, y + h - r); ctx.quadraticCurveTo(x + w, y + h, x + w - r, y + h);
     ctx.lineTo(x + r, y + h); ctx.quadraticCurveTo(x, y + h, x, y + h - r);
     ctx.lineTo(x, y + r); ctx.quadraticCurveTo(x, y, x + r, y); ctx.closePath();
 }
 function fillRoundRect(ctx, x, y, w, h, r) { roundRectPath(ctx, x, y, w, h, r); ctx.fill(); }
 function strokeRoundRect(ctx, x, y, w, h, r) { roundRectPath(ctx, x, y, w, h, r); ctx.stroke(); }

 function fitUIRect(x, y, w, h) {
     w = Math.max(0, Math.min(W, w)); h = Math.max(0, Math.min(H, h));
     return { x: Math.max(0, Math.min(W - w, x)), y: Math.max(0, Math.min(H - h, y)), w: w, h: h };
 }

 function fitCanvasText(ctx, text, maxWidth, startSize, minSize) {
     var size = startSize;
     while (size > minSize) {
         ctx.font = ctx.font.replace(/\d+(?:\.\d+)?px/, size + 'px');
         if (ctx.measureText(text).width <= maxWidth) break;
         size--;
     }
 }
 
 function drawButton(ctx, x, y, w, h, label, style) {
     var fitted = fitUIRect(x, y, w, h); x = fitted.x; y = fitted.y; w = fitted.w; h = fitted.h;
     var r = h / 2;
     var fill, stroke, textColor, fontSize;
     if (style === 'primary') { fill = '#FFD966'; stroke = '#E5B93F'; textColor = '#1a1a2e'; fontSize = 20; }
     else if (style === 'accent') { fill = '#E63946'; stroke = '#B02A35'; textColor = '#FFFFFF'; fontSize = 18; }
     else if (style === 'success') { fill = '#4CAF50'; stroke = '#388E3C'; textColor = '#FFFFFF'; fontSize = 18; }
     else if (style === 'subtle') { fill = 'rgba(255,255,255,0.08)'; stroke = 'rgba(255,255,255,0.25)'; textColor = '#FFFFFF'; fontSize = 16; }
     else { fill = 'rgba(255,217,102,0.15)'; stroke = 'rgba(255,217,102,0.6)'; textColor = '#FFD966'; fontSize = 16; }
     ctx.save();
     ctx.shadowColor = 'rgba(0,0,0,0.35)'; ctx.shadowBlur = 12; ctx.shadowOffsetY = 3;
     ctx.fillStyle = fill; fillRoundRect(ctx, x, y, w, h, r);
     ctx.restore();
     ctx.strokeStyle = stroke; ctx.lineWidth = 2; strokeRoundRect(ctx, x, y, w, h, r);
     ctx.fillStyle = textColor; ctx.font = 'bold ' + fontSize + 'px ' + FONT;
     while (ctx.measureText(label).width > Math.max(20, w - 28) && fontSize > 10) { fontSize--; ctx.font = 'bold ' + fontSize + 'px ' + FONT; }
     ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
     ctx.fillText(label, x + w / 2, y + h / 2 + 1);
     ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
 }
 
 function hitTest(px, py, x, y, w, h) {
     var fitted = fitUIRect(x, y, w, h);
     return px >= fitted.x && px <= fitted.x + fitted.w && py >= fitted.y && py <= fitted.y + fitted.h;
 }
 
 function parseColor(str) {
     if (typeof str !== 'string') return { r: 0, g: 0, b: 0 };
     if (str.charAt(0) === '#') {
         var hex = str.substring(1);
         if (hex.length === 3) hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
         return { r: parseInt(hex.substr(0, 2), 16), g: parseInt(hex.substr(2, 2), 16), b: parseInt(hex.substr(4, 2), 16) };
     }
     if (str.indexOf('rgb(') === 0) { var p = str.substring(4, str.length - 1).split(','); return { r: parseInt(p[0], 10), g: parseInt(p[1], 10), b: parseInt(p[2], 10) }; }
     if (str.indexOf('rgba(') === 0) { var p2 = str.substring(5, str.length - 1).split(','); return { r: parseInt(p2[0], 10), g: parseInt(p2[1], 10), b: parseInt(p2[2], 10) }; }
     return { r: 0, g: 0, b: 0 };
 }
 function blendColor(c1, c2, t) {
     t = clamp01(t);
     var a = parseColor(c1), b = parseColor(c2);
     return 'rgb(' + Math.round(a.r + (b.r - a.r) * t) + ',' + Math.round(a.g + (b.g - a.g) * t) + ',' + Math.round(a.b + (b.b - a.b) * t) + ')';
 }
 function darken(color, factor) { var c = parseColor(color); return 'rgb(' + Math.round(c.r * factor) + ',' + Math.round(c.g * factor) + ',' + Math.round(c.b * factor) + ')'; }
 function getLightLevel(cp) { var sh = Math.sin(cp * Math.PI * 2); return clamp01((sh + 0.4) / 1.2); }
 function getIndicatorColor(hex) { var c = parseColor(hex); var b = (c.r * 299 + c.g * 587 + c.b * 114) / 1000; return b > 140 ? 'rgba(0,0,0,0.35)' : 'rgba(255,255,255,0.5)'; }
 function getAchievementDef(key) { for (var i = 0; i < ACHIEVEMENTS.length; i++) if (ACHIEVEMENTS[i].key === key) return ACHIEVEMENTS[i]; return null; }
 function todayKey() { var d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); }
 function monthKey() { var d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1); }
 
 // ===== FLOATING TEXT / COIN POP =====
 function FloatingText(x, y, text, color) { this.x = x; this.y = y; this.text = text; this.color = color; this.age = 0; this.duration = 1.2; }
 FloatingText.prototype.update = function(dt) { this.age += dt; this.y -= 40 * dt; return this.age < this.duration; };
 FloatingText.prototype.draw = function(ctx, ox, oy) {
     var t = this.age / this.duration; var alpha = t < 0.6 ? 1 : (1 - (t - 0.6) / 0.4);
     ctx.save(); ctx.globalAlpha = alpha; ctx.fillStyle = this.color;
     ctx.font = 'bold 22px ' + FONT; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
     ctx.shadowColor = 'rgba(0,0,0,0.6)'; ctx.shadowBlur = 8;
     ctx.fillText(this.text, this.x - ox, this.y - oy);
     ctx.restore(); ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
 };
 function CoinPop(x, y) { this.x = x; this.y = y; this.age = 0; this.duration = 0.4; }
 CoinPop.prototype.update = function(dt) { this.age += dt; return this.age < this.duration; };
 CoinPop.prototype.draw = function(ctx, ox, oy) {
     var t = this.age / this.duration; var scale = 1 + easeOutCubic(t) * 1.6; var alpha = 1 - t;
     ctx.save(); ctx.globalAlpha = alpha; ctx.translate(this.x - ox, this.y - oy); ctx.scale(scale, scale);
     ctx.strokeStyle = '#FFD700'; ctx.lineWidth = 2;
     ctx.beginPath(); ctx.arc(0, 0, 11, 0, Math.PI * 2); ctx.stroke();
     ctx.strokeStyle = '#FFE066'; ctx.lineWidth = 1.5;
     ctx.beginPath(); ctx.arc(0, 0, 7, 0, Math.PI * 2); ctx.stroke();
     ctx.restore();
 };
 
 // ===== BANK =====
 function Bank() {
     this.points = parseInt(localStorage.getItem('rrBankPoints')) || 0;
     this.coins = parseInt(localStorage.getItem('rrBankCoins')) || 0;
     this.diamonds = parseInt(localStorage.getItem('rrBankDiamonds')) || 0;
     this.ownedAvatars = this._load('rrOwnedAvatars', ['ball']);
     if (this.ownedAvatars.indexOf('ball') === -1) this.ownedAvatars.push('ball');
     this.currentAvatar = localStorage.getItem('rrCurrentAvatar') || 'ball';
     if (this.ownedAvatars.indexOf(this.currentAvatar) === -1) this.currentAvatar = 'ball';
     this.damageLevel = parseInt(localStorage.getItem('rrDamageLevel')) || 1;
     this.rateLevel = parseInt(localStorage.getItem('rrRateLevel')) || 1;
     this.ownedAbilities = this._load('rrOwnedAbilities', ['none']);
     if (this.ownedAbilities.indexOf('none') === -1) this.ownedAbilities.push('none');
     this.currentAbility = localStorage.getItem('rrCurrentAbility') || 'none';
     if (this.ownedAbilities.indexOf(this.currentAbility) === -1) this.currentAbility = 'none';
     this.gameMode = localStorage.getItem('rrGameMode') || 'endless';
     if (this.gameMode !== 'levels' && this.gameMode !== 'endless' && this.gameMode !== 'timed') this.gameMode = 'endless';
     this.levelsCompleted = parseInt(localStorage.getItem('rrLevelsCompleted')) || 0;
     this.jumpLevel = parseInt(localStorage.getItem('rrJumpLevel')) || 0;
     if (this.jumpLevel < 0) this.jumpLevel = 0;
     if (this.jumpLevel > 2) this.jumpLevel = 2;
     this.dashOwned = localStorage.getItem('rrDashOwned') === 'true';
     this.magnetLevel = parseInt(localStorage.getItem('rrMagnetLevel')) || 0;
     if (this.magnetLevel < 0) this.magnetLevel = 0;
     if (this.magnetLevel > MAGNET_MAX_LEVEL) this.magnetLevel = MAGNET_MAX_LEVEL;
     this.achievements = this._load('rrAchievements', []);
     this.leaderboard = this._loadLeaderboard();
     this.totalCoins = parseInt(localStorage.getItem('rrTotalCoins')) || 0;
     this.difficulty = localStorage.getItem('rrDifficulty') || 'normal';
     if (['easy','normal','hard'].indexOf(this.difficulty) === -1) {
         if (this.difficulty === 'casual') this.difficulty = 'easy';
         else if (this.difficulty === 'insane') this.difficulty = 'hard';
         else this.difficulty = 'normal';
     }
     this.ownedTrails = this._load('rrOwnedTrails', ['none']);
     if (this.ownedTrails.indexOf('none') === -1) this.ownedTrails.push('none');
     this.currentTrail = localStorage.getItem('rrCurrentTrail') || 'none';
     if (this.ownedTrails.indexOf(this.currentTrail) === -1) this.currentTrail = 'none';
     this.ownedSkinSets = this._load('rrOwnedSkinSets', []);
     this.skinTrials = this._loadObj('rrSkinTrials', {});
     this.timedWinsToday = parseInt(localStorage.getItem('rrTimedWinsToday')) || 0;
     this.timedWinsDate = localStorage.getItem('rrTimedWinsDate') || '';
     if (this.timedWinsDate !== todayKey()) {
         this.timedWinsToday = 0;
         this.timedWinsDate = todayKey();
         localStorage.setItem('rrTimedWinsToday', '0');
         localStorage.setItem('rrTimedWinsDate', this.timedWinsDate);
     }
     this.scoreBoosterCompleted = this._load('rrScoreBoosterCompleted', []);
     this.scoreBoosterSpins = parseInt(localStorage.getItem('rrScoreBoosterSpins')) || 0;
     this.scoreBoosterLastSpinResult = parseInt(localStorage.getItem('rrScoreBoosterLastResult')) || 0;
     this.scoreBoosterLastSpinTime = parseFloat(localStorage.getItem('rrScoreBoosterLastTime')) || 0;
     this.timedWinStreak = parseInt(localStorage.getItem('rrTimedWinStreak')) || 0;
     this.megaKillTimes = this._load('rrMegaKillTimes', []);
     // Daily rewards
     this.dailyRewardMonthKey = localStorage.getItem('rrDailyMonthKey') || '';
     this.dailyRewardLastClaimDate = localStorage.getItem('rrDailyLastClaimDate') || '';
     this.dailyRewardProgress = parseInt(localStorage.getItem('rrDailyProgress')) || 0;
     // Cleanup expired trials
     this._cleanupTrials();
 }
 Bank.prototype._load = function(key, dflt) {
     var v = localStorage.getItem(key);
     if (!v) return dflt.slice();
     try { var a = JSON.parse(v); return Array.isArray(a) ? a : dflt.slice(); }
     catch (e) { return dflt.slice(); }
 };
 Bank.prototype._loadObj = function(key, dflt) {
     var v = localStorage.getItem(key);
     if (!v) return {};
     try { var o = JSON.parse(v); return (typeof o === 'object' && o !== null) ? o : {}; }
     catch (e) { return {}; }
 };
 Bank.prototype._loadLeaderboard = function() {
     var v = localStorage.getItem('rrLeaderboard');
     if (!v) return [];
     try {
         var a = JSON.parse(v); if (!Array.isArray(a)) return [];
         var out = [];
         for (var i = 0; i < a.length && i < 5; i++) {
             var e = a[i];
             if (e && typeof e.score === 'number') {
                 out.push({ score: Math.floor(e.score), coins: Math.floor(e.coins || 0), mode: e.mode === 'levels' ? 'levels' : 'endless', ts: e.ts || 0 });
             }
         }
         return out;
     } catch (err) { return []; }
 };
 Bank.prototype._cleanupTrials = function() {
     var now = Date.now(); var changed = false;
     for (var k in this.skinTrials) {
         if (this.skinTrials.hasOwnProperty(k)) {
             if (this.skinTrials[k] <= now) { delete this.skinTrials[k]; changed = true; }
         }
     }
     if (changed) this.save();
 };
 Bank.prototype.save = function() {
     localStorage.setItem('rrBankPoints', String(this.points));
     localStorage.setItem('rrBankCoins', String(this.coins));
     localStorage.setItem('rrBankDiamonds', String(this.diamonds));
     localStorage.setItem('rrOwnedAvatars', JSON.stringify(this.ownedAvatars));
     localStorage.setItem('rrCurrentAvatar', this.currentAvatar);
     localStorage.setItem('rrDamageLevel', String(this.damageLevel));
     localStorage.setItem('rrRateLevel', String(this.rateLevel));
     localStorage.setItem('rrOwnedAbilities', JSON.stringify(this.ownedAbilities));
     localStorage.setItem('rrCurrentAbility', this.currentAbility);
     localStorage.setItem('rrGameMode', this.gameMode);
     localStorage.setItem('rrLevelsCompleted', String(this.levelsCompleted));
     localStorage.setItem('rrJumpLevel', String(this.jumpLevel));
     localStorage.setItem('rrDashOwned', this.dashOwned ? 'true' : 'false');
     localStorage.setItem('rrMagnetLevel', String(this.magnetLevel));
     localStorage.setItem('rrAchievements', JSON.stringify(this.achievements));
     localStorage.setItem('rrLeaderboard', JSON.stringify(this.leaderboard));
     localStorage.setItem('rrTotalCoins', String(this.totalCoins));
     localStorage.setItem('rrDifficulty', this.difficulty);
     localStorage.setItem('rrOwnedTrails', JSON.stringify(this.ownedTrails));
     localStorage.setItem('rrCurrentTrail', this.currentTrail);
     localStorage.setItem('rrOwnedSkinSets', JSON.stringify(this.ownedSkinSets));
     localStorage.setItem('rrSkinTrials', JSON.stringify(this.skinTrials));
     localStorage.setItem('rrTimedWinsToday', String(this.timedWinsToday));
     localStorage.setItem('rrTimedWinsDate', this.timedWinsDate);
     localStorage.setItem('rrScoreBoosterCompleted', JSON.stringify(this.scoreBoosterCompleted));
     localStorage.setItem('rrScoreBoosterSpins', String(this.scoreBoosterSpins));
     localStorage.setItem('rrScoreBoosterLastResult', String(this.scoreBoosterLastSpinResult));
     localStorage.setItem('rrScoreBoosterLastTime', String(this.scoreBoosterLastSpinTime));
     localStorage.setItem('rrTimedWinStreak', String(this.timedWinStreak));
     localStorage.setItem('rrMegaKillTimes', JSON.stringify(this.megaKillTimes));
     localStorage.setItem('rrDailyMonthKey', this.dailyRewardMonthKey);
     localStorage.setItem('rrDailyLastClaimDate', this.dailyRewardLastClaimDate);
     localStorage.setItem('rrDailyProgress', String(this.dailyRewardProgress));
     localStorage.setItem('rrSaveUpdatedAt', String(Date.now()));
     var save = localSavePayload();
     if (window.overroll && typeof window.overroll.queueLocalSave === 'function') window.overroll.queueLocalSave(save);
     if (window.overroll && typeof window.overroll.queueCloudSave === 'function') window.overroll.queueCloudSave(save);
 };
 Bank.prototype.addPoints = function(n) { this.points += n; this.save(); };
 Bank.prototype.addCoins = function(n) { this.coins += n; this.save(); };
 Bank.prototype.addDiamonds = function(n) { this.diamonds += n; this.save(); };
 Bank.prototype.addTotalCoins = function(n) { this.totalCoins += n; this.save(); };
 Bank.prototype.ownsAvatar = function(k) { return this.ownedAvatars.indexOf(k) !== -1; };
 Bank.prototype.hasAccessTo = function(k) {
     if (this.ownsAvatar(k)) return true;
     var now = Date.now();
     for (var setKey in DIAMOND_SETS) {
         if (DIAMOND_SETS.hasOwnProperty(setKey)) {
             if (this.skinTrials[setKey] && this.skinTrials[setKey] > now) {
                 if (DIAMOND_SETS[setKey].keys.indexOf(k) !== -1) return true;
             }
         }
     }
     return false;
 };
 Bank.prototype.buyAvatar = function(k) {
     if (this.ownsAvatar(k)) return false;
     var keys = Object.keys(AVATARS);
     var a = null;
     for (var i = 0; i < keys.length; i++) if (AVATARS[keys[i]].key === k) { a = AVATARS[keys[i]]; break; }
     if (!a) return false;
     if (this.points < a.pricePts || this.coins < a.priceCoins) return false;
     this.points -= a.pricePts; this.coins -= a.priceCoins;
     this.ownedAvatars.push(k); this.save(); return true;
 };
 Bank.prototype.selectAvatar = function(k) {
     if (!this.hasAccessTo(k)) return false;
     this.currentAvatar = k; this.save(); return true;
 };
 Bank.prototype.damageCost = function() { return { pts: DMG_UPGRADE_BASE_POINTS + (this.damageLevel - 1) * 500, coins: DMG_UPGRADE_BASE_COINS + (this.damageLevel - 1) * 5 }; };
 Bank.prototype.rateCost = function() { return { pts: RATE_UPGRADE_BASE_POINTS + (this.rateLevel - 1) * 250, coins: RATE_UPGRADE_BASE_COINS + (this.rateLevel - 1) * 3 }; };
 Bank.prototype.canUpgradeDamage = function() { if (this.damageLevel >= PROJ_MAX_DAMAGE_LEVEL) return false; var c = this.damageCost(); return this.points >= c.pts && this.coins >= c.coins; };
 Bank.prototype.canUpgradeRate = function() { if (this.rateLevel >= PROJ_MAX_RATE_LEVEL) return false; var c = this.rateCost(); return this.points >= c.pts && this.coins >= c.coins; };
 Bank.prototype.upgradeDamage = function() { if (!this.canUpgradeDamage()) return false; var c = this.damageCost(); this.points -= c.pts; this.coins -= c.coins; this.damageLevel++; this.save(); return true; };
 Bank.prototype.upgradeRate = function() { if (!this.canUpgradeRate()) return false; var c = this.rateCost(); this.points -= c.pts; this.coins -= c.coins; this.rateLevel++; this.save(); return true; };
 Bank.prototype.ownsAbility = function(k) { return this.ownedAbilities.indexOf(k) !== -1; };
 Bank.prototype.canAffordAbility = function() { return this.points >= ABILITY_PRICE_POINTS && this.coins >= ABILITY_PRICE_COINS; };
 Bank.prototype.buyAbility = function(k) {
     if (k === 'none' || this.ownsAbility(k) || !this.canAffordAbility()) return false;
     this.points -= ABILITY_PRICE_POINTS; this.coins -= ABILITY_PRICE_COINS;
     this.ownedAbilities.push(k); this.save(); return true;
 };
 Bank.prototype.selectAbility = function(k) { if (!this.ownsAbility(k)) return false; this.currentAbility = k; this.save(); return true; };
 Bank.prototype.canConvert = function() { return this.points >= CONVERT_POINTS_COST; };
 Bank.prototype.convert = function() { if (!this.canConvert()) return false; this.points -= CONVERT_POINTS_COST; this.coins += CONVERT_COINS_REWARD; this.save(); return true; };
 Bank.prototype.jumpCost = function() { if (this.jumpLevel === 0) return JUMP_PRICE_DOUBLE; if (this.jumpLevel === 1) return JUMP_PRICE_TRIPLE; return null; };
 Bank.prototype.canUpgradeJump = function() { var c = this.jumpCost(); if (!c) return false; return this.points >= c.pts && this.coins >= c.coins; };
 Bank.prototype.upgradeJump = function() { if (!this.canUpgradeJump()) return false; var c = this.jumpCost(); this.points -= c.pts; this.coins -= c.coins; this.jumpLevel++; this.save(); return true; };
 Bank.prototype.canBuyDash = function() { if (this.dashOwned) return false; return this.points >= DASH_PRICE.pts && this.coins >= DASH_PRICE.coins; };
 Bank.prototype.buyDash = function() { if (!this.canBuyDash()) return false; this.points -= DASH_PRICE.pts; this.coins -= DASH_PRICE.coins; this.dashOwned = true; this.save(); return true; };
 Bank.prototype.magnetCost = function() { if (this.magnetLevel >= MAGNET_MAX_LEVEL) return null; return MAGNET_PRICES[this.magnetLevel]; };
 Bank.prototype.canUpgradeMagnet = function() { var c = this.magnetCost(); if (!c) return false; return this.points >= c.pts && this.coins >= c.coins; };
 Bank.prototype.upgradeMagnet = function() { if (!this.canUpgradeMagnet()) return false; var c = this.magnetCost(); this.points -= c.pts; this.coins -= c.coins; this.magnetLevel++; this.save(); return true; };
 Bank.prototype.hasAchievement = function(k) { return this.achievements.indexOf(k) !== -1; };
 Bank.prototype.unlockAchievement = function(k) {
     if (this.hasAchievement(k)) return false;
     var def = getAchievementDef(k); if (!def) return false;
     this.achievements.push(k); this.points += def.reward; this.save(); return true;
 };
 Bank.prototype.addLeaderboardEntry = function(entry) { this.leaderboard.push(entry); this.leaderboard.sort(function(a, b) { return b.score - a.score; }); if (this.leaderboard.length > 5) this.leaderboard.length = 5; this.save(); };
 Bank.prototype.setDifficulty = function(d) { if (['easy','normal','hard'].indexOf(d) === -1) return false; this.difficulty = d; this.save(); return true; };
 Bank.prototype.ownsTrail = function(k) { return this.ownedTrails.indexOf(k) !== -1; };
 Bank.prototype.buyTrail = function(k) {
     if (this.ownsTrail(k)) return false;
     var t = null; for (var i = 0; i < TRAILS.length; i++) if (TRAILS[i].key === k) t = TRAILS[i];
     if (!t) return false;
     if (this.points < t.pricePts || this.coins < t.priceCoins) return false;
     this.points -= t.pricePts; this.coins -= t.priceCoins;
     this.ownedTrails.push(k); this.save(); return true;
 };
 Bank.prototype.selectTrail = function(k) { if (!this.ownsTrail(k)) return false; this.currentTrail = k; this.save(); return true; };
 Bank.prototype.ownsSkinSet = function(setKey) { return this.ownedSkinSets.indexOf(setKey) !== -1; };
 Bank.prototype.buySkinSet = function(setKey) {
     if (this.ownsSkinSet(setKey)) return false;
     var s = DIAMOND_SETS[setKey]; if (!s) return false;
     if (this.diamonds < s.cost) return false;
     this.diamonds -= s.cost;
     this.ownedSkinSets.push(setKey);
     for (var i = 0; i < s.keys.length; i++) if (this.ownedAvatars.indexOf(s.keys[i]) === -1) this.ownedAvatars.push(s.keys[i]);
     this.save(); return true;
 };
 Bank.prototype.canAffordSkinSet = function(setKey) { var s = DIAMOND_SETS[setKey]; if (!s) return false; return this.diamonds >= s.cost; };
 Bank.prototype.canEarnTimedReward = function() {
     if (this.timedWinsDate !== todayKey()) { this.timedWinsToday = 0; this.timedWinsDate = todayKey(); this.save(); }
     return this.timedWinsToday < TIMED_DAILY_MAX_WINS;
 };
 Bank.prototype.registerTimedWin = function() { if (!this.canEarnTimedReward()) return false; this.timedWinsToday++; this.timedWinStreak++; this.save(); return true; };
 Bank.prototype.resetTimedStreak = function() { if (this.timedWinStreak !== 0) { this.timedWinStreak = 0; this.save(); } };
 Bank.prototype.hasCompletedBooster = function(n) { return this.scoreBoosterCompleted.indexOf(n) !== -1; };
 Bank.prototype.completeBooster = function(n) { if (this.hasCompletedBooster(n)) return false; this.scoreBoosterCompleted.push(n); this.points += SCORE_BOOSTER_REWARD; this.save(); return true; };
 Bank.prototype.recordMegaKillTime = function(sec) { this.megaKillTimes.push(sec); if (this.megaKillTimes.length > 20) this.megaKillTimes.shift(); this.save(); };
 
 // Daily reward helpers
 Bank.prototype.checkDailyReward = function() {
     var now = new Date();
     var mk = now.getFullYear() + '-' + (now.getMonth() + 1);
     var tk = todayKey();
     var day = now.getDate();
     if (this.dailyRewardMonthKey !== mk) {
         this.dailyRewardMonthKey = mk;
         this.dailyRewardLastClaimDate = '';
         this.dailyRewardProgress = 0;
         this.save();
     }
     var canClaim = false;
     if (day >= 1 && day <= DAILY_REWARD_CYCLE_DAYS) {
         if (this.dailyRewardLastClaimDate !== tk) canClaim = true;
     }
     return {
         canClaim: canClaim,
         todayDay: day,
         monthKey: mk,
         lastClaimDate: this.dailyRewardLastClaimDate,
         reward: (day >= 1 && day <= DAILY_REWARD_CYCLE_DAYS) ? DAILY_REWARDS[day - 1] : null
     };
 };
 Bank.prototype.claimDailyReward = function() {
     var state = this.checkDailyReward();
     if (!state.canClaim || !state.reward) return null;
     var reward = state.reward;
     var now = new Date();
     var tk = todayKey();
     if (reward.type === 'coins') this.coins += reward.amount;
     else if (reward.type === 'diamonds') this.diamonds += reward.amount;
     else if (reward.type === 'trial') {
         if (!this.skinTrials) this.skinTrials = {};
         this.skinTrials[reward.setKey] = Date.now() + 3600000;
     }
     this.dailyRewardLastClaimDate = tk;
     this.dailyRewardProgress = now.getDate();
     this.save();
     return reward;
 };
 Bank.prototype.hasSkinTrial = function(setKey) {
     return this.skinTrials[setKey] && this.skinTrials[setKey] > Date.now();
 };
 Bank.prototype.getTrialRemaining = function(setKey) {
     if (!this.skinTrials[setKey]) return 0;
     return Math.max(0, this.skinTrials[setKey] - Date.now());
 };
 
 // ===== AUDIO =====
 var MUSIC_MELODY = [440,0,659.25,0,587.33,0,523.25,0,440,0,523.25,587.33,659.25,0,392,0];
 var MUSIC_BASS = [110,0,0,0,87.31,0,0,0,130.81,0,0,0,98,0,0,0];
 var MUSIC_STEP_TIME = 0.18;
 var MUSIC_INTRO_MELODY = [523.25,659.25,783.99,0,659.25,783.99,987.77,0,587.33,783.99,880,0,659.25,880,1046.50,0];
 var MUSIC_INTRO_BASS = [130.81,0,0,0,98,0,0,0,110,0,0,0,87.31,0,0,0];
 var MUSIC_INTRO_STEP_TIME = 0.24;
 var MUSIC_MENU_MELODY = [783.99,0,659.25,783.99,987.77,0,880,783.99,659.25,0,783.99,987.77,1174.66,0,987.77,880];
 var MUSIC_MENU_BASS = [130.81,0,130.81,0,164.81,0,164.81,0,110,0,110,0,146.83,0,146.83,0];
 var MUSIC_MENU_STEP_TIME = 0.115;
 
 // Enhanced, more intimidating boss music
 var MUSIC_BOSS_MELODY = [146.83, 0, 146.83, 146.83, 155.56, 0, 146.83, 0, 130.81, 0, 130.81, 130.81, 138.59, 0, 130.81, 0];
 var MUSIC_BOSS_BASS = [73.42, 73.42, 73.42, 73.42, 73.42, 73.42, 73.42, 73.42, 65.41, 65.41, 65.41, 65.41, 61.74, 61.74, 61.74, 61.74];
 var MUSIC_BOSS_STEP_TIME = 0.1;
 
 function SoundFX() {
     this.ctx = null;
     try { this.ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch(e) {}
     this.masterGain = this.musicGain = this.sfxGain = this.musicFilter = null;
     if (this.ctx) {
         this.masterGain = this.ctx.createGain(); this.masterGain.gain.value = 0.55; this.masterGain.connect(this.ctx.destination);
         this.sfxGain = this.ctx.createGain(); this.sfxGain.gain.value = 1.0; this.sfxGain.connect(this.masterGain);
         this.musicFilter = this.ctx.createBiquadFilter(); this.musicFilter.type = 'lowpass'; this.musicFilter.frequency.value = 2400;
         this.musicFilter.Q.value = 0.5; this.musicFilter.connect(this.masterGain);
         this.musicGain = this.ctx.createGain(); this.musicGain.gain.value = 0.07; this.musicGain.connect(this.musicFilter);
     }
     this.musicPlaying = false; this.musicTimer = null; this.musicStep = 0; this.musicNextTime = 0;
     this.musicMode = 'normal';
 }
 SoundFX.prototype.resume = function() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); };
 SoundFX.prototype._note = function(freq, t0, dur, type, vol, dest) {
     if (!this.ctx) return;
     var o = this.ctx.createOscillator(), g = this.ctx.createGain();
     o.type = type; o.frequency.setValueAtTime(freq, t0);
     var atk = 0.012, rel = 0.06;
     var sus = t0 + Math.max(atk + 0.005, dur - rel);
     g.gain.setValueAtTime(0.0001, t0); g.gain.linearRampToValueAtTime(vol, t0 + atk);
     g.gain.setValueAtTime(vol, sus); g.gain.exponentialRampToValueAtTime(0.0001, t0 + dur);
     o.connect(g); g.connect(dest || this.sfxGain); o.start(t0); o.stop(t0 + dur + 0.05);
 };
 SoundFX.prototype.play = function(type) {
     if (!this.ctx) return; this.resume(); var t = this.ctx.currentTime;
     switch (type) {
         case 'jump': {
             var o1 = this.ctx.createOscillator(), o2 = this.ctx.createOscillator(), g = this.ctx.createGain();
             o1.type='triangle'; o2.type='sine';
             o1.frequency.setValueAtTime(280, t); o1.frequency.exponentialRampToValueAtTime(620, t+0.11);
             o2.frequency.setValueAtTime(560, t); o2.frequency.exponentialRampToValueAtTime(1240, t+0.11);
             g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.18, t+0.01); g.gain.exponentialRampToValueAtTime(0.0001, t+0.16);
             o1.connect(g); o2.connect(g); g.connect(this.sfxGain);
             o1.start(t); o2.start(t); o1.stop(t+0.18); o2.stop(t+0.18); break;
         }
         case 'airjump': {
             var oa = this.ctx.createOscillator(), ga = this.ctx.createGain();
             oa.type = 'triangle'; oa.frequency.setValueAtTime(420, t); oa.frequency.exponentialRampToValueAtTime(820, t+0.10);
             ga.gain.setValueAtTime(0.0001, t); ga.gain.linearRampToValueAtTime(0.13, t+0.008); ga.gain.exponentialRampToValueAtTime(0.0001, t+0.14);
             oa.connect(ga); ga.connect(this.sfxGain); oa.start(t); oa.stop(t+0.16); break;
         }
         case 'dash': {
             var od = this.ctx.createOscillator(), gd = this.ctx.createGain();
             od.type = 'sawtooth'; od.frequency.setValueAtTime(180, t);
             od.frequency.exponentialRampToValueAtTime(520, t+0.08); od.frequency.exponentialRampToValueAtTime(140, t+0.18);
             gd.gain.setValueAtTime(0.0001, t); gd.gain.linearRampToValueAtTime(0.09, t+0.01); gd.gain.exponentialRampToValueAtTime(0.0001, t+0.20);
             od.connect(gd); gd.connect(this.sfxGain); od.start(t); od.stop(t+0.22); break;
         }
         case 'coin': {
             var o = this.ctx.createOscillator(), g = this.ctx.createGain();
             o.type='triangle'; o.frequency.setValueAtTime(987.77, t); o.frequency.setValueAtTime(1318.51, t+0.055);
             g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.16, t+0.008);
             g.gain.setValueAtTime(0.16, t+0.055); g.gain.exponentialRampToValueAtTime(0.0001, t+0.24);
             o.connect(g); g.connect(this.sfxGain); o.start(t); o.stop(t+0.26); break;
         }
         case 'heal': this._note(659.25, t, 0.10, 'triangle', 0.16); this._note(783.99, t+0.08, 0.10, 'triangle', 0.16); this._note(987.77, t+0.16, 0.22, 'triangle', 0.20); break;
         case 'hurt': {
             var o = this.ctx.createOscillator(), g = this.ctx.createGain();
             o.type='sawtooth'; o.frequency.setValueAtTime(320, t); o.frequency.exponentialRampToValueAtTime(120, t+0.15);
             g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.20, t+0.008); g.gain.exponentialRampToValueAtTime(0.0001, t+0.20);
             o.connect(g); g.connect(this.sfxGain); o.start(t); o.stop(t+0.22); break;
         }
         case 'shoot': {
             var o = this.ctx.createOscillator(), g = this.ctx.createGain();
             o.type='square'; o.frequency.setValueAtTime(880, t); o.frequency.exponentialRampToValueAtTime(520, t+0.06);
             g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.05, t+0.006); g.gain.exponentialRampToValueAtTime(0.0001, t+0.08);
             o.connect(g); g.connect(this.sfxGain); o.start(t); o.stop(t+0.09); break;
         }
         case 'hit': {
             var o = this.ctx.createOscillator(), g = this.ctx.createGain();
             o.type='square'; o.frequency.setValueAtTime(200, t); o.frequency.exponentialRampToValueAtTime(120, t+0.06);
             g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.12, t+0.006); g.gain.exponentialRampToValueAtTime(0.0001, t+0.10);
             o.connect(g); g.connect(this.sfxGain); o.start(t); o.stop(t+0.11); break;
         }
         case 'powerup': this._note(659.25, t, 0.12, 'triangle', 0.18); this._note(783.99, t+0.08, 0.12, 'triangle', 0.18); this._note(987.77, t+0.16, 0.12, 'triangle', 0.18); this._note(1318.51, t+0.24, 0.22, 'triangle', 0.20); break;
         case 'buy': this._note(523.25, t, 0.10, 'triangle', 0.16); this._note(659.25, t+0.08, 0.10, 'triangle', 0.16); this._note(880, t+0.16, 0.20, 'triangle', 0.18); break;
         case 'deny': {
             var o = this.ctx.createOscillator(), g = this.ctx.createGain();
             o.type='sawtooth'; o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(110, t+0.15);
             g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.15, t+0.01); g.gain.exponentialRampToValueAtTime(0.0001, t+0.2);
             o.connect(g); g.connect(this.sfxGain); o.start(t); o.stop(t+0.22); break;
         }
         case 'die': {
             var o = this.ctx.createOscillator(), g = this.ctx.createGain();
             o.type='triangle'; o.frequency.setValueAtTime(420, t); o.frequency.exponentialRampToValueAtTime(55, t+0.42);
             g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.28, t+0.012); g.gain.exponentialRampToValueAtTime(0.0001, t+0.5);
             o.connect(g); g.connect(this.sfxGain); o.start(t); o.stop(t+0.52);
             var o2 = this.ctx.createOscillator(), g2 = this.ctx.createGain();
             o2.type='sine'; o2.frequency.setValueAtTime(150, t); o2.frequency.exponentialRampToValueAtTime(45, t+0.3);
             g2.gain.setValueAtTime(0.0001, t); g2.gain.linearRampToValueAtTime(0.3, t+0.012); g2.gain.exponentialRampToValueAtTime(0.0001, t+0.4);
             o2.connect(g2); g2.connect(this.sfxGain); o2.start(t); o2.stop(t+0.42); break;
         }
         case 'victory': this._note(523.25, t, 0.14, 'triangle', 0.16); this._note(659.25, t+0.10, 0.14, 'triangle', 0.16); this._note(783.99, t+0.20, 0.14, 'triangle', 0.16); this._note(1046.50, t+0.30, 0.35, 'triangle', 0.20); break;
         case 'click': {
             var o = this.ctx.createOscillator(), g = this.ctx.createGain();
             o.type='triangle'; o.frequency.setValueAtTime(720, t); o.frequency.exponentialRampToValueAtTime(430, t+0.05);
             g.gain.setValueAtTime(0.0001, t); g.gain.linearRampToValueAtTime(0.09, t+0.008); g.gain.exponentialRampToValueAtTime(0.0001, t+0.1);
             o.connect(g); g.connect(this.sfxGain); o.start(t); o.stop(t+0.11); break;
         }
         case 'start': this._note(523.25, t, 0.14, 'triangle', 0.14); this._note(659.25, t+0.11, 0.14, 'triangle', 0.14); this._note(783.99, t+0.22, 0.26, 'triangle', 0.16); break;
         case 'boss': this._note(110, t, 0.35, 'sine', 0.20); this._note(146.83, t+0.10, 0.35, 'sine', 0.18); this._note(220, t+0.20, 0.45, 'triangle', 0.14); break;
         case 'bossdie': this._note(220, t, 0.14, 'square', 0.16); this._note(174.61, t+0.10, 0.14, 'square', 0.16); this._note(130.81, t+0.20, 0.30, 'square', 0.18); this._note(392, t+0.42, 0.28, 'triangle', 0.18); this._note(523.25, t+0.55, 0.40, 'triangle', 0.20); break;
         case 'achievement': this._note(523.25, t, 0.12, 'triangle', 0.16); this._note(659.25, t+0.08, 0.12, 'triangle', 0.16); this._note(783.99, t+0.16, 0.12, 'triangle', 0.18); this._note(1046.50, t+0.24, 0.30, 'triangle', 0.20); break;
         case 'spin': this._note(440, t, 0.08, 'triangle', 0.12); this._note(523.25, t+0.06, 0.08, 'triangle', 0.12); this._note(659.25, t+0.12, 0.08, 'triangle', 0.12); this._note(783.99, t+0.18, 0.20, 'triangle', 0.16); break;
     }
 };
 SoundFX.prototype._scheduleMusicStep = function(step, time) {
     if (this.musicMode === 'boss') {
         if (MUSIC_BOSS_MELODY[step]) this._note(MUSIC_BOSS_MELODY[step], time, MUSIC_BOSS_STEP_TIME * 0.9, 'sawtooth', 0.4, this.musicGain);
         if (MUSIC_BOSS_BASS[step]) this._note(MUSIC_BOSS_BASS[step], time, MUSIC_BOSS_STEP_TIME * 1.0, 'square', 0.5, this.musicGain);
    } else if (this.musicMode === 'intro') {
        if (MUSIC_INTRO_MELODY[step]) this._note(MUSIC_INTRO_MELODY[step], time, MUSIC_INTRO_STEP_TIME * 1.55, 'sine', 0.34, this.musicGain);
        if (MUSIC_INTRO_BASS[step]) this._note(MUSIC_INTRO_BASS[step], time, MUSIC_INTRO_STEP_TIME * 1.7, 'triangle', 0.30, this.musicGain);
        if (step === 0 || step === 8) this._note(MUSIC_INTRO_MELODY[step] / 2, time, MUSIC_INTRO_STEP_TIME * 2.4, 'sine', 0.12, this.musicGain);
    } else if (this.musicMode === 'menu') {
        if (MUSIC_MENU_MELODY[step]) this._note(MUSIC_MENU_MELODY[step], time, MUSIC_MENU_STEP_TIME * 0.72, 'triangle', 0.44, this.musicGain);
        if (MUSIC_MENU_BASS[step]) this._note(MUSIC_MENU_BASS[step], time, MUSIC_MENU_STEP_TIME * 1.3, 'square', 0.50, this.musicGain);
        if (step % 4 === 2) this._note(MUSIC_MENU_MELODY[step] * 2, time + MUSIC_MENU_STEP_TIME * 0.35, MUSIC_MENU_STEP_TIME * 0.48, 'sine', 0.16, this.musicGain);
     } else {
         if (MUSIC_MELODY[step]) this._note(MUSIC_MELODY[step], time, MUSIC_STEP_TIME * 0.7, 'triangle', 0.5, this.musicGain);
         if (MUSIC_BASS[step]) this._note(MUSIC_BASS[step], time, MUSIC_STEP_TIME * 0.9, 'sine', 0.55, this.musicGain);
     }
 };
 SoundFX.prototype._musicTick = function() {
     if (!this.musicPlaying || !this.ctx) return;
    var stepTime = this.musicMode === 'boss' ? MUSIC_BOSS_STEP_TIME : (this.musicMode === 'intro' ? MUSIC_INTRO_STEP_TIME : (this.musicMode === 'menu' ? MUSIC_MENU_STEP_TIME : MUSIC_STEP_TIME));
     while (this.musicNextTime < this.ctx.currentTime + 0.25) {
         this._scheduleMusicStep(this.musicStep, this.musicNextTime);
         this.musicNextTime += stepTime;
         this.musicStep = (this.musicStep + 1) % 16;
     }
 };
SoundFX.prototype._startMusicMode = function(mode) {
     if (!this.ctx) return;
     this.resume();
     if (this.musicTimer) clearInterval(this.musicTimer);
    this.musicMode = mode; this.musicPlaying = true; this.musicStep = 0;
     this.musicNextTime = this.ctx.currentTime + 0.1;
     var self = this;
     this.musicTimer = setInterval(function() { self._musicTick(); }, 50);
 };
SoundFX.prototype.startIntroMusic = function() { this._startMusicMode('intro'); };
SoundFX.prototype.startMenuMusic = function() { this._startMusicMode('menu'); };
SoundFX.prototype.startMusic = function() { this._startMusicMode('normal'); };
 SoundFX.prototype.startBossMusic = function() {
     if (!this.ctx) return;
     this.resume();
     if (this.musicTimer) clearInterval(this.musicTimer);
     this.musicMode = 'boss'; this.musicPlaying = true; this.musicStep = 0;
     this.musicNextTime = this.ctx.currentTime + 0.1;
     var self = this;
     this.musicTimer = setInterval(function() { self._musicTick(); }, 50);
 };
 SoundFX.prototype.duckMusic = function(ducked) {
     if (!this.musicGain || !this.ctx) return;
     var target = ducked ? 0.025 : 0.07;
     this.musicGain.gain.cancelScheduledValues(this.ctx.currentTime);
     this.musicGain.gain.linearRampToValueAtTime(target, this.ctx.currentTime + 0.25);
 };
 
 // ===== PARTICLES =====
 function Particle(x, y, vx, vy, color, life, size) {
     this.x = x; this.y = y; this.vx = vx; this.vy = vy;
     this.color = color; this.life = life; this.maxLife = life; this.size = size || 3;
 }
 Particle.prototype.update = function(dt) {
     this.x += this.vx * dt * 60; this.y += this.vy * dt * 60;
     this.vy += 0.1 * dt * 60; this.life -= dt;
     return this.life > 0;
 };
 Particle.prototype.draw = function(ctx, ox, oy) {
     var a = Math.max(0, this.life / this.maxLife);
     ctx.globalAlpha = a; ctx.fillStyle = this.color;
     var s = this.size * (0.5 + 0.5 * a);
     ctx.fillRect(this.x - ox - s/2, this.y - oy - s/2, s, s);
     ctx.globalAlpha = 1;
 };
 function Particles() { this.list = []; }
 Particles.prototype.emit = function(x, y, count, color, speed, life, size) {
     for (var i = 0; i < count; i++) {
         var a = rand(0, Math.PI * 2), s = rand(speed * 0.4, speed);
         this.list.push(new Particle(x + rand(-4,4), y + rand(-4,4), Math.cos(a)*s, Math.sin(a)*s - 0.5, color, rand(life*0.6, life), size || rand(2,5)));
     }
 };
 Particles.prototype.update = function(dt) { this.list = this.list.filter(function(p) { return p.update(dt); }); };
 Particles.prototype.draw = function(ctx, ox, oy) { for (var i = 0; i < this.list.length; i++) this.list[i].draw(ctx, ox, oy); };
 
 // ===== PROJECTILES =====
 function Projectile(x, y, dmg, ability) {
     this.x = x; this.y = y; this.vx = PROJ_SPEED; this.vy = 0;
     this.r = 6; this.dmg = dmg; this.ability = ability || 'none'; this.alive = true; this.age = 0;
 }
 Projectile.prototype.update = function(dt) {
     this.x += this.vx * dt * 60; this.y += this.vy * dt * 60; this.age += dt;
     if (this.age > PROJ_LIFETIME) this.alive = false;
 };
 Projectile.prototype.draw = function(ctx, ox, oy) {
     var x = this.x - ox, y = this.y - oy; var ang = Math.atan2(this.vy, this.vx);
     ctx.save(); ctx.translate(x, y); ctx.rotate(ang); ctx.globalAlpha = 0.35;
     ctx.fillStyle = this.ability === 'fire' ? '#FF6B35' : this.ability === 'ice' ? '#7FD8FF' : this.ability === 'spiked' ? '#B85C4B' : '#FFE066';
     for (var i = 1; i <= 3; i++) { ctx.beginPath(); ctx.arc(-i * 6, 0, this.r * (1 - i * 0.2), 0, Math.PI * 2); ctx.fill(); }
     ctx.globalAlpha = 1; ctx.restore();
     var bodyColor = '#FFD966';
     if (this.ability === 'fire') bodyColor = '#FF8C42';
     else if (this.ability === 'ice') bodyColor = '#5EC8F0';
     else if (this.ability === 'spiked') bodyColor = '#C4A484';
     ctx.fillStyle = bodyColor; ctx.beginPath(); ctx.arc(x, y, this.r, 0, Math.PI * 2); ctx.fill();
     ctx.fillStyle = '#FFFFFF'; ctx.beginPath(); ctx.arc(x - 1, y - 1, this.r * 0.4, 0, Math.PI * 2); ctx.fill();
 };
 Projectile.prototype.getBounds = function() { return { x: this.x - this.r, y: this.y - this.r, w: this.r * 2, h: this.r * 2 }; };
 
 function EnemyProjectile(x, y, vx, vy) {
     this.x = x; this.y = y; this.vx = vx; this.vy = vy; this.r = 5; this.alive = true; this.age = 0;
 }
 EnemyProjectile.prototype.update = function(dt) {
     this.x += this.vx * dt * 60; this.y += this.vy * dt * 60; this.age += dt;
     if (this.age > 3.5) this.alive = false;
 };
 EnemyProjectile.prototype.draw = function(ctx, ox, oy) {
     var x = this.x - ox, y = this.y - oy;
     ctx.fillStyle = '#8B0000'; ctx.beginPath(); ctx.arc(x, y, this.r, 0, Math.PI * 2); ctx.fill();
     ctx.fillStyle = '#FF5555'; ctx.beginPath(); ctx.arc(x - 1, y - 1, this.r * 0.5, 0, Math.PI * 2); ctx.fill();
 };
 EnemyProjectile.prototype.getBounds = function() { return { x: this.x - this.r, y: this.y - this.r, w: this.r * 2, h: this.r * 2 }; };
 
 // ===== ENEMIES =====
 function WormyGroup(x) {
     this.worms = [];
     var count = randInt(3, 5);
     for (var i = 0; i < count; i++) this.worms.push({ x: x + i * 26, offset: i * 0.4 });
     this.age = 0; this.duration = 14; this.alive = true;
     this.magnification = 1;
 }
 WormyGroup.prototype.update = function(dt) { this.age += dt; if (this.age > this.duration) this.alive = false; };
 WormyGroup.prototype.getWormHeight = function(local) {
     if (local < 0) return 0;
     var cycle = local % 3.2;
     if (cycle < 0.4) return (cycle / 0.4) * PLAYER_SIZE;
     if (cycle < 2.0) return PLAYER_SIZE;
     if (cycle < 2.4) return (1 - (cycle - 2.0) / 0.4) * PLAYER_SIZE;
     return 0;
 };
 WormyGroup.prototype.draw = function(ctx, ox, oy) {
     var mag = this.magnification || 1;
     for (var i = 0; i < this.worms.length; i++) {
         var w = this.worms[i];
         var local = this.age - w.offset;
         var height = this.getWormHeight(local) * mag;
         if (height < 2) continue;
         var wx = w.x - ox, wy = GROUND_Y - oy;
         var segCount = 3, segH = height / segCount;
         var wormW = 16 * mag;
         for (var s = 0; s < segCount; s++) {
             var sy = wy - (segCount - s) * segH;
             ctx.fillStyle = s % 2 === 0 ? '#6B3410' : '#8B5A2B';
             ctx.fillRect(wx - wormW/2, sy, wormW, segH + 1);
             ctx.fillStyle = 'rgba(255,255,255,0.10)';
             ctx.fillRect(wx - wormW/2, sy, wormW * 0.25, segH);
             ctx.fillStyle = 'rgba(0,0,0,0.25)';
             ctx.fillRect(wx - wormW/2, sy + segH - 1, wormW, 1);
         }
         var eyeSize = 3 * mag;
         ctx.fillStyle = '#2A1508';
         ctx.fillRect(wx - wormW/2 + eyeSize, wy - height + 4*mag, eyeSize, eyeSize);
         ctx.fillRect(wx + wormW/2 - 2*eyeSize, wy - height + 4*mag, eyeSize, eyeSize);
     }
 };
 WormyGroup.prototype.checkContact = function(pb) {
     var mag = this.magnification || 1;
     for (var i = 0; i < this.worms.length; i++) {
         var w = this.worms[i];
         var local = this.age - w.offset;
         var height = this.getWormHeight(local) * mag;
         if (height < 6 * mag) continue;
         var wormW = 16 * mag;
         var box = { x: w.x - wormW/2, y: GROUND_Y - height, w: wormW, h: height };
         if (pb.x + pb.w > box.x && pb.x < box.x + box.w && pb.y + pb.h > box.y && pb.y < box.y + box.h) return true;
     }
     return false;
 };
 
 function Flyer(x, y) {
     this.x = x; this.y = y; this.homeX = x; this.homeY = y;
     this.hp = FLYER_HP; this.maxHp = FLYER_HP; this.alive = true;
     this.patrolPhase = rand(0, Math.PI * 2); this.patrolAmp = 30;
     this.facing = -1; this.bendT = 0; this.shootCooldown = rand(1.8, 2.6);
     this.hitFlash = 0; this.frozenT = 0;
     this.bobPhase = rand(0, Math.PI * 2); this.lightPhase = rand(0, Math.PI * 2);
     this.magnification = 1;
 }
 Flyer.prototype.update = function(dt, player) {
     if (this.hitFlash > 0) this.hitFlash -= dt;
     if (this.frozenT > 0) { this.frozenT -= dt; return null; }
     this.patrolPhase += dt * 1.6; this.bobPhase += dt * 3; this.lightPhase += dt * 5;
     this.x = this.homeX + Math.sin(this.patrolPhase) * this.patrolAmp;
     var dx = player.x - this.x; this.facing = dx < 0 ? -1 : 1;
     var dist = Math.abs(dx); var near = dist < 450;
     this.bendT = damp(this.bendT, near ? 1 : 0, 6, dt);
     if (near) {
         this.shootCooldown -= dt;
         if (this.shootCooldown <= 0) { this.shootCooldown = rand(1.9, 2.6); return 'shoot'; }
     }
     return null;
 };
 Flyer.prototype.takeDamage = function(dmg) { this.hp -= dmg; this.hitFlash = 0.15; if (this.hp <= 0) this.alive = false; };
 Flyer.prototype.getBounds = function() {
     var mag = this.magnification || 1;
     var w = 52 * mag, h = 30 * mag;
     return { x: this.x - w/2, y: this.y - h/2, w: w, h: h };
 };
 Flyer.prototype.draw = function(ctx, ox, oy) {
     var x = this.x - ox, y = this.y - oy; var mag = this.magnification || 1;
     var bob = Math.sin(this.bobPhase) * 3;
     var flash = this.hitFlash > 0; var frozen = this.frozenT > 0;
     var baseColor  = flash ? '#FFFFFF' : (frozen ? '#A8E8FF' : '#8A94A8');
     var rimColor   = flash ? '#FFFFFF' : (frozen ? '#C8F4FF' : '#5A6478');
     var domeColor  = flash ? '#FFFFFF' : (frozen ? '#C8F4FF' : '#7FE7E0');
     var lightColor = frozen ? '#9FE8FF' : '#FFE066';
     ctx.save(); ctx.translate(x, y + bob); ctx.scale(mag, mag);
     ctx.fillStyle = flash ? '#FFFFFF' : 'rgba(0,0,0,0.28)';
     ctx.beginPath(); ctx.ellipse(0, 8, 24, 4, 0, 0, Math.PI * 2); ctx.fill();
     ctx.fillStyle = baseColor; ctx.beginPath(); ctx.ellipse(0, 4, 26, 8, 0, 0, Math.PI * 2); ctx.fill();
     ctx.fillStyle = rimColor; ctx.beginPath(); ctx.ellipse(0, 1, 22, 6, 0, 0, Math.PI * 2); ctx.fill();
     ctx.fillStyle = domeColor; ctx.beginPath(); ctx.ellipse(0, -3, 14, 11, 0, Math.PI, Math.PI * 2); ctx.closePath(); ctx.fill();
     ctx.strokeStyle = flash ? '#FFFFFF' : 'rgba(60,80,90,0.6)'; ctx.lineWidth = 1.2;
     ctx.beginPath(); ctx.ellipse(0, -3, 14, 11, 0, Math.PI, Math.PI * 2); ctx.stroke();
     ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.beginPath(); ctx.ellipse(-5, -6, 4, 3, -0.4, 0, Math.PI * 2); ctx.fill();
     for (var i = 0; i < 5; i++) {
         var lx = -16 + i * 8;
         var pulse = 0.55 + 0.45 * Math.sin(this.lightPhase + i * 1.2);
         ctx.fillStyle = lightColor; ctx.globalAlpha = pulse;
         ctx.beginPath(); ctx.arc(lx, 4, 2, 0, Math.PI * 2); ctx.fill();
         ctx.globalAlpha = 1;
     }
     ctx.strokeStyle = flash ? '#FFFFFF' : '#5A6478'; ctx.lineWidth = 1.5;
     ctx.beginPath(); ctx.moveTo(0, -13); ctx.lineTo(0, -20); ctx.stroke();
     var antPulse = 0.6 + 0.4 * Math.sin(this.lightPhase * 1.5);
     ctx.globalAlpha = antPulse; ctx.fillStyle = lightColor;
     ctx.beginPath(); ctx.arc(0, -21, 2.5, 0, Math.PI * 2); ctx.fill();
     ctx.globalAlpha = 1; ctx.restore();
     if (frozen) {
         ctx.save(); ctx.globalAlpha = 0.35; ctx.fillStyle = '#7FD8FF';
         ctx.beginPath(); ctx.arc(x, y + bob, 26 * mag, 0, Math.PI * 2); ctx.fill(); ctx.restore();
     }
     var hpPct = this.hp / this.maxHp;
     var hpY = y - 34 - (mag - 1) * 15;
     ctx.fillStyle = 'rgba(0,0,0,0.55)'; fillRoundRect(ctx, x - 16, hpY, 32, 5, 2.5);
     ctx.fillStyle = hpPct > 0.5 ? '#4CAF50' : hpPct > 0.25 ? '#FFB347' : '#E63946';
     fillRoundRect(ctx, x - 15, hpY + 1, 30 * hpPct, 3, 1.5);
 };
 
 function Floater(x, y) {
     this.x = x; this.y = y; this.homeX = x; this.homeY = y;
     this.hp = FLOATER_HP; this.maxHp = FLOATER_HP; this.alive = true;
     this.rotation = 0; this.patrolPhase = rand(0, Math.PI * 2);
     this.state = 'patrol'; this.stateT = 0; this.chargeVX = 0; this.chargeVY = 0;
     this.hitFlash = 0; this.frozenT = 0;
     this.aimTimer = 0; this.aimTargetX = x; this.aimTargetY = y;
     this.magnification = 1;
 }
 Floater.prototype.update = function(dt, player) {
     if (this.hitFlash > 0) this.hitFlash -= dt;
     if (this.frozenT > 0) { this.frozenT -= dt; this.rotation += dt * 0.2; return; }
     this.rotation += dt * 1.5;
     if (this.state === 'patrol') {
         this.patrolPhase += dt * 0.6;
         this.x = this.homeX + Math.sin(this.patrolPhase) * 6;
         this.y = this.homeY + Math.cos(this.patrolPhase * 0.8) * 3;
         var dx = player.x - this.x, dy = (player.y + 14) - this.y;
         var dist = Math.sqrt(dx * dx + dy * dy);
         if (dist < 320) { this.state = 'wind'; this.stateT = 0; }
     } else if (this.state === 'wind') {
         this.stateT += dt;
         if (this.stateT > 0.7) {
             var dx2 = player.x - this.x, dy2 = (player.y + 14) - this.y;
             var d = Math.sqrt(dx2 * dx2 + dy2 * dy2) || 1;
             var cs = 3.5;
             this.chargeVX = (dx2 / d) * cs; this.chargeVY = (dy2 / d) * cs;
             this.state = 'charge'; this.stateT = 0;
             this.aimTimer = 0; this.aimTargetX = player.x; this.aimTargetY = player.y + 14;
         }
     } else if (this.state === 'charge') {
         this.aimTimer += dt;
         if (this.aimTimer >= 0.4) {
             this.aimTimer = 0;
             this.aimTargetX = player.x;
             this.aimTargetY = player.y + 14;
         }
         var adx = this.aimTargetX - this.x, ady = this.aimTargetY - this.y;
         var ad = Math.sqrt(adx * adx + ady * ady) || 1;
         var desiredVX = (adx / ad) * 3.5, desiredVY = (ady / ad) * 3.5;
         var steerRate = Math.min(1, 2.2 * dt);
         this.chargeVX = this.chargeVX * (1 - steerRate) + desiredVX * steerRate;
         this.chargeVY = this.chargeVY * (1 - steerRate) + desiredVY * steerRate;
         this.x += this.chargeVX * dt * 60;
         this.y += this.chargeVY * dt * 60;
         this.stateT += dt;
         if (this.stateT > 1.2) { this.state = 'patrol'; this.homeX = this.x; this.homeY = this.y; }
     }
 };
 Floater.prototype.takeDamage = function(dmg) { this.hp -= dmg; this.hitFlash = 0.15; if (this.hp <= 0) this.alive = false; };
 Floater.prototype.getBounds = function() {
     var mag = this.magnification || 1;
     var w = 32 * mag, h = 32 * mag;
     return { x: this.x - w/2, y: this.y - h/2, w: w, h: h };
 };
 Floater.prototype.draw = function(ctx, ox, oy) {
     var x = this.x - ox, y = this.y - oy; var mag = this.magnification || 1;
     var r = 12;
     var flash = this.hitFlash > 0; var frozen = this.frozenT > 0;
     ctx.save(); ctx.translate(x, y); ctx.scale(mag, mag); ctx.translate(-x, -y);
     ctx.fillStyle = flash ? '#FFFFFF' : (frozen ? '#9FE8FF' : '#7A2F3C');
     for (var i = 0; i < 8; i++) {
         var ang = (i / 8) * Math.PI * 2 + this.rotation;
         var bx = x + Math.cos(ang) * r, by = y + Math.sin(ang) * r;
         var tx = x + Math.cos(ang) * (r + 6), ty = y + Math.sin(ang) * (r + 6);
         var px = Math.cos(ang + Math.PI / 2) * 3, py = Math.sin(ang + Math.PI / 2) * 3;
         ctx.beginPath(); ctx.moveTo(tx, ty); ctx.lineTo(bx + px, by + py); ctx.lineTo(bx - px, by - py); ctx.closePath(); ctx.fill();
     }
     ctx.fillStyle = flash ? '#FFFFFF' : (frozen ? '#B8F0FF' : '#E63946');
     ctx.beginPath(); ctx.arc(x, y, r, 0, Math.PI * 2); ctx.fill();
     ctx.fillStyle = '#8B0000'; ctx.beginPath(); ctx.arc(x, y, r * 0.55, 0, Math.PI * 2); ctx.fill();
     ctx.fillStyle = '#FF6B6B'; ctx.beginPath(); ctx.arc(x - r * 0.2, y - r * 0.2, r * 0.25, 0, Math.PI * 2); ctx.fill();
     ctx.restore();
     var hpPct = this.hp / this.maxHp;
     var hpY = y - 26 - (mag - 1) * 15;
     ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(x - 15, hpY, 30, 4);
     ctx.fillStyle = hpPct > 0.5 ? '#4CAF50' : hpPct > 0.25 ? '#FFB347' : '#E63946';
     ctx.fillRect(x - 15, hpY, 30 * hpPct, 4);
 };
 
 function MegaFlyer(x, y) {
     this.x = x; this.y = y; this.homeX = x; this.homeY = y;
     this.hp = MEGA_HP; this.maxHp = MEGA_HP; this.alive = true;
     this.phase = 1; this.state = 'hover'; this.stateT = 0;
     this.targetY = y; this.chargeVX = 0; this.chargeVY = 0;
     this.shootCount = 0; this.shootCooldown = 2.6;
     this.hitFlash = 0; this.frozenT = 0;
     this.time = 0; this.bobPhase = 0; this.lightPhase = 0; this.facing = -1; this.spawnTime = 0;
 }
 MegaFlyer.prototype.update = function(dt, player) {
     if (this.hitFlash > 0) this.hitFlash -= dt;
     if (this.frozenT > 0) this.frozenT -= dt;
     this.time += dt; this.spawnTime += dt; this.bobPhase += dt * 1.6; this.lightPhase += dt * 4;
     if (this.hp <= 0) { this.alive = false; return; }
     var pct = this.hp / this.maxHp;
     this.phase = pct > 0.66 ? 1 : pct > 0.33 ? 2 : 3;
     var speedMult = this.phase === 1 ? 0.9 : this.phase === 2 ? 1.05 : 1.2;
     if (this.frozenT > 0) return null;
     this.stateT += dt;
     this.facing = (player.x - this.x) < 0 ? -1 : 1;
     if (this.state === 'hover') {
         var targetY = player.y - 110;
         this.targetY = damp(this.targetY, targetY, 1.2, dt);
         this.x = damp(this.x, player.x + 180, 0.6, dt);
         this.y = this.homeY + Math.sin(this.time * 1.4) * 16;
         this.y = damp(this.y, this.targetY, 0.4, dt);
         this.shootCooldown -= dt * speedMult;
         if (this.shootCooldown <= 0) { this.state = 'shoot'; this.stateT = 0; this.shootCount = 0; this.shootCooldown = (this.phase === 1 ? 3.5 : this.phase === 2 ? 3.0 : 2.6); this.shootCooldown2 = 0.28 / speedMult; }
         else if (this.stateT > 4.5 && this.phase >= 2 && Math.random() < 0.012) { this.state = 'chargeWind'; this.stateT = 0; }
     } else if (this.state === 'shoot') {
         this.shootCooldown2 -= dt;
         if (this.shootCooldown2 <= 0) {
             this.shootCooldown2 = 0.32 / speedMult;
             this.shootCount++;
             var shotsThisVolley = this.phase === 1 ? 2 : this.phase === 2 ? 2 : 3;
             if (this.shootCount >= shotsThisVolley) { this.state = 'hover'; this.stateT = 0; }
             else return 'shoot';
         }
     } else if (this.state === 'chargeWind') {
         if (this.stateT > 0.9) {
             var dx = player.x - this.x, dy = (player.y + 14) - this.y;
             var d = Math.sqrt(dx * dx + dy * dy) || 1;
             var cs = 3.6;
             this.chargeVX = (dx / d) * cs; this.chargeVY = (dy / d) * cs;
             this.state = 'charge'; this.stateT = 0;
         }
     } else if (this.state === 'charge') {
         this.x += this.chargeVX * dt * 60; this.y += this.chargeVY * dt * 60;
         if (this.stateT > 0.85) { this.state = 'hover'; this.stateT = 0; }
     }
     return null;
 };
 MegaFlyer.prototype.takeDamage = function(dmg) { this.hp -= dmg; this.hitFlash = 0.15; if (this.hp < 0) this.hp = 0; };
 MegaFlyer.prototype.getBounds = function() { return { x: this.x - 52, y: this.y - 34, w: 104, h: 62 }; };
 MegaFlyer.prototype.draw = function(ctx, ox, oy) {
     var x = this.x - ox, y = this.y - oy; var bob = Math.sin(this.bobPhase) * 5;
     var flash = this.hitFlash > 0; var frozen = this.frozenT > 0;
     var baseColor  = flash ? '#FFFFFF' : (frozen ? '#A8E8FF' : '#6E1A2E');
     var rimColor   = flash ? '#FFFFFF' : (frozen ? '#C8F4FF' : '#4A0F1C');
     var domeColor  = flash ? '#FFFFFF' : (frozen ? '#C8F4FF' : '#3B0A1A');
     var lightColor = frozen ? '#9FE8FF' : '#FF4D4D';
     var eyeColor   = frozen ? '#9FE8FF' : '#FFE066';
     ctx.save(); ctx.translate(x, y + bob);
     ctx.fillStyle = flash ? '#FFFFFF' : 'rgba(0,0,0,0.4)';
     ctx.beginPath(); ctx.ellipse(0, 16, 50, 8, 0, 0, Math.PI * 2); ctx.fill();
     ctx.fillStyle = baseColor; ctx.beginPath(); ctx.ellipse(0, 8, 54, 16, 0, 0, Math.PI * 2); ctx.fill();
     ctx.fillStyle = rimColor; ctx.beginPath(); ctx.ellipse(0, 2, 46, 12, 0, 0, Math.PI * 2); ctx.fill();
     ctx.fillStyle = flash ? '#FFFFFF' : (frozen ? '#A0E8FF' : '#5A0F20');
     ctx.beginPath(); ctx.ellipse(0, 0, 40, 10, 0, 0, Math.PI * 2); ctx.fill();
     for (var i = 0; i < 9; i++) {
         var lx = -32 + i * 8;
         var pulse = 0.55 + 0.45 * Math.sin(this.lightPhase + i * 0.9);
         ctx.fillStyle = lightColor; ctx.globalAlpha = pulse;
         ctx.beginPath(); ctx.arc(lx, 8, 2.4, 0, Math.PI * 2); ctx.fill();
         ctx.globalAlpha = 1;
     }
     ctx.fillStyle = domeColor; ctx.beginPath(); ctx.ellipse(0, -8, 30, 22, 0, Math.PI, Math.PI * 2); ctx.closePath(); ctx.fill();
     ctx.strokeStyle = flash ? '#FFFFFF' : 'rgba(255,255,255,0.14)'; ctx.lineWidth = 2;
     ctx.beginPath(); ctx.ellipse(0, -8, 30, 22, 0, Math.PI, Math.PI * 2); ctx.stroke();
     ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.beginPath(); ctx.ellipse(-10, -16, 7, 5, -0.4, 0, Math.PI * 2); ctx.fill();
     ctx.save(); ctx.shadowColor = eyeColor; ctx.shadowBlur = 14;
     ctx.fillStyle = eyeColor;
     ctx.beginPath(); ctx.ellipse(-7, -14, 5, 6, 0, 0, Math.PI * 2); ctx.fill();
     ctx.beginPath(); ctx.ellipse(7, -14, 5, 6, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
     ctx.fillStyle = '#1a1a2e';
     ctx.beginPath(); ctx.ellipse(-7, -14, 1.8, 4, 0, 0, Math.PI * 2); ctx.fill();
     ctx.beginPath(); ctx.ellipse(7, -14, 1.8, 4, 0, 0, Math.PI * 2); ctx.fill();
     ctx.strokeStyle = flash ? '#FFFFFF' : '#4A0F1C'; ctx.lineWidth = 2;
     ctx.beginPath(); ctx.moveTo(0, -28); ctx.lineTo(0, -38); ctx.stroke();
     var antPulse = 0.6 + 0.4 * Math.sin(this.lightPhase * 1.5);
     ctx.globalAlpha = antPulse; ctx.fillStyle = lightColor;
     ctx.beginPath(); ctx.arc(0, -40, 3.5, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1; ctx.restore();
     if (frozen) {
         ctx.save(); ctx.globalAlpha = 0.35; ctx.fillStyle = '#7FD8FF';
         ctx.beginPath(); ctx.arc(x, y + bob, 54, 0, Math.PI * 2); ctx.fill(); ctx.restore();
     }
     var barW = 200, barH = 14; var bx = x - barW / 2, by = y - 70;
     ctx.fillStyle = 'rgba(0,0,0,0.65)'; fillRoundRect(ctx, bx - 3, by - 3, barW + 6, barH + 6, (barH + 6) / 2);
     var pct = this.hp / this.maxHp;
     var hpColor = pct > 0.66 ? '#4CAF50' : pct > 0.33 ? '#FFB347' : '#E63946';
     ctx.fillStyle = hpColor; ctx.save(); roundRectPath(ctx, bx, by, barW, barH, barH / 2); ctx.clip(); ctx.fillRect(bx, by, barW * pct, barH); ctx.restore();
     ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = 1.5;
     strokeRoundRect(ctx, bx, by, barW, barH, barH / 2);
     ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 12px ' + FONT;
     ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
     ctx.fillText('MEGA UFO   ' + this.hp + ' / ' + this.maxHp, x, by + barH / 2 + 1);
     ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
 };
 
 function EndlessBoss(x, y) {
     this.x = x; this.y = y; this.hp = ENDLESS_BOSS_HP; this.maxHp = ENDLESS_BOSS_HP; this.alive = true;
     this.fleeing = false; this.fleeT = 0; this.fleeTimer = ENDLESS_BOSS_TIMER;
     this.hitFlash = 0; this.frozenT = 0; this.time = 0;
     this.bobPhase = rand(0, Math.PI * 2); this.lightPhase = rand(0, Math.PI * 2);
     this.shootCooldown = rand(1.6, 2.2); this.facing = -1;
 }
 EndlessBoss.prototype.update = function(dt, player, scrollSpeed) {
     if (this.hitFlash > 0) this.hitFlash -= dt;
     if (this.frozenT > 0) this.frozenT -= dt;
     this.time += dt; this.bobPhase += dt * 2.4; this.lightPhase += dt * 5;
     if (this.fleeing) { this.fleeT += dt; this.y -= 140 * dt; this.x += scrollSpeed * dt * 60 * 0.4; if (this.fleeT > ENDLESS_BOSS_FLEE_TIME) { this.alive = false; return 'fled'; } return null; }
     if (this.hp <= 0) { this.alive = false; return 'killed'; }
     this.fleeTimer -= dt;
     if (this.fleeTimer <= 0) { this.fleeing = true; this.fleeT = 0; return 'flee'; }
     if (this.frozenT > 0) { this.x += scrollSpeed * dt * 60; return null; }
     this.x += scrollSpeed * dt * 60;
     var targetX = player.x + ENDLESS_BOSS_FORMATION_DX;
     var targetY = player.y + ENDLESS_BOSS_FORMATION_DY;
     this.x = damp(this.x, targetX, ENDLESS_BOSS_DAMP_LAMBDA, dt);
     this.y = damp(this.y, targetY, 1.8, dt);
     this.y += Math.sin(this.bobPhase) * 12 * dt;
     if (this.x < player.x - W * 0.5) this.x = player.x + ENDLESS_BOSS_FORMATION_DX;
     this.facing = (player.x - this.x) < 0 ? -1 : 1;
     this.shootCooldown -= dt;
     if (this.shootCooldown <= 0) { this.shootCooldown = rand(1.8, 2.6); return 'shoot'; }
     return null;
 };
 EndlessBoss.prototype.takeDamage = function(dmg) { this.hp -= dmg; this.hitFlash = 0.15; if (this.hp < 0) this.hp = 0; };
 EndlessBoss.prototype.getBounds = function() { return { x: this.x - 34, y: this.y - 22, w: 68, h: 44 }; };
 EndlessBoss.prototype.draw = function(ctx, ox, oy) {
     var x = this.x - ox, y = this.y - oy; var bob = Math.sin(this.bobPhase) * 3;
     var flash = this.hitFlash > 0; var frozen = this.frozenT > 0;
     var baseColor  = flash ? '#FFFFFF' : (frozen ? '#A8E8FF' : '#6E1A2E');
     var rimColor   = flash ? '#FFFFFF' : (frozen ? '#C8F4FF' : '#4A0F1C');
     var domeColor  = flash ? '#FFFFFF' : (frozen ? '#C8F4FF' : '#3B0A1A');
     var lightColor = frozen ? '#9FE8FF' : '#FF4D4D';
     var eyeColor   = frozen ? '#9FE8FF' : '#FFE066';
     ctx.save(); ctx.translate(x, y + bob);
     ctx.fillStyle = flash ? '#FFFFFF' : 'rgba(0,0,0,0.32)';
     ctx.beginPath(); ctx.ellipse(0, 12, 34, 6, 0, 0, Math.PI * 2); ctx.fill();
     ctx.fillStyle = baseColor; ctx.beginPath(); ctx.ellipse(0, 6, 36, 11, 0, 0, Math.PI * 2); ctx.fill();
     ctx.fillStyle = rimColor; ctx.beginPath(); ctx.ellipse(0, 1, 30, 8, 0, 0, Math.PI * 2); ctx.fill();
     ctx.fillStyle = flash ? '#FFFFFF' : (frozen ? '#A0E8FF' : '#5A0F20');
     ctx.beginPath(); ctx.ellipse(0, -1, 24, 6, 0, 0, Math.PI * 2); ctx.fill();
     for (var i = 0; i < 6; i++) {
         var lx = -20 + i * 8;
         var pulse = 0.55 + 0.45 * Math.sin(this.lightPhase + i * 1.1);
         ctx.fillStyle = lightColor; ctx.globalAlpha = pulse;
         ctx.beginPath(); ctx.arc(lx, 6, 2, 0, Math.PI * 2); ctx.fill();
         ctx.globalAlpha = 1;
     }
     ctx.fillStyle = domeColor; ctx.beginPath(); ctx.ellipse(0, -6, 20, 14, 0, Math.PI, Math.PI * 2); ctx.closePath(); ctx.fill();
     ctx.strokeStyle = flash ? '#FFFFFF' : 'rgba(255,255,255,0.16)'; ctx.lineWidth = 1.5;
     ctx.beginPath(); ctx.ellipse(0, -6, 20, 14, 0, Math.PI, Math.PI * 2); ctx.stroke();
     ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.beginPath(); ctx.ellipse(-7, -11, 4, 3, -0.4, 0, Math.PI * 2); ctx.fill();
     ctx.save(); ctx.shadowColor = eyeColor; ctx.shadowBlur = 12;
     ctx.fillStyle = eyeColor;
     ctx.beginPath(); ctx.ellipse(-5, -11, 3.4, 4.2, 0, 0, Math.PI * 2); ctx.fill();
     ctx.beginPath(); ctx.ellipse(5, -11, 3.4, 4.2, 0, 0, Math.PI * 2); ctx.fill(); ctx.restore();
     ctx.fillStyle = '#1a1a2e';
     ctx.beginPath(); ctx.ellipse(-5, -11, 1.3, 2.8, 0, 0, Math.PI * 2); ctx.fill();
     ctx.beginPath(); ctx.ellipse(5, -11, 1.3, 2.8, 0, 0, Math.PI * 2); ctx.fill();
     ctx.strokeStyle = flash ? '#FFFFFF' : '#4A0F1C'; ctx.lineWidth = 1.5;
     ctx.beginPath(); ctx.moveTo(0, -20); ctx.lineTo(0, -27); ctx.stroke();
     var antPulse = 0.6 + 0.4 * Math.sin(this.lightPhase * 1.5);
     ctx.globalAlpha = antPulse; ctx.fillStyle = lightColor;
     ctx.beginPath(); ctx.arc(0, -29, 2.5, 0, Math.PI * 2); ctx.fill(); ctx.globalAlpha = 1; ctx.restore();
     if (frozen) {
         ctx.save(); ctx.globalAlpha = 0.35; ctx.fillStyle = '#7FD8FF';
         ctx.beginPath(); ctx.arc(x, y + bob, 34, 0, Math.PI * 2); ctx.fill(); ctx.restore();
     }
     var pct = this.hp / this.maxHp; var bw = 70, bh = 7; var bx = x - bw / 2, by = y - 42;
     ctx.fillStyle = 'rgba(0,0,0,0.6)'; fillRoundRect(ctx, bx - 2, by - 2, bw + 4, bh + 4, (bh + 4) / 2);
     ctx.fillStyle = pct > 0.5 ? '#4CAF50' : pct > 0.25 ? '#FFB347' : '#E63946';
     ctx.save(); roundRectPath(ctx, bx, by, bw, bh, bh / 2); ctx.clip(); ctx.fillRect(bx, by, bw * pct, bh); ctx.restore();
     ctx.strokeStyle = 'rgba(255,255,255,0.35)'; ctx.lineWidth = 1;
     strokeRoundRect(ctx, bx, by, bw, bh, bh / 2);
     if (!this.fleeing) {
         ctx.fillStyle = 'rgba(255,255,255,0.7)'; ctx.font = 'bold 10px ' + FONT;
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillText(Math.ceil(this.fleeTimer) + 's', x, by - 8);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     }
 };
 
 // ===== MEGA WORM BOSS =====
 function MegaWorm(playerX, y) {
     this.holes = [{x: playerX - 70}, {x: playerX + 70}];
     this.x = this.holes[0].x; this.y = GROUND_Y + 100;
     this.targetX = this.x; this.targetY = this.y;
     this.hp = 3000; this.maxHp = 3000; this.alive = true;
     this.phase = 'intro_rise'; this.phaseT = 0;
     this.hitFlash = 0; this.time = 0;
     this.segmentSize = 40; this.segments = [];
     for (var i = 0; i < 10; i++) this.segments.push({ x: this.x, y: this.y + i * 40 });
     this.rubble = [];
     this.attackTimer = 0;
     this.activeHole = 0;
     this.bossBarFill = 0;
     this.archHit = false;
 }
 MegaWorm.prototype.update = function(dt, player) {
     if (this.hitFlash > 0) this.hitFlash -= dt;
     this.time += dt;
     this.phaseT += dt;
 
     var headSpeed = 600;
     var dx = this.targetX - this.x;
     var dy = this.targetY - this.y;
     var dist = Math.sqrt(dx*dx + dy*dy);
     if (dist > 0) {
         var move = Math.min(dist, headSpeed * dt);
         this.x += (dx / dist) * move;
         this.y += (dy / dist) * move;
     }
     this.x = damp(this.x, this.targetX, 10, dt);
     this.y = damp(this.y, this.targetY, 10, dt);
 
     for (var i = 0; i < this.segments.length; i++) {
         var target = i === 0 ? { x: this.x, y: this.y } : this.segments[i-1];
         var sdx = target.x - this.segments[i].x;
         var sdy = target.y - this.segments[i].y;
         var sdist = Math.sqrt(sdx*sdx + sdy*sdy);
         if (sdist > this.segmentSize) {
             var smove = Math.min(sdist - this.segmentSize, headSpeed * 1.5 * dt);
             this.segments[i].x += (sdx / sdist) * smove;
             this.segments[i].y += (sdy / sdist) * smove;
         }
     }
 
     for (var i = this.rubble.length - 1; i >= 0; i--) {
         var r = this.rubble[i];
         r.x += r.vx * dt * 60;
         r.y += r.vy * dt * 60;
         r.vy += 0.6 * dt * 60;
         r.life -= dt;
         if (r.life <= 0 || r.y > GROUND_Y + 40) this.rubble.splice(i, 1);
     }
 
     switch(this.phase) {
         case 'intro_rise':
             this.targetX = this.holes[0].x;
             this.targetY = GROUND_Y - 250;
             if (this.phaseT % 0.1 < 0.02) this.spawnRubble();
             if (this.phaseT > 2.0) { this.phase = 'intro_charge'; this.phaseT = 0; }
             break;
         case 'intro_charge':
             this.targetY = GROUND_Y - 250 + Math.sin(this.phaseT * 10) * 20;
             this.bossBarFill = clamp01(this.phaseT / 3.5);
             if (this.phaseT > 3.5) { this.phase = 'intro_explosion'; this.phaseT = 0; }
             break;
         case 'intro_explosion':
             if (this.phaseT > 0.5) { this.phase = 'arch_to_right'; this.phaseT = 0; }
             break;
         case 'arch_to_right':
             var t = clamp01(this.phaseT / 1.5);
             this.targetX = lerp(this.holes[0].x, this.holes[1].x, t);
             this.targetY = GROUND_Y + 150 - Math.sin(t * Math.PI) * 450;
             if (this.phaseT > 1.5) { this.phase = 'emerge_right'; this.phaseT = 0; }
             break;
         case 'emerge_right':
             this.targetX = this.holes[1].x;
             this.targetY = GROUND_Y - 250;
             if (this.phaseT % 0.1 < 0.02) this.spawnRubble();
             if (this.phaseT > 0.6) { this.phase = 'vulnerable'; this.phaseT = 0; this.activeHole = 1; }
             break;
         case 'vulnerable':
             this.targetX = this.holes[this.activeHole].x;
             this.targetY = GROUND_Y - 250 + Math.sin(this.time * 3) * 20;
             if (this.phaseT > 15) {
                 this.phase = this.activeHole === 1 ? 'dive_right' : 'dive_left';
                 this.phaseT = 0;
             }
             break;
         case 'dive_right':
             this.targetY = GROUND_Y + 150;
             if (this.phaseT > 0.6) { this.phase = 'arch_to_left'; this.phaseT = 0; }
             break;
         case 'arch_to_left':
             var t2 = clamp01(this.phaseT / 1.5);
             this.targetX = lerp(this.holes[1].x, this.holes[0].x, t2);
             this.targetY = GROUND_Y + 150 - Math.sin(t2 * Math.PI) * 450;
             if (this.phaseT > 1.5) { this.phase = 'emerge_left'; this.phaseT = 0; }
             break;
         case 'emerge_left':
             this.targetX = this.holes[0].x;
             this.targetY = GROUND_Y - 250;
             if (this.phaseT % 0.1 < 0.02) this.spawnRubble();
             if (this.phaseT > 0.6) { this.phase = 'vulnerable'; this.phaseT = 0; this.activeHole = 0; }
             break;
         case 'dive_left':
             this.targetY = GROUND_Y + 150;
             if (this.phaseT > 0.6) { this.phase = 'arch_to_right'; this.phaseT = 0; }
             break;
     }
     return null;
 };
 MegaWorm.prototype.takeDamage = function(dmg) {
     if (this.phase !== 'vulnerable') return;
     this.hp -= dmg; this.hitFlash = 0.12;
     if (this.hp <= 0 && this.alive) { this.hp = 0; this.alive = false; }
 };
 MegaWorm.prototype.getBounds = function() {
     return { x: this.x - 20, y: this.y - 20, w: 40, h: 40 };
 };
 MegaWorm.prototype.getAllBounds = function() {
     var bounds = [];
     if (this.y < GROUND_Y + 20) bounds.push({ x: this.x - 20, y: this.y - 20, w: 40, h: 40 });
     for (var i = 0; i < this.segments.length; i++) {
         var seg = this.segments[i];
         if (seg.y < GROUND_Y + 20) bounds.push({ x: seg.x - 20, y: seg.y - 20, w: 40, h: 40 });
     }
     return bounds;
 };
 MegaWorm.prototype.rebaseToGround = function(newGroundY) {
     var dy = newGroundY - GROUND_Y;
     if (dy === 0) return;
     this.y += dy;
     this.targetY += dy;
     for (var i = 0; i < this.segments.length; i++) {
         this.segments[i].y += dy;
     }
     for (var j = 0; j < this.rubble.length; j++) {
         this.rubble[j].y += dy;
     }
     // Holes are drawn at GROUND_Y at render time — no rebasing needed for them.
 };
 MegaWorm.prototype.spawnRubble = function() {
     // Emit rubble from the base of the active hole, not the head
     var holeX = this.holes[this.activeHole].x;
     for (var i = 0; i < 5; i++) {
         this.rubble.push({
             x: holeX + rand(-25, 25),
             y: GROUND_Y,
             vx: rand(-8, 8),
             vy: rand(-15, -5),
             color: Math.random() < 0.5 ? '#8B4513' : '#4CAF50',
             size: rand(10, 18),
             life: 1.2
         });
     }
 };
 MegaWorm.prototype.draw = function(ctx, ox, oy) {
     for (var i = 0; i < this.holes.length; i++) {
         var h = this.holes[i];
         var hx = h.x - ox, hy = GROUND_Y - oy;
         var pulse = 1 + Math.sin(this.time * 5 + i * Math.PI) * 0.08;
         ctx.fillStyle = '#1a1a2e';
         ctx.beginPath();
         ctx.ellipse(hx, hy, 50 * pulse, 20 * pulse, 0, 0, Math.PI * 2);
         ctx.fill();
         ctx.strokeStyle = '#3A1A12'; ctx.lineWidth = 3;
         ctx.stroke();
         ctx.save(); ctx.globalAlpha = 0.24 + Math.sin(this.time * 4 + i) * 0.1;
         ctx.strokeStyle = '#81FFAA'; ctx.lineWidth = 3; ctx.beginPath();
         ctx.ellipse(hx, hy, 59 + Math.sin(this.time * 3 + i) * 4, 25 + Math.sin(this.time * 3 + i) * 2, 0, 0, Math.PI*2); ctx.stroke();
         if (this.activeHole === i && this.phase === 'vulnerable') {
             ctx.strokeStyle = '#FFE66D'; ctx.lineWidth = 2; ctx.setLineDash([7,5]);
             ctx.beginPath(); ctx.ellipse(hx, hy, 68, 30, 0, 0, Math.PI*2); ctx.stroke(); ctx.setLineDash([]);
         }
         ctx.restore();
     }
     for (var i = 0; i < this.rubble.length; i++) {
         var r = this.rubble[i];
         ctx.fillStyle = r.color;
         ctx.globalAlpha = Math.min(1, r.life * 2);
         ctx.fillRect(r.x - ox - r.size/2, r.y - oy - r.size/2, r.size, r.size);
         ctx.globalAlpha = 1;
     }
     ctx.save();
     ctx.beginPath();
     ctx.rect(0, 0, W, GROUND_Y);
     ctx.clip();
     for (var i = this.segments.length - 1; i >= 0; i--) {
         var seg = this.segments[i];
         if (seg.y > GROUND_Y + 20) continue;
         var col = i % 2 === 0 ? '#55E779' : '#31C96A';
         var border = '#14583A';
         var sway = Math.sin(this.time * 8 - i * 0.58) * 2.5;
         var radius = Math.max(12, 21 - i * 0.35);
         var sx = seg.x - ox + sway, sy = seg.y - oy;
         var prev = i === 0 ? { x: this.x, y: this.y } : this.segments[i - 1];
         ctx.save(); ctx.translate(sx, sy); ctx.rotate(Math.atan2(seg.y - prev.y, seg.x - prev.x));
         ctx.shadowColor = 'rgba(66,255,130,0.35)'; ctx.shadowBlur = 9;
         var bodyGrad = ctx.createLinearGradient(-radius, -radius, radius, radius);
         bodyGrad.addColorStop(0, '#85FF8A'); bodyGrad.addColorStop(0.58, col); bodyGrad.addColorStop(1, border);
         ctx.fillStyle = this.hitFlash > 0 ? '#FFFFFF' : bodyGrad;
         ctx.beginPath(); ctx.ellipse(0, 0, radius + 3, radius - 2, 0, 0, Math.PI * 2); ctx.fill();
         ctx.shadowBlur = 0; ctx.strokeStyle = border; ctx.lineWidth = 3; ctx.stroke();
         ctx.fillStyle = 'rgba(220,255,180,0.48)'; ctx.beginPath(); ctx.ellipse(-4, -radius/2, radius*0.38, 3, 0, 0, Math.PI*2); ctx.fill();
         ctx.restore();
     }
     if (this.y < GROUND_Y + 20) {
         var hx = this.x - ox, hy = this.y - oy + Math.sin(this.time * 7) * 2;
         var rise = this.phase === 'intro_rise' ? easeOutCubic(clamp01(this.phaseT / 2)) : 1;
         var headScale = 0.78 + rise * 0.22 + Math.sin(this.time * 5) * 0.025;
         ctx.save(); ctx.translate(hx, hy); ctx.scale(headScale, headScale);
         ctx.shadowColor = 'rgba(77,255,126,0.55)'; ctx.shadowBlur = 20;
         var headGrad = ctx.createRadialGradient(-9,-13,3,0,0,34);
         headGrad.addColorStop(0, this.hitFlash > 0 ? '#FFFFFF' : '#C8FF8C');
         headGrad.addColorStop(0.38, this.hitFlash > 0 ? '#FFFFFF' : '#55E779');
         headGrad.addColorStop(1, this.hitFlash > 0 ? '#FFFFFF' : '#11633C');
         ctx.fillStyle = headGrad; ctx.beginPath(); ctx.ellipse(0,0,34,29,Math.sin(this.time*2)*0.06,0,Math.PI*2); ctx.fill();
         ctx.shadowBlur = 0; ctx.strokeStyle = '#103D2C'; ctx.lineWidth = 4; ctx.stroke();
         for (var spine = 0; spine < 5; spine++) {
             var spineX = -20 + spine * 10;
             ctx.fillStyle = '#D6FF8A'; ctx.beginPath(); ctx.moveTo(spineX-4,-19);
             ctx.lineTo(spineX+2,-32-Math.sin(this.time*6+spine)*2); ctx.lineTo(spineX+6,-18); ctx.closePath(); ctx.fill();
         }
         ctx.fillStyle = '#F7FFE6'; ctx.beginPath(); ctx.ellipse(-12,-5,8,10,0,0,Math.PI*2); ctx.ellipse(12,-5,8,10,0,0,Math.PI*2); ctx.fill();
         ctx.fillStyle = '#172126'; ctx.beginPath(); ctx.ellipse(-10,-4,3.3,5,0,0,Math.PI*2); ctx.ellipse(14,-4,3.3,5,0,0,Math.PI*2); ctx.fill();
         ctx.fillStyle='rgba(255,255,255,0.8)'; ctx.beginPath(); ctx.arc(-11,-7,1.5,0,Math.PI*2); ctx.arc(13,-7,1.5,0,Math.PI*2); ctx.fill();
         ctx.strokeStyle='#123D29'; ctx.lineWidth=3; ctx.beginPath(); ctx.arc(0,7,13,0.2,Math.PI-0.2); ctx.stroke();
         ctx.fillStyle='#E9FFF1'; ctx.beginPath(); ctx.moveTo(-8,8); ctx.lineTo(-3,15); ctx.lineTo(1,8); ctx.moveTo(3,8); ctx.lineTo(8,15); ctx.lineTo(11,8); ctx.fill();
         ctx.fillStyle='rgba(255,255,255,0.22)'; ctx.beginPath(); ctx.ellipse(-12,-19,9,3,-0.2,0,Math.PI*2); ctx.fill();
         ctx.restore();
     }
     ctx.restore();
 };
 
 // ===== PLAYER =====
 function Player() {
     this.size = PLAYER_SIZE;
     this.x = 200; this.y = GROUND_Y - this.size;
     this.vy = 0; this.vx = 0; this.grounded = false;
     this.rotation = 0; this.angularSpeed = 0;
     this.coyote = 0; this.buffer = 0;
     this.alive = true; this.hp = PLAYER_MAX_HP; this.invulnTimer = 0;
     this.score = 0; this.best = parseInt(localStorage.getItem('pixelBest')) || 0;
     this.coinCount = 0; this.colorName = 'Yellow'; this.avatarName = 'ball'; this.trailStyle = 'none';
     this.keys = {}; this.fireCooldown = 0; this.ability = 'none';
     this.damageLevel = 1; this.rateLevel = 1; this.moveMode = 'auto';
     this.cameraMinX = 60; this.trail = []; this.trailSpawnTimer = 0;
     this.airJumpsMax = 0; this.airJumpsLeft = 0; this.airJumpCooldown = 0; this.freshJump = false;
     this.dashUnlocked = false; this.dashTimer = 0; this.dashCooldown = 0; this.dashDir = 1;
     this.magnetRadius = 0; this.magnetStrength = 0; this.justJumped = null;
     this.aimDirection = 1;
     this.sprinkles = [];
     for(var i=0; i<10; i++) {
         var a = Math.random()*Math.PI*2;
         var dist = 0.45 + Math.random()*0.3;
         this.sprinkles.push({ a: a, dist: dist, rot: Math.random()*Math.PI });
     }
 }
 Player.prototype.reset = function() {
     this.x = 200; this.y = GROUND_Y - this.size;
     this.vy = 0; this.vx = 0; this.grounded = false;
     this.rotation = 0; this.angularSpeed = 0;
     this.coyote = 0; this.buffer = 0;
     this.alive = true; this.hp = PLAYER_MAX_HP; this.invulnTimer = 0;
     this.score = 0; this.coinCount = 0; this.fireCooldown = 0;
     this.trail = []; this.trailSpawnTimer = 0;
     this.airJumpsLeft = this.airJumpsMax; this.airJumpCooldown = 0; this.freshJump = false;
     this.dashTimer = 0; this.dashCooldown = 0; this.dashDir = 1;
     this.justJumped = null;
     this.aimDirection = 1;
 };
 Player.prototype.jump = function() {
     if (!this.alive) return;
     this.vy = JUMP_FORCE; this.grounded = false; this.coyote = 0; this.buffer = 0;
 };
 Player.prototype.update = function(dt, autoSpeed, inputX, realDt) {
     if (!this.alive) { this.justJumped = null; return; }
     this.justJumped = null;
     if (this.moveMode === 'auto') { this.vx = autoSpeed; this.x += this.vx * dt * 60; }
     else if (this.moveMode === 'free') {
         var moveDir = 0;
         if (inputX & 1) moveDir -= 1;
         if (inputX & 2) moveDir += 1;
         this.vx = moveDir * PLAYER_MOVE_SPEED;
         this.x += this.vx * dt * 60;
         if (this.x < this.cameraMinX) this.x = this.cameraMinX;
         
         if (this.megaWormActive) {
             var leftHole = this.megaWorm.holes[0].x + 20;
             var rightHole = this.megaWorm.holes[1].x - this.size - 20;
             if (this.x < leftHole) this.x = leftHole;
             if (this.x > rightHole) this.x = rightHole;
         }
     } else { this.vx = 0; }
     
     if (this.dashTimer > 0) { this.dashTimer -= dt; if (this.dashTimer < 0) this.dashTimer = 0; this.x += this.dashDir * DASH_SPEED * dt * 60; }
     if (this.dashCooldown > 0) { this.dashCooldown -= dt; if (this.dashCooldown < 0) this.dashCooldown = 0; }
     if (this.grounded) { this.coyote = 0.1; this.airJumpsLeft = this.airJumpsMax; }
     else this.coyote -= dt;
     if (this.buffer > 0) this.buffer -= dt;
     if (this.airJumpCooldown > 0) this.airJumpCooldown -= dt;
     this.vy += GRAVITY * dt * 60;
     if (this.vy > 15) this.vy = 15;
     this.y += this.vy * dt * 60;
     var radius = this.size / 2;
     this.angularSpeed = (Math.abs(this.vx) / radius) * dt * 60 * (this.vx >= 0 ? 1 : -1);
     this.rotation += this.angularSpeed;
     if (this.buffer > 0) {
         if (this.coyote > 0) {
             this.jump(); this.airJumpsLeft = this.airJumpsMax; this.freshJump = false; this.justJumped = 'ground';
         } else if (this.freshJump && this.airJumpsLeft > 0 && this.airJumpCooldown <= 0) {
             this.vy = JUMP_FORCE * AIR_JUMP_FORCE_MULT; this.grounded = false;
             this.airJumpsLeft--; this.airJumpCooldown = AIR_JUMP_COOLDOWN;
             this.freshJump = false; this.buffer = 0; this.justJumped = 'air';
         }
     }
     if (this.buffer <= 0) this.freshJump = false;
     if (this.invulnTimer > 0) this.invulnTimer -= dt;
     if (this.fireCooldown > 0) this.fireCooldown -= dt;
     if (Math.abs(this.vx) > TRAIL_MIN_SPEED) {
         this.trailSpawnTimer += realDt;
         var spawnInterval = 0.02;
         if (this.trailSpawnTimer >= spawnInterval) {
             this.trailSpawnTimer = 0;
             this.trail.push({ x: this.x + this.size / 2, y: this.y + this.size / 2, life: 1 });
             if (this.trail.length > TRAIL_MAX_GHOSTS) this.trail.splice(0, this.trail.length - TRAIL_MAX_GHOSTS);
         }
     }
     for (var ti = this.trail.length - 1; ti >= 0; ti--) {
         this.trail[ti].life -= realDt * TRAIL_LIFE_DECAY;
         if (this.trail[ti].life <= 0) this.trail.splice(ti, 1);
     }
 };
 Player.prototype.takeDamage = function(dmg) {
     if (!this.alive || this.invulnTimer > 0) return false;
     this.hp -= dmg; this.invulnTimer = PLAYER_INVULN_TIME;
     if (this.hp <= 0) { this.hp = 0; return 'died'; }
     return 'hurt';
 };
 Player.prototype.getFireInterval = function() { var mult = 1 + (this.rateLevel - 1) * PROJ_FIRE_RATE_BONUS; return PROJ_BASE_FIRE_INTERVAL / mult; };
 Player.prototype.getProjectileDamage = function() { var base = this.damageLevel; if (this.ability === 'spiked') return base * 2; return base; };
 Player.prototype.draw = function(ctx, ox, oy, poweredUp, flashing) {
     var cx = this.x - ox + this.size / 2;
     var cy = this.y - oy + this.size / 2;
     var r = this.size / 2;
     if (flashing) { var blink = Math.floor(this.invulnTimer * 16) % 2; if (blink === 0) ctx.globalAlpha = 0.35; }
     if (poweredUp) {
         var pulse = 0.7 + 0.3 * Math.sin(Date.now() * 0.008);
         ctx.save(); ctx.globalAlpha = (ctx.globalAlpha || 1) * 0.35 * pulse;
         ctx.fillStyle = '#FF3D8B'; ctx.beginPath(); ctx.arc(cx, cy, r + 6, 0, Math.PI * 2); ctx.fill();
         ctx.restore();
     }
     if (this.avatarName === 'wheel') this._drawWheel(ctx, cx, cy, r);
     else this._drawBall(ctx, cx, cy, r);
     ctx.globalAlpha = 1;
 };
 Player.prototype._drawBall = function(ctx, cx, cy, r) {
     var key = this.avatarName;
     ctx.save(); ctx.translate(cx, cy); ctx.rotate(this.rotation);
     if (key === 'ball') {
         ctx.fillStyle = '#FFD966'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill();
         ctx.restore(); return;
     }
     switch(key) {
         case 'basketball': { ctx.fillStyle = '#E6552D'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.strokeStyle = '#111'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.stroke(); ctx.beginPath(); ctx.moveTo(-r, 0); ctx.lineTo(r, 0); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, -r); ctx.lineTo(0, r); ctx.stroke(); ctx.beginPath(); ctx.arc(-r*1.1, 0, r*0.95, -Math.PI/2.5, Math.PI/2.5); ctx.stroke(); ctx.beginPath(); ctx.arc(r*1.1, 0, r*0.95, Math.PI - Math.PI/2.5, Math.PI + Math.PI/2.5); ctx.stroke(); break; }
         case 'football': { ctx.fillStyle = '#FFF'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.strokeStyle = '#222'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.stroke(); ctx.fillStyle = '#111'; ctx.beginPath(); for(var i=0; i<5; i++) { var a = -Math.PI/2 + i * 2*Math.PI/5; ctx.lineTo(Math.cos(a)*r*0.38, Math.sin(a)*r*0.38); } ctx.closePath(); ctx.fill(); for(var i=0; i<5; i++) { var a = -Math.PI/2 + i * 2*Math.PI/5; var px = Math.cos(a)*r*0.82; var py = Math.sin(a)*r*0.82; ctx.beginPath(); for(var j=0; j<5; j++) { var a2 = a + j * 2*Math.PI/5 + Math.PI/5; ctx.lineTo(px + Math.cos(a2)*r*0.22, py + Math.sin(a2)*r*0.22); } ctx.closePath(); ctx.fill(); } ctx.strokeStyle = '#222'; ctx.lineWidth = 1.5; for(var i=0; i<5; i++) { var a = -Math.PI/2 + i * 2*Math.PI/5; ctx.beginPath(); ctx.moveTo(Math.cos(a)*r*0.38, Math.sin(a)*r*0.38); ctx.lineTo(Math.cos(a)*r*0.6, Math.sin(a)*r*0.6); ctx.stroke(); } break; }
         case 'volleyball': { ctx.fillStyle = '#FFF'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#1E4D8C'; ctx.beginPath(); ctx.moveTo(0,0); ctx.arc(0, 0, r, -Math.PI/2, Math.PI/6); ctx.fill(); ctx.beginPath(); ctx.moveTo(0,0); ctx.arc(0, 0, r, Math.PI/2, Math.PI*5/6); ctx.fill(); ctx.fillStyle = '#F2C94C'; ctx.beginPath(); ctx.moveTo(0,0); ctx.arc(0, 0, r, -Math.PI/6, Math.PI/2); ctx.fill(); ctx.beginPath(); ctx.moveTo(0,0); ctx.arc(0, 0, r, Math.PI*5/6, Math.PI*3/2); ctx.fill(); ctx.strokeStyle = 'rgba(0,0,0,0.2)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, 0, r*0.8, -Math.PI/2, Math.PI*3/2); ctx.stroke(); break; }
         case 'bowling': { ctx.fillStyle = '#1976D2'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,0.15)'; ctx.beginPath(); ctx.ellipse(-r*0.2, -r*0.2, r*0.6, r*0.3, 0.5, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#0D47A1'; ctx.beginPath(); ctx.arc(-r*0.3, -r*0.3, r*0.12, 0, Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(0, -r*0.4, r*0.12, 0, Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(r*0.3, -r*0.3, r*0.12, 0, Math.PI*2); ctx.fill(); break; }
         case 'pickleball': { ctx.fillStyle = '#A3E22D'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.strokeStyle = '#7DAA22'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, r*0.1, r*0.85, Math.PI*1.1, Math.PI*1.9); ctx.stroke(); ctx.fillStyle = '#7DAA22'; for(var i=0; i<8; i++) { var a = Math.PI + i * Math.PI/7; var px = Math.cos(a)*r*0.5; var py = Math.sin(a)*r*0.5 + r*0.1; ctx.beginPath(); ctx.arc(px, py, r*0.07, 0, Math.PI*2); ctx.fill(); } break; }
         case 'tennis': { ctx.fillStyle = '#D5E82D'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.strokeStyle = '#FFF'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.arc(-r*0.8, 0, r*0.8, -Math.PI/2.5, Math.PI/2.5); ctx.stroke(); ctx.beginPath(); ctx.arc(r*0.8, 0, r*0.8, Math.PI - Math.PI/2.5, Math.PI + Math.PI/2.5); ctx.stroke(); break; }
         case 'golf': { ctx.fillStyle = '#FFF'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#E0E0E0'; for(var row=-2; row<=2; row++) { for(var col=-2; col<=2; col++) { var dx = col * r * 0.3; var dy = row * r * 0.3; if (Math.sqrt(dx*dx + dy*dy) < r*0.85) { ctx.beginPath(); ctx.arc(dx, dy, r*0.08, 0, Math.PI*2); ctx.fill(); } } } break; }
         case 'baseball': { ctx.fillStyle = '#FFF'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.strokeStyle = '#C02020'; ctx.lineWidth = 1.5; ctx.beginPath(); ctx.arc(-r*0.8, 0, r*0.8, -Math.PI/3, Math.PI/3); ctx.stroke(); ctx.beginPath(); ctx.arc(r*0.8, 0, r*0.8, Math.PI*2/3, Math.PI*4/3); ctx.stroke(); break; }
         case 'billiard_1': case 'billiard_2': case 'billiard_3': case 'billiard_4': case 'billiard_5': case 'billiard_6': case 'billiard_7': case 'billiard_8': { var num = parseInt(key.split('_')[1]); var cols = ['#FFD700', '#1976D2', '#E63946', '#9C27B0', '#F77F00', '#388E3C', '#8B4513', '#111']; ctx.fillStyle = cols[num-1]; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#FFF'; ctx.beginPath(); ctx.arc(0, 0, r*0.4, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#111'; ctx.font = 'bold ' + Math.round(r*0.5) + 'px ' + FONT; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(num, 0, 0); break; }
         case 'billiard_9': case 'billiard_10': case 'billiard_11': case 'billiard_12': case 'billiard_13': case 'billiard_14': case 'billiard_15': { var num2 = parseInt(key.split('_')[1]); var cols2 = ['#FFD700', '#1976D2', '#E63946', '#9C27B0', '#F77F00', '#388E3C', '#8B4513']; ctx.fillStyle = '#FFF'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = cols2[num2-9]; ctx.beginPath(); ctx.ellipse(0, 0, r, r*0.5, 0, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#FFF'; ctx.beginPath(); ctx.arc(0, 0, r*0.4, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#111'; ctx.font = 'bold ' + Math.round(r*0.5) + 'px ' + FONT; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText(num2, 0, 0); break; }
         case 'sun': { var grd = ctx.createRadialGradient(0, 0, r*0.5, 0, 0, r*1.5); grd.addColorStop(0, 'rgba(255,200,0,0.8)'); grd.addColorStop(1, 'rgba(255,200,0,0)'); ctx.fillStyle = grd; ctx.beginPath(); ctx.arc(0, 0, r*1.5, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#FFD700'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#FFA000'; ctx.beginPath(); ctx.arc(0, 0, r*0.7, 0, Math.PI*2); ctx.fill(); break; }
         case 'mercury': { ctx.save(); ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.clip(); ctx.fillStyle = '#A9A9A9'; ctx.fillRect(-r, -r, r*2, r*2); ctx.fillStyle = '#888'; ctx.beginPath(); ctx.arc(-r*0.3, -r*0.2, r*0.2, 0, Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(r*0.2, r*0.3, r*0.15, 0, Math.PI*2); ctx.fill(); ctx.restore(); break; }
         case 'venus': { ctx.save(); ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.clip(); ctx.fillStyle = '#E8C87A'; ctx.fillRect(-r, -r, r*2, r*2); ctx.fillStyle = '#D4A050'; ctx.beginPath(); ctx.arc(-r*0.2, -r*0.1, r*0.4, 0, Math.PI*2); ctx.fill(); ctx.restore(); break; }
         case 'earth': { ctx.save(); ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.clip(); ctx.fillStyle = '#1976D2'; ctx.fillRect(-r, -r, r*2, r*2); ctx.fillStyle = '#388E3C'; ctx.beginPath(); ctx.arc(-r*0.2, -r*0.3, r*0.4, 0, Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(r*0.4, r*0.2, r*0.3, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.beginPath(); ctx.ellipse(0, r*0.1, r*0.8, r*0.2, 0, 0, Math.PI*2); ctx.fill(); ctx.restore(); break; }
         case 'moon': { ctx.save(); ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.clip(); ctx.fillStyle = '#D3D3D3'; ctx.fillRect(-r, -r, r*2, r*2); ctx.fillStyle = '#A9A9A9'; ctx.beginPath(); ctx.arc(-r*0.3, -r*0.3, r*0.2, 0, Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(r*0.2, r*0.2, r*0.25, 0, Math.PI*2); ctx.fill(); ctx.restore(); break; }
         case 'mars': { ctx.save(); ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.clip(); ctx.fillStyle = '#C1440E'; ctx.fillRect(-r, -r, r*2, r*2); ctx.fillStyle = '#A83208'; ctx.beginPath(); ctx.ellipse(-r*0.1, -r*0.1, r*0.7, r*0.3, 0.4, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#FFF'; ctx.beginPath(); ctx.ellipse(0, -r*0.9, r*0.4, r*0.1, 0, 0, Math.PI*2); ctx.fill(); ctx.restore(); break; }
         case 'jupiter': { ctx.save(); ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.clip(); ctx.fillStyle = '#D8A87A'; ctx.fillRect(-r, -r, r*2, r*2); ctx.fillStyle = '#9E6B4A'; ctx.beginPath(); ctx.ellipse(0, -r*0.5, r*1.2, r*0.15, 0, 0, Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.ellipse(0, -r*0.15, r*1.2, r*0.2, 0, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#C05030'; ctx.beginPath(); ctx.ellipse(r*0.3, r*0.2, r*0.25, r*0.12, 0, 0, Math.PI*2); ctx.fill(); ctx.restore(); break; }
         case 'saturn': { ctx.save(); ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.clip(); ctx.fillStyle = '#F5DEB3'; ctx.fillRect(-r, -r, r*2, r*2); ctx.restore(); ctx.strokeStyle = '#D2B48C'; ctx.lineWidth = 4; ctx.beginPath(); ctx.ellipse(0, 0, r*1.4, r*0.4, 0.3, 0, Math.PI*2); ctx.stroke(); break; }
         case 'uranus': { ctx.save(); ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.clip(); ctx.fillStyle = '#AFEEEE'; ctx.fillRect(-r, -r, r*2, r*2); ctx.restore(); ctx.strokeStyle = 'rgba(135,206,235,0.5)'; ctx.lineWidth = 2; ctx.beginPath(); ctx.ellipse(0, 0, r*0.3, r*1.1, 0, 0, Math.PI*2); ctx.stroke(); break; }
         case 'neptune': { ctx.save(); ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.clip(); ctx.fillStyle = '#4169E1'; ctx.fillRect(-r, -r, r*2, r*2); ctx.fillStyle = '#1E90FF'; ctx.beginPath(); ctx.arc(-r*0.2, -r*0.2, r*0.3, 0, Math.PI*2); ctx.fill(); ctx.restore(); break; }
         case 'penny': { ctx.fillStyle = '#B87333'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#8B5A2B'; ctx.beginPath(); ctx.arc(0, 0, r*0.8, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#B87333'; ctx.beginPath(); ctx.arc(0, 0, r*0.6, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#8B5A2B'; ctx.font = 'bold ' + Math.round(r*0.4) + 'px ' + FONT; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('1¢', 0, 0); break; }
         case 'nickel': { ctx.fillStyle = '#C0C0C0'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#A9A9A9'; ctx.beginPath(); ctx.arc(0, 0, r*0.8, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#C0C0C0'; ctx.beginPath(); ctx.arc(0, 0, r*0.6, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#666'; ctx.font = 'bold ' + Math.round(r*0.4) + 'px ' + FONT; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('5¢', 0, 0); break; }
         case 'dime': { ctx.fillStyle = '#C0C0C0'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#A9A9A9'; ctx.beginPath(); ctx.arc(0, 0, r*0.8, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#C0C0C0'; ctx.beginPath(); ctx.arc(0, 0, r*0.6, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#666'; ctx.font = 'bold ' + Math.round(r*0.4) + 'px ' + FONT; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('10¢', 0, 0); break; }
         case 'quarter': { ctx.fillStyle = '#C0C0C0'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#A9A9A9'; ctx.beginPath(); ctx.arc(0, 0, r*0.8, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#C0C0C0'; ctx.beginPath(); ctx.arc(0, 0, r*0.6, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#666'; ctx.font = 'bold ' + Math.round(r*0.4) + 'px ' + FONT; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('25¢', 0, 0); break; }
         case 'gumball': { ctx.fillStyle = '#FF69B4'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#FFF'; ctx.beginPath(); ctx.arc(-r*0.3, -r*0.3, r*0.3, 0, Math.PI*2); ctx.fill(); break; }
         case 'watermelon': { ctx.fillStyle = '#3A7D44'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.strokeStyle = '#1B4D20'; ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(-r*0.6, -r*0.8); ctx.quadraticCurveTo(-r*0.2, 0, -r*0.6, r*0.8); ctx.stroke(); ctx.beginPath(); ctx.moveTo(r*0.6, -r*0.8); ctx.quadraticCurveTo(r*0.2, 0, r*0.6, r*0.8); ctx.stroke(); break; }
         case 'blueberry': { ctx.fillStyle = '#4B0082'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#8A2BE2'; ctx.beginPath(); ctx.arc(-r*0.2, -r*0.2, r*0.3, 0, Math.PI*2); ctx.fill(); break; }
         case 'pizza': { ctx.fillStyle = '#D2691E'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#E63946'; ctx.beginPath(); ctx.arc(0, 0, r*0.85, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#FFD700'; ctx.beginPath(); ctx.arc(0, 0, r*0.75, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#B02A35'; ctx.beginPath(); ctx.arc(-r*0.3, -r*0.3, r*0.15, 0, Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(r*0.3, -r*0.2, r*0.15, 0, Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(0, r*0.4, r*0.15, 0, Math.PI*2); ctx.fill(); break; }
         case 'donut': { ctx.fillStyle = '#D2691E'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#FF69B4'; ctx.beginPath(); ctx.arc(0, 0, r*0.85, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#2E1A10'; ctx.beginPath(); ctx.arc(0, 0, r*0.3, 0, Math.PI*2); ctx.fill(); ctx.lineWidth = 2; var colors = ['#FFF', '#00FFFF', '#FF00FF', '#FFFF00']; for(var i=0; i<this.sprinkles.length; i++) { var sp = this.sprinkles[i]; var px = Math.cos(sp.a) * r * sp.dist; var py = Math.sin(sp.a) * r * sp.dist; ctx.strokeStyle = colors[i%4]; ctx.beginPath(); ctx.moveTo(px - Math.cos(sp.rot)*3, py - Math.sin(sp.rot)*3); ctx.lineTo(px + Math.cos(sp.rot)*3, py + Math.sin(sp.rot)*3); ctx.stroke(); } break; }
         case 'plate': { ctx.fillStyle = '#FFF'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.strokeStyle = '#DDD'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, 0, r*0.7, 0, Math.PI*2); ctx.stroke(); break; }
         case 'clock': { ctx.fillStyle = '#FFF'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.strokeStyle = '#111'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.stroke(); ctx.lineWidth = 2.5; ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, -r*0.6); ctx.stroke(); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(r*0.4, 0); ctx.stroke(); break; }
         case 'pomegranate': { ctx.fillStyle = '#8B0000'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#5D0A0A'; for(var i=0; i<5; i++) { var a = -Math.PI/2 + (i - 2) * 0.4; ctx.beginPath(); ctx.moveTo(0, -r*0.9); ctx.lineTo(Math.cos(a)*r*0.3, Math.sin(a)*r*0.3 - r*0.7); ctx.lineTo(Math.cos(a)*r*0.4, Math.sin(a)*r*0.4 - r*0.9); ctx.fill(); } break; }
         case 'cd': { ctx.fillStyle = '#C0C0C0'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); for(var i=0; i<6; i++) { var cols = ['#FF0000', '#FFFF00', '#00FF00', '#00FFFF', '#0000FF', '#FF00FF']; ctx.fillStyle = cols[i]; ctx.beginPath(); ctx.moveTo(0,0); ctx.arc(0, 0, r*0.9, i*Math.PI/3, (i+1)*Math.PI/3); ctx.fill(); } ctx.fillStyle = '#C0C0C0'; ctx.beginPath(); ctx.arc(0, 0, r*0.4, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#FFF'; ctx.beginPath(); ctx.arc(0, 0, r*0.15, 0, Math.PI*2); ctx.fill(); break; }
         case 'compass': { ctx.fillStyle = '#C0C0C0'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.strokeStyle = '#888'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(0, 0, r*0.9, 0, Math.PI*2); ctx.stroke(); ctx.fillStyle = '#111'; ctx.font = 'bold ' + Math.round(r*0.25) + 'px ' + FONT; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('N', 0, -r*0.65); ctx.fillText('S', 0, r*0.65); ctx.fillText('E', r*0.65, 0); ctx.fillText('W', -r*0.65, 0); break; }
         case 'button': { ctx.fillStyle = '#E63946'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#111'; ctx.beginPath(); ctx.arc(-r*0.2, -r*0.2, r*0.1, 0, Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(r*0.2, -r*0.2, r*0.1, 0, Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(-r*0.2, r*0.2, r*0.1, 0, Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(r*0.2, r*0.2, r*0.1, 0, Math.PI*2); ctx.fill(); break; }
         case 'orange_slice': { ctx.fillStyle = '#FFA500'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#FFF'; ctx.beginPath(); ctx.arc(0, 0, r*0.9, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#FF8C00'; for(var i=0; i<8; i++) { ctx.beginPath(); ctx.moveTo(0,0); ctx.arc(0, 0, r*0.85, i*Math.PI/4, (i+1)*Math.PI/4); ctx.fill(); } break; }
         case 'orange': { ctx.fillStyle = '#F77F00'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#388E3C'; ctx.beginPath(); ctx.ellipse(0, -r*0.85, r*0.2, r*0.1, 0.5, 0, Math.PI*2); ctx.fill(); break; }
         case 'apple': { ctx.fillStyle = '#E63946'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#388E3C'; ctx.beginPath(); ctx.ellipse(0, -r*0.8, r*0.3, r*0.15, 0.5, 0, Math.PI*2); ctx.fill(); break; }
         case 'cookie': { ctx.fillStyle = '#C89B6B'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#4A2C11'; for(var i=0; i<12; i++) { var a = Math.random()*Math.PI*2; var dist = Math.random()*r*0.8; var sz = r*(0.08 + Math.random()*0.08); ctx.fillRect(Math.cos(a)*dist - sz, Math.sin(a)*dist - sz, sz*2, sz*2); } break; }
         case 'pancake': { ctx.fillStyle = '#D2B48C'; ctx.beginPath(); ctx.ellipse(0, 0, r*0.95, r*0.85, 0, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#A0522D'; ctx.beginPath(); ctx.ellipse(0, r*0.1, r*0.9, r*0.75, 0, 0, Math.PI); ctx.fill(); break; }
         case 'hula_hoop': { ctx.strokeStyle = '#FF69B4'; ctx.lineWidth = r*0.4; ctx.beginPath(); ctx.arc(0, 0, r*0.8, 0, Math.PI*2); ctx.stroke(); break; }
         case 'coconut': { ctx.fillStyle = '#8B5A2B'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI*2); ctx.fill(); ctx.fillStyle = '#2E1A10'; ctx.beginPath(); ctx.arc(-r*0.3, -r*0.1, r*0.15, 0, Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(r*0.3, -r*0.1, r*0.15, 0, Math.PI*2); ctx.fill(); ctx.beginPath(); ctx.arc(0, r*0.3, r*0.15, 0, Math.PI*2); ctx.fill(); break; }
         default: { ctx.fillStyle = '#FFD966'; ctx.beginPath(); ctx.arc(0, 0, r, 0, Math.PI * 2); ctx.fill(); }
     }
     ctx.restore();
 };
 Player.prototype._drawWheel = function(ctx, cx, cy, r) {
     var rimR = r * 0.65;
     ctx.fillStyle = '#1a1a2e'; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI * 2); ctx.fill();
     ctx.fillStyle = '#D8DCE4'; ctx.beginPath(); ctx.arc(cx, cy, rimR, 0, Math.PI * 2); ctx.fill();
     ctx.strokeStyle = 'rgba(60,65,78,0.7)'; ctx.lineWidth = Math.max(1, r*0.05);
     ctx.beginPath(); ctx.arc(cx, cy, rimR, 0, Math.PI * 2); ctx.stroke();
     ctx.save(); ctx.translate(cx, cy); ctx.rotate(this.rotation);
     var hubR = r * 0.22;
     for (var i = 0; i < 5; i++) {
         var a = (i / 5) * Math.PI * 2 - Math.PI / 2;
         var x1 = Math.cos(a) * hubR * 1.05, y1 = Math.sin(a) * hubR * 1.05;
         var x2 = Math.cos(a) * rimR * 0.86, y2 = Math.sin(a) * rimR * 0.86;
         ctx.fillStyle = '#B8C0CC'; ctx.beginPath();
         ctx.moveTo(x1 - 2, y1 - 2); ctx.lineTo(x2 - 1, y2 - 1); ctx.lineTo(x2 + 1, y2 + 1); ctx.lineTo(x1 + 2, y1 + 2);
         ctx.closePath(); ctx.fill();
     }
     ctx.fillStyle = '#6E7684'; ctx.beginPath(); ctx.arc(0, 0, hubR * 1.25, 0, Math.PI * 2); ctx.fill();
     ctx.fillStyle = '#C8D0DC'; ctx.beginPath(); ctx.arc(0, 0, hubR * 0.42, 0, Math.PI * 2); ctx.fill();
     ctx.restore();
 };
 Player.prototype.getBounds = function() { return { x: this.x, y: this.y, w: this.size, h: this.size }; };
 
 // ===== WORLD =====
 function World() {
     this.ground = []; this.platforms = []; this.coins = []; this.spikes = []; this.props = [];
     this.nextX = 0; this.difficulty = 1; this.cameraX = 0;
     this.currentSpeed = SCROLL_START; this.groundY = GROUND_Y;
     this.goalX = null; this.currentBiomeIndex = 0;
 }
 World.prototype.init = function() {
     this.ground = []; this.platforms = []; this.coins = []; this.spikes = []; this.props = [];
     this.nextX = 0; this.difficulty = 1; this.cameraX = 0;
     this.currentSpeed = SCROLL_START; this.groundY = GROUND_Y;
     this.addGround(0, 800); this.nextX = 800;
     for (var i = 0; i < 15; i++) this.genChunk();
 };
 World.prototype.ensureGroundAtX = function(x, buffer) {
     buffer = buffer || 200;
     var has = false;
     for (var i = 0; i < this.ground.length; i++) {
         var g = this.ground[i];
         if (x >= g.x && x <= g.x + g.w) { has = true; break; }
     }
     if (has) return;
     var lastEnd = 0;
     for (var j = 0; j < this.ground.length; j++) {
         var g2 = this.ground[j];
         if (g2.x + g2.w <= x && g2.x + g2.w > lastEnd) lastEnd = g2.x + g2.w;
     }
     this.addGround(lastEnd, x + buffer);
 };
 World.prototype.repositionToGround = function(nY) {
     var dy = nY - this.groundY;
     if (dy === 0) return;
     for (var i = 0; i < this.ground.length; i++) this.ground[i].y += dy;
     for (var j = 0; j < this.platforms.length; j++) this.platforms[j].y += dy;
     for (var k = 0; k < this.coins.length; k++) this.coins[k].y += dy;
     for (var l = 0; l < this.spikes.length; l++) this.spikes[l].y += dy;
     for (var m = 0; m < this.props.length; m++) this.props[m].y += dy;
     this.groundY = nY;
 };
 World.prototype.addGround = function(from, to) { this.ground.push({ x: from, w: to - from, y: GROUND_Y }); };
 World.prototype.addPlatform = function(x, y, w) { this.platforms.push({ x: x, y: y, w: w, h: 14 }); };
 World.prototype.addSpike = function(x) { this.spikes.push({ x: x - SPIKE_W / 2, y: GROUND_Y - SPIKE_H, w: SPIKE_W, h: SPIKE_H }); };
 World.prototype.addPropsForSegment = function(start, end) {
     var len = end - start; if (len < 80) return;
     var count = Math.floor(len / 140);
     for (var i = 0; i < count; i++) {
         var px = start + rand(30, len - 30);
         this.props.push({ x: px, type: this.currentBiomeIndex, scale: rand(0.8, 1.2), y: GROUND_Y });
     }
 };
 World.prototype.isPositionFree = function(x, y, minDist) {
     minDist = minDist || 22;
     for (var i = 0; i < this.coins.length; i++) {
         var c = this.coins[i];
         if (Math.sqrt((c.x - x) * (c.x - x) + (c.y - y) * (c.y - y)) < minDist) return false;
     }
     for (var j = 0; j < this.spikes.length; j++) {
         var s = this.spikes[j]; var buffer = 16;
         if (x + COIN_R + buffer > s.x && x - COIN_R - buffer < s.x + s.w && y + COIN_R + buffer > s.y && y - COIN_R - buffer < s.y + s.h) return false;
     }
     return true;
 };
 World.prototype.addCoin = function(x, y) {
     if (!this.isPositionFree(x, y, 22)) return false;
     var roll = Math.random(); var type = 'normal';
     if (roll < INVINCIBILITY_CHANCE) type = 'invincibility';
     else if (roll < INVINCIBILITY_CHANCE + HEART_CHANCE) type = 'heart';
     this.coins.push({ x: x, y: y, r: COIN_R, collected: false, bob: rand(0, Math.PI * 2), type: type });
     return true;
 };
 World.prototype.getCoinGroupCount = function() {
     var r = Math.random();
     if (r < 0.45) return 1; if (r < 0.65) return 2; if (r < 0.83) return 3; if (r < 0.94) return 4; return 5;
 };
 World.prototype.getSpacingScale = function() {
     var t = (this.currentSpeed - SCROLL_START) / (SCROLL_MAX - SCROLL_START);
     if (t < 0) t = 0; if (t > 1) t = 1;
     return 1 + t * 0.8;
 };
 World.prototype.placeCoinsForSegment = function(segStart, segEnd, allowHigh) {
     var s = this.getSpacingScale(); var padding = 40 * s;
     var usableStart = segStart + padding, usableEnd = segEnd - padding;
     var usableWidth = usableEnd - usableStart; if (usableWidth < 60) return;
     var minSlotWidth = 90 * s;
     var numGroups = Math.max(1, Math.floor(usableWidth / minSlotWidth));
     if (numGroups > 3) numGroups = 3;
     var slotWidth = usableWidth / numGroups;
     for (var g = 0; g < numGroups; g++) {
         var slotStart = usableStart + g * slotWidth;
         var slotCenter = slotStart + slotWidth / 2;
         var isHigh = allowHigh && (g % 2 === 1);
         var baseSpacing = 24 * s;
         var count = this.getCoinGroupCount();
         var maxFit = Math.floor((slotWidth - 20) / baseSpacing);
         if (maxFit < 1) maxFit = 1;
         if (count > maxFit) count = maxFit;
         var totalWidth = (count - 1) * baseSpacing;
         var baseX = slotCenter - totalWidth / 2;
         if (isHigh) {
             for (var i = 0; i < count; i++) {
                 var archOffset = 0;
                 if (count > 2) archOffset = -Math.sin((i / (count - 1)) * Math.PI) * 16;
                 this.addCoin(baseX + i * baseSpacing, HIGH_COIN_Y + archOffset);
             }
         } else {
             for (var j = 0; j < count; j++) this.addCoin(baseX + j * baseSpacing, LOW_COIN_Y);
         }
     }
 };
 World.prototype.genChunk = function() {
     var d = this.difficulty; var s = this.getSpacingScale(); var roll = Math.random();
     var py = GROUND_Y - rand(45 + d * 2, 65 + d * 2);
     var spikeMult = CURRENT_DIFFICULTY === 'easy' ? 0.55 : CURRENT_DIFFICULTY === 'hard' ? 1.6 : 1.0;
     if (roll < 0.42) {
         var start = this.nextX;
         var gEnd = start + rand(80, 130 + d * 2) * s;
         var pStart = gEnd + rand(30, 50) * s;
         var pw = rand(70, 130 + d * 4) * s;
         var pEnd = pStart + pw;
         this.addGround(start, gEnd); this.addPropsForSegment(start, gEnd);
         this.addGround(pEnd, pEnd + 80 * s); this.addPropsForSegment(pEnd, pEnd + 80 * s);
         this.addPlatform(pStart, py, pw);
         if (d > 0.5 && (gEnd - start) > 110 * s && Math.random() < 0.35 * spikeMult) {
             var sx = start + (gEnd - start) / 2; var ok = true;
             for (var pi = 0; pi < this.platforms.length; pi++) { var p = this.platforms[pi]; if (sx + 20 > p.x && sx - 20 < p.x + p.w) { ok = false; break; } }
             if (ok) this.addSpike(sx);
         }
         this.placeCoinsForSegment(start, gEnd, true); this.placeCoinsForSegment(pEnd, pEnd + 80 * s, true);
         this.nextX = pEnd + 80 * s;
     } else if (roll < 0.74) {
         var start2 = this.nextX;
         var seg1Len = rand(80, 120) * s; var gapLen = rand(65, 90) * s; var seg2Len = rand(90, 140) * s;
         var seg1End = start2 + seg1Len; var seg2Start = seg1End + gapLen; var seg2End = seg2Start + seg2Len;
         this.addGround(start2, seg1End); this.addPropsForSegment(start2, seg1End);
         this.addGround(seg2Start, seg2End); this.addPropsForSegment(seg2Start, seg2End);
         if (d > 0.8 && seg2Len > 120 * s && Math.random() < 0.3 * spikeMult) this.addSpike(seg2Start + seg2Len / 2);
         this.placeCoinsForSegment(start2, seg1End, true); this.placeCoinsForSegment(seg2Start, seg2End, true);
         this.nextX = seg2End;
     } else {
         var start3 = this.nextX; var len = rand(90, 150) * s; var end3 = start3 + len;
         this.addGround(start3, end3); this.addPropsForSegment(start3, end3);
         if (d > 1.0 && len > 130 * s && Math.random() < 0.25 * spikeMult) this.addSpike(start3 + len / 2);
         this.placeCoinsForSegment(start3, end3, true);
         this.nextX = end3;
     }
 };
 World.prototype.update = function(diff, speed, dt, playerX, biomeIdx) {
     this.difficulty = diff; this.currentSpeed = speed; this.currentBiomeIndex = biomeIdx;
     this.cameraX = playerX - W * 0.3;
     var viewRight = this.cameraX + W + 800;
     while (this.nextX < viewRight) this.genChunk();
     for (var i = 0; i < this.coins.length; i++) this.coins[i].bob += dt * 3;
     var removeX = this.cameraX - 200;
     this.ground = this.ground.filter(function(g) { return g.x + g.w > removeX; });
     this.platforms = this.platforms.filter(function(p) { return p.x + p.w > removeX; });
     this.coins = this.coins.filter(function(c) { return c.x + c.r > removeX && !c.collected; });
     this.spikes = this.spikes.filter(function(s) { return s.x + s.w > removeX; });
     this.props = this.props.filter(function(p) { return p.x > removeX; });
 };
 World.prototype.collectCoin = function(c) { c.collected = true; };
 
 // ===== LEVEL =====
 function Level(index) {
     this.index = index;
     var def = LEVELS[index];
     this.name = def.name; this.type = def.type; this.boss = !!def.boss; this.wormBoss = !!def.wormBoss;
     this.hint = def.hint || '';
     this.ground = []; this.platforms = []; this.coins = []; this.spikes = []; this.enemies = []; this.props = [];
     this.goalX = def.goalX; this.groundY = GROUND_Y; this.cameraX = 0; this.currentBiomeIndex = 0;
     for (var i = 0; i < def.ground.length; i++) this.ground.push({ x: def.ground[i][0], w: def.ground[i][1], y: GROUND_Y });
     for (var j = 0; j < def.platforms.length; j++) {
         var p = def.platforms[j]; this.platforms.push({ x: p[0], y: GROUND_Y + p[1], w: p[2], h: 14 });
     }
     for (var k = 0; k < def.spikes.length; k++) {
         var sp = def.spikes[k];
         var supported = this.ground.some(function(segment) { return sp - SPIKE_W / 2 >= segment.x && sp + SPIKE_W / 2 <= segment.x + segment.w; });
         if (supported) this.spikes.push({ x: sp - SPIKE_W / 2, y: GROUND_Y - SPIKE_H, w: SPIKE_W, h: SPIKE_H });
     }
     for (var m = 0; m < def.coins.length; m++) {
         var c = def.coins[m]; var cx = c[0], cy = GROUND_Y + c[1];
         var ok = true;
         for (var ci = 0; ci < this.coins.length; ci++) {
             var ex = this.coins[ci].x, ey = this.coins[ci].y;
             if (Math.sqrt((ex - cx) * (ex - cx) + (ey - cy) * (ey - cy)) < 22) { ok = false; break; }
         }
         for (var si = 0; si < this.spikes.length; si++) {
             var s = this.spikes[si]; var buffer = 16;
             if (cx + COIN_R + buffer > s.x && cx - COIN_R - buffer < s.x + s.w && cy + COIN_R + buffer > s.y && cy - COIN_R - buffer < s.y + s.h) { ok = false; break; }
         }
         if (ok) {
             var roll = Math.random(); var type = 'normal';
             if (roll < INVINCIBILITY_CHANCE) type = 'invincibility';
             else if (roll < INVINCIBILITY_CHANCE + HEART_CHANCE) type = 'heart';
             this.coins.push({ x: cx, y: cy, r: COIN_R, collected: false, bob: rand(0, Math.PI * 2), type: type });
         }
     }
     for (var n = 0; n < def.enemies.length; n++) {
         var e = def.enemies[n]; this.enemies.push({ type: e[0], x: e[1], y: GROUND_Y + (e[2] || 0) });
     }
     for (var gi = 0; gi < this.ground.length; gi++) this.addPropsForSegment(this.ground[gi].x, this.ground[gi].x + this.ground[gi].w);
 }
 Level.prototype.addPropsForSegment = function(start, end) {
     if (this.index === 19) return; // No trees in cave
     var len = end - start; if (len < 100) return;
     var count = Math.floor(len / 150);
     for (var i = 0; i < count; i++) {
         var px = start + rand(30, len - 30);
         this.props.push({ x: px, type: 0, scale: rand(0.8, 1.2), y: GROUND_Y });
     }
 };
 Level.prototype.repositionToGround = function(nY) {
     var dy = nY - this.groundY; if (dy === 0) return;
     for (var i = 0; i < this.ground.length; i++) this.ground[i].y += dy;
     for (var j = 0; j < this.platforms.length; j++) this.platforms[j].y += dy;
     for (var k = 0; k < this.coins.length; k++) this.coins[k].y += dy;
     for (var l = 0; l < this.spikes.length; l++) this.spikes[l].y += dy;
     for (var m = 0; m < this.enemies.length; m++) this.enemies[m].y += dy;
     for (var p = 0; p < this.props.length; p++) this.props[p].y += dy;
     this.groundY = nY;
 };
 Level.prototype.update = function(diff, speed, dt, playerX, biomeIdx) {
     this.cameraX = playerX - W * 0.3;
     for (var i = 0; i < this.coins.length; i++) this.coins[i].bob += dt * 3;
 };
 Level.prototype.collectCoin = function(c) { c.collected = true; };
 
 // ===== GAME =====
 var Game = (function() {
     var MENU_START_X, MENU_START_Y, MENU_START_W, MENU_START_H;
     var MENU_OPTIONS_X, MENU_OPTIONS_Y, MENU_OPTIONS_W, MENU_OPTIONS_H;
     var MENU_SETTINGS_X, MENU_SETTINGS_Y, MENU_SETTINGS_W, MENU_SETTINGS_H;
     var OPT_BACK_X, OPT_BACK_Y, OPT_BACK_W, OPT_BACK_H;
     var OPT_GAMEMODE_X, OPT_GAMEMODE_Y, OPT_GAMEMODE_W, OPT_GAMEMODE_H;
     var OPT_SHOP_X, OPT_SHOP_Y, OPT_SHOP_W, OPT_SHOP_H;
     var OPT_BOOSTER_X, OPT_BOOSTER_Y, OPT_BOOSTER_W, OPT_BOOSTER_H;
     var OPT_DAILY_X, OPT_DAILY_Y, OPT_DAILY_W, OPT_DAILY_H;
     var GM_BACK_X, GM_BACK_Y, GM_BACK_W, GM_BACK_H;
     var GM_CARD_W, GM_CARD_H, GM_CARD_Y;
     var LS_BACK_X, LS_BACK_Y, LS_BACK_W, LS_BACK_H;
     var LS_CARD_W, LS_CARD_H, LS_GAP, LS_TOP, LS_COLS;
     var VIC_NEXT_X, VIC_NEXT_Y, VIC_NEXT_W, VIC_NEXT_H;
     var VIC_MENU_X, VIC_MENU_Y, VIC_MENU_W, VIC_MENU_H;
     var SET_BOX_X, SET_BOX_Y, SET_BOX_W, SET_BOX_H;
     var SET_CLOSE_X, SET_CLOSE_Y, SET_CLOSE_W, SET_CLOSE_H;
     var SET_DIFF_BTN_W, SET_DIFF_BTN_H, SET_DIFF_BTN_Y, SET_DIFF_X = [];
     var SHOP_BOX_X, SHOP_BOX_Y, SHOP_BOX_W, SHOP_BOX_H;
     var SHOP_SB_X, SHOP_SB_Y, SHOP_SB_W, SHOP_TAB_H, SHOP_TAB_GAP;
     var SHOP_CLOSE_X, SHOP_CLOSE_Y, SHOP_CLOSE_W, SHOP_CLOSE_H;
     var SHOP_SB_TOTAL_H;
     var CAROUSEL_CX, CAROUSEL_TOP, CENTER_CARD_W, CENTER_CARD_H, CARD_SPACING;
     var ARROW_SIZE, ARROW_Y, ARROW_LEFT_X, ARROW_RIGHT_X;
     var CONV_BTN_X, CONV_BTN_Y, CONV_BTN_W, CONV_BTN_H;
     var ACH_GRID_X, ACH_GRID_Y, ACH_CARD_W, ACH_CARD_H, ACH_GAP;
     var PROMO_CARD_W, PROMO_CARD_H, PROMO_GAP, PROMO_TOP, PROMO_X;
     var PROMO_MODAL_X, PROMO_MODAL_Y, PROMO_MODAL_W, PROMO_MODAL_H;
     var PROMO_MODAL_BUY_X, PROMO_MODAL_BUY_Y, PROMO_MODAL_BUY_W, PROMO_MODAL_BUY_H;
     var PROMO_MODAL_PREV_X, PROMO_MODAL_PREV_Y, PROMO_MODAL_PREV_W, PROMO_MODAL_PREV_H;
     var PROMO_MODAL_CLOSE_X, PROMO_MODAL_CLOSE_Y, PROMO_MODAL_CLOSE_W, PROMO_MODAL_CLOSE_H;
     var PREVIEW_BACK_X, PREVIEW_BACK_Y, PREVIEW_BACK_W, PREVIEW_BACK_H;
     var BOOSTER_PANEL_X, BOOSTER_PANEL_Y, BOOSTER_PANEL_W, BOOSTER_PANEL_H;
     var BOOSTER_CLOSE_X, BOOSTER_CLOSE_Y, BOOSTER_CLOSE_W, BOOSTER_CLOSE_H;
     var BOOSTER_SPIN_X, BOOSTER_SPIN_Y, BOOSTER_SPIN_W, BOOSTER_SPIN_H;
     var WHEEL_CX, WHEEL_CY, WHEEL_R;
     var DAILY_PANEL_X, DAILY_PANEL_Y, DAILY_PANEL_W, DAILY_PANEL_H;
     var DAILY_CLAIM_X, DAILY_CLAIM_Y, DAILY_CLAIM_W, DAILY_CLAIM_H;
     var DAILY_CLOSE_X, DAILY_CLOSE_Y, DAILY_CLOSE_W, DAILY_CLOSE_H;
     var DAILY_CELL_W, DAILY_CELL_H, DAILY_CELL_GAP, DAILY_GRID_TOP, DAILY_COLS;
 
     function recomputeWorldDimensions(screenAspect) {
         var A_MIN = 1.20, A_MAX = 2.60;
         var a = screenAspect;
         if (a < A_MIN) a = A_MIN; if (a > A_MAX) a = A_MAX;
         var DW = 900, DH = 500; var da = DW / DH; var nW, nH;
         if (a >= da) { nH = DH; nW = Math.round(DH * a); } else { nW = DW; nH = Math.round(DW / a); }
         W = nW; H = nH;
         GROUND_Y = H - 80; WATER_LINE_Y = GROUND_Y - 35; LOW_COIN_Y = GROUND_Y - 22; HIGH_COIN_Y = GROUND_Y - 54;
         return { w: nW, h: nH, groundY: GROUND_Y };
     }
     function refreshLayout() {
         MENU_START_X = W/2 - 130; MENU_START_Y = H - 200; MENU_START_W = 260; MENU_START_H = 62;
         MENU_OPTIONS_X = W/2 - 130; MENU_OPTIONS_Y = H - 130; MENU_OPTIONS_W = 260; MENU_OPTIONS_H = 50;
         MENU_SETTINGS_X = W/2 - 100; MENU_SETTINGS_Y = H - 70; MENU_SETTINGS_W = 200; MENU_SETTINGS_H = 48;
         OPT_BACK_X = 30; OPT_BACK_Y = 30; OPT_BACK_W = 120; OPT_BACK_H = 44;
         OPT_GAMEMODE_X = W/2 - 130; OPT_GAMEMODE_Y = H * 0.22; OPT_GAMEMODE_W = 260; OPT_GAMEMODE_H = 50;
         OPT_SHOP_X = W/2 - 130; OPT_SHOP_Y = H * 0.22 + 60; OPT_SHOP_W = 260; OPT_SHOP_H = 50;
         OPT_BOOSTER_X = W/2 - 130; OPT_BOOSTER_Y = H * 0.22 + 120; OPT_BOOSTER_W = 260; OPT_BOOSTER_H = 50;
         OPT_DAILY_X = W/2 - 130; OPT_DAILY_Y = H * 0.22 + 180; OPT_DAILY_W = 260; OPT_DAILY_H = 50;
         GM_BACK_X = 30; GM_BACK_Y = 30; GM_BACK_W = 120; GM_BACK_H = 44;
         GM_CARD_W = 220; GM_CARD_H = 300; GM_CARD_Y = H/2 - GM_CARD_H/2 + 20;
         LS_BACK_X = 30; LS_BACK_Y = 30; LS_BACK_W = 120; LS_BACK_H = 44;
         LS_CARD_W = 150; LS_CARD_H = 88; LS_GAP = 12; LS_TOP = 100; LS_COLS = 4;
         VIC_NEXT_X = W/2 - 130; VIC_NEXT_Y = H/2 + 80; VIC_NEXT_W = 260; VIC_NEXT_H = 56;
         VIC_MENU_X = W/2 - 100; VIC_MENU_Y = H/2 + 150; VIC_MENU_W = 200; VIC_MENU_H = 44;
         SET_BOX_W = 440; SET_BOX_H = 340; SET_BOX_X = W/2 - SET_BOX_W/2; SET_BOX_Y = Math.max(40, (H - SET_BOX_H) / 2);
         SET_CLOSE_X = W/2 - 80; SET_CLOSE_Y = SET_BOX_Y + 270; SET_CLOSE_W = 160; SET_CLOSE_H = 50;
         SET_DIFF_BTN_W = 120; SET_DIFF_BTN_H = 44; SET_DIFF_BTN_Y = SET_BOX_Y + 160;
         var totalDiffW = 3 * SET_DIFF_BTN_W + 2 * 10; var diffStartX = W/2 - totalDiffW/2;
         SET_DIFF_X = [diffStartX, diffStartX + SET_DIFF_BTN_W + 10, diffStartX + 2 * (SET_DIFF_BTN_W + 10)];
         SHOP_BOX_X = 30; SHOP_BOX_Y = 20; SHOP_BOX_W = W - 60; SHOP_BOX_H = H - 40;
         SHOP_SB_W = 150; SHOP_TAB_H = 36; SHOP_TAB_GAP = 4;
         SHOP_SB_X = SHOP_BOX_X + SHOP_BOX_W - SHOP_SB_W - 20;
         SHOP_SB_Y = SHOP_BOX_Y + 80;
         SHOP_SB_TOTAL_H = 7 * (SHOP_TAB_H + SHOP_TAB_GAP);
         SHOP_CLOSE_X = SHOP_SB_X;
         SHOP_CLOSE_Y = Math.min(SHOP_SB_Y + SHOP_SB_TOTAL_H + 12, SHOP_BOX_Y + SHOP_BOX_H - 50);
         SHOP_CLOSE_W = SHOP_SB_W; SHOP_CLOSE_H = 40;
         var cLeft = SHOP_BOX_X + 20; var cRight = SHOP_SB_X - 20; var cWidth = cRight - cLeft;
         CAROUSEL_CX = cLeft + cWidth / 2; CAROUSEL_TOP = SHOP_BOX_Y + 100;
         CENTER_CARD_W = 190; CENTER_CARD_H = 210;
         CARD_SPACING = CENTER_CARD_W + 60; ARROW_SIZE = 48;
         ARROW_Y = CAROUSEL_TOP + CENTER_CARD_H + 20;
         ARROW_LEFT_X = CAROUSEL_CX - 110; ARROW_RIGHT_X = CAROUSEL_CX + 110 - ARROW_SIZE;
         CONV_BTN_W = 200; CONV_BTN_H = 62;
         CONV_BTN_X = cLeft + cWidth/2 - CONV_BTN_W/2; CONV_BTN_Y = SHOP_BOX_Y + 280;
         ACH_GRID_X = SHOP_BOX_X + 30; ACH_GRID_Y = SHOP_BOX_Y + 130; ACH_GAP = 10;
         ACH_CARD_W = (cWidth - ACH_GAP) / 2 - 4; ACH_CARD_H = 58;
         PROMO_X = cLeft; PROMO_TOP = SHOP_BOX_Y + 110; PROMO_GAP = 20;
         PROMO_CARD_W = (cWidth - PROMO_GAP * 2) / 3; PROMO_CARD_H = 290;
         PROMO_MODAL_W = 600; PROMO_MODAL_H = 420;
         PROMO_MODAL_X = W/2 - PROMO_MODAL_W/2; PROMO_MODAL_Y = H/2 - PROMO_MODAL_H/2;
         PROMO_MODAL_BUY_X = PROMO_MODAL_X + 40; PROMO_MODAL_BUY_Y = PROMO_MODAL_Y + PROMO_MODAL_H - 130;
         PROMO_MODAL_BUY_W = PROMO_MODAL_W - 80; PROMO_MODAL_BUY_H = 50;
         PROMO_MODAL_PREV_X = PROMO_MODAL_X + 40; PROMO_MODAL_PREV_Y = PROMO_MODAL_Y + PROMO_MODAL_H - 70;
         PROMO_MODAL_PREV_W = (PROMO_MODAL_W - 100) / 2; PROMO_MODAL_PREV_H = 46;
         PROMO_MODAL_CLOSE_X = PROMO_MODAL_X + PROMO_MODAL_W - 60; PROMO_MODAL_CLOSE_Y = PROMO_MODAL_Y + 10;
         PROMO_MODAL_CLOSE_W = 50; PROMO_MODAL_CLOSE_H = 40;
         PREVIEW_BACK_X = 30; PREVIEW_BACK_Y = 30; PREVIEW_BACK_W = 120; PREVIEW_BACK_H = 44;
         BOOSTER_PANEL_W = 560; BOOSTER_PANEL_H = 480;
         BOOSTER_PANEL_X = W/2 - BOOSTER_PANEL_W/2; BOOSTER_PANEL_Y = H/2 - BOOSTER_PANEL_H/2;
         BOOSTER_CLOSE_X = BOOSTER_PANEL_X + BOOSTER_PANEL_W/2 - 80;
         BOOSTER_CLOSE_Y = BOOSTER_PANEL_Y + BOOSTER_PANEL_H - 60;
         BOOSTER_CLOSE_W = 160; BOOSTER_CLOSE_H = 46;
         WHEEL_CX = W/2; WHEEL_CY = BOOSTER_PANEL_Y + 220; WHEEL_R = 130;
         BOOSTER_SPIN_X = W/2 - 80; BOOSTER_SPIN_Y = BOOSTER_PANEL_Y + BOOSTER_PANEL_H - 110;
         BOOSTER_SPIN_W = 160; BOOSTER_SPIN_H = 46;
         DAILY_PANEL_W = Math.min(700, W - 60); DAILY_PANEL_H = Math.min(500, H - 60);
         DAILY_PANEL_X = W/2 - DAILY_PANEL_W/2; DAILY_PANEL_Y = H/2 - DAILY_PANEL_H/2;
         DAILY_CELL_GAP = 6; DAILY_COLS = 6;
         DAILY_CELL_W = (DAILY_PANEL_W - 60 - (DAILY_COLS - 1) * DAILY_CELL_GAP) / DAILY_COLS;
         DAILY_CELL_H = 42; DAILY_GRID_TOP = DAILY_PANEL_Y + 90;
         DAILY_CLAIM_X = DAILY_PANEL_X + 20; DAILY_CLAIM_Y = DAILY_PANEL_Y + DAILY_PANEL_H - 110;
         DAILY_CLAIM_W = DAILY_PANEL_W - 40; DAILY_CLAIM_H = 50;
         DAILY_CLOSE_X = DAILY_PANEL_X + DAILY_PANEL_W - 60; DAILY_CLOSE_Y = DAILY_PANEL_Y + 15;
         DAILY_CLOSE_W = 45; DAILY_CLOSE_H = 40;
     }
 
     function Game() {
         this.canvas = document.getElementById('gameCanvas');
         this.ctx = this.canvas.getContext('2d');
         this.renderScale = 1;
         this.resize();
         this.sound = new SoundFX();
         this.bank = new Bank();
         CURRENT_DIFFICULTY = this.bank.difficulty;
         this.player = new Player();
         this.particles = new Particles();
         this.world = new World();
         this.state = 'loading';
         this.loadingT = 0;
         this.introT = 0;
         this.introStarted = false;
         if (window.overroll && window.overroll.onIntroStart) {
             var introGame = this;
             window.overroll.onIntroStart(function() { introGame.introStarted = true; introGame.sound.startIntroMusic(); });
         } else this.introStarted = true;
         this.isNewPlayer = window.overrollNewPlayer !== false;
         this.googleConfigured = !!(window.overrollBootstrap && window.overrollBootstrap.configured);
         this.googleAccount = window.overrollBootstrap && window.overrollBootstrap.account || null;
         this.welcomeBusy = false;
         this.welcomeStatus = this.googleAccount ? ('Cloud save connected: ' + this.googleAccount.email) : (this.googleConfigured ? 'Sign in to keep a cloud backup of your progress.' : 'Google sign-in needs setup. You can play and save on this computer.');
         this.gameMode = this.bank.gameMode;
         this.selectedLevel = 0;
         this.score = 0; this.speed = SCROLL_START;
         this.best = this.player.best; this.coinCount = 0;
         this.previousState = 'menu'; this.powerupTimer = 0;
         this.shopTab = 'avatar'; this.displayScore = 0;
         this.coinPops = []; this.floatingTexts = [];
         this.damageFlash = 0; this.shakeTime = 0; this.shakeDuration = SHAKE_DURATION; this.shakeMag = 0;
         this.comboCount = 0; this.comboTimer = 0; this.comboPopTimer = 0;
         this.isTouch = ('ontouchstart' in window) || (navigator.maxTouchPoints > 0);
         this.runTime = 0;
         this.achievementQueue = []; this.currentAchievement = null; this.achievementBannerTimer = 0;
         this.shopAvatarIndex = 0; this.shopAvatarScroll = 0; this.shopAvatarTarget = 0;
         this.shopDefenceIndex = 0; this.shopDefenceScroll = 0; this.shopDefenceTarget = 0;
         this.shopMovementIndex = 0; this.shopMovementScroll = 0; this.shopMovementTarget = 0;
         this.shopTrailIndex = 0; this.shopTrailScroll = 0; this.shopTrailTarget = 0;
         this.shopTabFade = { avatar: 0, defence: 0, movement: 0, trails: 0, achievements: 0, convert: 0, promotions: 0 };
         this.shopOpenProgress = 0;
         this.shopSidebarScrollY = 0;
         this.levelScrollY = 0;
         this.promoModalSet = null; this.promoPreviewSet = null;
         this.promoPreviewScrollY = 0;
         this.achScrollY = 0;
         this.projectiles = []; this.enemyProjectiles = [];
         this.flyers = []; this.floaters = []; this.mega = null; this.megaWorm = null;
         this.wormyGroups = [];
         this.endlessBoss = null; this.nextBossScore = BOSS_INTERVAL;
         this.biomeIndex = 0; this.prevBiomeIndex = 0; this.biomeBlend = 1;
         this.bossBannerTimer = 0; this.levelCompleteTimer = 0;
         this.dayPhase = 0.15; this.time = 0;
         this.timedModeType = 'runner'; this.timedRemaining = 0; this.timedActive = false;
         this.boosterOpen = false; this.boosterSpinning = false; this.boosterSpinTime = 0;
         this.boosterSpinDuration = 4.0; this.boosterSpinAngle = 0;
         this.boosterTargetAngle = 0; this.boosterStartAngle = 0;
         this.boosterResult = 0; this.boosterResultShown = false;
         this.megaSpawnTime = 0;
         this.megaWormActive = false;
         this.megaWormDeathReward = { pts: 55000, coins: 1500 };
         this.dailyRewardPopupOpen = false;
         this.applyBankToPlayer();
         this.stars = [];
         for (var i = 0; i < 80; i++) {
             this.stars.push({ x: rand(0, W), y: rand(0, WATER_LINE_Y - 10), size: Math.random() < 0.25 ? 2 : 1, twinklePhase: rand(0, Math.PI * 2), twinkleSpeed: rand(1.2, 2.8) });
         }
         this.boats = [];
         var boatSpan = W + 400;
         for (var j = 0; j < 6; j++) {
             this.boats.push({ x: (j / 6) * boatSpan + rand(-80, 80), waterY: WATER_LINE_Y + rand(-2, 4), scale: rand(0.7, 1.0), type: randInt(0, 3), phase: rand(0, Math.PI * 2) });
         }
         this.boatSpan = boatSpan;
         this.keys = {}; this.lastTime = 0; this.accum = 0;
         this.bindInput();
         this.world.init();
         this.resetGame();
         // resetGame returns to the main menu; restore the loading state after reset.
         this.state = 'loading'; this.loadingT = 0;
         if (this.introStarted) this.sound.startIntroMusic();
         // Daily reward popup
         var dr = this.bank.checkDailyReward();
         this.pendingDailyReward = !!dr.canClaim;
         this.loop = this.loop.bind(this);
         requestAnimationFrame(this.loop);
     }
 
     Game.prototype.getAvailableSkinKeys = function() {
         var keys = AVATAR_KEYS.slice();
         for (var i = 0; i < this.bank.ownedAvatars.length; i++) {
             var k = this.bank.ownedAvatars[i];
             if (keys.indexOf(k) === -1) keys.push(k);
         }
         var now = Date.now();
         for (var setKey in DIAMOND_SETS) {
             if (DIAMOND_SETS.hasOwnProperty(setKey)) {
                 if (this.bank.skinTrials[setKey] && this.bank.skinTrials[setKey] > now) {
                     var setDef = DIAMOND_SETS[setKey];
                     for (var j = 0; j < setDef.keys.length; j++) {
                         if (keys.indexOf(setDef.keys[j]) === -1) keys.push(setDef.keys[j]);
                     }
                 }
             }
         }
         return keys;
     };
 
     Game.prototype.applyBankToPlayer = function() {
         var p = this.player;
         p.colorName = 'Yellow';
         p.avatarName = this.bank.hasAccessTo(this.bank.currentAvatar) ? this.bank.currentAvatar : 'ball';
         p.trailStyle = this.bank.currentTrail;
         p.ability = this.bank.currentAbility;
         p.damageLevel = this.bank.damageLevel;
         p.rateLevel = this.bank.rateLevel;
         p.airJumpsMax = this.bank.jumpLevel;
         if (p.airJumpsLeft > p.airJumpsMax) p.airJumpsLeft = p.airJumpsMax;
         p.dashUnlocked = this.bank.dashOwned;
         var ml = this.bank.magnetLevel;
         p.magnetRadius = ml === 0 ? 0 : (ml === 1 ? 60 : ml === 2 ? 95 : 140);
         p.magnetStrength = ml === 0 ? 0 : (1.5 + (ml - 1) * 0.8);
     };
 
     Game.prototype.resize = function() {
         var vw = window.innerWidth, vh = window.innerHeight;
         var screenAspect = vw / vh;
         var oldGroundY = GROUND_Y;
         var oldPlayerOffset = null;
         if (this.player) oldPlayerOffset = this.player.y - (oldGroundY - this.player.size);
         // Capture OLD GROUND_Y BEFORE recompute changes it — needed for worm rebase.
         var prevGroundY = GROUND_Y;
         var dims = recomputeWorldDimensions(screenAspect);
         if (this.world && this.world.groundY !== undefined) this.world.repositionToGround(dims.groundY);
         if (this.megaWorm) {
             // Restore GROUND_Y temporarily so rebaseToGround computes dy correctly.
             var newGY = GROUND_Y;
             GROUND_Y = prevGroundY;
             this.megaWorm.rebaseToGround(newGY);
             GROUND_Y = newGY;
         }
         if (this.player) { var baseY = dims.groundY - this.player.size; this.player.y = baseY + (oldPlayerOffset !== null ? oldPlayerOffset : 0); }
         if (this.stars) for (var i = 0; i < this.stars.length; i++) { if (this.stars[i].y > WATER_LINE_Y) this.stars[i].y = rand(0, WATER_LINE_Y - 10); }
         if (this.boats) for (var j = 0; j < this.boats.length; j++) { this.boats[j].waterY = WATER_LINE_Y + rand(-2, 4); }
         this.boatSpan = W + 400;
         var gameAspect = W / H; var displayW, displayH;
         if (screenAspect > gameAspect) { displayH = vh; displayW = Math.round(vh * gameAspect); } else { displayW = vw; displayH = Math.round(vw / gameAspect); }
         var dpr = window.devicePixelRatio || 1;
         var physicalW = Math.round(displayW * dpr); var physicalH = Math.round(displayH * dpr);
         var maxPixels = 4500000;
         if (physicalW * physicalH > maxPixels) {
             var sd = Math.sqrt(maxPixels / (physicalW * physicalH));
             physicalW = Math.round(physicalW * sd); physicalH = Math.round(physicalH * sd);
         }
         this.canvas.width = physicalW; this.canvas.height = physicalH;
         this.canvas.style.width = displayW + 'px'; this.canvas.style.height = displayH + 'px';
         this.renderScale = physicalW / W;
         this.ctx.setTransform(this.renderScale, 0, 0, this.renderScale, 0, 0);
         this.ctx.imageSmoothingEnabled = true; this.ctx.imageSmoothingQuality = 'high';
         refreshLayout();
     };
 
     Game.prototype.getCanvasCoords = function(e) {
         var rect = this.canvas.getBoundingClientRect();
         var scaleX = W / rect.width, scaleY = H / rect.height;
         var cx, cy;
         if (e.touches && e.touches.length > 0) { cx = e.touches[0].clientX; cy = e.touches[0].clientY; }
         else { cx = e.clientX; cy = e.clientY; }
         return { x: (cx - rect.left) * scaleX, y: (cy - rect.top) * scaleY };
     };
 
     Game.prototype.bindInput = function() {
         var self = this;
         window.addEventListener('keydown', function(e) {
             var key = e.key;
             self.keys[key] = true; self.player.keys = self.keys;
             if (key === ' ' || key === 'ArrowUp' || key === 'w' || key === 'W') {
                 e.preventDefault();
                 if (!e.repeat) {
                     if (self.state === 'playing' && self.megaWorm && self.megaWorm.alive) {
                         self.player.aimDirection *= -1;
                     } else if (self.state === 'playing' || self.state === 'menu' || self.state === 'gameover') {
                         self.onJump();
                     }
                 }
             }
             if (key === 'r' || key === 'R') { e.preventDefault(); if (self.state === 'gameover' || self.state === 'victory') self.restartLevel(); }
             if (key === 't' || key === 'T') { e.preventDefault(); if (self.state === 'gameover' || self.state === 'victory') self.goToTitle(); }
             if (key === 'p' || key === 'P') { e.preventDefault(); self.togglePause(); }
             if (key === 'Shift' && !e.repeat) { if (self.state === 'playing') self.tryDash(); }
             if (key === 's' || key === 'S') {
                 e.preventDefault();
                 if (self.state === 'menu') self.openSettings();
                 else if (self.state === 'playing') {
                     if (self.gameMode === 'levels' || self.endlessBoss || (self.gameMode === 'timed' && self.timedModeType === 'platformer') || self.megaWorm) self.fireProjectile();
                 }
                 else if (self.state === 'paused' || self.state === 'gameover') self.openSettings();
             }
             if (key === 'ArrowLeft' && self.state === 'shop') { e.preventDefault(); self.shopNavigate(-1); }
             if (key === 'ArrowRight' && self.state === 'shop') { e.preventDefault(); self.shopNavigate(1); }
             if (key === 'Escape') {
                 if (self.state === 'shop') self.closeShop();
                 else if (self.state === 'settings') self.closeSettings();
                 else if (self.state === 'gamemode') self.state = 'options';
                 else if (self.state === 'levelselect') self.state = 'gamemode';
                 else if (self.state === 'options') self.state = 'menu';
                 else if (self.state === 'paused') self.togglePause();
                 else if (self.state === 'promo-preview') self.state = 'shop';
                 else if (self.boosterOpen) self.closeBooster();
                 else if (self.state === 'daily-reward') self.closeDailyPopup();
             }
         });
         window.addEventListener('keyup', function(e) { self.keys[e.key] = false; self.player.keys = self.keys; });
         this.canvas.addEventListener('click', function(e) {
             e.preventDefault();
             self.handleClick(e);
         });
         this.canvas.addEventListener('touchstart', function(e) {
             e.preventDefault();
             if (self.state === 'playing' && self.isTouch) {
                 var touch = e.touches[0];
                 var p = self.getCanvasCoords(touch);
                 if (Math.hypot(p.x - (W - 70), p.y - (H - 70)) < 55) { self.onJump(); return; }
                 if (self.player.dashUnlocked && Math.hypot(p.x - (W - 150), p.y - (H - 50)) < 40) { self.tryDash(); return; }
                 if (self.player.moveMode !== 'auto') {
                     if (Math.hypot(p.x - 70, p.y - (H - 70)) < 45) { self.keys['ArrowLeft'] = true; return; }
                     if (Math.hypot(p.x - 160, p.y - (H - 70)) < 45) { self.keys['ArrowRight'] = true; return; }
                 }
                 if (p.x > W / 2) { self.onJump(); return; }
             }
             self.handleClick(e);
         }, { passive: false });
         this.canvas.addEventListener('touchend', function(e) {
             e.preventDefault();
             if (e.touches.length === 0) { self.keys['ArrowLeft'] = false; self.keys['ArrowRight'] = false; }
         }, { passive: false });
         this.canvas.addEventListener('wheel', function(e) {
             if (self.state === 'levelselect') {
                 var lp = self.getCanvasCoords(e);
                 if (lp.y >= LS_TOP - 10 && lp.y <= H - 18) {
                     e.preventDefault();
                     var contentHeight = Math.ceil(LEVELS.length / LS_COLS) * (LS_CARD_H + LS_GAP) - LS_GAP;
                     var viewportHeight = H - LS_TOP - 35;
                     self.levelScrollY = Math.max(0, Math.min(Math.max(0, contentHeight - viewportHeight), self.levelScrollY + e.deltaY * (e.deltaMode === 1 ? 18 : e.deltaMode === 2 ? viewportHeight : 0.65)));
                 }
             } else if (self.state === 'shop') {
                 var p = self.getCanvasCoords(e);
                 if (p.x >= SHOP_SB_X && p.x <= SHOP_SB_X + SHOP_SB_W) {
                     e.preventDefault();
                     self.shopSidebarScrollY = Math.max(-50, Math.min(20, self.shopSidebarScrollY + (e.deltaY > 0 ? 20 : -20)));
                     return;
                 }
                 if (p.x >= CAROUSEL_CX - 320 && p.x <= CAROUSEL_CX + 320 && p.y >= CAROUSEL_TOP - 60 && p.y <= ARROW_Y + 120) {
                     e.preventDefault();
                     self.shopNavigate(e.deltaY > 0 ? 1 : -1);
                     return;
                 }
                 if (self.shopTab === 'achievements') {
                     e.preventDefault();
                     self.achScrollY = Math.max(0, Math.min(400, self.achScrollY + (e.deltaY > 0 ? 30 : -30)));
                 }
             } else if (self.state === 'promo-preview') {
                 e.preventDefault();
                 self.promoPreviewScrollY = Math.max(0, Math.min(400, self.promoPreviewScrollY + (e.deltaY > 0 ? 30 : -30)));
             }
         }, { passive: false });
         window.addEventListener('resize', function() { self.resize(); });
     };
 
     Game.prototype.getGamemodeCardLayout = function() {
         var cards = [{ key: 'endless' }, { key: 'levels' }, { key: 'timed' }];
         var n = cards.length; var cw = 200, gap = 20; var total = n * cw + (n - 1) * gap;
         var startX = W / 2 - total / 2;
         for (var i = 0; i < n; i++) { cards[i].x = startX + i * (cw + gap); cards[i].w = cw; }
         return cards;
     };
 
     Game.prototype.handleClick = function(e) {
         var p = this.getCanvasCoords(e);
         if (this.state === 'welcome') {
             var loginX = W/2 - 190, actionY = H * 0.59, loginY = H * 0.75;
             if (hitTest(p.x, p.y, loginX, actionY, 380, 54)) {
                 if (this.googleAccount) {
                     var save = localSavePayload();
                     if (window.overroll && window.overroll.queueLocalSave) window.overroll.queueLocalSave(save);
                     if (window.overroll && window.overroll.queueCloudSave) window.overroll.queueCloudSave(save);
                     this.welcomeStatus = 'Cloud save sync queued for ' + this.googleAccount.email + '.';
                 } else this.signInForCloudSave();
                 return;
             }
             if (hitTest(p.x, p.y, W/2 - 125, loginY, 250, 48)) {
                 localStorage.setItem('rrWelcomeSeen', 'true');
                 if (this.pendingDailyReward) {
                     this.pendingDailyReward = false; this.previousState = 'menu'; this.state = 'daily-reward';
                 } else this.state = 'menu';
                 this.sound.play('click'); return;
             }
             return;
         }
         if (this.boosterOpen) { this.handleBoosterClick(p); return; }
         if (this.state === 'promo-preview') {
             if (hitTest(p.x, p.y, PREVIEW_BACK_X, PREVIEW_BACK_Y, PREVIEW_BACK_W, PREVIEW_BACK_H)) { this.state = 'shop'; this.sound.play('click'); return; }
             return;
         }
         if (this.state === 'daily-reward') { this.handleDailyClick(p); return; }
         if (this.state === 'menu') {
             if (hitTest(p.x, p.y, MENU_START_X, MENU_START_Y, MENU_START_W, MENU_START_H)) { this.startGame(); return; }
             if (hitTest(p.x, p.y, MENU_OPTIONS_X, MENU_OPTIONS_Y, MENU_OPTIONS_W, MENU_OPTIONS_H)) { this.state = 'options'; this.sound.play('click'); return; }
             if (hitTest(p.x, p.y, MENU_SETTINGS_X, MENU_SETTINGS_Y, MENU_SETTINGS_W, MENU_SETTINGS_H)) { this.openSettings(); this.sound.play('click'); return; }
             return;
         }
         if (this.state === 'options') {
             if (hitTest(p.x, p.y, OPT_BACK_X, OPT_BACK_Y, OPT_BACK_W, OPT_BACK_H)) { this.state = 'menu'; this.sound.play('click'); return; }
             if (hitTest(p.x, p.y, OPT_GAMEMODE_X, OPT_GAMEMODE_Y, OPT_GAMEMODE_W, OPT_GAMEMODE_H)) { this.state = 'gamemode'; this.sound.play('click'); return; }
             if (hitTest(p.x, p.y, OPT_SHOP_X, OPT_SHOP_Y, OPT_SHOP_W, OPT_SHOP_H)) { this.openShop(); return; }
             if (hitTest(p.x, p.y, OPT_BOOSTER_X, OPT_BOOSTER_Y, OPT_BOOSTER_W, OPT_BOOSTER_H)) { this.openBooster(); return; }
             if (hitTest(p.x, p.y, OPT_DAILY_X, OPT_DAILY_Y, OPT_DAILY_W, OPT_DAILY_H)) { this.state = 'daily-reward'; this.previousState = 'options'; this.sound.play('click'); return; }
             return;
         }
         if (this.state === 'gamemode') {
             if (hitTest(p.x, p.y, GM_BACK_X, GM_BACK_Y, GM_BACK_W, GM_BACK_H)) { this.state = 'options'; this.sound.play('click'); return; }
             var cards = this.getGamemodeCardLayout();
             for (var ci = 0; ci < cards.length; ci++) {
                 var card = cards[ci];
                 if (hitTest(p.x, p.y, card.x, GM_CARD_Y, card.w, GM_CARD_H)) {
                     if (card.key === 'endless') { this.gameMode = 'endless'; this.bank.gameMode = 'endless'; this.bank.save(); this.sound.play('click'); return; }
                     if (card.key === 'levels') { this.gameMode = 'levels'; this.bank.gameMode = 'levels'; this.bank.save(); this.sound.play('click'); this.state = 'levelselect'; return; }
                     if (card.key === 'timed') { this.gameMode = 'timed'; this.bank.gameMode = 'timed'; this.bank.save(); this.sound.play('click'); this.startTimed(); return; }
                 }
             }
             return;
         }
         if (this.state === 'levelselect') {
             if (hitTest(p.x, p.y, LS_BACK_X, LS_BACK_Y, LS_BACK_W, LS_BACK_H)) { this.state = 'gamemode'; this.sound.play('click'); return; }
             for (var i = 0; i < LEVELS.length; i++) {
                 var col = i % LS_COLS, row = Math.floor(i / LS_COLS);
                 var totalW = LS_COLS * (LS_CARD_W + LS_GAP) - LS_GAP;
                 var lx = W/2 - totalW / 2 + col * (LS_CARD_W + LS_GAP);
                 var ly = LS_TOP + row * (LS_CARD_H + LS_GAP) - this.levelScrollY;
                 if (p.y >= LS_TOP - 10 && p.y <= H - 25 && hitTest(p.x, p.y, lx, ly, LS_CARD_W, LS_CARD_H)) {
                     if (i === 0 || this.bank.levelsCompleted >= i) { this.selectedLevel = i; this.startLevel(); }
                     else this.sound.play('deny');
                     return;
                 }
             }
             return;
         }
         if (this.state === 'gameover' || this.state === 'victory') {
             if (hitTest(p.x, p.y, VIC_NEXT_X, VIC_NEXT_Y, VIC_NEXT_W, VIC_NEXT_H)) {
                 if (this.state === 'victory' && this.gameMode === 'timed') this.startTimed();
                 else if (this.state === 'victory' && this.selectedLevel < LEVELS.length - 1) { this.selectedLevel++; this.startLevel(); }
                 else if (this.state === 'gameover') this.restartLevel();
                 return;
             }
             if (hitTest(p.x, p.y, VIC_MENU_X, VIC_MENU_Y, VIC_MENU_W, VIC_MENU_H)) { this.goToTitle(); return; }
             return;
         }
         if (this.state === 'paused') { this.togglePause(); return; }
         if (this.state === 'settings') { this.handleSettingsClick(p); return; }
         if (this.state === 'shop') { this.handleShopClick(p); return; }
         if (this.state === 'playing') { this.onJump(); this.sound.play('click'); }
     };
 
     Game.prototype.handleDailyClick = function(p) {
         var dr = this.bank.checkDailyReward();
         if (dr.canClaim && hitTest(p.x, p.y, DAILY_CLAIM_X, DAILY_CLAIM_Y, DAILY_CLAIM_W, DAILY_CLAIM_H)) {
             var claimed = this.bank.claimDailyReward();
             if (claimed) {
                 this.sound.play('achievement');
                 this.floatingTexts.push(new FloatingText(W/2, H/2, 'Claimed: ' + claimed.label, '#FFD966'));
             }
             return;
         }
         if (hitTest(p.x, p.y, DAILY_CLOSE_X, DAILY_CLOSE_Y, DAILY_CLOSE_W, DAILY_CLOSE_H)) {
             this.closeDailyPopup();
             return;
         }
     };
     Game.prototype.closeDailyPopup = function() {
         this.state = this.previousState || 'menu';
         this.sound.play('click');
     };
 
     Game.prototype.openShop = function() {
         this.previousState = this.state; this.state = 'shop'; this.shopTab = 'avatar';
         this.promoModalSet = null; this.promoPreviewSet = null;
         this.shopSidebarScrollY = 0;
         var ai = Math.max(0, this.getAvailableSkinKeys().indexOf(this.bank.currentAvatar));
         this.shopAvatarIndex = ai; this.shopAvatarScroll = ai; this.shopAvatarTarget = ai;
         this.shopDefenceIndex = 0; this.shopDefenceScroll = 0; this.shopDefenceTarget = 0;
         this.shopMovementIndex = 0; this.shopMovementScroll = 0; this.shopMovementTarget = 0;
         this.shopTrailIndex = Math.max(0, TRAILS.map(function(t){return t.key;}).indexOf(this.bank.currentTrail));
         this.shopTrailScroll = this.shopTrailIndex; this.shopTrailTarget = this.shopTrailIndex;
         this.shopTabFade.avatar = 1;
         this.shopTabFade.defence = 0; this.shopTabFade.movement = 0;
         this.shopTabFade.trails = 0; this.shopTabFade.achievements = 0; this.shopTabFade.convert = 0;
         this.shopTabFade.promotions = 0;
         this.shopOpenProgress = 0;
         this.sound.play('click');
     };
     Game.prototype.closeShop = function() { this.state = this.previousState || 'menu'; this.sound.play('click'); };
     Game.prototype.shopNavigate = function(direction) {
         var n;
         if (this.shopTab === 'avatar') {
             var keys = this.getAvailableSkinKeys();
             n = keys.length;
             this.shopAvatarIndex = ((this.shopAvatarIndex + direction) % n + n) % n;
             this.shopAvatarTarget += direction;
         } else if (this.shopTab === 'defence') {
             n = 5; this.shopDefenceIndex = ((this.shopDefenceIndex + direction) % n + n) % n; this.shopDefenceTarget += direction;
         } else if (this.shopTab === 'movement') {
             n = 3; this.shopMovementIndex = ((this.shopMovementIndex + direction) % n + n) % n; this.shopMovementTarget += direction;
         } else if (this.shopTab === 'trails') {
             n = TRAILS.length; this.shopTrailIndex = ((this.shopTrailIndex + direction) % n + n) % n; this.shopTrailTarget += direction;
         } else return;
         this.sound.play('click');
     };
     Game.prototype.handleShopClick = function(p) {
         if (this.promoModalSet) {
             if (hitTest(p.x, p.y, PROMO_MODAL_CLOSE_X, PROMO_MODAL_CLOSE_Y, PROMO_MODAL_CLOSE_W, PROMO_MODAL_CLOSE_H)) { this.promoModalSet = null; this.sound.play('click'); return; }
             if (hitTest(p.x, p.y, PROMO_MODAL_BUY_X, PROMO_MODAL_BUY_Y, PROMO_MODAL_BUY_W, PROMO_MODAL_BUY_H)) {
                 var setKey = this.promoModalSet;
                 if (this.bank.ownsSkinSet(setKey)) { this.sound.play('deny'); return; }
                 if (this.bank.buySkinSet(setKey)) { this.sound.play('buy'); this.applyBankToPlayer(); }
                 else this.sound.play('deny');
                 return;
             }
             if (hitTest(p.x, p.y, PROMO_MODAL_PREV_X, PROMO_MODAL_PREV_Y, PROMO_MODAL_PREV_W, PROMO_MODAL_PREV_H)) {
                 this.promoPreviewSet = this.promoModalSet; this.promoModalSet = null;
                 this.state = 'promo-preview'; this.promoPreviewScrollY = 0;
                 this.sound.play('click'); return;
             }
             var rightBtnX = PROMO_MODAL_PREV_X + PROMO_MODAL_PREV_W + 20;
             if (hitTest(p.x, p.y, rightBtnX, PROMO_MODAL_PREV_Y, PROMO_MODAL_PREV_W, PROMO_MODAL_PREV_H)) { this.promoModalSet = null; this.sound.play('click'); return; }
             return;
         }
         if (hitTest(p.x, p.y, SHOP_CLOSE_X, SHOP_CLOSE_Y, SHOP_CLOSE_W, SHOP_CLOSE_H)) { this.closeShop(); return; }
         if (p.x >= SHOP_SB_X && p.x <= SHOP_SB_X + SHOP_SB_W) {
             var tabs = ['avatar', 'defence', 'movement', 'trails', 'achievements', 'promotions', 'convert'];
             for (var i = 0; i < tabs.length; i++) {
                 var ty = SHOP_SB_Y + this.shopSidebarScrollY + i * (SHOP_TAB_H + SHOP_TAB_GAP);
                 if (p.y >= ty && p.y <= ty + SHOP_TAB_H) {
                     if (this.shopTab !== tabs[i]) { this.shopTab = tabs[i]; this.sound.play('click'); this.achScrollY = 0; }
                     return;
                 }
             }
         }
         if (this.shopTab === 'avatar') this.handleShopAvatarClick(p);
         else if (this.shopTab === 'defence') this.handleShopDefenceClick(p);
         else if (this.shopTab === 'movement') this.handleShopMovementClick(p);
         else if (this.shopTab === 'trails') this.handleShopTrailsClick(p);
         else if (this.shopTab === 'promotions') this.handleShopPromotionsClick(p);
         else if (this.shopTab === 'convert') this.handleShopConvertClick(p);
     };
     Game.prototype.handleShopAvatarClick = function(p) {
         if (hitTest(p.x, p.y, ARROW_LEFT_X, ARROW_Y, ARROW_SIZE, ARROW_SIZE)) { this.shopNavigate(-1); return; }
         if (hitTest(p.x, p.y, ARROW_RIGHT_X, ARROW_Y, ARROW_SIZE, ARROW_SIZE)) { this.shopNavigate(1); return; }
         var cardX = CAROUSEL_CX - CENTER_CARD_W / 2; var cardY = CAROUSEL_TOP;
         if (hitTest(p.x, p.y, cardX, cardY, CENTER_CARD_W, CENTER_CARD_H)) {
             var keys = this.getAvailableSkinKeys();
             var key = keys[this.shopAvatarIndex];
             if (this.bank.hasAccessTo(key)) { this.bank.selectAvatar(key); this.player.avatarName = key; this.sound.play('click'); }
             else {
                 if (this.bank.buyAvatar(key)) { this.bank.selectAvatar(key); this.player.avatarName = key; this.sound.play('buy'); }
                 else this.sound.play('deny');
             }
         }
     };
     Game.prototype.handleShopDefenceClick = function(p) {
         if (hitTest(p.x, p.y, ARROW_LEFT_X, ARROW_Y, ARROW_SIZE, ARROW_SIZE)) { this.shopNavigate(-1); return; }
         if (hitTest(p.x, p.y, ARROW_RIGHT_X, ARROW_Y, ARROW_SIZE, ARROW_SIZE)) { this.shopNavigate(1); return; }
         var cardX = CAROUSEL_CX - CENTER_CARD_W / 2; var cardY = CAROUSEL_TOP;
         if (hitTest(p.x, p.y, cardX, cardY, CENTER_CARD_W, CENTER_CARD_H)) {
             var idx = this.shopDefenceIndex;
             if (idx === 0) { if (this.bank.upgradeDamage()) { this.player.damageLevel = this.bank.damageLevel; this.sound.play('buy'); this.checkMaxUpgradeAchievement(); } else this.sound.play('deny'); }
             else if (idx === 1) { if (this.bank.upgradeRate()) { this.player.rateLevel = this.bank.rateLevel; this.sound.play('buy'); this.checkMaxUpgradeAchievement(); } else this.sound.play('deny'); }
             else if (idx === 2) { if (this.bank.ownsAbility('fire')) { this.bank.selectAbility('fire'); this.player.ability = 'fire'; this.sound.play('click'); } else if (this.bank.buyAbility('fire')) { this.bank.selectAbility('fire'); this.player.ability = 'fire'; this.sound.play('buy'); } else this.sound.play('deny'); }
             else if (idx === 3) { if (this.bank.ownsAbility('ice')) { this.bank.selectAbility('ice'); this.player.ability = 'ice'; this.sound.play('click'); } else if (this.bank.buyAbility('ice')) { this.bank.selectAbility('ice'); this.player.ability = 'ice'; this.sound.play('buy'); } else this.sound.play('deny'); }
             else if (idx === 4) { if (this.bank.ownsAbility('spiked')) { this.bank.selectAbility('spiked'); this.player.ability = 'spiked'; this.sound.play('click'); } else if (this.bank.buyAbility('spiked')) { this.bank.selectAbility('spiked'); this.player.ability = 'spiked'; this.sound.play('buy'); } else this.sound.play('deny'); }
         }
     };
     Game.prototype.handleShopMovementClick = function(p) {
         if (hitTest(p.x, p.y, ARROW_LEFT_X, ARROW_Y, ARROW_SIZE, ARROW_SIZE)) { this.shopNavigate(-1); return; }
         if (hitTest(p.x, p.y, ARROW_RIGHT_X, ARROW_Y, ARROW_SIZE, ARROW_SIZE)) { this.shopNavigate(1); return; }
         var cardX = CAROUSEL_CX - CENTER_CARD_W / 2; var cardY = CAROUSEL_TOP;
         if (hitTest(p.x, p.y, cardX, cardY, CENTER_CARD_W, CENTER_CARD_H)) {
             var idx = this.shopMovementIndex;
             if (idx === 0) { if (this.bank.canUpgradeJump()) { this.bank.upgradeJump(); this.applyBankToPlayer(); this.sound.play('buy'); } else this.sound.play('deny'); }
             else if (idx === 1) { if (this.bank.dashOwned) this.sound.play('click'); else if (this.bank.buyDash()) { this.applyBankToPlayer(); this.sound.play('buy'); } else this.sound.play('deny'); }
             else if (idx === 2) { if (this.bank.canUpgradeMagnet()) { this.bank.upgradeMagnet(); this.applyBankToPlayer(); this.sound.play('buy'); this.checkMaxUpgradeAchievement(); } else this.sound.play('deny'); }
         }
     };
     Game.prototype.handleShopTrailsClick = function(p) {
         if (hitTest(p.x, p.y, ARROW_LEFT_X, ARROW_Y, ARROW_SIZE, ARROW_SIZE)) { this.shopNavigate(-1); return; }
         if (hitTest(p.x, p.y, ARROW_RIGHT_X, ARROW_Y, ARROW_SIZE, ARROW_SIZE)) { this.shopNavigate(1); return; }
         var cardX = CAROUSEL_CX - CENTER_CARD_W / 2; var cardY = CAROUSEL_TOP;
         if (hitTest(p.x, p.y, cardX, cardY, CENTER_CARD_W, CENTER_CARD_H)) {
             var idx = this.shopTrailIndex; var trail = TRAILS[idx];
             if (this.bank.ownsTrail(trail.key)) { this.bank.selectTrail(trail.key); this.player.trailStyle = trail.key; this.sound.play('click'); }
             else { if (this.bank.buyTrail(trail.key)) { this.bank.selectTrail(trail.key); this.player.trailStyle = trail.key; this.sound.play('buy'); } else this.sound.play('deny'); }
         }
     };
     Game.prototype.handleShopPromotionsClick = function(p) {
         var sets = ['solar', 'pool', 'sports'];
         for (var i = 0; i < sets.length; i++) {
             var sx = PROMO_X + i * (PROMO_CARD_W + PROMO_GAP);
             if (hitTest(p.x, p.y, sx, PROMO_TOP, PROMO_CARD_W, PROMO_CARD_H)) { this.promoModalSet = sets[i]; this.sound.play('click'); return; }
         }
     };
     Game.prototype.handleShopConvertClick = function(p) {
         if (hitTest(p.x, p.y, CONV_BTN_X, CONV_BTN_Y, CONV_BTN_W, CONV_BTN_H)) { if (this.bank.convert()) this.sound.play('buy'); else this.sound.play('deny'); }
     };
     Game.prototype.handleSettingsClick = function(p) {
         if (hitTest(p.x, p.y, SET_CLOSE_X, SET_CLOSE_Y, SET_CLOSE_W, SET_CLOSE_H)) { this.closeSettings(); this.sound.play('click'); return; }
         var diffs = ['easy', 'normal', 'hard'];
         for (var di = 0; di < 3; di++) {
             if (hitTest(p.x, p.y, SET_DIFF_X[di], SET_DIFF_BTN_Y, SET_DIFF_BTN_W, SET_DIFF_BTN_H)) {
                 if (this.bank.difficulty !== diffs[di]) { this.bank.setDifficulty(diffs[di]); CURRENT_DIFFICULTY = diffs[di]; this.sound.play('click'); }
                 return;
             }
         }
     };
     Game.prototype.openSettings = function() { this.previousState = this.state; this.state = 'settings'; };
     Game.prototype.closeSettings = function() { this.state = this.previousState || 'menu'; if (this.state === 'playing' && !this.player.alive) this.state = 'gameover'; };
 
     Game.prototype.onJump = function() {
         if (this.state === 'menu') { this.startGame(); return; }
         if (this.state === 'gameover') { this.restartLevel(); return; }
         if (this.state === 'playing') { this.player.buffer = 0.1; this.player.freshJump = true; }
     };
     Game.prototype.tryDash = function() {
         var p = this.player;
         if (!p.alive || !p.dashUnlocked) return;
         if (p.dashCooldown > 0 || p.dashTimer > 0) return;
         var dir = 1;
         if (p.moveMode !== 'auto') {
             if (this.keys['ArrowLeft'] || this.keys['a'] || this.keys['A']) dir = -1;
             else if (this.keys['ArrowRight'] || this.keys['d'] || this.keys['D']) dir = 1;
             else dir = (p.vx >= 0) ? 1 : -1;
         }
         p.dashTimer = DASH_DURATION; p.dashCooldown = DASH_COOLDOWN; p.dashDir = dir;
         this.sound.play('dash');
         var pxc = p.x + p.size / 2 - dir * 12; var pyc = p.y + p.size / 2;
         this.particles.emit(pxc, pyc, 14, '#FFD966', 4, 0.4, 4);
         this.particles.emit(pxc, pyc, 6, '#FFFFFF', 3, 0.3, 3);
     };
     Game.prototype.fireProjectile = function() {
         if (!this.player.alive || this.player.fireCooldown > 0) return;
         var aimDir = this.player.aimDirection || 1;
         var px = aimDir > 0 ? this.player.x + this.player.size : this.player.x;
         var py = this.player.y + this.player.size / 2;
         var dmg = this.player.getProjectileDamage();
         var proj = new Projectile(px, py, dmg, this.player.ability);
         proj.vx = PROJ_SPEED * aimDir;
         if (this.endlessBoss && this.endlessBoss.alive && !this.endlessBoss.fleeing) {
             var dx = this.endlessBoss.x - px, dy = this.endlessBoss.y - py;
             var d = Math.sqrt(dx * dx + dy * dy) || 1;
             proj.vx = (dx / d) * PROJ_SPEED; proj.vy = (dy / d) * PROJ_SPEED;
         }
         this.projectiles.push(proj);
         this.player.fireCooldown = this.player.getFireInterval();
         this.sound.play('shoot');
     };
     Game.prototype.togglePause = function() {
         if (this.state === 'playing') { this.state = 'paused'; this.previousState = 'playing'; this.sound.duckMusic(true); }
         else if (this.state === 'paused') { this.state = 'playing'; this.sound.duckMusic(false); }
     };
     Game.prototype.goToTitle = function() {
         this.sound.duckMusic(false);
         this.resetGame(); this.state = 'menu';
         this.applyBankToPlayer();
     };
     Game.prototype.shake = function(mag) { this.shakeMag = mag; this.shakeTime = this.shakeDuration; };
     Game.prototype.tryUnlockAchievement = function(key) {
         if (this.bank.unlockAchievement(key)) {
             var def = getAchievementDef(key);
             if (def) { this.achievementQueue.push(def); this.sound.play('achievement'); }
         }
     };
     Game.prototype.checkMaxUpgradeAchievement = function() {
         if (this.bank.damageLevel >= PROJ_MAX_DAMAGE_LEVEL || this.bank.rateLevel >= PROJ_MAX_RATE_LEVEL || this.bank.jumpLevel >= 2 || this.bank.magnetLevel >= MAGNET_MAX_LEVEL) this.tryUnlockAchievement('max_upgrade');
     };
     Game.prototype.recordRun = function() {
         var entry = { score: Math.floor(this.score), coins: this.coinCount, mode: this.gameMode === 'levels' ? 'levels' : 'endless', ts: Date.now() };
         this.bank.addLeaderboardEntry(entry); this.bank.addTotalCoins(this.coinCount);
         if (this.coinCount >= 50) this.tryUnlockAchievement('coins_50');
         if (this.bank.totalCoins >= 100) this.tryUnlockAchievement('total_coins');
     };
     Game.prototype.startGame = function() {
         if (this.gameMode === 'levels') { this.selectedLevel = 0; this.startLevel(); }
         else if (this.gameMode === 'timed') this.startTimed();
         else this.startEndless();
     };
     Game.prototype.resetRunState = function() {
         this.player.reset(); this.applyBankToPlayer();
         this.player.x = 200; this.player.y = GROUND_Y - this.player.size;
         this.player.hp = PLAYER_MAX_HP;
         this.score = 0; this.displayScore = 0; this.coinCount = 0; this.powerupTimer = 0;
         this.runTime = 0; this.world.cameraX = 0;
         this.particles.list = []; this.coinPops = []; this.floatingTexts = [];
         this.projectiles = []; this.enemyProjectiles = [];
         this.flyers = []; this.floaters = []; this.wormyGroups = []; this.mega = null; this.megaWorm = null;
         this.endlessBoss = null; this.nextBossScore = BOSS_INTERVAL;
         this.biomeIndex = 0; this.prevBiomeIndex = 0; this.biomeBlend = 1;
         this.bossBannerTimer = 0; this.damageFlash = 0; this.shakeTime = 0;
         this.comboCount = 0; this.comboTimer = 0; this.comboPopTimer = 0;
         this.keys = {}; this.megaSpawnTime = 0; this.timedActive = false;
         this.megaWormActive = false;
     };
     Game.prototype.startEndless = function() {
         this.world = new World(); this.world.init();
         this.sound.resume(); this.sound.startMusic(); this.sound.play('start'); this.sound.duckMusic(false);
         this.state = 'playing';
         this.resetRunState();
         this.player.moveMode = 'auto';
     };
     Game.prototype.startTimed = function() {
         var isPlatformer = Math.random() < 0.5;
         this.timedModeType = isPlatformer ? 'platformer' : 'runner';
         this.world = new World(); this.world.init();
         this.sound.resume(); this.sound.startMusic(); this.sound.play('start'); this.sound.duckMusic(false);
         this.state = 'playing';
         this.resetRunState();
         if (isPlatformer) {
             this.player.moveMode = 'free';
             this.timedRemaining = TIMED_PLATFORMER_DURATION;
             this.world.goalX = 2600;
             this.world.ensureGroundAtX(this.world.goalX, 200);
             this.flyers.push(new Flyer(800, GROUND_Y - 130));
             this.floaters.push(new Floater(1400, GROUND_Y - 80));
             this.wormyGroups.push(new WormyGroup(1900));
         } else {
             this.player.moveMode = 'auto';
             this.timedRemaining = TIMED_RUNNER_DURATION;
             this.world.goalX = null;
         }
         this.timedActive = true;
     };
     Game.prototype.startLevel = function() {
         if (this.selectedLevel < 0 || this.selectedLevel >= LEVELS.length) return;
         this.world = new Level(this.selectedLevel);
         this.sound.resume(); this.sound.startMusic(); this.sound.play('start'); this.sound.duckMusic(false);
         this.state = 'playing';
         this.resetRunState();
         this.player.moveMode = (this.world.type === 'runner') ? 'auto' : 'free';
         this.player.cameraMinX = 60;
         var mag = getLevelMagnification(this.selectedLevel);
         for (var i = 0; i < this.world.enemies.length; i++) {
             var e = this.world.enemies[i];
             if (e.type === 'wormy') {
                 var wg = new WormyGroup(e.x); wg.magnification = mag; this.wormyGroups.push(wg);
             } else if (e.type === 'flyer') {
                 var f = new Flyer(e.x, e.y); f.magnification = mag; this.flyers.push(f);
             } else if (e.type === 'floater') {
                 var fl = new Floater(e.x, e.y); fl.magnification = mag; this.floaters.push(fl);
             } else if (e.type === 'mega') {
                 this.mega = new MegaFlyer(e.x, e.y); this.megaSpawnTime = 0;
             } else if (e.type === 'megaworm') {
                 this.player.moveMode = 'free';
                 this.player.x = W / 2 - this.player.size / 2;
                 this.player.y = GROUND_Y - this.player.size;
                 this.player.aimDirection = 1;
                 this.megaWorm = new MegaWorm(W / 2, GROUND_Y);
                 this.megaWormActive = true;
                 this.bossBannerTimer = 2.5;
                 this.sound.startBossMusic();
                 this.sound.play('boss');
             }
         }
     };
     Game.prototype.restartLevel = function() {
         if (this.gameMode === 'levels') this.startLevel();
         else if (this.gameMode === 'timed') this.startTimed();
         else this.startEndless();
     };
     Game.prototype.resetGame = function() {
         this.player.reset();
         this.particles.list = []; this.coinPops = []; this.floatingTexts = [];
         this.projectiles = []; this.enemyProjectiles = [];
         this.flyers = []; this.floaters = []; this.wormyGroups = []; this.mega = null; this.megaWorm = null;
         this.endlessBoss = null; this.nextBossScore = BOSS_INTERVAL;
         this.world = new World(); this.world.init();
         this.score = 0; this.displayScore = 0; this.coinCount = 0;
         this.speed = SCROLL_START; this.powerupTimer = 0; this.runTime = 0;
         this.applyBankToPlayer();
         this.state = 'menu';
         this.player.alive = true; this.player.hp = PLAYER_MAX_HP; this.player.invulnTimer = 0;
         this.player.x = 200; this.player.y = GROUND_Y - this.player.size; this.player.vy = 0; this.player.grounded = true;
         this.world.cameraX = 0;
         this.damageFlash = 0; this.shakeTime = 0;
         this.comboCount = 0; this.comboTimer = 0; this.comboPopTimer = 0;
         this.biomeIndex = 0; this.prevBiomeIndex = 0; this.biomeBlend = 1;
         this.bossBannerTimer = 0; this.levelCompleteTimer = 0;
         this.keys = {}; this.timedActive = false; this.timedRemaining = 0;
         this.megaWormActive = false;
         this.sound.startMenuMusic();
     };
     Game.prototype.applyMagnet = function(dt) {
         var p = this.player;
         if (p.magnetRadius <= 0) return;
         var pb = p.getBounds(); var px = pb.x + pb.w / 2, py = pb.y + pb.h / 2;
         for (var i = 0; i < this.world.coins.length; i++) {
             var c = this.world.coins[i];
             if (c.collected) continue;
             var dx = px - c.x, dy = py - c.y; var dist = Math.sqrt(dx * dx + dy * dy);
             if (dist > p.magnetRadius || dist < 0.5) continue;
             var nx = dx / dist, ny = dy / dist;
             var falloff = 1 - (dist / p.magnetRadius) * 0.55;
             var speed = p.magnetStrength * falloff;
             c.x += nx * speed * dt * 60; c.y += ny * speed * dt * 60;
         }
     };
     Game.prototype.getBiomePalette = function() {
         var a = BIOMES[this.prevBiomeIndex], b = BIOMES[this.biomeIndex];
         var t = easeOutCubic(clamp01(this.biomeBlend));
         return {
             grass: blendColor(a.grass, b.grass, t), dirt: blendColor(a.dirt, b.dirt, t),
             skyTop: blendColor(a.skyTop, b.skyTop, t), skyBot: blendColor(a.skyBot, b.skyBot, t),
             wTop: blendColor(a.wTop, b.wTop, t), wBot: blendColor(a.wBot, b.wBot, t),
             mountain: blendColor(a.mountain, b.mountain, t),
             spike: blendColor(a.spike, b.spike, t),
             spikeShadow: blendColor(a.spikeShadow, b.spikeShadow, t),
             spikeHi: blendColor(a.spikeHi, b.spikeHi, t)
         };
     };
     Game.prototype.spawnEndlessBoss = function() {
         var bossX = this.player.x + W * 0.5;
         var bossY = Math.max(120, this.player.y - 160);
         this.endlessBoss = new EndlessBoss(bossX, bossY);
         this.bossBannerTimer = 2.5; this.sound.play('boss');
         this.particles.emit(bossX, bossY, 24, '#FF4D4D', 4, 0.9, 5);
         this.particles.emit(bossX, bossY, 12, '#FFE066', 3, 0.7, 4);
     };
 
     Game.prototype.update = function(rawDt) {
         if (this.state === 'playing') {
             if (this.gameMode === 'endless') this.player.moveMode = 'auto';
             else if (this.gameMode === 'levels') {
                 this.player.moveMode = this.megaWormActive ? 'free' : ((this.world.type === 'runner') ? 'auto' : 'free');
             } else if (this.gameMode === 'timed') this.player.moveMode = (this.timedModeType === 'runner') ? 'auto' : 'free';
         }
         var realDt = rawDt; var dt = rawDt;
         this.time += realDt;
         if (this.state === 'loading' && this.introStarted) {
             this.loadingT += realDt;
             if (this.loadingT >= 1.65) { this.state = 'intro'; this.introT = 0; }
         }
         if (this.state === 'intro' && this.introStarted) {
             this.introT += realDt;
             if (this.introT >= 4.2) { this.state = 'welcome'; this.sound.startMenuMusic(); }
         }
         if (this.damageFlash > 0) this.damageFlash -= realDt;
         if (this.shakeTime > 0) { this.shakeTime -= realDt; if (this.shakeTime < 0) this.shakeTime = 0; }
         if (this.bossBannerTimer > 0) this.bossBannerTimer -= realDt;
         if (this.achievementBannerTimer > 0) {
             this.achievementBannerTimer -= realDt;
             if (this.achievementBannerTimer <= 0) { this.achievementBannerTimer = 0; this.currentAchievement = null; }
         } else if (!this.currentAchievement && this.achievementQueue.length > 0) {
             this.currentAchievement = this.achievementQueue.shift();
             this.achievementBannerTimer = ACHIEVEMENT_BANNER_TIME;
         }
         if (this.boosterSpinning) {
             this.boosterSpinTime += realDt;
             var t = clamp01(this.boosterSpinTime / this.boosterSpinDuration);
             var eased = easeOutCubic(t);
             this.boosterSpinAngle = lerp(this.boosterStartAngle, this.boosterTargetAngle, eased);
             if (t >= 1) { this.boosterSpinning = false; this.boosterResultShown = true; this.sound.play('achievement'); }
         }
         if (this.state === 'shop') {
             this.shopOpenProgress = damp(this.shopOpenProgress, 1, 10, realDt);
             this.shopAvatarScroll = damp(this.shopAvatarScroll, this.shopAvatarTarget, 14, realDt);
             this.shopDefenceScroll = damp(this.shopDefenceScroll, this.shopDefenceTarget, 14, realDt);
             this.shopMovementScroll = damp(this.shopMovementScroll, this.shopMovementTarget, 14, realDt);
             this.shopTrailScroll = damp(this.shopTrailScroll, this.shopTrailTarget, 14, realDt);
             if (Math.abs(this.shopAvatarScroll - this.shopAvatarTarget) < 0.001) this.shopAvatarScroll = this.shopAvatarTarget;
             if (Math.abs(this.shopDefenceScroll - this.shopDefenceTarget) < 0.001) this.shopDefenceScroll = this.shopDefenceTarget;
             if (Math.abs(this.shopMovementScroll - this.shopMovementTarget) < 0.001) this.shopMovementScroll = this.shopMovementTarget;
             if (Math.abs(this.shopTrailScroll - this.shopTrailTarget) < 0.001) this.shopTrailScroll = this.shopTrailTarget;
             var tAva = this.shopTab === 'avatar' ? 1 : 0; var tDef = this.shopTab === 'defence' ? 1 : 0;
             var tMov = this.shopTab === 'movement' ? 1 : 0; var tTrl = this.shopTab === 'trails' ? 1 : 0;
             var tAch = this.shopTab === 'achievements' ? 1 : 0; var tCon = this.shopTab === 'convert' ? 1 : 0;
             var tPro = this.shopTab === 'promotions' ? 1 : 0;
             this.shopTabFade.avatar = damp(this.shopTabFade.avatar, tAva, 14, realDt);
             this.shopTabFade.defence = damp(this.shopTabFade.defence, tDef, 14, realDt);
             this.shopTabFade.movement = damp(this.shopTabFade.movement, tMov, 14, realDt);
             this.shopTabFade.trails = damp(this.shopTabFade.trails, tTrl, 14, realDt);
             this.shopTabFade.achievements = damp(this.shopTabFade.achievements, tAch, 14, realDt);
             this.shopTabFade.convert = damp(this.shopTabFade.convert, tCon, 14, realDt);
             this.shopTabFade.promotions = damp(this.shopTabFade.promotions, tPro, 14, realDt);
         }
         if (this.state === 'playing') {
             this.dayPhase = (this.dayPhase + dt / DAY_CYCLE_DURATION) % 1;
             if (this.powerupTimer > 0) { this.powerupTimer -= dt; if (this.powerupTimer < 0) this.powerupTimer = 0; }
         }
         this.displayScore = damp(this.displayScore, this.score, 10, realDt);
         if (Math.abs(this.displayScore - this.score) < 0.5) this.displayScore = this.score;
         this.coinPops = this.coinPops.filter(function(p) { return p.update(dt); });
         this.floatingTexts = this.floatingTexts.filter(function(f) { return f.update(dt); });
         if (this.state !== 'playing') return;
         if (this.comboTimer > 0) { this.comboTimer -= dt; if (this.comboTimer <= 0) { this.comboTimer = 0; this.comboCount = 0; this.comboPopTimer = 0; } }
         if (this.comboPopTimer > 0) this.comboPopTimer -= dt;
         if (this.biomeBlend < 1) { this.biomeBlend += dt / BIOME_TRANSITION_TIME; if (this.biomeBlend > 1) this.biomeBlend = 1; }
         var isLevels = (this.gameMode === 'levels');
         var isTimed = (this.gameMode === 'timed');
         var isEndless = (!isLevels && !isTimed);
         var diff = 1 + Math.min(6, this.score / 120);
         var baseSpeed = SCROLL_START + Math.min(SCROLL_MAX - SCROLL_START, this.score / 80);
         var diffSpeedMult = CURRENT_DIFFICULTY === 'easy' ? 0.85 : CURRENT_DIFFICULTY === 'hard' ? 1.20 : 1.0;
         baseSpeed *= diffSpeedMult;
         var speedMult = this.powerupTimer > 0 ? INVINCIBILITY_SPEED_MULT : 1;
         this.speed = baseSpeed * speedMult;
         this.runTime += dt;
         if (isTimed && this.timedActive) {
             this.timedRemaining -= dt;
             if (this.timedRemaining <= 0) {
                 this.timedRemaining = 0; this.timedActive = false;
                 if (this.timedModeType === 'runner') { if (this.player.alive) { this.completeTimed(); return; } }
                 else { this.player.alive = false; this.sound.play('die'); this.sound.duckMusic(true); this.bank.resetTimedStreak(); this.state = 'gameover'; this.previousState = 'gameover'; return; }
             }
         }
         var inputX = 0;
         if (this.keys['ArrowLeft'] || this.keys['a'] || this.keys['A']) inputX |= 1;
         if (this.keys['ArrowRight'] || this.keys['d'] || this.keys['D']) inputX |= 2;
         var autoSpeed = (this.player.moveMode === 'auto') ? this.speed : 0;
         this.player.update(dt, autoSpeed, inputX, realDt);
         if (this.player.justJumped === 'ground') { this.sound.play('jump'); this.particles.emit(this.player.x + this.player.size/2, this.player.y + this.player.size, 8, '#FFD966', 2.5, 0.5, 3); this.player.justJumped = null; }
         else if (this.player.justJumped === 'air') { this.sound.play('airjump'); this.particles.emit(this.player.x + this.player.size/2, this.player.y + this.player.size, 6, '#A8D5BA', 2, 0.4, 3); this.player.justJumped = null; }
         this.world.update(diff, this.speed, dt, this.player.x, this.biomeIndex);
         this.applyMagnet(dt);
         if (isEndless) {
             var shouldBiome = Math.floor(this.score / BIOME_LENGTH) % BIOMES.length;
             if (shouldBiome !== this.biomeIndex) { this.prevBiomeIndex = this.biomeIndex; this.biomeIndex = shouldBiome; this.biomeBlend = 0; }
             if (this.score >= this.nextBossScore && !this.endlessBoss) { this.spawnEndlessBoss(); this.nextBossScore += BOSS_INTERVAL; }
             if (this.endlessBoss) {
                 var br = this.endlessBoss.update(dt, this.player, this.speed);
                 if (br === 'shoot') {
                     var bx = this.endlessBoss.x; var by = this.endlessBoss.y + 10;
                     var dx = (this.player.x + 14) - bx; var dy = (this.player.y + 14) - by;
                     var d = Math.sqrt(dx * dx + dy * dy) || 1;
                     this.enemyProjectiles.push(new EnemyProjectile(bx, by, (dx / d) * 5, (dy / d) * 5));
                 } else if (br === 'killed') {
                     this.bank.addPoints(ENDLESS_BOSS_POINT_BONUS); this.bank.addCoins(ENDLESS_BOSS_COIN_BONUS);
                     this.score += ENDLESS_BOSS_POINT_BONUS;
                     this.floatingTexts.push(new FloatingText(this.player.x + 20, this.player.y - 20, '+' + ENDLESS_BOSS_POINT_BONUS + ' pts  +' + ENDLESS_BOSS_COIN_BONUS + ' coins', '#FFD966'));
                     this.sound.play('bossdie');
                     this.particles.emit(this.endlessBoss.x, this.endlessBoss.y, 40, '#FF4D4D', 6, 1.1, 6);
                     this.particles.emit(this.endlessBoss.x, this.endlessBoss.y, 24, '#FFE066', 5, 0.9, 5);
                     this.shake(8); this.tryUnlockAchievement('boss_kill'); this.endlessBoss = null;
                 } else if (br === 'fled') this.endlessBoss = null;
             }
             if (this.score >= 1000) this.tryUnlockAchievement('score_1000');
             if (this.runTime >= 180) this.tryUnlockAchievement('survive_3m');
         }
         if (isLevels) {
             for (var i = 0; i < this.projectiles.length; i++) this.projectiles[i].update(dt);
             this.projectiles = this.projectiles.filter(function(p) { return p.alive; });
             for (var i2 = 0; i2 < this.enemyProjectiles.length; i2++) this.enemyProjectiles[i2].update(dt);
             this.enemyProjectiles = this.enemyProjectiles.filter(function(p) { return p.alive; });
             for (var i3 = 0; i3 < this.flyers.length; i3++) {
                 var r = this.flyers[i3].update(dt, this.player);
                 if (r === 'shoot') {
                     var f = this.flyers[i3];
                     var dx2 = (this.player.x + 14) - f.x; var dy2 = (this.player.y + 14) - f.y;
                     var d2 = Math.sqrt(dx2 * dx2 + dy2 * dy2) || 1;
                     this.enemyProjectiles.push(new EnemyProjectile(f.x, f.y + 8, (dx2 / d2) * 4, (dy2 / d2) * 4));
                 }
             }
             for (var i4 = 0; i4 < this.floaters.length; i4++) this.floaters[i4].update(dt, this.player);
             for (var i5 = 0; i5 < this.wormyGroups.length; i5++) this.wormyGroups[i5].update(dt);
             this.wormyGroups = this.wormyGroups.filter(function(g) { return g.alive; });
             if (this.mega) {
                 this.megaSpawnTime += dt;
                 var mr = this.mega.update(dt, this.player);
                 if (mr === 'shoot') {
                     var mdx = (this.player.x + 14) - this.mega.x; var mdy = (this.player.y + 14) - this.mega.y;
                     var md = Math.sqrt(mdx * mdx + mdy * mdy) || 1;
                     this.enemyProjectiles.push(new EnemyProjectile(this.mega.x, this.mega.y + 16, (mdx / md) * 5, (mdy / md) * 5));
                 }
                 if (!this.mega.alive) { this.mega = null; this.completeLevel(); return; }
             }
             if (this.megaWorm) {
                 var wr = this.megaWorm.update(dt, this.player);
                 if (wr === 'shoot') {
                     var wdx = (this.player.x + 14) - this.megaWorm.x;
                     var wdy = (this.player.y + 14) - this.megaWorm.y;
                     var wd = Math.sqrt(wdx*wdx + wdy*wdy) || 1;
                     this.enemyProjectiles.push(new EnemyProjectile(this.megaWorm.x, this.megaWorm.y, (wdx/wd)*6, (wdy/wd)*6));
                 }
                 // Collision with worm during arch
                 if (this.megaWorm.phase === 'arch_to_right' || this.megaWorm.phase === 'arch_to_left') {
                     var hb = this.megaWorm.getAllBounds()[0];
                     var pb = this.player.getBounds();
                     if (hb && pb.x + pb.w > hb.x && pb.x < hb.x + hb.w && pb.y + pb.h > hb.y && pb.y < hb.y + hb.h) {
                         if (!this.megaWorm.archHit) {
                             this.megaWorm.archHit = true;
                             var hitR = this.player.takeDamage(30);
                             if (hitR === 'died') { this.die(); return; }
                             if (hitR === 'hurt') { this.damageFlash = 1; this.sound.play('hurt'); this.shake(10); }
                         }
                     } else {
                         this.megaWorm.archHit = false;
                     }
                 }
                 if (!this.megaWorm.alive) {
                     this.particles.emit(this.megaWorm.x, this.megaWorm.y, 80, '#FF4D4D', 8, 1.5, 7);
                     this.particles.emit(this.megaWorm.x, this.megaWorm.y, 40, '#FFE066', 7, 1.2, 6);
                     this.particles.emit(this.megaWorm.x, this.megaWorm.y, 30, '#8B4513', 6, 1.0, 6);
                     this.shake(12);
                     this.sound.play('bossdie');
                     this.sound.startMusic(); // revert music
                     this.bank.addPoints(this.megaWormDeathReward.pts);
                     this.bank.addCoins(this.megaWormDeathReward.coins);
                     this.score += this.megaWormDeathReward.pts;
                     this.coinCount += this.megaWormDeathReward.coins;
                     this.floatingTexts.push(new FloatingText(this.player.x + 20, this.player.y - 40,
                         '+' + this.megaWormDeathReward.pts + ' pts  +' + this.megaWormDeathReward.coins + ' coins', '#FFD966'));
                     this.megaWorm = null;
                     this.megaWormActive = false;
                     this.completeLevel();
                     return;
                 }
             }
         } else if (isTimed) {
             for (var i3b = 0; i3b < this.projectiles.length; i3b++) this.projectiles[i3b].update(dt);
             this.projectiles = this.projectiles.filter(function(p) { return p.alive; });
             for (var i3c = 0; i3c < this.enemyProjectiles.length; i3c++) this.enemyProjectiles[i3c].update(dt);
             this.enemyProjectiles = this.enemyProjectiles.filter(function(p) { return p.alive; });
             for (var i3d = 0; i3d < this.flyers.length; i3d++) {
                 var r3 = this.flyers[i3d].update(dt, this.player);
                 if (r3 === 'shoot') {
                     var f3 = this.flyers[i3d];
                     var dx3 = (this.player.x + 14) - f3.x; var dy3 = (this.player.y + 14) - f3.y;
                     var d3 = Math.sqrt(dx3 * dx3 + dy3 * dy3) || 1;
                     this.enemyProjectiles.push(new EnemyProjectile(f3.x, f3.y + 8, (dx3 / d3) * 4, (dy3 / d3) * 4));
                 }
             }
             for (var i4b = 0; i4b < this.floaters.length; i4b++) this.floaters[i4b].update(dt, this.player);
             for (var i5b = 0; i5b < this.wormyGroups.length; i5b++) this.wormyGroups[i5b].update(dt);
             this.wormyGroups = this.wormyGroups.filter(function(g) { return g.alive; });
             if (this.timedModeType === 'platformer') {
                 var allEnemiesDead = this.flyers.length === 0 && this.floaters.length === 0 && this.wormyGroups.length === 0;
                 var reachedGoal = this.world.goalX && this.player.x >= this.world.goalX;
                 if (allEnemiesDead && reachedGoal) this.completeTimed();
             }
         } else {
             for (var i6 = 0; i6 < this.projectiles.length; i6++) this.projectiles[i6].update(dt);
             this.projectiles = this.projectiles.filter(function(p) { return p.alive; });
             for (var i7 = 0; i7 < this.enemyProjectiles.length; i7++) this.enemyProjectiles[i7].update(dt);
             this.enemyProjectiles = this.enemyProjectiles.filter(function(p) { return p.alive; });
         }
         this.resolveCollisions();
         if (this.player.alive && this.powerupTimer <= 0) {
             var groundCheckPb = this.player.getBounds();
             var landedOnSomething = false;
             for (var gci = 0; gci < this.world.ground.length; gci++) {
                 var gc = this.world.ground[gci];
                 if (groundCheckPb.x + groundCheckPb.w > gc.x && groundCheckPb.x < gc.x + gc.w &&
                     Math.abs((groundCheckPb.y + groundCheckPb.h) - gc.y) < 4) { landedOnSomething = true; break; }
             }
             if (!landedOnSomething) {
                 for (var gpc = 0; gpc < this.world.platforms.length; gpc++) {
                     var gpcp = this.world.platforms[gpc];
                     if (groundCheckPb.x + groundCheckPb.w > gpcp.x && groundCheckPb.x < gpcp.x + gpcp.w &&
                         Math.abs((groundCheckPb.y + groundCheckPb.h) - gpcp.y) < 4) { landedOnSomething = true; break; }
                 }
             }
             if (!landedOnSomething && groundCheckPb.y + groundCheckPb.h / 2 > GROUND_Y + 2) {
                 this.die();
                 return;
             }
         }
         if (this.player.alive || this.powerupTimer > 0) {
             var pointsMult = this.powerupTimer > 0 ? INVINCIBILITY_POINTS_MULT : 1;
             this.score += baseSpeed * 0.04 * pointsMult;
             this.player.score = Math.floor(this.score);
         }
         this.particles.update(dt);
         if (this.player.y > GROUND_Y + 200 && this.powerupTimer <= 0) this.die();
         if (isLevels && !this.world.boss) { if (this.player.x >= this.world.goalX) this.completeLevel(); }
         if (this.player.score > this.best) { this.best = this.player.score; localStorage.setItem('pixelBest', String(this.best)); }
         if (isTimed && this.timedModeType === 'platformer' && this.timedActive) {
             if (this.player.x >= this.world.goalX) {
                 if (this.flyers.length === 0 && this.floaters.length === 0 && this.wormyGroups.length === 0) this.completeTimed();
             }
         }
     };
 
     Game.prototype.completeTimed = function() {
         this.sound.play('victory'); this.sound.duckMusic(true);
         var canEarn = this.bank.canEarnTimedReward();
         if (canEarn) {
             this.bank.addPoints(TIMED_REWARD_POINTS); this.bank.addCoins(TIMED_REWARD_COINS);
             this.bank.registerTimedWin();
             this.floatingTexts.push(new FloatingText(this.player.x + 20, this.player.y - 30, '+' + TIMED_REWARD_POINTS + ' pts  +' + TIMED_REWARD_COINS + ' coins', '#FFD966'));
             if (this.bank.timedWinStreak >= 3) this.bank.completeBooster(5);
         }
         this.timedActive = false; this.state = 'victory';
     };
     Game.prototype.completeLevel = function() {
         this.sound.play('victory'); this.sound.duckMusic(true);
         this.bank.addPoints(Math.floor(this.score));
         this.bank.addCoins(this.coinCount);
         if (this.selectedLevel + 1 > this.bank.levelsCompleted) { this.bank.levelsCompleted = this.selectedLevel + 1; this.bank.save(); }
         this.recordRun();
         if (this.selectedLevel === 9) this.tryUnlockAchievement('level_10');
         this.state = 'victory';
     };
 
     Game.prototype.resolveCollisions = function() {
         var p = this.player; var pb = p.getBounds();
         if (!p.alive) return;
         var landed = false, powered = this.powerupTimer > 0;
 
         // Skywalking virtual ground
         if (powered) {
             if (pb.y + pb.h >= GROUND_Y && p.vy >= 0) {
                 p.y = GROUND_Y - pb.h; p.vy = 0; p.grounded = true; landed = true;
             }
         }
 
         if (!landed) {
             for (var i = 0; i < this.world.ground.length; i++) {
                 var g = this.world.ground[i];
                 if (pb.x + pb.w > g.x + 2 && pb.x < g.x + g.w - 2) {
                     var bottom = pb.y + pb.h; var tol = Math.max(4, Math.abs(p.vy) + 2);
                     if (p.vy >= 0 && bottom >= g.y && bottom <= g.y + tol) { p.y = g.y - pb.h; p.vy = 0; p.grounded = true; landed = true; break; }
                     else if (p.vy < 0 && bottom > g.y + 5) { if (!powered) { this.die(); return; } }
                 }
             }
         }
         if (!landed) {
             for (var j = 0; j < this.world.platforms.length; j++) {
                 var pl = this.world.platforms[j];
                 if (pb.x + pb.w > pl.x + 4 && pb.x < pl.x + pl.w - 4) {
                     var bottom2 = pb.y + pb.h; var tol2 = Math.max(4, Math.abs(p.vy) + 2);
                     if (p.vy >= 0 && bottom2 >= pl.y && bottom2 <= pl.y + tol2) { p.y = pl.y - pb.h; p.vy = 0; p.grounded = true; landed = true; break; }
                 }
             }
         }
         if (!landed) p.grounded = false;
         this.collectCoins();
         if (!powered) {
             for (var si = 0; si < this.world.spikes.length; si++) {
                 var s = this.world.spikes[si];
                 if (pb.x + pb.w > s.x + 2 && pb.x < s.x + s.w - 2 && pb.y + pb.h > s.y + 2 && pb.y < s.y + s.h - 2) {
                     if (this.gameMode === 'endless' || this.gameMode === 'timed') {
                         if (CURRENT_DIFFICULTY === 'easy') {
                             var rsc = p.takeDamage(SPIKE_DAMAGE);
                             if (rsc === 'died') { this.die(); return; }
                             if (rsc === 'hurt') { this.damageFlash = 1; this.sound.play('hurt'); this.shake(SHAKE_ON_HIT); }
                         } else { this.die(); return; }
                     } else {
                         var r = p.takeDamage(SPIKE_DAMAGE);
                         if (r === 'died') { this.die(); return; }
                         if (r === 'hurt') { this.damageFlash = 1; this.sound.play('hurt'); this.shake(SHAKE_ON_HIT); }
                     }
                 }
             }
         }
         if (!powered) {
             for (var epi = 0; epi < this.enemyProjectiles.length; epi++) {
                 var ep = this.enemyProjectiles[epi]; if (!ep.alive) continue;
                 var eb = ep.getBounds();
                 if (pb.x + pb.w > eb.x && pb.x < eb.x + eb.w && pb.y + pb.h > eb.y && pb.y < eb.y + eb.h) {
                     ep.alive = false; var r2 = p.takeDamage(FLYER_PROJECTILE_DAMAGE);
                     if (r2 === 'died') { this.die(); return; }
                     if (r2 === 'hurt') { this.damageFlash = 1; this.sound.play('hurt'); this.shake(SHAKE_ON_HIT); }
                 }
             }
         }
         if (!powered && (this.gameMode === 'levels' || this.gameMode === 'timed')) {
             for (var fi = 0; fi < this.flyers.length; fi++) {
                 var fl = this.flyers[fi]; var fb = fl.getBounds();
                 if (pb.x + pb.w > fb.x && pb.x < fb.x + fb.w && pb.y + pb.h > fb.y && pb.y < fb.y + fb.h) {
                     var r3 = p.takeDamage(FLYER_CONTACT_DAMAGE);
                     if (r3 === 'died') { this.die(); return; }
                     if (r3 === 'hurt') { this.damageFlash = 1; this.sound.play('hurt'); this.shake(SHAKE_ON_HIT); }
                 }
             }
             for (var foi = 0; foi < this.floaters.length; foi++) {
                 var fo = this.floaters[foi]; var ob = fo.getBounds();
                 if (pb.x + pb.w > ob.x && pb.x < ob.x + ob.w && pb.y + pb.h > ob.y && pb.y < ob.y + ob.h) {
                     var r4 = p.takeDamage(FLOATER_CONTACT_DAMAGE);
                     if (r4 === 'died') { this.die(); return; }
                     if (r4 === 'hurt') { this.damageFlash = 1; this.sound.play('hurt'); this.shake(SHAKE_ON_HIT); }
                 }
             }
             for (var wi = 0; wi < this.wormyGroups.length; wi++) {
                 if (this.wormyGroups[wi].checkContact(pb)) {
                     var r5 = p.takeDamage(WORMY_CONTACT_DAMAGE);
                     if (r5 === 'died') { this.die(); return; }
                     if (r5 === 'hurt') { this.damageFlash = 1; this.sound.play('hurt'); this.shake(SHAKE_ON_HIT); }
                     break;
                 }
             }
             if (this.mega && this.mega.alive) {
                 var mb = this.mega.getBounds();
                 if (pb.x + pb.w > mb.x && pb.x < mb.x + mb.w && pb.y + pb.h > mb.y && pb.y < mb.y + mb.h) {
                     var r6 = p.takeDamage(MEGA_CONTACT_DAMAGE);
                     if (r6 === 'died') { this.die(); return; }
                     if (r6 === 'hurt') { this.damageFlash = 1; this.sound.play('hurt'); this.shake(SHAKE_ON_HIT); }
                 }
             }
             if (this.megaWorm && this.megaWorm.alive) {
                 var mwb = this.megaWorm.getAllBounds();
                 for (var wbi = 0; wbi < mwb.length; wbi++) {
                     var wb = mwb[wbi];
                     if (pb.x + pb.w > wb.x && pb.x < wb.x + wb.w && pb.y + pb.h > wb.y && pb.y < wb.y + wb.h) {
                         var r7 = p.takeDamage(30);
                         if (r7 === 'died') { this.die(); return; }
                         if (r7 === 'hurt') { this.damageFlash = 1; this.sound.play('hurt'); this.shake(10); }
                         break;
                     }
                 }
             }
         }
         if (!powered && this.endlessBoss && this.endlessBoss.alive && !this.endlessBoss.fleeing) {
             var bossB = this.endlessBoss.getBounds();
             if (pb.x + pb.w > bossB.x && pb.x < bossB.x + bossB.w && pb.y + pb.h > bossB.y && pb.y < bossB.y + bossB.h) {
                 var rb = p.takeDamage(ENDLESS_BOSS_CONTACT_DAMAGE);
                 if (rb === 'died') { this.die(); return; }
                 if (rb === 'hurt') { this.damageFlash = 1; this.sound.play('hurt'); this.shake(SHAKE_ON_HIT); }
             }
         }
         for (var pi = 0; pi < this.projectiles.length; pi++) {
             var proj = this.projectiles[pi]; if (!proj.alive) continue;
             var prb = proj.getBounds();
             for (var fj = 0; fj < this.flyers.length; fj++) {
                 var fly = this.flyers[fj]; if (!fly.alive) continue;
                 var flyb = fly.getBounds();
                 if (prb.x + prb.w > flyb.x && prb.x < flyb.x + flyb.w && prb.y + prb.h > flyb.y && prb.y < flyb.y + flyb.h) {
                     fly.takeDamage(proj.dmg); proj.alive = false; this.sound.play('hit');
                     this.particles.emit(proj.x, proj.y, 8, '#FFD966', 3, 0.4, 3);
                     if (proj.ability === 'fire') this.applyFireDot(fly);
                     else if (proj.ability === 'ice') fly.frozenT = ICE_FREEZE_DURATION;
                     break;
                 }
             }
             if (proj.alive) {
                 for (var fpj = 0; fpj < this.floaters.length; fpj++) {
                     var flt = this.floaters[fpj]; if (!flt.alive) continue;
                     var fltb = flt.getBounds();
                     if (prb.x + prb.w > fltb.x && prb.x < fltb.x + fltb.w && prb.y + prb.h > fltb.y && prb.y < fltb.y + fltb.h) {
                         flt.takeDamage(proj.dmg); proj.alive = false; this.sound.play('hit');
                         this.particles.emit(proj.x, proj.y, 8, '#FFD966', 3, 0.4, 3);
                         if (proj.ability === 'fire') this.applyFireDot(flt);
                         else if (proj.ability === 'ice') flt.frozenT = ICE_FREEZE_DURATION;
                         break;
                     }
                 }
             }
             if (proj.alive && this.mega && this.mega.alive) {
                 var mb2 = this.mega.getBounds();
                 if (prb.x + prb.w > mb2.x && prb.x < mb2.x + mb2.w && prb.y + prb.h > mb2.y && prb.y < mb2.y + mb2.h) {
                     this.mega.takeDamage(proj.dmg); proj.alive = false; this.sound.play('hit');
                     this.particles.emit(proj.x, proj.y, 10, '#FFD966', 3, 0.4, 3);
                     if (proj.ability === 'fire') this.applyFireDot(this.mega);
                     else if (proj.ability === 'ice') this.mega.frozenT = ICE_FREEZE_DURATION;
                 }
             }
             if (proj.alive && this.endlessBoss && this.endlessBoss.alive && !this.endlessBoss.fleeing) {
                 var bossB2 = this.endlessBoss.getBounds();
                 if (prb.x + prb.w > bossB2.x && prb.x < bossB2.x + bossB2.w && prb.y + prb.h > bossB2.y && prb.y < bossB2.y + bossB2.h) {
                     this.endlessBoss.takeDamage(proj.dmg); proj.alive = false; this.sound.play('hit');
                     this.particles.emit(proj.x, proj.y, 10, '#FFD966', 3, 0.4, 3);
                     if (proj.ability === 'fire') this.applyFireDot(this.endlessBoss);
                     else if (proj.ability === 'ice') this.endlessBoss.frozenT = ICE_FREEZE_DURATION;
                 }
             }
             if (proj.alive && this.megaWorm && this.megaWorm.alive) {
                 var mwb = this.megaWorm.getAllBounds();
                 for (var wbi = 0; wbi < mwb.length; wbi++) {
                     var wb = mwb[wbi];
                     if (prb.x + prb.w > wb.x && prb.x < wb.x + wb.w && prb.y + prb.h > wb.y && prb.y < wb.y + wb.h) {
                         this.megaWorm.takeDamage(proj.dmg); proj.alive = false; this.sound.play('hit');
                         this.particles.emit(proj.x, proj.y, 12, '#FFD966', 3, 0.5, 4);
                         break;
                     }
                 }
             }
         }
         for (var di = 0; di < this.flyers.length; di++) {
             if (!this.flyers[di].alive) this.particles.emit(this.flyers[di].x, this.flyers[di].y, 20, '#C46E7C', 4, 0.6, 4);
         }
         for (var di2 = 0; di2 < this.floaters.length; di2++) {
             if (!this.floaters[di2].alive) this.particles.emit(this.floaters[di2].x, this.floaters[di2].y, 20, '#E63946', 4, 0.6, 4);
         }
         this.flyers = this.flyers.filter(function(f) { return f.alive; });
         this.floaters = this.floaters.filter(function(f) { return f.alive; });
     };
     Game.prototype.applyFireDot = function(target) {
         var ticks = 6; var per = FIRE_DOT_TOTAL / ticks;
         for (var tk = 0; tk < ticks; tk++) {
             (function(t, dmgAmt, delay) {
                 setTimeout(function() { if (t && t.alive) t.takeDamage(dmgAmt); }, delay);
             })(target, per, tk * (FIRE_DOT_DURATION / ticks) * 1000);
         }
     };
     Game.prototype.collectCoins = function() {
         var pb = this.player.getBounds(); var powered = this.powerupTimer > 0;
         for (var i = 0; i < this.world.coins.length; i++) {
             var c = this.world.coins[i];
             if (c.collected) continue;
             var dx = (pb.x + pb.w/2) - c.x; var dy = (pb.y + pb.h/2) - c.y;
             if (Math.sqrt(dx*dx + dy*dy) < c.r + pb.w/2) {
                 this.world.collectCoin(c);
                 if (c.type === 'invincibility') {
                     this.powerupTimer = INVINCIBILITY_DURATION; this.sound.play('powerup');
                     this.particles.emit(c.x, c.y, 24, '#FF3D8B', 5, 0.9, 5);
                     this.particles.emit(c.x, c.y, 12, '#FFFFFF', 4, 0.6, 4);
                 } else if (c.type === 'heart') {
                     this.sound.play('heal');
                     var before = this.player.hp;
                     this.player.hp = Math.min(PLAYER_MAX_HP, this.player.hp + HEART_HEAL);
                     var gained = this.player.hp - before;
                     this.floatingTexts.push(new FloatingText(c.x, c.y - 10, '+' + gained + ' HP', '#4CAF50'));
                     this.particles.emit(c.x, c.y, 14, '#4CAF50', 3, 0.7, 4);
                 } else {
                     this.sound.play('coin');
                     var coinMult = powered ? INVINCIBILITY_COIN_MULT : 1;
                     var pointsMult = powered ? INVINCIBILITY_POINTS_MULT : 1;
                     this.coinCount += coinMult; this.score += 15 * pointsMult;
                     this.particles.emit(c.x, c.y, 12, '#FFD700', 3, 0.6, 4);
                     this.coinPops.push(new CoinPop(c.x, c.y));
                     this.comboCount++; this.comboTimer = COMBO_WINDOW; this.comboPopTimer = COMBO_POP_TIME;
                 }
             }
         }
     };
     Game.prototype.die = function() {
         if (!this.player.alive) return;
         if (this.gameMode === 'timed') this.bank.resetTimedStreak();
         this.player.alive = false;
         this.sound.play('die'); this.sound.duckMusic(true);
         if (this.gameMode !== 'timed') { this.bank.addPoints(Math.floor(this.score)); this.bank.addCoins(this.coinCount); this.recordRun(); }
         var px = this.player.x + this.player.size/2;
         var py = this.player.y + this.player.size/2;
         var avatarColor = COLOR_PALETTE[this.player.colorName] || '#FFD966';
         this.particles.emit(px, py, 60, avatarColor, 9, 1.3, 5);
         this.particles.emit(px, py, 40, '#FFFFFF', 7, 1.0, 4);
         this.particles.emit(px, py, 30, '#E63946', 6, 1.1, 6);
         this.particles.emit(px, py, 25, '#FFD700', 8, 1.5, 5);
         this.particles.emit(px, py, 20, '#FFE066', 5, 0.9, 3);
         this.shake(SHAKE_ON_DEATH);
         this.player.trail = [];
         this.state = 'gameover'; this.previousState = 'gameover';
         if (this.player.score > this.best) { this.best = this.player.score; localStorage.setItem('pixelBest', String(this.best)); }
     };
 
     Game.prototype.drawStars = function(ctx, alpha) {
         for (var i = 0; i < this.stars.length; i++) {
             var s = this.stars[i];
             var tw = 0.55 + 0.45 * Math.sin(this.time * s.twinkleSpeed + s.twinklePhase);
             ctx.globalAlpha = alpha * tw; ctx.fillStyle = '#FFFFFF';
             ctx.fillRect(s.x, s.y, s.size, s.size);
         }
         ctx.globalAlpha = 1;
     };
     Game.prototype.drawCelestialBodies = function(ctx, cp) {
         ctx.save(); ctx.beginPath(); ctx.rect(0, 0, W, WATER_LINE_Y); ctx.clip();
         var a = cp * Math.PI * 2; var cx = W * 0.5, cy = WATER_LINE_Y, rx = W * 0.4, ry = Math.max(180, H * 0.4);
         var ss = Math.sin(a); var sunA = clamp01((ss + 0.3) / 1.3);
         if (sunA > 0.01) {
             var sx = cx - rx * Math.cos(a), sy = cy - ry * ss;
             ctx.globalAlpha = sunA * 0.20; ctx.fillStyle = '#FFD860';
             ctx.beginPath(); ctx.arc(sx, sy, 58, 0, Math.PI * 2); ctx.fill();
             ctx.globalAlpha = sunA * 0.40; ctx.beginPath(); ctx.arc(sx, sy, 40, 0, Math.PI * 2); ctx.fill();
             ctx.globalAlpha = sunA; ctx.fillStyle = '#FFE066'; ctx.beginPath(); ctx.arc(sx, sy, 28, 0, Math.PI * 2); ctx.fill();
             ctx.fillStyle = '#FFF4B0'; ctx.beginPath(); ctx.arc(sx, sy, 21, 0, Math.PI * 2); ctx.fill();
         }
         var moonA = clamp01((-ss + 0.3) / 1.3);
         if (moonA > 0.01) {
             var mx = cx + rx * Math.cos(a), my = cy + ry * ss;
             ctx.globalAlpha = moonA * 0.15; ctx.fillStyle = '#D8E4F0'; ctx.beginPath(); ctx.arc(mx, my, 55, 0, Math.PI * 2); ctx.fill();
             ctx.globalAlpha = moonA * 0.35; ctx.fillStyle = '#EAF0F8'; ctx.beginPath(); ctx.arc(mx, my, 36, 0, Math.PI * 2); ctx.fill();
             ctx.globalAlpha = moonA; ctx.fillStyle = '#F2F4FC'; ctx.beginPath(); ctx.arc(mx, my, 24, 0, Math.PI * 2); ctx.fill();
         }
         ctx.restore(); ctx.globalAlpha = 1;
     };
     Game.prototype.drawBoat = function(ctx, x, y, scale, type) {
         ctx.save(); ctx.translate(x, y); ctx.scale(scale, scale);
         ctx.globalAlpha = 0.30; ctx.strokeStyle = '#FFFFFF'; ctx.lineWidth = 1;
         ctx.beginPath(); ctx.moveTo(-26, 0); ctx.lineTo(26, 0); ctx.stroke();
         ctx.globalAlpha = 0.15; ctx.beginPath(); ctx.moveTo(-18, 3); ctx.lineTo(18, 3); ctx.stroke();
         ctx.globalAlpha = 1;
         if (type === 0) {
             ctx.fillStyle = '#8B4513';
             ctx.beginPath(); ctx.moveTo(-18, -7); ctx.lineTo(-14, -2); ctx.lineTo(14, -2); ctx.lineTo(18, -7); ctx.closePath(); ctx.fill();
             ctx.fillStyle = '#3B2818'; ctx.fillRect(-1, -39, 2, 32);
             ctx.fillStyle = '#F2F2F2'; ctx.beginPath(); ctx.moveTo(2, -38); ctx.lineTo(2, -8); ctx.lineTo(16, -8); ctx.closePath(); ctx.fill();
         } else if (type === 1) {
             ctx.fillStyle = '#A0522D'; ctx.beginPath(); ctx.moveTo(-14, -7); ctx.lineTo(-10, -2); ctx.lineTo(10, -2); ctx.lineTo(14, -7); ctx.closePath(); ctx.fill();
             ctx.fillStyle = '#D2B48C'; ctx.fillRect(-6, -18, 12, 11);
         } else if (type === 2) {
             ctx.fillStyle = '#3B3B3B'; ctx.beginPath(); ctx.moveTo(-26, -9); ctx.lineTo(-22, 0); ctx.lineTo(22, 0); ctx.lineTo(26, -9); ctx.closePath(); ctx.fill();
             ctx.fillStyle = '#8B4513'; ctx.fillRect(-22, -12, 44, 4);
         } else {
             ctx.fillStyle = '#B8860B'; ctx.beginPath(); ctx.moveTo(-18, -6); ctx.lineTo(-14, -1); ctx.lineTo(14, -1); ctx.lineTo(18, -6); ctx.closePath(); ctx.fill();
             ctx.fillStyle = '#E8E8E8'; ctx.beginPath(); ctx.moveTo(-8, -8); ctx.lineTo(-6, -18); ctx.lineTo(6, -18); ctx.lineTo(8, -8); ctx.closePath(); ctx.fill();
         }
         ctx.restore();
     };
     Game.prototype.drawBoats = function(ctx, ox) {
         var scrolled = ox * 0.15, span = this.boatSpan;
         for (var i = 0; i < this.boats.length; i++) {
             var b = this.boats[i];
             var sx = b.x - scrolled; sx = ((sx % span) + span) % span - 200;
             if (sx > W + 200 || sx < -200) continue;
             var bY = Math.sin(this.time * 1.1 + b.phase) * 2;
             this.drawBoat(ctx, sx, b.waterY + bY, b.scale, b.type);
         }
     };
     Game.prototype.drawClouds = function(ctx, ox, ll, warmth) {
         var cMain = blendColor('#2A3250', '#FFFFFF', ll);
         var cShad = blendColor('#181F38', '#C0D0E0', ll);
         if (warmth > 0.05) cMain = blendColor(cMain, '#FFC098', warmth * 0.35);
         var al = 0.55 + 0.35 * ll;
         for (var i = 0; i < 6; i++) {
             var x = ((i * 210 + 70) - ox * 0.1) % 1200 - 100;
             var y = 30 + (i * 30) % 80;
             ctx.globalAlpha = al; ctx.fillStyle = cShad; ctx.fillRect(x + 4, y + 4, 40, 10);
             ctx.fillStyle = cMain; ctx.fillRect(x, y, 40, 12); ctx.fillRect(x + 12, y - 8, 24, 10);
         }
         ctx.globalAlpha = 1;
     };
     Game.prototype.drawMountainLayer = function(ctx, scrolled, tileW, baseH, hRange, hMult, hOff) {
         var hy = WATER_LINE_Y; var first = Math.floor(scrolled / tileW) - 1;
         var tiles = Math.ceil(W / tileW) + 3;
         for (var k = 0; k < tiles; k++) {
             var idx = first + k; var bx = idx * tileW - scrolled;
             if (bx > W + 50) break; if (bx + tileW < -50) continue;
             var raw = ((idx * hMult + hOff) % hRange + hRange) % hRange;
             var h = baseH + raw;
             ctx.beginPath(); ctx.moveTo(bx, hy); ctx.lineTo(bx + tileW/2, hy - h); ctx.lineTo(bx + tileW, hy); ctx.closePath(); ctx.fill();
         }
     };
     Game.prototype.drawMountains = function(ctx, ox, ll, palette) {
         var base = blendColor(darken(palette.mountain, 0.22), palette.mountain, ll);
         ctx.fillStyle = base; this.drawMountainLayer(ctx, ox * 0.06, 380, 60, 70, 23, 40);
         ctx.fillStyle = darken(base, 0.78); this.drawMountainLayer(ctx, ox * 0.13, 320, 75, 55, 31, 15);
         ctx.fillStyle = darken(base, 0.55); this.drawMountainLayer(ctx, ox * 0.22, 260, 90, 60, 41, 25);
     };
     Game.prototype.drawProp = function(ctx, prop, ox, oy, ll) {
         var sx = prop.x - ox; var sy = prop.y - oy; var pScale = prop.scale; var type = prop.type;
         if (type === 0) {
             var treeH = 210 * pScale; var topX = sx + 10 * pScale; var topY = sy - treeH;
             ctx.strokeStyle = blendColor('#2B1A10', '#5C3A21', ll); ctx.lineWidth = 16 * pScale; ctx.lineCap = 'round';
             ctx.beginPath(); ctx.moveTo(sx, sy); ctx.quadraticCurveTo(sx - 30 * pScale, sy - treeH * 0.5, topX, topY); ctx.stroke();
             ctx.fillStyle = blendColor('#1E4A22', '#388E3C', ll);
             for (var i = 0; i < 6; i++) {
                 var ang = -Math.PI + (i * Math.PI / 5);
                 ctx.save(); ctx.translate(topX, topY); ctx.rotate(ang);
                 ctx.beginPath(); ctx.moveTo(0, 0); ctx.quadraticCurveTo(50 * pScale, -20 * pScale, 100 * pScale, 40 * pScale); ctx.quadraticCurveTo(50 * pScale, 10 * pScale, 0, 0); ctx.fill();
                 ctx.restore();
             }
         } else if (type === 1) {
             ctx.fillStyle = blendColor('#1E4A22', '#388E3C', ll);
             fillRoundRect(ctx, sx - 8*pScale, sy - 60*pScale, 16*pScale, 60*pScale, 8*pScale);
         } else if (type === 3) {
             ctx.fillStyle = blendColor('#2A1510', '#5D4037', ll); ctx.fillRect(sx - 4*pScale, sy - 20*pScale, 8*pScale, 20*pScale);
             ctx.fillStyle = blendColor('#6A9EB5', '#E0F7FA', ll);
             ctx.beginPath(); ctx.moveTo(sx, sy - 80*pScale); ctx.lineTo(sx - 25*pScale, sy - 45*pScale); ctx.lineTo(sx + 25*pScale, sy - 45*pScale); ctx.closePath(); ctx.fill();
             ctx.beginPath(); ctx.moveTo(sx, sy - 60*pScale); ctx.lineTo(sx - 30*pScale, sy - 25*pScale); ctx.lineTo(sx + 30*pScale, sy - 25*pScale); ctx.closePath(); ctx.fill();
         }
     };
 
     Game.prototype.render = function() {
         var ctx = this.ctx;
         ctx.setTransform(this.renderScale, 0, 0, this.renderScale, 0, 0);
         var ox = this.world.cameraX, oy = 0;
         var ll = getLightLevel(this.dayPhase);
         var warmth = clamp01(1 - Math.abs(ll - 0.5) * 2);
         var palette = this.getBiomePalette();
         var skyTop = blendColor(darken(palette.skyTop, 0.20), palette.skyTop, ll);
         var skyBot = blendColor(darken(palette.skyBot, 0.20), palette.skyBot, ll);
         if (warmth > 0.05) skyBot = blendColor(skyBot, '#FFA060', warmth * 0.5);
         var skyGrad = ctx.createLinearGradient(0, 0, 0, WATER_LINE_Y);
         skyGrad.addColorStop(0, skyTop); skyGrad.addColorStop(1, skyBot);
         var wTop = blendColor(darken(palette.wTop, 0.18), palette.wTop, ll);
         var wBot = blendColor(darken(palette.wBot, 0.18), palette.wBot, ll);
         var wGrad = ctx.createLinearGradient(0, WATER_LINE_Y, 0, H);
         wGrad.addColorStop(0, wTop); wGrad.addColorStop(1, wBot);
         var shakeX = 0, shakeY = 0;
         if (this.shakeTime > 0) {
             var shakeT = this.shakeTime / this.shakeDuration; var mag = this.shakeMag * shakeT;
             shakeX = (Math.random() * 2 - 1) * mag; shakeY = (Math.random() * 2 - 1) * mag;
         }
         ctx.save(); ctx.translate(shakeX, shakeY);
         
         // Determine if we are in a cave level
         var isCave = (this.gameMode === 'levels' && (this.selectedLevel === 19 || this.selectedLevel === 20));
         var isCaveEntrance = (this.gameMode === 'levels' && this.selectedLevel === 18);

         if (isCave) {
             // Draw cave background
             ctx.fillStyle = '#0a0a15';
             ctx.fillRect(-40, -40, W + 80, H + 80);
             for (var i = 0; i < 20; i++) {
                 var sx = (i * 70 + 30 - (ox * 0.2) % 70);
                 var sw = 40 + (i % 3) * 20;
                 var sh = 100 + (i % 4) * 30;
                 ctx.fillStyle = '#1a1a2e';
                 ctx.beginPath();
                 ctx.moveTo(sx, -40);
                 ctx.lineTo(sx + sw/2, sh);
                 ctx.lineTo(sx + sw, -40);
                 ctx.fill();
             }
         } else {
             // Draw normal sky
             ctx.fillStyle = skyTop; ctx.fillRect(-40, -40, W + 80, WATER_LINE_Y + 40);
             ctx.fillStyle = wBot; ctx.fillRect(-40, WATER_LINE_Y, W + 80, H - WATER_LINE_Y + 40);
             ctx.fillStyle = skyGrad; ctx.fillRect(0, 0, W, WATER_LINE_Y);
             ctx.fillStyle = wGrad; ctx.fillRect(0, WATER_LINE_Y, W, H - WATER_LINE_Y);
             var starAlpha = clamp01(1 - ll * 1.6);
             if (starAlpha > 0.02) this.drawStars(ctx, starAlpha);
             this.drawCelestialBodies(ctx, this.dayPhase);
             this.drawClouds(ctx, ox, ll, warmth);
             this.drawMountains(ctx, ox, ll, palette);
             this.drawBoats(ctx, ox);
         }
 
         for (var pi = 0; pi < this.world.props.length; pi++) {
             var prop = this.world.props[pi]; var ppx = prop.x - ox;
             if (ppx > W + 100 || ppx < -100) continue;
             this.drawProp(ctx, prop, ox, oy, ll);
         }
         var grassColor = isCave ? '#4A3B32' : blendColor(darken(palette.grass, 0.7), palette.grass, ll);
         var dirtColor = isCave ? '#2E1E16' : blendColor(darken(palette.dirt, 0.7), palette.dirt, ll);
         
         for (var i = 0; i < this.world.ground.length; i++) {
             var g = this.world.ground[i]; var sx = g.x - ox;
             if (sx > W + 20 || sx + g.w < -20) continue;
             ctx.fillStyle = grassColor; ctx.fillRect(sx, g.y, g.w, 14);
             ctx.fillStyle = dirtColor; ctx.fillRect(sx, g.y + 14, g.w, H - g.y - 14);
             if (isCave) {
                 ctx.fillStyle = '#1A100C';
                 var numRocks = Math.floor(g.w / 40);
                 for (var r = 0; r < numRocks; r++) {
                     var rx = sx + (r * 43) % g.w;
                     var ry = g.y + 15 + (r * 29) % 40;
                     ctx.beginPath();
                     ctx.ellipse(rx, ry, 10, 5, 0, 0, Math.PI*2);
                     ctx.fill();
                 }
             }
         }
         for (var si = 0; si < this.world.spikes.length; si++) {
             var s = this.world.spikes[si]; var ssx = s.x - ox;
             if (ssx < -40 || ssx > W + 40) continue;
             ctx.fillStyle = palette.spike;
             ctx.beginPath(); ctx.moveTo(ssx, s.y + s.h); ctx.lineTo(ssx + s.w/2, s.y); ctx.lineTo(ssx + s.w, s.y + s.h); ctx.closePath(); ctx.fill();
         }
         var platColor = blendColor(darken(palette.dirt, 0.85), palette.dirt, ll);
         for (var pi2 = 0; pi2 < this.world.platforms.length; pi2++) {
             var p2 = this.world.platforms[pi2]; var ppx2 = p2.x - ox;
             if (ppx2 > W + 20 || ppx2 + p2.w < -20) continue;
             ctx.fillStyle = platColor; ctx.fillRect(ppx2, p2.y, p2.w, p2.h);
         }
         
         if ((this.gameMode === 'levels' || this.gameMode === 'timed') && this.world.goalX) {
             var gx = this.world.goalX - ox;
             if (gx > -50 && gx < W + 50) {
                 if (isCaveEntrance) {
                     // Draw Cave Entrance at goal (grounded properly)
                     ctx.fillStyle = '#050508';
                     ctx.beginPath();
                     ctx.arc(gx + 50, GROUND_Y - 10, 70, Math.PI, 0); // Arch
                     ctx.lineTo(gx + 120, GROUND_Y);
                     ctx.lineTo(gx - 20, GROUND_Y);
                     ctx.fill();
                     ctx.strokeStyle = '#2E1E16';
                     ctx.lineWidth = 6;
                     ctx.beginPath();
                     ctx.arc(gx + 50, GROUND_Y - 10, 70, Math.PI, 0);
                     ctx.stroke();
                     ctx.fillStyle = '#FFD966';
                     ctx.font = 'bold 16px ' + FONT;
                     ctx.textAlign = 'center';
                     ctx.fillText('CAVE', gx + 50, GROUND_Y - 100);
                     ctx.textAlign = 'left';
                 } else {
                     ctx.strokeStyle = '#8B6B4D'; ctx.lineWidth = 4;
                     ctx.beginPath(); ctx.moveTo(gx, GROUND_Y); ctx.lineTo(gx, GROUND_Y - 60); ctx.stroke();
                     ctx.fillStyle = '#4CAF50';
                     ctx.beginPath(); ctx.moveTo(gx, GROUND_Y - 60); ctx.lineTo(gx + 30, GROUND_Y - 50); ctx.lineTo(gx, GROUND_Y - 40); ctx.closePath(); ctx.fill();
                     ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 10px ' + FONT;
                     ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                     ctx.fillText('GOAL', gx + 14, GROUND_Y - 50);
                     ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
                 }
             }
         }
         
         for (var wi = 0; wi < this.wormyGroups.length; wi++) this.wormyGroups[wi].draw(ctx, ox, oy);
         for (var ci = 0; ci < this.world.coins.length; ci++) {
             var c = this.world.coins[ci];
             if (c.collected) continue;
             var ccx = c.x - ox, ccy = c.y + Math.sin(c.bob) * 3;
             if (ccx < -20 || ccx > W + 20) continue;
             if (c.type === 'invincibility') {
                 ctx.shadowColor = '#FF3D8B'; ctx.shadowBlur = 20;
                 ctx.fillStyle = '#FF3D8B'; ctx.beginPath(); ctx.arc(ccx, ccy, c.r * 1.1, 0, Math.PI * 2); ctx.fill();
                 ctx.shadowBlur = 0; ctx.fillStyle = '#FFFFFF'; ctx.beginPath(); ctx.arc(ccx, ccy, c.r * 0.35, 0, Math.PI * 2); ctx.fill();
             } else if (c.type === 'heart') {
                 ctx.fillStyle = '#E63946';
                 ctx.beginPath(); ctx.arc(ccx - 5, ccy - 3, 6, 0, Math.PI * 2); ctx.fill();
                 ctx.beginPath(); ctx.arc(ccx + 5, ccy - 3, 6, 0, Math.PI * 2); ctx.fill();
                 ctx.beginPath(); ctx.moveTo(ccx - 10, ccy - 1); ctx.lineTo(ccx, ccy + 12); ctx.lineTo(ccx + 10, ccy - 1); ctx.closePath(); ctx.fill();
             } else {
                 ctx.fillStyle = '#FFD700'; ctx.beginPath(); ctx.arc(ccx, ccy, c.r, 0, Math.PI * 2); ctx.fill();
                 ctx.fillStyle = '#FFAA00'; ctx.beginPath(); ctx.arc(ccx, ccy, c.r * 0.58, 0, Math.PI * 2); ctx.fill();
             }
         }
         for (var fi = 0; fi < this.flyers.length; fi++) this.flyers[fi].draw(ctx, ox, oy);
         for (var fli = 0; fli < this.floaters.length; fli++) this.floaters[fli].draw(ctx, ox, oy);
         if (this.mega && this.mega.alive) this.mega.draw(ctx, ox, oy);
         if (this.endlessBoss && this.endlessBoss.alive) this.endlessBoss.draw(ctx, ox, oy);
         if (this.megaWorm) this.megaWorm.draw(ctx, ox, oy);
         
         if (this.player.trail.length > 0 && this.state !== 'menu') {
             var trailStyle = this.player.trailStyle;
             for (var tri = 0; tri < this.player.trail.length; tri++) {
                 var tg = this.player.trail[tri];
                 var tAlpha = tg.life * 0.68;
                 if (tAlpha < 0.02) continue;
                 var trailColor = this.powerupTimer > 0 ? '#FF3D8B' : (this.player.avatarName === 'ball' ? '#FFD966' : (COLOR_PALETTE[this.player.colorName] || '#FFD966'));
                 ctx.globalAlpha = tAlpha; ctx.fillStyle = trailColor;
                 var tr = (PLAYER_SIZE / 2) * (0.55 + 0.45 * tg.life);
                 ctx.beginPath(); ctx.arc(tg.x - ox, tg.y - oy, tr, 0, Math.PI * 2); ctx.fill();
             }
             ctx.globalAlpha = 1;
         }
         if (this.player.alive || this.state === 'gameover' || this.state === 'victory') {
             var flashing = this.player.invulnTimer > 0 && this.state === 'playing';
             this.player.draw(ctx, ox, oy, this.powerupTimer > 0 && this.state === 'playing', flashing);
         }
         for (var pri = 0; pri < this.projectiles.length; pri++) this.projectiles[pri].draw(ctx, ox, oy);
         for (var epi = 0; epi < this.enemyProjectiles.length; epi++) this.enemyProjectiles[epi].draw(ctx, ox, oy);
         this.particles.draw(ctx, ox, oy);
         for (var cpi = 0; cpi < this.coinPops.length; cpi++) this.coinPops[cpi].draw(ctx, ox, oy);
         for (var fti = 0; fti < this.floatingTexts.length; fti++) this.floatingTexts[fti].draw(ctx, ox, oy);
         ctx.restore();
         if (this.megaWormActive && this.megaWorm) {
             ctx.fillStyle = 'rgba(20, 40, 90, 0.25)';
             ctx.fillRect(0, 0, W, H);
         }
         if (this.damageFlash > 0) {
             ctx.fillStyle = 'rgba(230, 57, 70, ' + (this.damageFlash * 0.35) + ')';
             ctx.fillRect(0, 0, W, H);
         }
         if (this.state === 'playing' || this.state === 'paused') {
             this.drawHUD(ctx);
             if (this.isTouch && this.state === 'playing') this.drawTouchControls(ctx);
             if (this.powerupTimer > 0) this.drawPowerupTimer(ctx);
             if (this.gameMode === 'levels' && this.world.hint && this.player.x < 700) this.drawHint(ctx);
             if (this.gameMode === 'timed' && this.timedActive) this.drawTimedHUD(ctx);
             if (this.bossBannerTimer > 0) this.drawBossBanner(ctx);
             if (this.megaWorm) this.drawMegaWormBossBar(ctx);
         }
         if (this.state === 'loading') this.drawLoading(ctx);
         if (this.state === 'intro') this.drawIntro(ctx);
         if (this.state === 'menu') this.drawMenu(ctx);
         if (this.state === 'welcome') this.drawWelcome(ctx);
         if (this.state === 'options') this.drawOptions(ctx);
         if (this.state === 'gamemode') this.drawGamemode(ctx);
         if (this.state === 'levelselect') this.drawLevelSelect(ctx);
         if (this.state === 'gameover') this.drawGameOver(ctx);
         if (this.state === 'victory') this.drawVictory(ctx);
         if (this.state === 'paused') this.drawPauseOverlay(ctx);
         if (this.state === 'settings') this.drawSettings(ctx);
         if (this.state === 'shop') this.drawShop(ctx);
         if (this.state === 'promo-preview') this.drawPromoPreview(ctx);
         if (this.state === 'daily-reward') this.drawDailyReward(ctx);
         if (this.boosterOpen) this.drawBooster(ctx);
         this.drawVersionTag(ctx);
         if (this.currentAchievement) this.drawAchievementBanner(ctx);
     };
 
     Game.prototype.drawMegaWormBossBar = function(ctx) {
         var barW = Math.min(600, W - 120), barH = 22;
         var bx = W / 2 - barW / 2, by = 16;
         ctx.save();
         ctx.fillStyle = 'rgba(0,0,0,0.7)';
         fillRoundRect(ctx, bx - 4, by - 4, barW + 8, barH + 8, (barH + 8) / 2);
         if (this.megaWorm.phase === 'intro_rise' || this.megaWorm.phase === 'intro_charge') {
             ctx.fillStyle = '#FF4D4D';
             ctx.save(); roundRectPath(ctx, bx, by, barW, barH, barH/2); ctx.clip();
             ctx.fillRect(bx, by, barW * this.megaWorm.bossBarFill, barH);
             ctx.restore();
             ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 1.5;
             strokeRoundRect(ctx, bx, by, barW, barH, barH/2);
             ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 13px ' + FONT;
             ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillText('ABYSSAL COLOSSUS', W / 2, by + barH/2 + 1);
             ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
         } else {
             var pct = this.megaWorm.hp / this.megaWorm.maxHp;
             var hpColor = pct > 0.5 ? '#B03A2E' : pct > 0.25 ? '#FFB347' : '#E63946';
             ctx.fillStyle = hpColor;
             ctx.save(); roundRectPath(ctx, bx, by, barW, barH, barH/2); ctx.clip();
             ctx.fillRect(bx, by, barW * pct, barH);
             ctx.restore();
             ctx.strokeStyle = 'rgba(255,255,255,0.5)'; ctx.lineWidth = 1.5;
             strokeRoundRect(ctx, bx, by, barW, barH, barH/2);
             ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 13px ' + FONT;
             ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
             ctx.fillText('ABYSSAL COLOSSUS   ' + Math.ceil(this.megaWorm.hp) + ' / ' + this.megaWorm.maxHp, W / 2, by + barH/2 + 1);
             ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
         }
         ctx.restore();
     };
 
     Game.prototype.drawPauseOverlay = function(ctx) {
         ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(0, 0, W, H);
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 56px ' + FONT;
         ctx.fillText('PAUSED', W/2, H/2 - 30);
         ctx.fillStyle = 'rgba(255,255,255,0.75)'; ctx.font = '18px ' + FONT;
         ctx.fillText('Press P, ESC, or click to resume', W/2, H/2 + 30);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawTouchControls = function(ctx) {
         if (!this.isTouch || this.state !== 'playing') return;
         if (this.megaWormActive) return;
         ctx.save();
         ctx.globalAlpha = 0.15; ctx.fillStyle = '#FFFFFF';
         ctx.beginPath(); ctx.arc(W - 70, H - 70, 50, 0, Math.PI*2); ctx.fill();
         ctx.globalAlpha = 0.5; ctx.strokeStyle = '#FFFFFF'; ctx.lineWidth = 3; ctx.stroke();
         ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 20px ' + FONT;
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillText('JUMP', W - 70, H - 70);
         ctx.restore();
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawAchievementBanner = function(ctx) {
         var total = ACHIEVEMENT_BANNER_TIME; var t = this.achievementBannerTimer;
         var alpha = 1;
         if (t > total - 0.3) alpha = clamp01((total - t) / 0.3);
         else if (t < 0.4) alpha = clamp01(t / 0.4);
         var a = this.currentAchievement; var bW = 400, bH = 82;
         var bX = W/2 - bW/2; var bY = 42 + (1 - alpha) * -10;
         ctx.save(); ctx.globalAlpha = alpha;
         ctx.shadowColor = 'rgba(255,215,100,0.65)'; ctx.shadowBlur = 26;
         ctx.fillStyle = 'rgba(20,20,36,0.98)';
         fillRoundRect(ctx, bX, bY, bW, bH, 16); ctx.restore();
         ctx.strokeStyle = '#FFD966'; ctx.lineWidth = 2.5;
         strokeRoundRect(ctx, bX, bY, bW, bH, 16);
         var iconCX = bX + 42; var iconCY = bY + bH/2;
         ctx.save(); ctx.shadowColor = '#FFD966'; ctx.shadowBlur = 14;
         ctx.fillStyle = '#FFD966'; ctx.beginPath(); ctx.arc(iconCX, iconCY, 22, 0, Math.PI * 2); ctx.fill(); ctx.restore();
         ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 12px ' + FONT;
         ctx.fillText('ACHIEVEMENT UNLOCKED', bX + 78, bY + 22);
         ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 20px ' + FONT;
         ctx.fillText(a.name, bX + 78, bY + 44);
         ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.font = '12px ' + FONT;
         ctx.fillText(a.desc + '  •  +' + a.reward + ' pts', bX + 78, bY + 64);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawLeaderboard = function(ctx) {
         var entries = this.bank.leaderboard;
         if (!entries || entries.length === 0) return;
         var pw = 220, ph = 50 + entries.length * 26 + 8;
         var px = W - pw - 30, py = 120;
         ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.6)'; ctx.shadowBlur = 14;
         ctx.fillStyle = 'rgba(15,15,26,0.72)'; fillRoundRect(ctx, px, py, pw, ph, 14); ctx.restore();
         ctx.strokeStyle = 'rgba(255,215,100,0.45)'; ctx.lineWidth = 1.5;
         strokeRoundRect(ctx, px, py, pw, ph, 14);
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 14px ' + FONT;
         ctx.fillText('TOP RUNS', px + pw/2, py + 20);
         for (var i = 0; i < entries.length; i++) {
             var e = entries[i]; var ry = py + 48 + i * 26;
             ctx.textAlign = 'left';
             ctx.fillStyle = (i === 0) ? '#FFD966' : 'rgba(255,255,255,0.55)';
             ctx.font = 'bold 13px ' + FONT; ctx.fillText((i + 1) + '.', px + 14, ry);
             ctx.fillStyle = (i === 0) ? '#FFFFFF' : 'rgba(255,255,255,0.9)';
             ctx.font = 'bold 15px ' + FONT; ctx.fillText('' + e.score, px + 34, ry);
         }
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawBossBanner = function(ctx) {
         var t = clamp01(this.bossBannerTimer / 2.5);
         var alpha = t < 0.85 ? 1 : (1 - (t - 0.85) / 0.15);
         ctx.save(); ctx.globalAlpha = alpha;
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         var text = this.megaWormActive ? '⚠  ABYSSAL COLOSSUS RISING  ⚠' : '⚠  BOSS INCOMING  ⚠';
         ctx.font = 'bold 30px ' + FONT;
         var tw = ctx.measureText(text).width;
         var pillW = tw + 60, pillH = 54;
         var pillX = W / 2 - pillW / 2; var pillY = H * 0.28;
         ctx.save(); ctx.shadowColor = 'rgba(230, 57, 70, 0.7)'; ctx.shadowBlur = 22;
         ctx.fillStyle = 'rgba(20, 20, 36, 0.88)'; fillRoundRect(ctx, pillX, pillY, pillW, pillH, pillH / 2); ctx.restore();
         ctx.strokeStyle = '#E63946'; ctx.lineWidth = 2.5;
         strokeRoundRect(ctx, pillX, pillY, pillW, pillH, pillH / 2);
         ctx.fillStyle = '#FF6B6B';
         ctx.fillText(text, W / 2, pillY + pillH / 2 + 1);
         ctx.restore();
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawTimedHUD = function(ctx) {
         var barW = 300, barH = 40; var barX = W/2 - barW/2, barY = 16;
         ctx.fillStyle = 'rgba(15,15,26,0.8)'; fillRoundRect(ctx, barX, barY, barW, barH, 20);
         ctx.strokeStyle = 'rgba(255,217,102,0.7)'; ctx.lineWidth = 2;
         strokeRoundRect(ctx, barX, barY, barW, barH, 20);
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 22px ' + FONT;
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillText('TIME: ' + Math.ceil(this.timedRemaining) + 's', W/2, barY + barH/2 + 1);
         ctx.font = 'bold 12px ' + FONT; ctx.fillStyle = 'rgba(255,255,255,0.75)';
         ctx.fillText('Wins: ' + this.bank.timedWinsToday + '/' + TIMED_DAILY_MAX_WINS, W/2, barY + barH + 14);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawHUD = function(ctx) {
         var hasMovementUI = this.player.airJumpsMax > 0 || this.player.dashUnlocked;
         var px = 16, py = 16, pw = 240, ph = hasMovementUI ? 140 : 116;
         if (this.megaWormActive) ph = 116;
         ctx.fillStyle = 'rgba(15, 15, 26, 0.55)'; fillRoundRect(ctx, px, py, pw, ph, 16);
         ctx.strokeStyle = 'rgba(255,255,255,0.12)'; ctx.lineWidth = 1;
         strokeRoundRect(ctx, px, py, pw, ph, 16);
         ctx.textBaseline = 'middle';
         ctx.font = 'bold 20px ' + FONT;
         ctx.fillStyle = '#FFD966'; ctx.fillText('SCORE', px + 18, py + 24);
         ctx.fillStyle = '#FFFFFF'; ctx.textAlign = 'right';
         ctx.fillText('' + Math.floor(this.displayScore), px + pw - 18, py + 24);
         ctx.fillStyle = '#FFB347'; ctx.font = 'bold 14px ' + FONT; ctx.textAlign = 'left';
         ctx.fillText('BEST', px + 18, py + 48);
         ctx.fillStyle = '#FFFFFF'; ctx.textAlign = 'right';
         ctx.fillText('' + this.best, px + pw - 18, py + 48);
         ctx.fillStyle = '#FFD700'; ctx.font = 'bold 14px ' + FONT; ctx.textAlign = 'left';
         ctx.fillText('COINS', px + 18, py + 70);
         ctx.fillStyle = '#FFFFFF'; ctx.textAlign = 'right';
         ctx.fillText('' + this.coinCount, px + pw - 18, py + 70);
         ctx.textAlign = 'left';
         ctx.fillStyle = '#E63946'; ctx.font = 'bold 12px ' + FONT;
         ctx.fillText('HP', px + 18, py + 94);
         var barX = px + 42, barY = py + 86, barW = pw - 60, barH = 14;
         ctx.fillStyle = 'rgba(0,0,0,0.5)'; fillRoundRect(ctx, barX, barY, barW, barH, barH / 2);
         var hpPct = this.player.hp / PLAYER_MAX_HP;
         if (hpPct > 0) {
             var hpColor = hpPct > 0.6 ? '#4CAF50' : hpPct > 0.3 ? '#FFB347' : '#E63946';
             ctx.fillStyle = hpColor;
             ctx.save(); roundRectPath(ctx, barX, barY, barW, barH, barH / 2); ctx.clip();
             ctx.fillRect(barX, barY, barW * hpPct, barH); ctx.restore();
         }
         ctx.strokeStyle = 'rgba(255,255,255,0.25)'; ctx.lineWidth = 1;
         strokeRoundRect(ctx, barX, barY, barW, barH, barH / 2);
         ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 10px ' + FONT;
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillText(this.player.hp + ' / ' + PLAYER_MAX_HP, barX + barW / 2, barY + barH / 2 + 1);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
         if (!this.megaWormActive && hasMovementUI) this.drawHUDMovementRow(ctx, px, py, pw);
         if (this.state === 'playing') {
             if (!this.megaWormActive) {
                 ctx.fillStyle = 'rgba(15, 15, 26, 0.5)'; fillRoundRect(ctx, W - 260, 16, 244, 30, 15);
                 ctx.fillStyle = 'rgba(255, 255, 255, 0.75)'; ctx.font = '13px ' + FONT;
                 ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                 var hintTxt;
                 if (this.gameMode === 'levels') hintTxt = 'P pause   S shoot';
                 else if (this.gameMode === 'timed') hintTxt = 'P pause   S shoot';
                 else hintTxt = 'P pause';
                 ctx.fillText(hintTxt, W - 138, 32);
                 ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
             } else {
                 ctx.fillStyle = 'rgba(15, 15, 26, 0.55)'; fillRoundRect(ctx, W - 300, 60, 284, 30, 15);
                 ctx.fillStyle = 'rgba(255, 255, 255, 0.85)'; ctx.font = '13px ' + FONT;
                 ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
                 ctx.fillText('SPACE to Aim  •  S to Fire', W - 158, 76);
                 ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
             }
         }
     };
 
     Game.prototype.drawHUDMovementRow = function(ctx, px, py, pw) {
         var rowY = py + 122; var p = this.player;
         if (p.airJumpsMax > 0) {
             ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.font = 'bold 10px ' + FONT;
             ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
             ctx.fillText('AIR', px + 18, rowY);
             var dotStart = px + 46;
             for (var i = 0; i < p.airJumpsMax; i++) {
                 var available = i < p.airJumpsLeft;
                 ctx.beginPath(); ctx.arc(dotStart + i * 15, rowY, 5, 0, Math.PI * 2);
                 ctx.fillStyle = available ? '#A8D5BA' : 'rgba(168, 213, 186, 0.15)'; ctx.fill();
             }
         }
     };
 
     Game.prototype.drawHint = function(ctx) {
         var alpha = clamp01(1 - this.player.x / 700); if (alpha <= 0) return;
         ctx.save(); ctx.globalAlpha = alpha;
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillStyle = 'rgba(15,15,26,0.75)';
         var textW = 500, textH = 50; var tx = W/2 - textW/2, ty = H * 0.72;
         fillRoundRect(ctx, tx, ty, textW, textH, 25);
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 20px ' + FONT;
         ctx.fillText(this.world.hint, W/2, ty + 26);
         ctx.restore(); ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawPowerupTimer = function(ctx) {
         var barW = 340, barH = 30, barX = W/2 - barW/2, barY = this.megaWorm ? 50 : 22;
         var pct = this.powerupTimer / INVINCIBILITY_DURATION;
         ctx.fillStyle = 'rgba(15, 15, 26, 0.75)'; fillRoundRect(ctx, barX, barY, barW, barH, barH/2);
         ctx.save(); roundRectPath(ctx, barX, barY, barW, barH, barH/2); ctx.clip();
         ctx.fillStyle = '#FF3D8B'; ctx.fillRect(barX, barY, barW * pct, barH); ctx.restore();
         ctx.strokeStyle = 'rgba(255,255,255,0.4)'; ctx.lineWidth = 1.5;
         strokeRoundRect(ctx, barX, barY, barW, barH, barH/2);
         ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 15px ' + FONT;
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillText('INVINCIBLE  ' + this.powerupTimer.toFixed(1) + 's', W/2, barY + barH/2 + 1);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawVersionTag = function(ctx) {
         ctx.font = 'bold 12px ' + FONT; ctx.textBaseline = 'middle';
         var label = GAME_VERSION; var textW = ctx.measureText(label).width;
         var pillW = textW + 18, pillH = 20; var px = W - 12 - pillW, py = H - 12 - pillH;
         ctx.fillStyle = 'rgba(15, 15, 26, 0.4)'; fillRoundRect(ctx, px, py, pillW, pillH, pillH / 2);
         ctx.fillStyle = 'rgba(255, 255, 255, 0.6)'; ctx.textAlign = 'center';
         ctx.fillText(label, px + pillW / 2, py + pillH / 2 + 1);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawMenu = function(ctx) {
         ctx.fillStyle = 'rgba(0, 0, 0, 0.45)'; ctx.fillRect(0, 0, W, H);
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         var bob = Math.sin(this.time * 1.2) * 3;
         ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.7)'; ctx.shadowBlur = 20; ctx.shadowOffsetY = 4;
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 62px ' + FONT;
         ctx.fillText('OVERROLL', W/2, H * 0.18 + bob); ctx.restore();
         ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.font = '20px ' + FONT;
         ctx.fillText('SPACE / UP / CLICK to jump', W/2, H * 0.30);
         var pillY = H * 0.36, pillH = 30, ptsW = 170, cnsW = 150;
         var ptsX = W/2 - ptsW - 8, cnsX = W/2 + 8;
         ctx.font = 'bold 15px ' + FONT;
         ctx.fillStyle = 'rgba(255,215,100,0.12)'; fillRoundRect(ctx, ptsX, pillY, ptsW, pillH, pillH/2);
         ctx.strokeStyle = 'rgba(255,215,100,0.5)'; ctx.lineWidth = 1; strokeRoundRect(ctx, ptsX, pillY, ptsW, pillH, pillH/2);
         ctx.fillStyle = '#FFD966'; ctx.fillText('POINTS: ' + this.bank.points, ptsX + ptsW/2, pillY + pillH/2 + 1);
         ctx.fillStyle = 'rgba(255,179,71,0.12)'; fillRoundRect(ctx, cnsX, pillY, cnsW, pillH, pillH/2);
         ctx.strokeStyle = 'rgba(255,179,71,0.5)'; strokeRoundRect(ctx, cnsX, pillY, cnsW, pillH, pillH/2);
         ctx.fillStyle = '#FFB347'; ctx.fillText('COINS: ' + this.bank.coins, cnsX + cnsW/2, pillY + pillH/2 + 1);
         var diaW = 160; var diaX = W/2 - diaW/2; var diaY = pillY + pillH + 8;
         ctx.fillStyle = 'rgba(135,206,250,0.12)'; fillRoundRect(ctx, diaX, diaY, diaW, pillH, pillH/2);
         ctx.strokeStyle = 'rgba(135,206,250,0.55)'; strokeRoundRect(ctx, diaX, diaY, diaW, pillH, pillH/2);
         ctx.fillStyle = '#87CEEB';
         ctx.fillText('DIAMONDS: ' + this.bank.diamonds, diaX + diaW/2, diaY + pillH/2 + 1);
         ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.font = '13px ' + FONT;
         var modeLabel = this.gameMode === 'endless' ? 'Endless' : this.gameMode === 'timed' ? 'Timed' : 'Levels';
         ctx.fillText('Current mode: ' + modeLabel, W/2, diaY + pillH + 16);
         drawButton(ctx, MENU_START_X, MENU_START_Y, MENU_START_W, MENU_START_H, '▶  PLAY', 'primary');
         drawButton(ctx, MENU_OPTIONS_X, MENU_OPTIONS_Y, MENU_OPTIONS_W, MENU_OPTIONS_H, 'OPTIONS', 'neutral');
         drawButton(ctx, MENU_SETTINGS_X, MENU_SETTINGS_Y, MENU_SETTINGS_W, MENU_SETTINGS_H, 'SETTINGS', 'neutral');
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };

     Game.prototype.signInForCloudSave = async function() {
         if (this.welcomeBusy) return;
         if (!window.overroll || !window.overroll.signInGoogle) {
             this.welcomeStatus = 'Google sign-in is unavailable. Progress will save on this computer.'; return;
         }
         this.welcomeBusy = true; this.welcomeStatus = 'Opening Google sign-in in your browser…';
         try {
             var result = await window.overroll.signInGoogle();
             if (!result.ok) { this.welcomeStatus = result.message || 'Google sign-in did not complete. You can continue offline.'; return; }
             this.googleAccount = result.user; this.googleConfigured = true;
             var bootstrap = await window.overroll.bootstrap();
             var cloud = bootstrap && bootstrap.cloudSave;
             var localTime = parseInt(localStorage.getItem('rrSaveUpdatedAt'), 10) || 0;
             if (cloud && cloud.version === 1 && cloud.data && (cloud.updatedAt || 0) > localTime) {
                 applyLocalSave(cloud); this.welcomeStatus = 'Cloud save found. Loading your progress…';
                 setTimeout(function() { window.location.reload(); }, 500);
             } else {
                 window.overroll.queueCloudSave(localSavePayload());
                 this.welcomeStatus = 'Signed in as ' + result.user.email + '. Cloud backup is on.';
             }
         } catch (err) { this.welcomeStatus = 'Sign-in could not finish: ' + err.message; }
         finally { this.welcomeBusy = false; }
     };

     Game.prototype.drawWelcome = function(ctx) {
         ctx.fillStyle = 'rgba(7, 12, 26, 0.78)'; ctx.fillRect(0, 0, W, H);
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.7)'; ctx.shadowBlur = 24;
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 58px ' + FONT; ctx.fillText('OVERROLL', W/2, 78); ctx.restore();
         ctx.fillStyle = 'rgba(255,255,255,0.88)'; ctx.font = 'bold 18px ' + FONT; ctx.fillText('Made by Nitro', W/2, 126);
         var panelX = 150, panelY = 158, panelW = 600, panelH = 300;
         ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.55)'; ctx.shadowBlur = 24;
         ctx.fillStyle = 'rgba(20,25,43,0.96)'; fillRoundRect(ctx, panelX, panelY, panelW, panelH, 22); ctx.restore();
         ctx.strokeStyle = 'rgba(255,217,102,0.42)'; ctx.lineWidth = 2; strokeRoundRect(ctx, panelX, panelY, panelW, panelH, 22);
         ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 25px ' + FONT;
         ctx.fillText(this.isNewPlayer ? 'WELCOME, NEW PLAYER!' : 'WELCOME BACK!', W/2, 198);
         ctx.fillStyle = 'rgba(255,255,255,0.72)'; ctx.font = '15px ' + FONT;
         ctx.fillText(this.isNewPlayer ? 'Sign in with Google to back up your progress.' : 'Your progress saves on this computer.', W/2, 232);
         drawButton(ctx, W/2 - 190, H * 0.59, 380, 54, this.welcomeBusy ? 'CONNECTING…' : (this.googleAccount ? 'SYNC GOOGLE CLOUD SAVE' : 'SIGN IN WITH GOOGLE'), 'primary');
         drawButton(ctx, W/2 - 125, H * 0.75, 250, 48, this.isNewPlayer ? 'PLAY LOCALLY' : 'CONTINUE', 'neutral');
         ctx.fillStyle = 'rgba(255,255,255,0.68)'; ctx.font = '12px ' + FONT;
         var status = this.welcomeStatus || '';
         if (status.length > 80) status = status.substring(0, 77) + '…';
         fitCanvasText(ctx, status, panelW - 36, 12, 8);
         ctx.fillText(status, W/2, 442);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };

     Game.prototype.drawLoading = function(ctx) {
         var progress = clamp01(this.loadingT / 1.65), eased = progress * progress * (3 - 2 * progress);
         var bg = ctx.createLinearGradient(0, 0, 0, H);
         bg.addColorStop(0, '#071323'); bg.addColorStop(1, '#1b3439');
         ctx.fillStyle = bg; ctx.fillRect(0, 0, W, H);
         for (var i = 0; i < 32; i++) {
             ctx.globalAlpha = 0.3 + 0.7 * (0.5 + 0.5 * Math.sin(this.time * 2.4 + i * 1.7));
             ctx.fillStyle = i % 5 === 0 ? '#ffd966' : '#c8e9ff';
             ctx.beginPath(); ctx.arc((i * 173 + 37) % W, (i * 59 + 18) % 210, i % 7 === 0 ? 2 : 1.1, 0, Math.PI * 2); ctx.fill();
         }
         ctx.globalAlpha = 1; ctx.fillStyle = '#172a36'; ctx.beginPath(); ctx.moveTo(0, 350);
         ctx.lineTo(120, 286); ctx.lineTo(238, 346); ctx.lineTo(410, 256); ctx.lineTo(590, 348); ctx.lineTo(735, 278); ctx.lineTo(900, 350); ctx.lineTo(900, 500); ctx.lineTo(0, 500); ctx.closePath(); ctx.fill();
         ctx.fillStyle = '#1d3a3b'; ctx.fillRect(0, 405, W, 95);
         ctx.fillStyle = '#5c7847'; ctx.fillRect(0, 405, W, 7);
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.save(); ctx.globalAlpha = 0.92; ctx.shadowColor = 'rgba(255,217,102,0.4)'; ctx.shadowBlur = 24;
         ctx.fillStyle = '#ffd966'; ctx.font = 'bold 66px ' + FONT; ctx.fillText('OVERROLL', W / 2, 175); ctx.restore();
         ctx.fillStyle = 'rgba(255,255,255,0.9)'; ctx.font = 'bold 18px ' + FONT; ctx.fillText('Made by Nitro', W / 2, 220);
         ctx.fillStyle = 'rgba(255,255,255,0.68)'; ctx.font = 'bold 14px ' + FONT; ctx.fillText('LOADING YOUR RUN', W / 2, 286);
         var barX = 220, barY = 330, barW = 460, barH = 18;
         ctx.fillStyle = 'rgba(255,255,255,0.12)'; fillRoundRect(ctx, barX, barY, barW, barH, 9);
         if (eased > 0) { ctx.fillStyle = '#88a95b'; fillRoundRect(ctx, barX, barY, barW * eased, barH, 9); }
         var ballX = barX + 17 + (barW - 34) * eased;
         ctx.save(); ctx.translate(ballX, barY + barH / 2); ctx.rotate(eased * Math.PI * 6);
         ctx.fillStyle = '#FFD966'; ctx.beginPath(); ctx.arc(0, 0, 16, 0, Math.PI * 2); ctx.fill(); ctx.restore();
         ctx.fillStyle = 'rgba(255,255,255,0.76)'; ctx.font = '13px ' + FONT; ctx.fillText(Math.floor(progress * 100) + '%', W / 2, 374);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic'; ctx.globalAlpha = 1;
     };

     Game.prototype.drawIntro = function(ctx) {
         var t = this.introT, reveal = easeOutCubic(clamp01(t / 0.8));
         var fadeOut = 1 - easeOutCubic(clamp01((t - 3.65) / 0.5));
         var sky = ctx.createLinearGradient(0, 0, 0, H);
         sky.addColorStop(0, '#071323'); sky.addColorStop(0.62, '#132a3a'); sky.addColorStop(1, '#24403e');
         ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);
         ctx.save(); ctx.globalAlpha = fadeOut;
         var cx = W / 2, ground = 432;
         for (var i = 0; i < 42; i++) {
             var sx = (i * 173 + 31) % W, sy = (i * 67 + 19) % 220;
             var twinkle = 0.35 + 0.65 * (0.5 + 0.5 * Math.sin(t * (2 + i % 4) + i));
             ctx.globalAlpha = fadeOut * twinkle * 0.72; ctx.fillStyle = i % 5 === 0 ? '#FFD966' : '#C8E9FF';
             ctx.beginPath(); ctx.arc(sx, sy, i % 7 === 0 ? 2 : 1.15, 0, Math.PI * 2); ctx.fill();
         }
         ctx.globalAlpha = fadeOut;
         var moon = ctx.createRadialGradient(720, 76, 2, 720, 76, 100);
         moon.addColorStop(0, 'rgba(255,226,155,0.27)'); moon.addColorStop(1, 'rgba(255,226,155,0)');
         ctx.fillStyle = moon; ctx.fillRect(620, 0, 200, 180);
         ctx.fillStyle = '#18283a'; ctx.beginPath(); ctx.moveTo(0, 300);
         for (var m = 0; m <= 6; m++) ctx.lineTo(m * 180, 230 + Math.sin(m * 2.2) * 42);
         ctx.lineTo(W, 380); ctx.lineTo(0, 380); ctx.closePath(); ctx.fill();
         ctx.fillStyle = '#1d3a3b'; ctx.beginPath(); ctx.moveTo(0, 360);
         for (var h = 0; h <= 8; h++) ctx.lineTo(h * 130, 315 + Math.sin(h * 1.8 + t * 0.35) * 28);
         ctx.lineTo(W, ground); ctx.lineTo(0, ground); ctx.closePath(); ctx.fill();
         var pan = (t * 58) % 250;
         for (var tree = -1; tree < 5; tree++) {
             var px = tree * 250 - pan + 110, crownY = 244 + (tree % 2) * 28;
             ctx.strokeStyle = '#102a2b'; ctx.lineWidth = 13; ctx.lineCap = 'round';
             ctx.beginPath(); ctx.moveTo(px - 22, ground); ctx.quadraticCurveTo(px + 8, crownY + 64, px + 5, crownY); ctx.stroke();
             for (var leaf = 0; leaf < 6; leaf++) {
                 var angle = -Math.PI + leaf * Math.PI * 2 / 6, ex = px + Math.cos(angle) * 75, ey = crownY + Math.sin(angle) * 48;
                 ctx.fillStyle = leaf % 2 ? '#20493d' : '#285444'; ctx.beginPath();
                 ctx.moveTo(px + 5, crownY); ctx.quadraticCurveTo(px + Math.cos(angle - 0.45) * 42, crownY + Math.sin(angle - 0.45) * 44, ex, ey);
                 ctx.quadraticCurveTo(px + Math.cos(angle + 0.35) * 38, crownY + Math.sin(angle + 0.35) * 42, px + 5, crownY); ctx.fill();
             }
         }
         ctx.fillStyle = '#182a2a'; ctx.fillRect(0, ground, W, H - ground);
         ctx.fillStyle = '#537143'; ctx.fillRect(0, ground, W, 8);
         ctx.fillStyle = 'rgba(239,214,143,0.18)'; ctx.fillRect(0, ground + 8, W, 2);

         var roll = clamp01((t - 0.45) / 2.75), ballX = lerp(-35, W + 40, roll);
         var jumpCycle = roll * 4;
         var jumpArc = 17 * (0.5 - 0.5 * Math.cos(jumpCycle * Math.PI * 2));
         var ballY = ground - 24 - jumpArc;
         var coinX = [150, 345, 548, 744], coinsCollected = 0;
         for (var c = 0; c < coinX.length; c++) {
             var pickup = clamp01((ballX - (coinX[c] - 30)) / 60);
             var spin = 0.22 + 0.78 * (0.5 + 0.5 * Math.cos(t * 4 + c * 0.8));
             if (pickup > 0.72) coinsCollected++;
             if (pickup < 1) {
                 var coinY = ground - 58 - (c % 2) * 12;
                 ctx.save(); ctx.globalAlpha = fadeOut * (1 - pickup); ctx.translate(coinX[c], coinY); ctx.scale(spin * (1 - pickup * 0.35), 1 - pickup * 0.35);
                 ctx.shadowColor = '#ffd84d'; ctx.shadowBlur = 18; ctx.fillStyle = '#ffd84d';
                 ctx.beginPath(); ctx.arc(0, 0, 12, 0, Math.PI * 2); ctx.fill();
                 ctx.shadowBlur = 0; ctx.strokeStyle = '#fff2a6'; ctx.lineWidth = 2; ctx.stroke();
                 ctx.fillStyle = '#9e6814'; ctx.font = 'bold 13px ' + FONT; ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.fillText('$', 0, 0); ctx.restore();
             }
             if (pickup > 0 && pickup < 1) {
                 ctx.save(); ctx.globalAlpha = fadeOut * (1 - pickup) * 0.9; ctx.fillStyle = '#fff2a6';
                 for (var spark = 0; spark < 5; spark++) { var sa = t * 5 + spark * 1.256; var sparkRadius = 8 + pickup * 18; ctx.beginPath(); ctx.arc(coinX[c] + Math.cos(sa) * sparkRadius, ground - 60 + Math.sin(sa) * sparkRadius * 0.7, 2, 0, Math.PI * 2); ctx.fill(); }
                 ctx.restore();
             }
         }
         ctx.globalAlpha = fadeOut * 0.28; ctx.fillStyle = '#000'; ctx.beginPath(); ctx.ellipse(ballX, ground - 3, 28, 7, 0, 0, Math.PI * 2); ctx.fill();
         for (var trail = 4; trail >= 1; trail--) {
             ctx.globalAlpha = fadeOut * 0.08 * (5 - trail); ctx.fillStyle = '#ffd966';
             ctx.beginPath(); ctx.arc(ballX - trail * 18, ballY + 2, 13 - trail * 2, 0, Math.PI * 2); ctx.fill();
         }
         ctx.globalAlpha = fadeOut; ctx.save(); ctx.translate(ballX, ballY); ctx.rotate(roll * Math.PI * 9);
         ctx.fillStyle = '#FFD966'; ctx.beginPath(); ctx.arc(0, 0, 24, 0, Math.PI * 2); ctx.fill(); ctx.restore();

         ctx.globalAlpha = fadeOut; ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.4)'; ctx.shadowBlur = 22;
         ctx.fillStyle = 'rgba(5,15,27,0.84)'; fillRoundRect(ctx, 28, 24, 350, 126, 18); ctx.restore();
         ctx.strokeStyle = 'rgba(255,255,255,0.10)'; ctx.lineWidth = 1; strokeRoundRect(ctx, 28, 24, 350, 126, 18);
         ctx.textAlign = 'left'; ctx.textBaseline = 'middle'; ctx.font = 'bold 15px ' + FONT;
         ctx.fillStyle = '#a8b68d'; ctx.fillText('SCORE', 48, 52); ctx.fillStyle = '#fff'; ctx.textAlign = 'right'; ctx.fillText(String(Math.floor(roll * 860)), 350, 52);
         ctx.textAlign = 'left'; ctx.fillStyle = '#a8b68d'; ctx.fillText('BEST', 48, 79); ctx.fillStyle = '#fff'; ctx.textAlign = 'right'; ctx.fillText(String(this.best || 0), 350, 79);
         ctx.textAlign = 'left'; ctx.fillStyle = '#a8b68d'; ctx.fillText('COINS', 48, 106); ctx.fillStyle = '#ffd966'; ctx.textAlign = 'right'; ctx.fillText(String(coinsCollected), 350, 106);
         ctx.fillStyle = 'rgba(255,255,255,0.08)'; fillRoundRect(ctx, 120, 131, 230, 8, 4);
         ctx.fillStyle = '#83a84e'; fillRoundRect(ctx, 120, 131, 230 * (0.78 + 0.04 * Math.sin(t * 3)), 8, 4);

         var titleAlpha = fadeOut * reveal; ctx.globalAlpha = titleAlpha;
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.save(); ctx.translate(cx, 252 + (1 - reveal) * 20); ctx.scale(0.92 + 0.08 * reveal, 0.92 + 0.08 * reveal);
         ctx.shadowColor = 'rgba(255,217,102,0.55)'; ctx.shadowBlur = 24; ctx.fillStyle = '#ffd966'; ctx.font = 'bold 66px ' + FONT; ctx.fillText('OVERROLL', 0, 0); ctx.restore();
         var makerReveal = easeOutCubic(clamp01((t - 0.45) / 0.65));
         ctx.globalAlpha = fadeOut * makerReveal; ctx.fillStyle = 'rgba(255,255,255,0.96)'; ctx.font = 'bold 19px ' + FONT; ctx.fillText('Made by Nitro', cx, 294);
         ctx.restore(); ctx.globalAlpha = 1; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawOptions = function(ctx) {
         ctx.fillStyle = 'rgba(0,0,0,0.75)'; ctx.fillRect(0, 0, W, H);
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 48px ' + FONT;
         ctx.fillText('OPTIONS', W/2, 70);
         drawButton(ctx, OPT_BACK_X, OPT_BACK_Y, OPT_BACK_W, OPT_BACK_H, '← BACK', 'subtle');
         drawButton(ctx, OPT_GAMEMODE_X, OPT_GAMEMODE_Y, OPT_GAMEMODE_W, OPT_GAMEMODE_H, 'GAMEMODE', 'neutral');
         drawButton(ctx, OPT_SHOP_X, OPT_SHOP_Y, OPT_SHOP_W, OPT_SHOP_H, 'SHOP', 'neutral');
         drawButton(ctx, OPT_BOOSTER_X, OPT_BOOSTER_Y, OPT_BOOSTER_W, OPT_BOOSTER_H, 'SCORE BOOSTER', 'neutral');
         drawButton(ctx, OPT_DAILY_X, OPT_DAILY_Y, OPT_DAILY_W, OPT_DAILY_H, 'DAILY REWARDS', 'neutral');
         this.drawLeaderboard(ctx);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawGamemode = function(ctx) {
         ctx.fillStyle = 'rgba(0,0,0,0.75)'; ctx.fillRect(0, 0, W, H);
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 48px ' + FONT;
         ctx.fillText('CHOOSE MODE', W/2, 70);
         drawButton(ctx, GM_BACK_X, GM_BACK_Y, GM_BACK_W, GM_BACK_H, '← BACK', 'subtle');
         var cards = this.getGamemodeCardLayout();
         for (var i = 0; i < cards.length; i++) {
             var c = cards[i];
             if (c.key === 'endless') this.drawModeCard(ctx, c.x, GM_CARD_Y, c.w, GM_CARD_H, 'ENDLESS', 'Procedural, infinite', '#4CAF50', this.gameMode === 'endless');
             else if (c.key === 'levels') this.drawModeCard(ctx, c.x, GM_CARD_Y, c.w, GM_CARD_H, 'LEVELS', LEVELS.length + ' hand-built levels', '#1976D2', this.gameMode === 'levels');
             else if (c.key === 'timed') this.drawModeCard(ctx, c.x, GM_CARD_Y, c.w, GM_CARD_H, 'TIMED', '60s or 120s challenge', '#F77F00', this.gameMode === 'timed');
         }
         ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.font = '14px ' + FONT;
         ctx.fillText('Levels completed: ' + this.bank.levelsCompleted + ' / ' + LEVELS.length, W/2, H - 40);
         ctx.fillText('Timed wins today: ' + this.bank.timedWinsToday + ' / ' + TIMED_DAILY_MAX_WINS, W/2, H - 20);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawModeCard = function(ctx, x, y, w, h, title, sub, color, selected) {
         ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.5)'; ctx.shadowBlur = 20;
         ctx.fillStyle = selected ? 'rgba(255,215,100,0.16)' : 'rgba(255,255,255,0.05)';
         fillRoundRect(ctx, x, y, w, h, 20); ctx.restore();
         ctx.strokeStyle = selected ? color : 'rgba(255,255,255,0.15)';
         ctx.lineWidth = selected ? 3 : 1.5;
         strokeRoundRect(ctx, x, y, w, h, 20);
         var cx = x + w/2, cy = y + 90;
         if (title === 'ENDLESS') {
             ctx.strokeStyle = color; ctx.lineWidth = 4; ctx.lineCap = 'round';
             ctx.beginPath(); ctx.moveTo(cx - 50, cy); ctx.lineTo(cx + 50, cy); ctx.stroke();
             for (var i = -2; i <= 2; i++) { ctx.beginPath(); ctx.arc(cx + i * 20, cy, 6, 0, Math.PI * 2); ctx.fillStyle = color; ctx.fill(); }
         } else if (title === 'TIMED') {
             ctx.strokeStyle = color; ctx.lineWidth = 4;
             ctx.beginPath(); ctx.arc(cx, cy, 28, 0, Math.PI * 2); ctx.stroke();
             ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx, cy - 20); ctx.stroke();
             ctx.beginPath(); ctx.moveTo(cx, cy); ctx.lineTo(cx + 14, cy + 6); ctx.stroke();
         } else {
             ctx.fillStyle = color;
             for (var gy = 0; gy < 2; gy++) for (var gx = 0; gx < 3; gx++) fillRoundRect(ctx, cx - 60 + gx * 44, cy - 20 + gy * 40, 34, 30, 6);
         }
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold ' + (w < 240 ? '20px' : '24px') + ' ' + FONT;
         fitCanvasText(ctx, title, w - 24, w < 240 ? 20 : 24, 12);
         ctx.fillText(title, x + w/2, y + h - 90);
         ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.font = '13px ' + FONT;
         fitCanvasText(ctx, sub, w - 24, 13, 10);
         ctx.fillText(sub, x + w/2, y + h - 60);
         if (selected) { ctx.fillStyle = color; ctx.font = 'bold 12px ' + FONT; ctx.fillText('SELECTED', x + w/2, y + h - 30); }
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawLevelSelect = function(ctx) {
         ctx.fillStyle = 'rgba(0,0,0,0.85)'; ctx.fillRect(0, 0, W, H);
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 36px ' + FONT;
         ctx.fillText('SELECT LEVEL', W/2, 45);
         drawButton(ctx, LS_BACK_X, LS_BACK_Y, LS_BACK_W, LS_BACK_H, '← BACK', 'subtle');
         var contentHeight = Math.ceil(LEVELS.length / LS_COLS) * (LS_CARD_H + LS_GAP) - LS_GAP;
         var viewportHeight = H - LS_TOP - 35;
         var maxScroll = Math.max(0, contentHeight - viewportHeight);
         this.levelScrollY = Math.max(0, Math.min(maxScroll, this.levelScrollY));
         ctx.save(); ctx.beginPath(); ctx.rect(0, LS_TOP - 8, W, viewportHeight + 12); ctx.clip();
         for (var i = 0; i < LEVELS.length; i++) {
             var col = i % LS_COLS, row = Math.floor(i / LS_COLS);
             var totalW = LS_COLS * (LS_CARD_W + LS_GAP) - LS_GAP;
             var lx = W/2 - totalW / 2 + col * (LS_CARD_W + LS_GAP);
             var ly = LS_TOP + row * (LS_CARD_H + LS_GAP) - this.levelScrollY;
             var unlocked = (i === 0 || this.bank.levelsCompleted >= i);
             var def = LEVELS[i];
             ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.4)'; ctx.shadowBlur = 10;
             ctx.fillStyle = unlocked ? 'rgba(255,255,255,0.06)' : 'rgba(255,255,255,0.02)';
             fillRoundRect(ctx, lx, ly, LS_CARD_W, LS_CARD_H, 12); ctx.restore();
             ctx.strokeStyle = unlocked ? 'rgba(255,217,102,0.6)' : 'rgba(255,255,255,0.1)';
             ctx.lineWidth = unlocked ? 2 : 1;
             strokeRoundRect(ctx, lx, ly, LS_CARD_W, LS_CARD_H, 12);
             ctx.fillStyle = unlocked ? '#FFD966' : 'rgba(255,255,255,0.3)';
             ctx.font = 'bold 22px ' + FONT;
             ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
             ctx.fillText((def.levelNumber || (i + 1)).toString(), lx + LS_CARD_W / 2, ly + 22);
             ctx.fillStyle = unlocked ? '#FFFFFF' : 'rgba(255,255,255,0.35)';
             ctx.font = 'bold 11px ' + FONT;
             ctx.fillText(def.name.length > 12 ? def.name.substring(0, 11) + '…' : def.name, lx + LS_CARD_W / 2, ly + 44);
             if (!unlocked) { ctx.fillStyle = 'rgba(255,255,255,0.3)'; ctx.font = '10px ' + FONT; ctx.fillText('LOCKED', lx + LS_CARD_W / 2, ly + 66); }
             else if (def.wormBoss) { ctx.fillStyle = '#E63946'; ctx.font = 'bold 10px ' + FONT; ctx.fillText('BOSS', lx + LS_CARD_W / 2, ly + 66); }
             else if (def.boss) { ctx.fillStyle = '#E63946'; ctx.font = 'bold 10px ' + FONT; ctx.fillText('BOSS', lx + LS_CARD_W / 2, ly + 66); }
         }
         ctx.restore();
         if (maxScroll > 0) {
             var trackX = W - 16, trackY = LS_TOP, trackH = viewportHeight - 4;
             var thumbH = Math.max(28, trackH * viewportHeight / contentHeight);
             var thumbY = trackY + (trackH - thumbH) * (this.levelScrollY / maxScroll);
             ctx.fillStyle = 'rgba(255,255,255,0.14)'; fillRoundRect(ctx, trackX, trackY, 6, trackH, 3);
             ctx.fillStyle = '#FFD966'; fillRoundRect(ctx, trackX - 1, thumbY, 8, thumbH, 4);
             ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.font = '11px ' + FONT; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
             ctx.fillText('SCROLL', W - 55, H - 18);
         }
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawVictory = function(ctx) {
         ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(0, 0, W, H);
         var panelW = 620, panelH = 420;
         var px = W/2 - panelW/2, py = Math.max(20, (H - panelH) / 2);
         ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.7)'; ctx.shadowBlur = 30; ctx.shadowOffsetY = 8;
         ctx.fillStyle = 'rgba(20,20,36,0.98)'; fillRoundRect(ctx, px, py, panelW, panelH, 24); ctx.restore();
         ctx.strokeStyle = 'rgba(255,215,100,0.5)'; ctx.lineWidth = 2;
         strokeRoundRect(ctx, px, py, panelW, panelH, 24);
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         if (this.gameMode === 'timed') {
             ctx.fillStyle = '#FFD966'; ctx.font = 'bold 42px ' + FONT;
             ctx.fillText('TIMED WIN!', W/2, py + 60);
             var typeLabel = this.timedModeType === 'platformer' ? 'Platformer' : 'Runner';
             ctx.fillStyle = '#FFFFFF'; ctx.font = '20px ' + FONT;
             ctx.fillText(typeLabel + ' completed', W/2, py + 110);
             var canEarn = this.bank.canEarnTimedReward();
             if (canEarn) { ctx.fillStyle = '#4CAF50'; ctx.font = 'bold 18px ' + FONT; ctx.fillText('+' + TIMED_REWARD_POINTS + ' pts  •  +' + TIMED_REWARD_COINS + ' coins', W/2, py + 155); }
             else { ctx.fillStyle = '#FFB347'; ctx.font = 'bold 16px ' + FONT; ctx.fillText('Daily limit reached — no reward', W/2, py + 155); }
             drawButton(ctx, VIC_NEXT_X, VIC_NEXT_Y, VIC_NEXT_W, VIC_NEXT_H, '▶ PLAY AGAIN', 'primary');
             drawButton(ctx, VIC_MENU_X, VIC_MENU_Y, VIC_MENU_W, VIC_MENU_H, 'MAIN MENU', 'neutral');
         } else {
             ctx.fillStyle = '#FFD966'; ctx.font = 'bold 46px ' + FONT;
             ctx.fillText('LEVEL COMPLETE!', W/2, py + 60);
             ctx.fillStyle = '#FFFFFF'; ctx.font = '20px ' + FONT;
             ctx.fillText(this.world.name + ' cleared', W/2, py + 110);
             ctx.fillStyle = '#FFB347'; ctx.font = 'bold 18px ' + FONT;
             ctx.fillText('Score: ' + Math.floor(this.score), W/2, py + 155);
             ctx.fillStyle = '#FFD700'; ctx.fillText('Coins: ' + this.coinCount, W/2, py + 185);
             var nextLabel = (this.selectedLevel < LEVELS.length - 1) ? '▶ NEXT LEVEL' : '▶ BACK TO TITLE';
             drawButton(ctx, VIC_NEXT_X, VIC_NEXT_Y, VIC_NEXT_W, VIC_NEXT_H, nextLabel, 'primary');
             drawButton(ctx, VIC_MENU_X, VIC_MENU_Y, VIC_MENU_W, VIC_MENU_H, 'MAIN MENU', 'neutral');
         }
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawGameOver = function(ctx) {
         ctx.fillStyle = 'rgba(0, 0, 0, 0.22)'; ctx.fillRect(0, 0, W, H);
         var panelW = 640, panelH = 420;
         var px = W/2 - panelW/2, py = Math.max(20, (H - panelH) / 2);
         ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.7)'; ctx.shadowBlur = 30; ctx.shadowOffsetY = 8;
         ctx.fillStyle = 'rgba(20,20,36,0.72)'; fillRoundRect(ctx, px, py, panelW, panelH, 24); ctx.restore();
         ctx.strokeStyle = 'rgba(255,255,255,0.18)'; ctx.lineWidth = 1.5;
         strokeRoundRect(ctx, px, py, panelW, panelH, 24);
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#E63946'; ctx.font = 'bold 46px ' + FONT;
         ctx.fillText('GAME OVER', W/2, py + 62);
         var statX = px + 40, statY = py + 110, statW = panelW - 80, statH = 100;
         ctx.fillStyle = 'rgba(255,255,255,0.08)'; fillRoundRect(ctx, statX, statY, statW, statH, 16);
         var rows = [
             { label: 'Score', value: '' + Math.floor(this.score), color: '#FFFFFF' },
             { label: 'Best', value: '' + this.best, color: '#FFB347' },
             { label: 'Coins', value: '' + this.coinCount, color: '#FFD700' }
         ];
         for (var i = 0; i < rows.length; i++) {
             var ry = statY + 24 + i * 28;
             ctx.font = 'bold 17px ' + FONT;
             ctx.textAlign = 'left'; ctx.fillStyle = 'rgba(255,255,255,0.75)';
             ctx.fillText(rows[i].label, statX + 24, ry);
             ctx.textAlign = 'right'; ctx.fillStyle = rows[i].color;
             ctx.fillText(rows[i].value, statX + statW - 24, ry);
         }
         ctx.textAlign = 'center';
         ctx.fillStyle = 'rgba(255,255,255,0.85)'; ctx.font = 'bold 18px ' + FONT;
         ctx.fillText('[R] Restart     [T] Title     [S] Settings', W/2, py + 260);
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 24px ' + FONT;
         ctx.fillText('[R] RESTART', W/2, py + 320);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawSettings = function(ctx) {
         ctx.fillStyle = 'rgba(0,0,0,0.75)'; ctx.fillRect(0, 0, W, H);
         ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.6)'; ctx.shadowBlur = 30; ctx.shadowOffsetY = 8;
         ctx.fillStyle = 'rgba(20,20,36,0.96)';
         fillRoundRect(ctx, SET_BOX_X, SET_BOX_Y, SET_BOX_W, SET_BOX_H, 24); ctx.restore();
         ctx.strokeStyle = 'rgba(255,255,255,0.1)'; ctx.lineWidth = 1.5;
         strokeRoundRect(ctx, SET_BOX_X, SET_BOX_Y, SET_BOX_W, SET_BOX_H, 24);
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 36px ' + FONT;
         ctx.fillText('SETTINGS', W/2, SET_BOX_Y + 55);
         ctx.fillStyle = 'rgba(255,255,255,0.7)'; ctx.font = 'bold 14px ' + FONT;
         ctx.fillText('DIFFICULTY', W/2, SET_BOX_Y + 118);
         var diffs = ['easy', 'normal', 'hard']; var labels = ['EASY', 'NORMAL', 'HARD'];
         for (var di = 0; di < 3; di++) {
             var isActive = (this.bank.difficulty === diffs[di]);
             var bx = SET_DIFF_X[di], by = SET_DIFF_BTN_Y;
             var bw = SET_DIFF_BTN_W, bh = SET_DIFF_BTN_H;
             ctx.save(); if (isActive) { ctx.shadowColor = 'rgba(255,215,100,0.6)'; ctx.shadowBlur = 14; ctx.fillStyle = '#FFD966'; }
             else ctx.fillStyle = 'rgba(255,255,255,0.06)';
             fillRoundRect(ctx, bx, by, bw, bh, bh/2); ctx.restore();
             ctx.strokeStyle = isActive ? 'rgba(255,215,100,0.95)' : 'rgba(255,255,255,0.15)';
             ctx.lineWidth = isActive ? 2 : 1;
             strokeRoundRect(ctx, bx, by, bw, bh, bh/2);
             ctx.fillStyle = isActive ? '#1a1a2e' : 'rgba(255,215,100,0.85)';
             ctx.font = 'bold 14px ' + FONT;
             ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
             ctx.fillText(labels[di], bx + bw/2, by + bh/2 + 1);
         }
         var desc = this.bank.difficulty === 'easy' ? 'Slower speed • spikes hurt (not kill) in endless'
                  : this.bank.difficulty === 'hard' ? 'Faster speed • more spikes'
                  : 'Standard speed and spike density';
         ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.font = '13px ' + FONT;
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillText(desc, W/2, SET_DIFF_BTN_Y + SET_DIFF_BTN_H + 26);
         drawButton(ctx, SET_CLOSE_X, SET_CLOSE_Y, SET_CLOSE_W, SET_CLOSE_H, 'CLOSE', 'accent');
         ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.font = '13px ' + FONT;
         ctx.fillText('Press S or ESC to close', W/2, SET_BOX_Y + SET_BOX_H - 18);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.drawShop = function(ctx) {
         var openT = easeOutCubic(clamp01(this.shopOpenProgress));
         ctx.save(); ctx.globalAlpha = openT;
         ctx.fillStyle = 'rgba(0,0,0,0.9)'; ctx.fillRect(0, 0, W, H);
         var panelOffset = (1 - openT) * 40;
         ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.7)'; ctx.shadowBlur = 40;
         ctx.fillStyle = 'rgba(20,20,36,0.98)';
         fillRoundRect(ctx, SHOP_BOX_X, SHOP_BOX_Y + panelOffset, SHOP_BOX_W, SHOP_BOX_H, 24); ctx.restore();
         ctx.strokeStyle = 'rgba(255,255,255,0.1)'; ctx.lineWidth = 1.5;
         strokeRoundRect(ctx, SHOP_BOX_X, SHOP_BOX_Y + panelOffset, SHOP_BOX_W, SHOP_BOX_H, 24);
         ctx.save(); ctx.translate(0, panelOffset);
         ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 32px ' + FONT;
         ctx.fillText('SHOP', SHOP_BOX_X + 30, SHOP_BOX_Y + 46);
         var pillY = SHOP_BOX_Y + 30, pillH = 30; ctx.font = 'bold 14px ' + FONT;
         var ptsW = 145, cnsW = 130, diaW = 150;
         var cnsX = SHOP_SB_X - 12 - cnsW; var ptsX = cnsX - 12 - ptsW; var diaX = ptsX - 12 - diaW;
         ctx.fillStyle = 'rgba(255,215,100,0.12)'; fillRoundRect(ctx, ptsX, pillY, ptsW, pillH, pillH/2);
         ctx.strokeStyle = 'rgba(255,215,100,0.5)'; ctx.lineWidth = 1; strokeRoundRect(ctx, ptsX, pillY, ptsW, pillH, pillH/2);
         ctx.fillStyle = '#FFD966'; ctx.textAlign = 'center';
         ctx.fillText('PTS: ' + this.bank.points, ptsX + ptsW/2, pillY + pillH/2 + 1);
         ctx.fillStyle = 'rgba(255,179,71,0.12)'; fillRoundRect(ctx, cnsX, pillY, cnsW, pillH, pillH/2);
         ctx.strokeStyle = 'rgba(255,179,71,0.5)'; strokeRoundRect(ctx, cnsX, pillY, cnsW, pillH, pillH/2);
         ctx.fillStyle = '#FFB347'; ctx.fillText('COINS: ' + this.bank.coins, cnsX + cnsW/2, pillY + pillH/2 + 1);
         ctx.fillStyle = 'rgba(135,206,250,0.12)'; fillRoundRect(ctx, diaX, pillY, diaW, pillH, pillH/2);
         ctx.strokeStyle = 'rgba(135,206,250,0.5)'; strokeRoundRect(ctx, diaX, pillY, diaW, pillH, pillH/2);
         ctx.fillStyle = '#87CEEB'; ctx.fillText('DIA: ' + this.bank.diamonds, diaX + diaW/2, pillY + pillH/2 + 1);
         var tabs = ['SKINS', 'DEFENCE', 'MOVEMENT', 'TRAILS', 'ACHIEVEMENTS', 'PROMOTIONS', 'CONVERT'];
         var tkeys = ['avatar', 'defence', 'movement', 'trails', 'achievements', 'promotions', 'convert'];
         ctx.save();
         ctx.beginPath(); ctx.rect(SHOP_SB_X - 5, SHOP_SB_Y - 5, SHOP_SB_W + 10, SHOP_SB_TOTAL_H + 10); ctx.clip();
         for (var ti = 0; ti < tabs.length; ti++) this.drawShopTab(ctx, tabs[ti], this.shopTab === tkeys[ti], ti);
         ctx.restore();
         drawButton(ctx, SHOP_CLOSE_X, SHOP_CLOSE_Y, SHOP_CLOSE_W, SHOP_CLOSE_H, 'CLOSE', 'accent');
         if (this.shopTabFade.avatar > 0.01) this.drawShopAvatar(ctx);
         if (this.shopTabFade.defence > 0.01) this.drawShopDefence(ctx);
         if (this.shopTabFade.movement > 0.01) this.drawShopMovement(ctx);
         if (this.shopTabFade.trails > 0.01) this.drawShopTrails(ctx);
         if (this.shopTabFade.achievements > 0.01) this.drawShopAchievements(ctx);
         if (this.shopTabFade.promotions > 0.01) this.drawShopPromotions(ctx);
         if (this.shopTabFade.convert > 0.01) this.drawShopConvert(ctx);
         if (this.promoModalSet) this.drawPromoModal(ctx);
         ctx.restore(); ctx.restore();
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
     Game.prototype.drawShopTab = function(ctx, label, active, idx) {
         var x = SHOP_SB_X; var y = SHOP_SB_Y + this.shopSidebarScrollY + idx * (SHOP_TAB_H + SHOP_TAB_GAP);
         var w = SHOP_SB_W, h = SHOP_TAB_H;
         ctx.save(); if (active) { ctx.shadowColor = 'rgba(255,215,100,0.5)'; ctx.shadowBlur = 12; ctx.fillStyle = '#FFD966'; }
         else ctx.fillStyle = 'rgba(255,255,255,0.06)';
         fillRoundRect(ctx, x, y, w, h, h/2); ctx.restore();
         ctx.strokeStyle = active ? 'rgba(255,215,100,0.9)' : 'rgba(255,255,255,0.15)';
         ctx.lineWidth = active ? 2 : 1; strokeRoundRect(ctx, x, y, w, h, h/2);
         ctx.fillStyle = active ? '#1a1a2e' : 'rgba(255,215,100,0.8)';
         ctx.font = 'bold 13px ' + FONT; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillText(label, x + w / 2, y + h / 2 + 1);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
     Game.prototype.drawArrowButton = function(ctx, x, y, size, dir) {
         ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.4)'; ctx.shadowBlur = 10;
         ctx.fillStyle = 'rgba(255,217,102,0.18)';
         ctx.beginPath(); ctx.arc(x + size/2, y + size/2, size/2, 0, Math.PI * 2); ctx.fill(); ctx.restore();
         ctx.strokeStyle = 'rgba(255,217,102,0.7)'; ctx.lineWidth = 2;
         ctx.beginPath(); ctx.arc(x + size/2, y + size/2, size/2, 0, Math.PI * 2); ctx.stroke();
         var cxc = x + size/2, cyc = y + size/2, armLen = size * 0.18;
         ctx.strokeStyle = '#FFD966'; ctx.lineWidth = 3;
         ctx.lineCap = 'round'; ctx.lineJoin = 'round';
         ctx.beginPath();
         if (dir === 'left') { ctx.moveTo(cxc + armLen*0.6, cyc - armLen); ctx.lineTo(cxc - armLen*0.6, cyc); ctx.lineTo(cxc + armLen*0.6, cyc + armLen); }
         else { ctx.moveTo(cxc - armLen*0.6, cyc - armLen); ctx.lineTo(cxc + armLen*0.6, cyc); ctx.lineTo(cxc - armLen*0.6, cyc + armLen); }
         ctx.stroke(); ctx.lineCap = 'butt';
     };
     Game.prototype.drawCarousel = function(ctx, items, scroll, kind) {
         var n = items.length, spacing = CARD_SPACING;
         ctx.save();
         var list = [];
         var startI = Math.floor(scroll) - 3; var endI = Math.ceil(scroll) + 3;
         for (var i = startI; i <= endI; i++) {
             var rel = i - scroll, dist = Math.abs(rel);
             if (dist > 2.4) continue;
             list.push({ relPos: rel, idx: ((i % n) + n) % n, dist: dist });
         }
         list.sort(function(a, b) { return b.dist - a.dist; });
         for (var k = 0; k < list.length; k++) {
             var it = list[k]; var cx = CAROUSEL_CX + it.relPos * spacing;
             var cy = CAROUSEL_TOP + CENTER_CARD_H / 2;
             var scale = 1 - Math.min(0.3, it.dist * 0.15);
             var alpha = Math.max(0, 1 - it.dist * 0.42);
             var bobY = it.dist * 8;
             ctx.save(); ctx.globalAlpha = alpha;
             ctx.translate(cx, cy + bobY); ctx.scale(scale, scale); ctx.translate(-cx, -cy);
             var x = cx - CENTER_CARD_W / 2, y = CAROUSEL_TOP;
             var isC = it.dist < 0.3;
             if (kind === 'avatar') this.drawAvatarCardContent(ctx, x, y, CENTER_CARD_W, CENTER_CARD_H, items[it.idx], isC);
             else if (kind === 'defence') this.drawDefenceCardContent(ctx, x, y, CENTER_CARD_W, CENTER_CARD_H, it.idx, isC);
             else if (kind === 'movement') this.drawMovementCardContent(ctx, x, y, CENTER_CARD_W, CENTER_CARD_H, it.idx, isC);
             else if (kind === 'trails') this.drawTrailCardContent(ctx, x, y, CENTER_CARD_W, CENTER_CARD_H, items[it.idx], isC);
             ctx.restore();
         }
         ctx.restore();
         this.drawArrowButton(ctx, ARROW_LEFT_X, ARROW_Y, ARROW_SIZE, 'left');
         this.drawArrowButton(ctx, ARROW_RIGHT_X, ARROW_Y, ARROW_SIZE, 'right');
         ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.font = 'bold 14px ' + FONT;
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         var curIdx;
         if (kind === 'avatar') curIdx = this.shopAvatarIndex;
         else if (kind === 'movement') curIdx = this.shopMovementIndex;
         else if (kind === 'trails') curIdx = this.shopTrailIndex;
         else curIdx = this.shopDefenceIndex;
         ctx.fillText((curIdx + 1) + ' / ' + n, CAROUSEL_CX, ARROW_Y + ARROW_SIZE/2);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
     Game.prototype.drawShopAvatar = function(ctx) {
         var keys = this.getAvailableSkinKeys();
         ctx.save(); ctx.globalAlpha = this.shopTabFade.avatar;
         this.drawCarousel(ctx, keys, this.shopAvatarScroll, 'avatar');
         ctx.restore();
     };
     Game.prototype.drawShopDefence = function(ctx) {
         var items = ['damage', 'rate', 'fire', 'ice', 'spiked'];
         ctx.save(); ctx.globalAlpha = this.shopTabFade.defence;
         this.drawCarousel(ctx, items, this.shopDefenceScroll, 'defence');
         ctx.restore();
     };
     Game.prototype.drawShopMovement = function(ctx) {
         var items = ['jump', 'dash', 'magnet'];
         ctx.save(); ctx.globalAlpha = this.shopTabFade.movement;
         this.drawCarousel(ctx, items, this.shopMovementScroll, 'movement');
         ctx.restore();
     };
     Game.prototype.drawShopTrails = function(ctx) {
         ctx.save(); ctx.globalAlpha = this.shopTabFade.trails;
         this.drawCarousel(ctx, TRAILS, this.shopTrailScroll, 'trails');
         ctx.restore();
     };
     Game.prototype.drawShopAchievements = function(ctx) {
         ctx.save(); ctx.globalAlpha = this.shopTabFade.achievements;
         var unlockedCount = this.bank.achievements.length;
         var totalCount = ACHIEVEMENTS.length;
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 22px ' + FONT;
         ctx.fillText('ACHIEVEMENTS', W/2 - 120, SHOP_BOX_Y + 90);
         ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.font = 'bold 14px ' + FONT;
         ctx.fillText(unlockedCount + ' / ' + totalCount + ' unlocked', W/2 - 120, SHOP_BOX_Y + 112);
         ctx.save();
         ctx.beginPath();
         ctx.rect(SHOP_BOX_X + 20, SHOP_BOX_Y + 120, SHOP_SB_X - SHOP_BOX_X - 40, SHOP_BOX_H - 140);
         ctx.clip();
         for (var i = 0; i < ACHIEVEMENTS.length; i++) {
             var col = i % 2; var row = Math.floor(i / 2);
             var cx = ACH_GRID_X + col * (ACH_CARD_W + ACH_GAP);
             var cy = ACH_GRID_Y + row * (ACH_CARD_H + ACH_GAP) - this.achScrollY;
             this.drawAchievementCard(ctx, cx, cy, ACH_CARD_W, ACH_CARD_H, ACHIEVEMENTS[i]);
         }
         ctx.restore();
         ctx.fillStyle = 'rgba(255,255,255,0.4)'; ctx.font = '11px ' + FONT;
         ctx.fillText('scroll for more', W/2 - 120, SHOP_BOX_H + SHOP_BOX_Y - 20);
         ctx.restore();
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
     Game.prototype.drawAchievementCard = function(ctx, x, y, w, h, ach) {
         var unlocked = this.bank.hasAchievement(ach.key);
         if (unlocked) ctx.fillStyle = 'rgba(255,215,100,0.13)';
         else ctx.fillStyle = 'rgba(255,255,255,0.04)';
         fillRoundRect(ctx, x, y, w, h, 12);
         ctx.strokeStyle = unlocked ? 'rgba(255,215,100,0.75)' : 'rgba(255,255,255,0.1)';
         ctx.lineWidth = unlocked ? 2 : 1;
         strokeRoundRect(ctx, x, y, w, h, 12);
         var iconCX = x + 32; var iconCY = y + h/2; var iconR = 19;
         if (unlocked) {
             ctx.save(); ctx.shadowColor = '#FFD966'; ctx.shadowBlur = 12;
             ctx.fillStyle = '#FFD966'; ctx.beginPath(); ctx.arc(iconCX, iconCY, iconR, 0, Math.PI * 2); ctx.fill(); ctx.restore();
         } else {
             ctx.fillStyle = 'rgba(255,255,255,0.14)'; ctx.beginPath(); ctx.arc(iconCX, iconCY, iconR, 0, Math.PI * 2); ctx.fill();
         }
         var textX = x + 60;
         ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
         ctx.fillStyle = unlocked ? '#FFD966' : '#FFFFFF';
         ctx.font = 'bold 14px ' + FONT; ctx.fillText(ach.name, textX, y + 18);
         ctx.fillStyle = 'rgba(255,255,255,0.65)'; ctx.font = '11px ' + FONT;
         ctx.fillText(ach.desc, textX, y + 36);
         ctx.fillStyle = unlocked ? '#4CAF50' : 'rgba(255,179,71,0.7)';
         ctx.font = 'bold 10px ' + FONT;
         ctx.fillText((unlocked ? 'UNLOCKED' : 'LOCKED') + '  •  +' + ach.reward + ' pts', textX, y + 52);
     };
     Game.prototype.drawTrailCardContent = function(ctx, x, y, w, h, trail, isC) {
         var owned = this.bank.ownsTrail(trail.key);
         var selected = this.bank.currentTrail === trail.key;
         if (selected) ctx.fillStyle = 'rgba(255,215,100,0.14)';
         else if (owned) ctx.fillStyle = 'rgba(76,175,80,0.10)';
         else ctx.fillStyle = 'rgba(255,255,255,0.05)';
         fillRoundRect(ctx, x, y, w, h, 16);
         if (selected) { ctx.strokeStyle = '#FFD966'; ctx.lineWidth = 2.5; }
         else if (owned) { ctx.strokeStyle = 'rgba(76,175,80,0.7)'; ctx.lineWidth = 1.5; }
         else { ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 1; }
         strokeRoundRect(ctx, x, y, w, h, 16);
         var cx = x + w/2, cy = y + h * 0.4; var r = isC ? 20 : 16;
         ctx.fillStyle = '#FFD966'; ctx.beginPath(); ctx.arc(cx, cy, r, 0, Math.PI*2); ctx.fill();
         ctx.fillStyle = 'rgba(0,0,0,0.35)';
         ctx.beginPath(); ctx.arc(cx - r*0.5, cy, r*0.13, 0, Math.PI*2); ctx.fill();
         ctx.beginPath(); ctx.arc(cx + r*0.5, cy, r*0.13, 0, Math.PI*2); ctx.fill();
         ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold ' + (isC ? 18 : 15) + 'px ' + FONT;
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillText(trail.name, x + w/2, y + h * 0.72);
         var st = '', sc = '#FFB347';
         if (selected) { st = 'SELECTED'; sc = '#FFD966'; }
         else if (owned) { st = 'OWNED'; sc = '#4CAF50'; }
         else if (isC) { st = trail.pricePts + ' pts + ' + trail.priceCoins + ' coins'; sc = (this.bank.points >= trail.pricePts && this.bank.coins >= trail.priceCoins) ? '#FFB347' : '#9E9E9E'; }
         if (st) { ctx.fillStyle = sc; ctx.font = 'bold ' + (isC ? 12 : 10) + 'px ' + FONT; ctx.fillText(st, x + w/2, y + h * 0.86); }
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
     Game.prototype.drawAvatarCardContent = function(ctx, x, y, w, h, key, isC) {
         var owned = this.bank.hasAccessTo(key);
         var selected = this.bank.currentAvatar === key;
         if (selected) ctx.fillStyle = 'rgba(255,215,100,0.14)';
         else if (owned) ctx.fillStyle = 'rgba(76,175,80,0.10)';
         else ctx.fillStyle = 'rgba(255,255,255,0.05)';
         fillRoundRect(ctx, x, y, w, h, 16);
         if (selected) { ctx.strokeStyle = '#FFD966'; ctx.lineWidth = 2.5; }
         else if (owned) { ctx.strokeStyle = 'rgba(76,175,80,0.7)'; ctx.lineWidth = 1.5; }
         else { ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 1; }
         strokeRoundRect(ctx, x, y, w, h, 16);
         var pvX = x + w/2, pvY = y + h * 0.4, r = isC ? 40 : 32;
         var mockP = new Player(); mockP.avatarName = key; mockP.colorName = 'Yellow'; mockP.rotation = 0;
         if (key === 'wheel') mockP._drawWheel(ctx, pvX, pvY, r); else mockP._drawBall(ctx, pvX, pvY, r);
         var label = "Skin";
         var keys = Object.keys(AVATARS);
         for (var i = 0; i < keys.length; i++) if (AVATARS[keys[i]].key === key) { label = keys[i]; break; }
         if (label === 'Skin') {
             label = key.replace(/_/g, ' ').replace(/\b\w/g, function(l) { return l.toUpperCase(); });
         }
         ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold ' + (isC ? 16 : 14) + 'px ' + FONT;
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillText(label, x + w/2, y + h * 0.72);
         var st = '', sc = '#FFB347';
         if (selected) { st = 'SELECTED'; sc = '#FFD966'; }
         else if (owned) { st = 'OWNED'; sc = '#4CAF50'; }
         else if (isC) {
             var def = null;
             for (var i = 0; i < keys.length; i++) if (AVATARS[keys[i]].key === key) { def = AVATARS[keys[i]]; break; }
             if (def) {
                 st = def.pricePts + ' pts + ' + def.priceCoins + ' coins';
                 sc = (this.bank.points >= def.pricePts && this.bank.coins >= def.priceCoins) ? '#FFB347' : '#9E9E9E';
             } else { st = 'locked'; sc = '#9E9E9E'; }
         }
         if (st) { ctx.fillStyle = sc; ctx.font = 'bold ' + (isC ? 12 : 10) + 'px ' + FONT; ctx.fillText(st, x + w/2, y + h * 0.86); }
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
     Game.prototype.drawDefenceCardContent = function(ctx, x, y, w, h, idx, isC) {
         var label = '', sub = '', status = '', statusColor = '#FFB347';
         var owned = false, selected = false;
         var cx = x + w / 2, cy = y + h * 0.38; var iconR = isC ? 34 : 28;
         if (idx === 0) {
             label = 'Damage'; sub = 'Lv ' + this.bank.damageLevel + ' / ' + PROJ_MAX_DAMAGE_LEVEL;
             if (this.bank.damageLevel >= PROJ_MAX_DAMAGE_LEVEL) { status = 'MAXED'; statusColor = '#4CAF50'; }
             else { var c0 = this.bank.damageCost(); status = c0.pts + ' pts + ' + c0.coins + ' coins'; statusColor = this.bank.canUpgradeDamage() ? '#FFB347' : '#9E9E9E'; }
         } else if (idx === 1) {
             label = 'Fire Rate'; sub = 'Lv ' + this.bank.rateLevel + ' / ' + PROJ_MAX_RATE_LEVEL;
             if (this.bank.rateLevel >= PROJ_MAX_RATE_LEVEL) { status = 'MAXED'; statusColor = '#4CAF50'; }
             else { var c1 = this.bank.rateCost(); status = c1.pts + ' pts + ' + c1.coins + ' coins'; statusColor = this.bank.canUpgradeRate() ? '#FFB347' : '#9E9E9E'; }
         } else if (idx === 2) { label = 'Fire'; sub = 'Burn 3 dmg over 3s'; owned = this.bank.ownsAbility('fire'); selected = this.bank.currentAbility === 'fire'; if (selected) { status = 'EQUIPPED'; statusColor = '#FFD966'; } else if (owned) { status = 'EQUIP'; statusColor = '#4CAF50'; } else status = '5000 pts + 50 coins'; }
         else if (idx === 3) { label = 'Ice'; sub = 'Freeze 3s'; owned = this.bank.ownsAbility('ice'); selected = this.bank.currentAbility === 'ice'; if (selected) { status = 'EQUIPPED'; statusColor = '#FFD966'; } else if (owned) { status = 'EQUIP'; statusColor = '#4CAF50'; } else status = '5000 pts + 50 coins'; }
         else if (idx === 4) { label = 'Spiked'; sub = 'x2 Damage'; owned = this.bank.ownsAbility('spiked'); selected = this.bank.currentAbility === 'spiked'; if (selected) { status = 'EQUIPPED'; statusColor = '#FFD966'; } else if (owned) { status = 'EQUIP'; statusColor = '#4CAF50'; } else status = '5000 pts + 50 coins'; }
         if (selected) ctx.fillStyle = 'rgba(255,215,100,0.14)';
         else if (owned) ctx.fillStyle = 'rgba(76,175,80,0.10)';
         else ctx.fillStyle = 'rgba(255,255,255,0.05)';
         fillRoundRect(ctx, x, y, w, h, 16);
         if (selected) { ctx.strokeStyle = '#FFD966'; ctx.lineWidth = 2.5; }
         else if (owned) { ctx.strokeStyle = 'rgba(76,175,80,0.7)'; ctx.lineWidth = 1.5; }
         else { ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 1; }
         strokeRoundRect(ctx, x, y, w, h, 16);
         if (idx === 2) { ctx.fillStyle = '#FF6B35'; ctx.beginPath(); ctx.arc(cx, cy, iconR * 0.7, 0, Math.PI * 2); ctx.fill(); }
         else if (idx === 3) { ctx.fillStyle = '#DCF2FF'; ctx.beginPath(); ctx.arc(cx, cy, iconR * 0.7, 0, Math.PI * 2); ctx.fill(); }
         else if (idx === 4) { ctx.fillStyle = '#C4A484'; ctx.beginPath(); ctx.arc(cx, cy, iconR * 0.7, 0, Math.PI * 2); ctx.fill(); }
         else { ctx.fillStyle = '#FFD966'; ctx.beginPath(); ctx.arc(cx, cy, iconR * 0.6, 0, Math.PI * 2); ctx.fill(); }
         ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold ' + (isC ? 16 : 14) + 'px ' + FONT;
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillText(label, x + w / 2, y + h * 0.72);
         ctx.fillStyle = 'rgba(255,255,255,0.65)'; ctx.font = (isC ? 11 : 9) + 'px ' + FONT;
         ctx.fillText(sub, x + w / 2, y + h * 0.80);
         ctx.fillStyle = statusColor; ctx.font = 'bold ' + (isC ? 11 : 9) + 'px ' + FONT;
         ctx.fillText(status, x + w / 2, y + h * 0.90);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
     Game.prototype.drawMovementCardContent = function(ctx, x, y, w, h, idx, isC) {
         var label = '', sub = '', status = '', statusColor = '#FFB347';
         var owned = false, selected = false;
         var cx = x + w / 2, cy = y + h * 0.38; var iconR = isC ? 34 : 28;
         if (idx === 0) {
             label = (this.bank.jumpLevel >= 1) ? 'Jump Upgrade' : 'Double Jump';
             sub = 'Air jumps: ' + this.bank.jumpLevel;
             if (this.bank.jumpLevel >= 2) { status = 'MAXED'; statusColor = '#4CAF50'; }
             else { var cj = this.bank.jumpCost(); if (cj) { status = cj.pts + ' pts + ' + cj.coins + ' coins'; statusColor = this.bank.canUpgradeJump() ? '#FFB347' : '#9E9E9E'; } }
         } else if (idx === 1) {
             label = 'Dash'; sub = 'Shift • burst of speed';
             owned = this.bank.dashOwned; selected = owned;
             if (owned) { status = 'OWNED'; statusColor = '#4CAF50'; }
             else { status = DASH_PRICE.pts + ' pts + ' + DASH_PRICE.coins + ' coins'; statusColor = this.bank.canBuyDash() ? '#FFB347' : '#9E9E9E'; }
         } else if (idx === 2) {
             label = 'Coin Magnet'; var ml = this.bank.magnetLevel;
             var rad = ml === 0 ? 60 : (ml === 1 ? 60 : ml === 2 ? 95 : 140);
             sub = 'Lv ' + ml + ' / ' + MAGNET_MAX_LEVEL + ' — ' + rad + 'px';
             if (ml >= MAGNET_MAX_LEVEL) { status = 'MAXED'; statusColor = '#4CAF50'; }
             else { var cm = this.bank.magnetCost(); if (cm) { status = cm.pts + ' pts + ' + cm.coins + ' coins'; statusColor = this.bank.canUpgradeMagnet() ? '#FFB347' : '#9E9E9E'; } }
         }
         if (selected) ctx.fillStyle = 'rgba(255,215,100,0.14)';
         else if (owned) ctx.fillStyle = 'rgba(76,175,80,0.10)';
         else ctx.fillStyle = 'rgba(255,255,255,0.05)';
         fillRoundRect(ctx, x, y, w, h, 16);
         if (selected) { ctx.strokeStyle = '#FFD966'; ctx.lineWidth = 2.5; }
         else if (owned) { ctx.strokeStyle = 'rgba(76,175,80,0.7)'; ctx.lineWidth = 1.5; }
         else { ctx.strokeStyle = 'rgba(255,255,255,0.15)'; ctx.lineWidth = 1; }
         strokeRoundRect(ctx, x, y, w, h, 16);
         ctx.fillStyle = '#FFD966'; ctx.beginPath(); ctx.arc(cx, cy, iconR * 0.6, 0, Math.PI * 2); ctx.fill();
         ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold ' + (isC ? 16 : 14) + 'px ' + FONT;
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillText(label, x + w / 2, y + h * 0.72);
         ctx.fillStyle = 'rgba(255,255,255,0.65)'; ctx.font = (isC ? 11 : 9) + 'px ' + FONT;
         ctx.fillText(sub, x + w / 2, y + h * 0.80);
         ctx.fillStyle = statusColor; ctx.font = 'bold ' + (isC ? 11 : 9) + 'px ' + FONT;
         ctx.fillText(status, x + w / 2, y + h * 0.90);
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
     Game.prototype.drawShopPromotions = function(ctx) {
         ctx.save(); ctx.globalAlpha = this.shopTabFade.promotions;
         var sets = ['solar', 'pool', 'sports'];
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 22px ' + FONT;
         ctx.fillText('SKIN SETS — BUY WITH DIAMONDS', W/2 - 100, SHOP_BOX_Y + 80);
         for (var i = 0; i < sets.length; i++) {
             var key = sets[i]; var def = DIAMOND_SETS[key];
             var sx = PROMO_X + i * (PROMO_CARD_W + PROMO_GAP); var sy = PROMO_TOP;
             var owned = this.bank.ownsSkinSet(key);
             var trialing = this.bank.hasSkinTrial(key);
             if (owned) ctx.fillStyle = 'rgba(76,175,80,0.10)';
             else if (trialing) ctx.fillStyle = 'rgba(255,217,102,0.10)';
             else ctx.fillStyle = 'rgba(135,206,250,0.08)';
             fillRoundRect(ctx, sx, sy, PROMO_CARD_W, PROMO_CARD_H, 16);
             ctx.strokeStyle = owned ? 'rgba(76,175,80,0.7)' : trialing ? '#FFD966' : 'rgba(135,206,250,0.55)';
             ctx.lineWidth = owned || trialing ? 2 : 1.5;
             strokeRoundRect(ctx, sx, sy, PROMO_CARD_W, PROMO_CARD_H, 16);
             var previewCount = Math.min(3, def.keys.length);
             for (var p = 0; p < previewCount; p++) {
                 var iconR = 18;
                 var icx = sx + PROMO_CARD_W / 2 + (p - 1) * (iconR * 2 + 8);
                 var icy = sy + 55;
                 var mockP = new Player(); mockP.avatarName = def.keys[p]; mockP.colorName = 'Yellow'; mockP.rotation = 0;
                 mockP._drawBall(ctx, icx, icy, iconR);
             }
             ctx.fillStyle = '#FFD966'; ctx.font = 'bold 16px ' + FONT;
             ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
             ctx.fillText(def.name, sx + PROMO_CARD_W / 2, sy + 120);
             ctx.fillStyle = 'rgba(255,255,255,0.65)'; ctx.font = '11px ' + FONT;
             ctx.fillText(def.keys.length + ' skins', sx + PROMO_CARD_W / 2, sy + 145);
             ctx.fillStyle = '#87CEEB'; ctx.font = 'bold 15px ' + FONT;
             ctx.fillText(def.cost + ' diamonds', sx + PROMO_CARD_W / 2, sy + 180);
             if (owned) { ctx.fillStyle = '#4CAF50'; ctx.font = 'bold 13px ' + FONT; ctx.fillText('OWNED', sx + PROMO_CARD_W / 2, sy + 215); }
             else if (trialing) {
                 var rem = Math.ceil(this.bank.getTrialRemaining(key) / 60000);
                 ctx.fillStyle = '#FFD966'; ctx.font = 'bold 13px ' + FONT;
                 ctx.fillText('TRIAL ' + rem + 'm', sx + PROMO_CARD_W / 2, sy + 215);
             }
             else { var canAfford = this.bank.diamonds >= def.cost; ctx.fillStyle = canAfford ? '#87CEEB' : '#9E9E9E'; ctx.font = 'bold 12px ' + FONT; ctx.fillText(canAfford ? 'CLICK TO VIEW' : 'NEED ' + (def.cost - this.bank.diamonds) + ' MORE', sx + PROMO_CARD_W / 2, sy + 215); }
             ctx.fillStyle = 'rgba(135,206,250,0.18)';
             fillRoundRect(ctx, sx + 20, sy + 240, PROMO_CARD_W - 40, 40, 20);
             ctx.strokeStyle = 'rgba(135,206,250,0.7)'; ctx.lineWidth = 1.5;
             strokeRoundRect(ctx, sx + 20, sy + 240, PROMO_CARD_W - 40, 40, 20);
             ctx.fillStyle = '#87CEEB'; ctx.font = 'bold 13px ' + FONT;
             ctx.fillText(owned ? 'VIEW SET' : 'SELECT', sx + PROMO_CARD_W / 2, sy + 260);
         }
         ctx.restore();
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
     Game.prototype.drawPromoModal = function(ctx) {
         var setKey = this.promoModalSet; var def = DIAMOND_SETS[setKey];
         if (!def) return;
         ctx.fillStyle = 'rgba(0,0,0,0.7)'; ctx.fillRect(0, 0, W, H);
         ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.7)'; ctx.shadowBlur = 40;
         ctx.fillStyle = 'rgba(20,20,36,0.98)';
         fillRoundRect(ctx, PROMO_MODAL_X, PROMO_MODAL_Y, PROMO_MODAL_W, PROMO_MODAL_H, 20); ctx.restore();
         ctx.strokeStyle = 'rgba(135,206,250,0.6)'; ctx.lineWidth = 2;
         strokeRoundRect(ctx, PROMO_MODAL_X, PROMO_MODAL_Y, PROMO_MODAL_W, PROMO_MODAL_H, 20);
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 26px ' + FONT;
         ctx.fillText(def.name, W/2, PROMO_MODAL_Y + 45);
         ctx.fillStyle = 'rgba(255,255,255,0.65)'; ctx.font = '13px ' + FONT;
         ctx.fillText(def.desc + ' — ' + def.keys.length + ' skins', W/2, PROMO_MODAL_Y + 75);
         var n = def.keys.length; var cols = Math.min(n, 8); var previewR = 18;
         var totalW = cols * (previewR * 2 + 6);
         var startX = W/2 - totalW/2 + previewR; var startY = PROMO_MODAL_Y + 130;
         for (var i = 0; i < n; i++) {
             var col = i % cols; var row = Math.floor(i / cols);
             var icx = startX + col * (previewR * 2 + 6);
             var icy = startY + row * (previewR * 2 + 6);
             var mockP = new Player(); mockP.avatarName = def.keys[i]; mockP.colorName = 'Yellow'; mockP.rotation = 0;
             mockP._drawBall(ctx, icx, icy, previewR);
         }
         var owned = this.bank.ownsSkinSet(setKey);
         ctx.fillStyle = owned ? '#4CAF50' : '#87CEEB'; ctx.font = 'bold 18px ' + FONT;
         if (owned) ctx.fillText('Already owned', W/2, PROMO_MODAL_Y + PROMO_MODAL_H - 175);
         else ctx.fillText('Cost: ' + def.cost + ' diamonds   (You have ' + this.bank.diamonds + ')', W/2, PROMO_MODAL_Y + PROMO_MODAL_H - 175);
         if (!owned) {
             var canAfford = this.bank.diamonds >= def.cost;
             drawButton(ctx, PROMO_MODAL_BUY_X, PROMO_MODAL_BUY_Y, PROMO_MODAL_BUY_W, PROMO_MODAL_BUY_H, canAfford ? 'PURCHASE' : 'NOT ENOUGH', canAfford ? 'success' : 'subtle');
         }
         drawButton(ctx, PROMO_MODAL_PREV_X, PROMO_MODAL_PREV_Y, PROMO_MODAL_PREV_W, PROMO_MODAL_PREV_H, 'PREVIEW ALL', 'neutral');
         var rightBtnX = PROMO_MODAL_PREV_X + PROMO_MODAL_PREV_W + 20;
         drawButton(ctx, rightBtnX, PROMO_MODAL_PREV_Y, PROMO_MODAL_PREV_W, PROMO_MODAL_PREV_H, 'CLOSE', 'accent');
         drawButton(ctx, PROMO_MODAL_CLOSE_X, PROMO_MODAL_CLOSE_Y, PROMO_MODAL_CLOSE_W, PROMO_MODAL_CLOSE_H, 'X', 'subtle');
     };
     Game.prototype.drawPromoPreview = function(ctx) {
         ctx.fillStyle = 'rgba(0,0,0,0.85)'; ctx.fillRect(0, 0, W, H);
         var setKey = this.promoPreviewSet; var def = DIAMOND_SETS[setKey];
         if (!def) { this.state = 'shop'; return; }
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 36px ' + FONT;
         ctx.fillText(def.name, W/2, 55);
         ctx.fillStyle = 'rgba(255,255,255,0.65)'; ctx.font = '14px ' + FONT;
         ctx.fillText('Previewing ' + def.keys.length + ' skins', W/2, 95);
         drawButton(ctx, PREVIEW_BACK_X, PREVIEW_BACK_Y, PREVIEW_BACK_W, PREVIEW_BACK_H, '← BACK', 'subtle');
         var n = def.keys.length; var cols = 5;
         var cardW = 120, cardH = 130; var gap = 20;
         var startX = W/2 - (cols * (cardW + gap) - gap) / 2;
         var startY = 140;
         ctx.save();
         ctx.beginPath(); ctx.rect(0, 130, W, H - 140); ctx.clip();
         for (var i = 0; i < n; i++) {
             var col = i % cols; var row = Math.floor(i / cols);
             var cx = startX + col * (cardW + gap);
             var cy = startY + row * (cardH + gap) - this.promoPreviewScrollY;
             var owned = this.bank.hasAccessTo(def.keys[i]);
             ctx.fillStyle = owned ? 'rgba(76,175,80,0.10)' : 'rgba(135,206,250,0.10)';
             fillRoundRect(ctx, cx, cy, cardW, cardH, 14);
             ctx.strokeStyle = owned ? 'rgba(76,175,80,0.5)' : 'rgba(135,206,250,0.5)';
             ctx.lineWidth = 1.5;
             strokeRoundRect(ctx, cx, cy, cardW, cardH, 14);
             var mockP = new Player(); mockP.avatarName = def.keys[i]; mockP.colorName = 'Yellow'; mockP.rotation = 0;
             mockP._drawBall(ctx, cx + cardW/2, cy + 45, 28);
             ctx.fillStyle = '#FFFFFF'; ctx.font = 'bold 11px ' + FONT;
             ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
             ctx.fillText(def.keys[i], cx + cardW/2, cy + cardH - 18);
         }
         ctx.restore();
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
     Game.prototype.drawShopConvert = function(ctx) {
         ctx.save(); ctx.globalAlpha = this.shopTabFade.convert;
         var boxX = SHOP_BOX_X + 20; var boxY = SHOP_BOX_Y + 80;
         var boxW = SHOP_SB_X - boxX - 20; var boxH = SHOP_BOX_H - 100;
         ctx.fillStyle = 'rgba(255,255,255,0.04)'; fillRoundRect(ctx, boxX, boxY, boxW, boxH, 18);
         ctx.strokeStyle = 'rgba(255,255,255,0.08)'; ctx.lineWidth = 1;
         strokeRoundRect(ctx, boxX, boxY, boxW, boxH, 18);
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 22px ' + FONT;
         ctx.fillText('CONVERT CURRENCY', boxX + boxW/2, boxY + 40);
         ctx.font = 'bold 26px ' + FONT;
         ctx.fillStyle = '#FFFFFF'; ctx.fillText('10000 pts', boxX + boxW/2 - 130, boxY + 110);
         ctx.fillStyle = '#FFB347'; ctx.fillText('→', boxX + boxW/2, boxY + 110);
         ctx.fillText('100 coins', boxX + boxW/2 + 130, boxY + 110);
         ctx.fillStyle = 'rgba(255,255,255,0.55)'; ctx.font = '14px ' + FONT;
         ctx.fillText('You have: ' + this.bank.points + ' pts  •  ' + this.bank.coins + ' coins  •  ' + this.bank.diamonds + ' diamonds', boxX + boxW/2, boxY + 160);
         var canC = this.bank.canConvert();
         drawButton(ctx, CONV_BTN_X, CONV_BTN_Y, CONV_BTN_W, CONV_BTN_H, canC ? 'CONVERT' : 'NOT ENOUGH', canC ? 'success' : 'subtle');
         if (!canC) { ctx.fillStyle = '#FF6B6B'; ctx.font = '14px ' + FONT; ctx.fillText('Need ' + (CONVERT_POINTS_COST - this.bank.points) + ' more points', boxX + boxW/2, CONV_BTN_Y + 90); }
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
         ctx.restore();
     };
 
     Game.prototype.drawDailyReward = function(ctx) {
         ctx.fillStyle = 'rgba(0,0,0,0.85)'; ctx.fillRect(0, 0, W, H);
         ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.7)'; ctx.shadowBlur = 40;
         ctx.fillStyle = 'rgba(20,20,36,0.98)';
         fillRoundRect(ctx, DAILY_PANEL_X, DAILY_PANEL_Y, DAILY_PANEL_W, DAILY_PANEL_H, 22); ctx.restore();
         ctx.strokeStyle = 'rgba(255,215,100,0.5)'; ctx.lineWidth = 2;
         strokeRoundRect(ctx, DAILY_PANEL_X, DAILY_PANEL_Y, DAILY_PANEL_W, DAILY_PANEL_H, 22);
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 26px ' + FONT;
         ctx.fillText('DAILY LOGIN REWARDS', W/2, DAILY_PANEL_Y + 40);
         var dr = this.bank.checkDailyReward();
         ctx.fillStyle = 'rgba(255,255,255,0.65)'; ctx.font = '13px ' + FONT;
         ctx.fillText('Resets each month • Day ' + Math.min(dr.todayDay, DAILY_REWARD_CYCLE_DAYS) + ' of ' + DAILY_REWARD_CYCLE_DAYS, W/2, DAILY_PANEL_Y + 68);
         var cols = DAILY_COLS; var gap = DAILY_CELL_GAP; var cellW = DAILY_CELL_W; var cellH = DAILY_CELL_H;
         var gridLeft = DAILY_PANEL_X + 30;
         var lastClaimedDay = 0;
         if (dr.lastClaimDate) {
             var parts = dr.lastClaimDate.split('-');
             if (parts.length === 3) lastClaimedDay = parseInt(parts[2]) || 0;
         }
         for (var i = 0; i < DAILY_REWARDS.length; i++) {
             var day = i + 1;
             var col = i % cols; var row = Math.floor(i / cols);
             var cx = gridLeft + col * (cellW + gap);
             var cy = DAILY_GRID_TOP + row * (cellH + gap);
             var isToday = (day === dr.todayDay);
             var isClaimed = (day <= lastClaimedDay);
             var isFuture = (day > dr.todayDay);
             var bg = isClaimed ? 'rgba(76,175,80,0.25)' : isToday ? 'rgba(255,217,102,0.25)' : 'rgba(255,255,255,0.05)';
             ctx.fillStyle = bg; fillRoundRect(ctx, cx, cy, cellW, cellH, 8);
             ctx.strokeStyle = isToday ? '#FFD966' : isClaimed ? 'rgba(76,175,80,0.7)' : 'rgba(255,255,255,0.15)';
             ctx.lineWidth = isToday ? 2 : 1;
             strokeRoundRect(ctx, cx, cy, cellW, cellH, 8);
             ctx.fillStyle = isToday ? '#FFD966' : isClaimed ? '#4CAF50' : '#FFFFFF';
             ctx.font = 'bold 11px ' + FONT;
             ctx.textAlign = 'left'; ctx.textBaseline = 'middle';
             ctx.fillText('Day ' + day, cx + 8, cy + 12);
             var r = DAILY_REWARDS[i];
             ctx.font = '10px ' + FONT;
             ctx.fillStyle = isFuture ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.85)';
             var label = r.label;
             if (label.length > 20) label = label.substring(0, 18) + '…';
             ctx.fillText(label, cx + 8, cy + 28);
             if (isClaimed) {
                 ctx.fillStyle = '#4CAF50';
                 ctx.font = 'bold 18px ' + FONT;
                 ctx.textAlign = 'right';
                 ctx.fillText('✓', cx + cellW - 8, cy + cellH / 2);
             }
         }
         ctx.textAlign = 'center';
         if (dr.canClaim && dr.reward) {
             drawButton(ctx, DAILY_CLAIM_X, DAILY_CLAIM_Y, DAILY_CLAIM_W, DAILY_CLAIM_H, 'CLAIM: ' + dr.reward.label, 'success');
         } else {
             ctx.fillStyle = 'rgba(255,255,255,0.5)'; ctx.font = 'bold 18px ' + FONT;
             ctx.fillText('Come back tomorrow!', W/2, DAILY_CLAIM_Y + DAILY_CLAIM_H / 2);
         }
         drawButton(ctx, DAILY_CLOSE_X, DAILY_CLOSE_Y, DAILY_CLOSE_W, DAILY_CLOSE_H, 'X', 'subtle');
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
 
     Game.prototype.openBooster = function() {
         this.boosterOpen = true; this.boosterSpinning = false; this.boosterSpinTime = 0;
         this.boosterSpinAngle = 0; this.boosterResult = 0; this.boosterResultShown = false;
         this.previousState = this.state; this.sound.play('click');
     };
     Game.prototype.closeBooster = function() { this.boosterOpen = false; this.state = this.previousState || 'options'; this.sound.play('click'); };
     Game.prototype.getBoosterAvailableSegments = function() {
         var completed = this.bank.scoreBoosterCompleted;
         var segs = [];
         if (completed.indexOf(1) === -1) segs.push(1);
         if (completed.indexOf(2) === -1) segs.push(2);
         if (completed.indexOf(3) === -1) segs.push(3);
         if (completed.indexOf(4) === -1) segs.push(4);
         if (completed.indexOf(5) === -1) segs.push(5);
         if (completed.indexOf(6) === -1) segs.push(6);
         if (segs.length === 0) segs.push(1, 2, 3, 4, 5, 6);
         return segs;
     };
     Game.prototype.boosterSpin = function() {
         if (this.boosterSpinning) return;
         var segs = this.getBoosterAvailableSegments(); if (segs.length === 0) return;
         var chosen = segs[Math.floor(Math.random() * segs.length)];
         if (chosen === 6 && this.bank.diamonds < SCORE_BOOSTER_DIAMOND_COST) {
             var filtered = segs.filter(function(s) { return s !== 6; });
             if (filtered.length > 0) chosen = filtered[Math.floor(Math.random() * filtered.length)];
         }
         if (chosen === 6) {
             if (this.bank.diamonds >= SCORE_BOOSTER_DIAMOND_COST) {
                 this.bank.diamonds -= SCORE_BOOSTER_DIAMOND_COST; this.bank.completeBooster(6); this.sound.play('buy');
             } else return;
         }
         this.boosterResult = chosen;
         if (chosen === 1) { this.bank.completeBooster(1); this.bank.scoreBoosterSpins += 2; }
         this.boosterSpinAngle = 0; this.boosterStartAngle = 0;
         this.boosterTargetAngle = Math.PI * 2 * 6 + (chosen - 1) * (Math.PI * 2 / 6) + (Math.PI / 6);
         this.boosterSpinTime = 0; this.boosterSpinning = true;
         this.sound.play('spin');
     };
     Game.prototype.drawBooster = function(ctx) {
         ctx.fillStyle = 'rgba(0,0,0,0.85)'; ctx.fillRect(0, 0, W, H);
         ctx.save(); ctx.shadowColor = 'rgba(0,0,0,0.7)'; ctx.shadowBlur = 40;
         ctx.fillStyle = 'rgba(20,20,36,0.98)';
         fillRoundRect(ctx, BOOSTER_PANEL_X, BOOSTER_PANEL_Y, BOOSTER_PANEL_W, BOOSTER_PANEL_H, 24); ctx.restore();
         ctx.strokeStyle = 'rgba(255,215,100,0.5)'; ctx.lineWidth = 2;
         strokeRoundRect(ctx, BOOSTER_PANEL_X, BOOSTER_PANEL_Y, BOOSTER_PANEL_W, BOOSTER_PANEL_H, 24);
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 26px ' + FONT;
         ctx.fillText('SCORE BOOSTER', W/2, BOOSTER_PANEL_Y + 36);
         ctx.fillStyle = 'rgba(255,255,255,0.6)'; ctx.font = 'bold 13px ' + FONT;
         ctx.fillText('Completed: ' + this.bank.scoreBoosterCompleted.length + '/6  •  Each gives ' + SCORE_BOOSTER_REWARD + ' pts', W/2, BOOSTER_PANEL_Y + 62);
         var numSegs = 6; var segAngle = Math.PI * 2 / numSegs;
         var labels = ['Xtra 2 Spins!','5k Pts on Hard','Mega UFO <10s','Mega UFO on Hard','3 Wins in a row','Spend 25 diamonds'];
         var segColors = ['#FFD966', '#FF6B35', '#7FD8FF', '#4CAF50', '#9C27B0', '#87CEEB'];
         ctx.save(); ctx.translate(WHEEL_CX, WHEEL_CY); ctx.rotate(this.boosterSpinAngle);
         for (var i = 0; i < numSegs; i++) {
             var start = i * segAngle - Math.PI / 2; var end = start + segAngle;
             ctx.beginPath(); ctx.moveTo(0, 0); ctx.arc(0, 0, WHEEL_R, start, end); ctx.closePath();
             ctx.fillStyle = segColors[i]; ctx.globalAlpha = 0.85; ctx.fill();
             ctx.strokeStyle = 'rgba(0,0,0,0.3)'; ctx.lineWidth = 2; ctx.stroke(); ctx.globalAlpha = 1;
             ctx.save(); var mid = start + segAngle / 2; ctx.rotate(mid);
             ctx.textAlign = 'right'; ctx.fillStyle = '#1a1a2e'; ctx.font = 'bold 10px ' + FONT;
             ctx.fillText(labels[i], WHEEL_R - 10, 0); ctx.restore();
         }
         ctx.beginPath(); ctx.arc(0, 0, 30, 0, Math.PI * 2);
         ctx.fillStyle = '#1a1a2e'; ctx.fill(); ctx.strokeStyle = '#FFD966'; ctx.lineWidth = 3; ctx.stroke();
         ctx.fillStyle = '#FFD966'; ctx.font = 'bold 11px ' + FONT;
         ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
         ctx.fillText('SPIN', 0, 0); ctx.restore();
         ctx.save(); ctx.fillStyle = '#E63946';
         ctx.beginPath(); ctx.moveTo(WHEEL_CX, WHEEL_CY - WHEEL_R - 6);
         ctx.lineTo(WHEEL_CX - 12, WHEEL_CY - WHEEL_R - 24);
         ctx.lineTo(WHEEL_CX + 12, WHEEL_CY - WHEEL_R - 24); ctx.closePath(); ctx.fill(); ctx.restore();
         if (this.boosterResultShown && this.boosterResult > 0) {
             var resText = labels[this.boosterResult - 1];
             ctx.fillStyle = '#FFD966'; ctx.font = 'bold 14px ' + FONT;
             ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
             var statusText = 'Task: ' + resText;
             if (this.bank.hasCompletedBooster(this.boosterResult)) statusText += ' — COMPLETED';
             ctx.fillText(statusText, W/2, BOOSTER_SPIN_Y - 15);
         }
         drawButton(ctx, BOOSTER_SPIN_X, BOOSTER_SPIN_Y, BOOSTER_SPIN_W, BOOSTER_SPIN_H, 'SPIN', 'primary');
         drawButton(ctx, BOOSTER_CLOSE_X, BOOSTER_CLOSE_Y, BOOSTER_CLOSE_W, BOOSTER_CLOSE_H, 'CLOSE', 'accent');
         ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
     };
     Game.prototype.handleBoosterClick = function(p) {
         if (hitTest(p.x, p.y, BOOSTER_CLOSE_X, BOOSTER_CLOSE_Y, BOOSTER_CLOSE_W, BOOSTER_CLOSE_H)) { this.closeBooster(); return; }
         if (hitTest(p.x, p.y, BOOSTER_SPIN_X, BOOSTER_SPIN_Y, BOOSTER_SPIN_W, BOOSTER_SPIN_H)) { if (!this.boosterSpinning) this.boosterSpin(); return; }
     };
 
     Game.prototype.loop = function(timestamp) {
         var dt = this.lastTime ? Math.min((timestamp - this.lastTime) / 1000, 0.05) : 0.016;
         this.lastTime = timestamp; this.accum += dt;
         while (this.accum >= 0.016) { this.update(0.016); this.accum -= 0.016; }
         this.render();
         requestAnimationFrame(this.loop);
     };
 
     return Game;
 })();
 
 window.addEventListener('DOMContentLoaded', function() {
     (async function() {
         var resetRequested = new URLSearchParams(window.location.search).get('resetPlayer') === '1';
         if (resetRequested) localStorage.clear();
         var bootstrap = { configured: false, account: null, cloudSave: null };
         try { if (window.overroll && window.overroll.bootstrap) bootstrap = await window.overroll.bootstrap(); } catch (_) {}
         var diskSave = null;
         try { if (!resetRequested && window.overroll && window.overroll.loadLocalSave) diskSave = await window.overroll.loadLocalSave(); } catch (_) {}
         var hadLocal = hasLocalProgress();
         var localTime = parseInt(localStorage.getItem('rrSaveUpdatedAt'), 10) || 0;
         if (diskSave && (!hadLocal || (diskSave.updatedAt || 0) > localTime)) {
             applyLocalSave(diskSave); hadLocal = hasLocalProgress();
             localTime = parseInt(localStorage.getItem('rrSaveUpdatedAt'), 10) || 0;
         }
         var cloud = bootstrap && bootstrap.cloudSave;
         var cloudUsable = cloud && cloud.version === 1 && cloud.data && typeof cloud.data === 'object';
         if (cloudUsable && (!hadLocal || (cloud.updatedAt || 0) > localTime)) applyLocalSave(cloud);
         window.overrollBootstrap = bootstrap;
         window.overrollNewPlayer = !(hadLocal || cloudUsable);
         var game = new Game(); window.game = game;
         game.bank.save();
         if (window.overroll && window.overroll.onCloudSyncStatus) {
             window.overroll.onCloudSyncStatus(function(status) { game.welcomeStatus = status.message; });
         }
         if (bootstrap.account && hadLocal && (!cloudUsable || localTime >= (cloud.updatedAt || 0)) && window.overroll.queueCloudSave) {
             window.overroll.queueCloudSave(localSavePayload());
         }
     })();
 });
