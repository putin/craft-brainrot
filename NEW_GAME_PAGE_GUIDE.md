我需要重构我的网站，用一款新的iframe游戏替换掉所有现有的游戏。请保留网站的整体模板和结构，并按照以下步骤操作：

**新游戏详情 (请替换[]中的占位符):**
*   **游戏名称:** `Craft Brainrot`
*   **游戏标识 (Slug):** `craft-brainrot` 
*   **游戏Iframe URL:** `https://games.crazygames.com/en_US/craft-brainrot/index.html?czyBoltive_CZY_15200=enabled&czyDynamicPriceFloorVariantsCZY_14537=disabled&czyEPBPooling_CZY_14716=enabled&ssrDevice=desktop&isNewUser=false&v=1.335`
*   **游戏简短描述:** `Welcome to the wonderful world of Craft Brainrot! This viral merge game has taken the internet by storm, combining Italian meme culture with addictive crafting gameplay. Whether you're curious about this trending game or already diving into its chaotic fun, here's everything you need to know about Craft Brainrot.`
*   **游戏特性:** ` 🎭Unique Meme Culture Integration
Craft Brainrot stands out by incorporating authentic Italian meme culture into its gameplay. Every character and item has been carefully designed to reflect the absurd humor that makes brainrot content so entertaining.

🔀 Endless Combination Possibilities
With hundreds of items to discover, Craft Brainrot offers virtually unlimited replay value. Each merge attempt can lead to surprising new discoveries, keeping players engaged for hours.

📱 Cross-Platform Compatibility
Whether you're playing on mobile, tablet, or desktop, the game delivers a seamless experience across all devices. The intuitive touch controls make it perfect for gaming on the go.

🎨 Vibrant Visual Design
The game features colorful, cartoon-style graphics that perfectly complement its humorous theme. Every character is instantly recognizable and bursting with personality.

⚡ Quick Play Sessions
The game is designed for both short casual sessions and extended gaming marathons. You can make meaningful progress in just a few minutes or lose yourself for hours exploring new combinations.`
*   **玩法说明:** `Playing Craft Brainrot is simple to learn but endlessly entertaining. Here's how the game works and what you can expect:

Basic Controls
Left Mouse Button: Click to interact with items and elements
Click and Hold: Hold down to move items around the crafting area
Touch Controls: On mobile devices, tap and hold to interact and move items
Getting Started
The core gameplay revolves around experimenting with different combinations of items from Italian meme culture. Players click on items to place them and try merging various elements together to discover new and often hilarious results.

Gameplay Mechanics
The game encourages creative experimentation as players combine different meme elements to unlock new characters and items. Each successful combination reveals something unexpected, keeping the gameplay fresh and entertaining. The simple click-and-merge mechanics make it accessible while the vast number of possible combinations provides depth for those who want to explore every possibility.`
*   **常见问题 (FAQ):** `Q: Is Craft Brainrot free to play?
A: Yes! Craft Brainrot is completely free to play with no hidden costs or mandatory purchases.

Q: Can I play Craft Brainrot offline?
A: Craft Brainrot requires an internet connection for the best experience, including saving progress and accessing the latest content updates.

Q: What devices support Craft Brainrot?
A: Craft Brainrot is compatible with virtually all modern devices, including smartphones, tablets, and computers with web browsers.

Q: Are there any age restrictions for Craft Brainrot?
A: Craft Brainrot is rated E for Everyone, making it suitable for players of all ages who enjoy puzzle and merge games.`

**具体执行步骤:**

**第1步：清理旧游戏**
1.  分析 `app/` 目录，找出所有当前的游戏目录。
2.  删除 `app/` 目录下的所有旧游戏目录。
3.  删除 `public/assets/` 目录下的所有旧游戏资源目录。
4.  删除 `public/game/` 目录下的所有旧游戏嵌入目录。

**第2步：添加新游戏**
1.  根据上面提供的 **新游戏详情**，在 `app/[your-new-game-slug]/` 路径下创建新的页面文件 (`page.tsx`) 和内容文件 (`content.ts`)。
2.  在 `public/assets/[your-new-game-slug]/` 路径下创建新的资源目录 (图片可以暂时缺失，后续我会提供)。
3.  在 `public/game/[your-new-game-slug]/` 路径下创建 `index.html` 文件，并嵌入上面提供的 **游戏Iframe URL**。

**第3步：更新网站配置**
1.  修改 `next.config.js` 文件，删除所有旧游戏的重写规则，并为新游戏 `/[your-new-game-slug]` 添加规则。
2.  修改 `config/content.ts` 文件，清空 `footer.games.links` 数组，然后只添加新游戏的链接。
3.  修改 `app/games/game-data.ts` 文件，清空 `games` 对象，然后只添加新游戏的数据。

**第4步：更新文档**
1.  更新 `README.md` 和 `README_EN.md` 文件，移除旧的游戏列表，只添加新游戏的信息。
2.  更新 `public/llms.txt` 和 `public/llms-full.txt` 文件，只保留新游戏的相关内容。

请一步步执行，如果需要更多信息，随时向我提问。