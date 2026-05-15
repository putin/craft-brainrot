'use client';

import { gameList } from '@/app/games/game-data';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

interface GameCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  url: string;
  iframeUrl?: string;
  isActive: boolean;
  onSelect: (id: string) => void;
}

function GameCard({ id, title, description, image, url, iframeUrl, isActive, onSelect }: GameCardProps) {
  return (
    <div
      className={`group relative bg-gray-800/60 rounded-xl overflow-hidden border transition-all duration-300 cursor-pointer hover:scale-[1.02] hover:shadow-2xl ${
        isActive
          ? 'border-purple-500 shadow-purple-500/30 shadow-lg'
          : 'border-gray-700/50 hover:border-purple-500/60'
      }`}
      onClick={() => onSelect(id)}
    >
      {/* 封面图 */}
      <div className="relative w-full aspect-video bg-gray-900 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          loading="lazy"
        />
        {/* 悬浮遮罩 */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
          {iframeUrl ? (
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-purple-600 text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
              🎮 Play Now
            </span>
          ) : (
            <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-blue-600 text-white text-sm font-semibold px-4 py-2 rounded-full flex items-center gap-2">
              🔗 Play on Site
            </span>
          )}
        </div>
        {/* iframe 可嵌入标签 */}
        {iframeUrl && (
          <span className="absolute top-2 left-2 bg-purple-600 text-white text-xs px-2 py-0.5 rounded-full font-medium">
            ▶ Playable
          </span>
        )}
      </div>

      {/* 游戏信息 */}
      <div className="p-4">
        <h3 className="text-white font-bold text-base mb-1 truncate">{title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2 mb-3">{description}</p>

        {iframeUrl ? (
          <Button
            size="sm"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white"
            onClick={(e) => { e.stopPropagation(); onSelect(id); }}
          >
            🎮 Play Now
          </Button>
        ) : (
          <Button
            size="sm"
            variant="outline"
            className="w-full border-blue-500/50 text-blue-400 hover:bg-blue-600 hover:text-white hover:border-blue-600"
            onClick={(e) => { e.stopPropagation(); window.open(url, '_blank'); }}
          >
            🔗 Play on Craft Brainrot
          </Button>
        )}
      </div>
    </div>
  );
}

export function GameGrid() {
  const [activeGameId, setActiveGameId] = useState<string | null>(null);
  const activeGame = activeGameId ? gameList.find(g => g.id === activeGameId) : null;

  const handleSelect = (id: string) => {
    const game = gameList.find(g => g.id === id);
    if (game?.iframeUrl) {
      setActiveGameId(id);
      // 滚动到游戏区域
      setTimeout(() => {
        document.getElementById('game-section')?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (game) {
      window.open(game.url, '_blank');
    }
  };

  return (
    <section className="w-full py-12 scroll-mt-20" id="more-games">
      <div className="container mx-auto px-4">
        {/* 标题 */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 text-white">
          🎮 More Brainrot Games
        </h2>
        <p className="text-gray-400 text-center mb-10 max-w-2xl mx-auto">
          Explore the full collection of Italian Brainrot games. Click any game to play instantly or visit the original site.
        </p>

        {/* 当前选中的 iframe 游戏预览 */}
        {activeGame?.iframeUrl && (
          <div className="mb-10 rounded-xl overflow-hidden border border-purple-500 shadow-xl shadow-purple-500/20">
            <div className="bg-gray-800/80 px-4 py-3 flex items-center justify-between">
              <span className="text-white font-semibold flex items-center gap-2">
                🎮 {activeGame.title}
              </span>
              <button
                onClick={() => setActiveGameId(null)}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                ✕ Close
              </button>
            </div>
            <iframe
              src={activeGame.iframeUrl}
              className="w-full aspect-video border-0"
              allow="fullscreen"
              title={activeGame.title}
            />
          </div>
        )}

        {/* 游戏网格 */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-4">
          {gameList.map((game) => (
            <GameCard
              key={game.id}
              {...game}
              isActive={activeGameId === game.id}
              onSelect={handleSelect}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
