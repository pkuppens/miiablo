# Miiablo

A browser-based Action RPG inspired by Diablo, featuring Mii-like characters. Built with Phaser 3.

## Core Game Systems (Turn-Based)

Miiablo uses a turn-based combat system with timed player turns.

### 1. Turn System

*   **Player Turn:** The player *must* take an action (move, attack, skill, potion, wait) every `X` seconds (base: 1.0s).
*   **Turn Speed:** The player's base turn time (1.0s) can be decreased by leveling up specific attributes (e.g., Agility/Speed) and by equipment bonuses. Faster speed = more turns over time.
*   **Wait Action:** If the player doesn't input an action before their turn timer expires, it counts as a "Wait" turn. Waiting still consumes the turn and can trigger passive effects like health regeneration.
*   **Monster Turns:** Monsters take turns based on their individual speed attributes. Faster monsters act more frequently. The game manages a queue or readiness system for monster actions.
*   **Action Cost:** Most actions (moving one tile, attacking, using a skill/potion) consume the current turn.

### 2. Character System
*   **Barbarian Class:** Single class focus.
*   **Leveling:** Progress from 1-70, XP required increases via `baseXP * (level ^ 1.5)`.
*   **Attributes:**
    *   Strength: Increases Melee Damage.
    *   Vitality: Increases Health.
    *   Armor: Reduces Damage Taken.
    *   Speed/Agility (New): Reduces player turn time.
*   **Attribute Points:** Gain a set number of points upon leveling up to manually allocate to attributes via the Character screen ('C').
*   **Health Regeneration:** Slow passive health regeneration occurs, potentially increased during "Wait" turns or outside of active combat encounters.

### 3. Combat System
*   **Turn-Based Actions:** Players choose actions sequentially when their turn is ready.
*   **Basic Attack:** Target an enemy within range (costs 1 turn).
*   **Special Skills:** Use learned skills, often with cooldowns measured in *turns* (costs 1 turn). Unlocked via leveling.
*   **Movement:** Click an adjacent valid tile/position to move (costs 1 turn).
*   **Potions:** Use a health potion ('Q') (costs 1 turn, has a turn-based cooldown).
*   **Targeting:** Select targets via mouse click/hover. Clear indicators for range and selection.

### 4. Equipment System
*   **Slots:** Weapon, Torso, Helmet, Ring, Amulet.
*   **Item Quality:** All items are "Legendary".
*   **Item Level:** Drops scale with monster/player level (max 70), have level requirements.
*   **Stats:** Items provide bonuses to core attributes (Strength, Vitality, Armor, Speed), damage, crit chance, etc. Each item has 2-4 random properties.
*   **Speed Bonuses:** Equipment (especially accessories) can grant bonuses to reduce player turn time.

### 5. Inventory System
*   **Grid:** 5x8 slot grid-based inventory.
*   **Interaction:** Drag/drop items, right-click to equip/unequip.
*   **Comparison:** Tooltip appears on hover to compare item stats with equipped items.

### 6. Loot System
*   **Drops:** Monsters drop Gold, Legendary items, Crafting Materials, and Recipes.
*   **Scaling:** Drop quality/quantity scales with monster level and difficulty. Elites/Bosses have better drop rates.

### 7. Camp/Town System
*   **Safe Zone:** An area with no monsters.
*   **Blacksmith:** Allows players to:
    *   Shard unwanted items into Crafting Materials.
    *   Craft random items using Materials + Gold.
    *   Upgrade existing items using Materials + Gold.
*   **Teleport Home:** Players can initiate a 5-second *uninterrupted* channel/cast to teleport back to the Camp/Town. Taking any damage cancels the teleport.

### 8. Map/Level System
*   **Areas:** 3 distinct areas with increasing difficulty (Cursed Village, Shadowed Forest, Forgotten Catacombs). Monster levels scale accordingly.
*   **Generation:** Random level layout generation (potentially tile-based for turn-based movement).
*   **Navigation:** Minimap display and Waypoints for fast travel between discovered locations within an area or back to town.

### 9. Monster System
*   **Variety:** Different monster types (melee, ranged, AoE) with distinct turn-based AI behaviors (move, attack, use ability).
*   **Stats:** Health, Damage, Armor, and **Turn Speed**. Stats scale with monster level.
*   **AI:** Monsters decide actions based on their state (idle, pursuing, attacking) when their turn is ready. Pathfinding used for movement.
*   **Elites/Bosses:** Stronger variants with special abilities and higher stats/turn speed.

### 10. User Interface (Turn-Based Focus)
*   **HUD:** Health Globe, **Player Turn Timer/Indicator**, Minimap, XP Bar, Skill Bar (showing turn cooldowns), Potion Info.
*   **Menus:** Inventory ('I'), Character ('C' - with attribute allocation), Skills ('S'), Map ('M'), Options ('Esc').
*   **Feedback:** Clear visual cues for player turn readiness, monster turns, targeting, and action confirmation.

### 11. Save/Load System
*   **Persistence:** Game state (character progress, inventory, equipment, allocated attributes, current location) saved automatically to `localStorage`.
*   **Slots:** Support for multiple character save slots.


## Prerequisites

*   Node.js and npm (or yarn)

## Setup & Running Locally

1.  Clone the repository:
    ```
    git clone https://github.com/pkuppens/miiablo
    cd miiablo
    ```

2.  Install dependencies:
    ```
    npm install
    ```

3.  Start the development server:
    ```
    npm start
    ```

This will open the game in your default browser, usually at `http://localhost:8080`. The server supports hot reloading for development.

## Building for Production

```
npm run build
```

This creates an optimized build in the `dist/` folder.
