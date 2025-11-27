"use client";

import { useState, useEffect, useCallback } from "react";

type Direction = "UP" | "DOWN" | "LEFT" | "RIGHT";
type Position = { x: number; y: number };

const GRID_SIZE = 20;
const CELL_SIZE = 20;
const INITIAL_SNAKE = [{ x: 10, y: 10 }];
const INITIAL_DIRECTION: Direction = "RIGHT";
const GAME_SPEED = 150;

export default function EasterEgg() {
  const [isRevealed, setIsRevealed] = useState(false);
  const [snake, setSnake] = useState<Position[]>(INITIAL_SNAKE);
  const [food, setFood] = useState<Position>({ x: 15, y: 10 });
  const [direction, setDirection] = useState<Direction>(INITIAL_DIRECTION);
  const [gameActive, setGameActive] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  // Konami Code Easter Egg
  useEffect(() => {
    const konamiCode = [
      "ArrowUp",
      "ArrowUp",
      "ArrowDown",
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowLeft",
      "ArrowRight",
    ];
    let currentIndex = 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === konamiCode[currentIndex]) {
        currentIndex++;
        if (currentIndex === konamiCode.length) {
          setIsRevealed(true);
          currentIndex = 0;
        }
      } else {
        currentIndex = 0;
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Generate random food position
  const generateFood = useCallback((currentSnake: Position[]): Position => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE),
      };
    } while (
      currentSnake.some((segment) => segment.x === newFood.x && segment.y === newFood.y)
    );
    return newFood;
  }, []);

  // Handle keyboard controls
  useEffect(() => {
    if (!gameActive) return;

    const handleKeyPress = (e: KeyboardEvent) => {
      e.preventDefault();
      switch (e.key) {
        case "ArrowUp":
          if (direction !== "DOWN") setDirection("UP");
          break;
        case "ArrowDown":
          if (direction !== "UP") setDirection("DOWN");
          break;
        case "ArrowLeft":
          if (direction !== "RIGHT") setDirection("LEFT");
          break;
        case "ArrowRight":
          if (direction !== "LEFT") setDirection("RIGHT");
          break;
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [gameActive, direction]);

  // Game loop
  useEffect(() => {
    if (!gameActive || gameOver) return;

    const gameLoop = setInterval(() => {
      setSnake((prevSnake) => {
        const head = { ...prevSnake[0] };

        // Move head
        switch (direction) {
          case "UP":
            head.y -= 1;
            break;
          case "DOWN":
            head.y += 1;
            break;
          case "LEFT":
            head.x -= 1;
            break;
          case "RIGHT":
            head.x += 1;
            break;
        }

        // Check wall collision
        if (head.x < 0 || head.x >= GRID_SIZE || head.y < 0 || head.y >= GRID_SIZE) {
          setGameOver(true);
          setGameActive(false);
          if (score > highScore) setHighScore(score);
          return prevSnake;
        }

        // Check self collision
        if (prevSnake.some((segment) => segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          setGameActive(false);
          if (score > highScore) setHighScore(score);
          return prevSnake;
        }

        const newSnake = [head, ...prevSnake];

        // Check food collision
        if (head.x === food.x && head.y === food.y) {
          setScore((s) => s + 10);
          setFood(generateFood(newSnake));
          return newSnake; // Grow snake
        }

        // Remove tail
        newSnake.pop();
        return newSnake;
      });
    }, GAME_SPEED);

    return () => clearInterval(gameLoop);
  }, [gameActive, direction, food, score, highScore, generateFood, gameOver]);

  const startGame = () => {
    setSnake(INITIAL_SNAKE);
    setDirection(INITIAL_DIRECTION);
    setFood({ x: 15, y: 10 });
    setScore(0);
    setGameActive(true);
    setGameOver(false);
  };

  const handleDirectionClick = (newDirection: Direction) => {
    if (!gameActive) return;

    if (
      (newDirection === "UP" && direction !== "DOWN") ||
      (newDirection === "DOWN" && direction !== "UP") ||
      (newDirection === "LEFT" && direction !== "RIGHT") ||
      (newDirection === "RIGHT" && direction !== "LEFT")
    ) {
      setDirection(newDirection);
    }
  };

  if (!isRevealed) {
    return (
      <div className="fixed bottom-4 left-4 z-40">
        <button
          onClick={() => setIsRevealed(true)}
          className="w-12 h-12 glass rounded-full flex items-center justify-center hover:glow-box transition-all text-2xl animate-bounce-slow"
          title="Try: ↑↑↓↓←→←→"
        >
          🎮
        </button>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="relative max-w-2xl w-full mx-4">
        {/* Close Button */}
        <button
          onClick={() => setIsRevealed(false)}
          className="absolute -top-4 -right-4 w-10 h-10 glass rounded-full flex items-center justify-center hover:glow-box transition-all z-10"
        >
          ✕
        </button>

        {/* Game Card */}
        <div className="glass rounded-3xl p-8">
          <div className="text-center mb-6">
            <h3 className="text-3xl font-bold gradient-text mb-2">
              🐍 Snake Game!
            </h3>
            <p className="text-gray-400">
              Use arrow keys or buttons to control the snake
            </p>
          </div>

          {/* Score Display */}
          <div className="flex justify-between items-center mb-6">
            <div className="glass rounded-xl px-6 py-3">
              <div className="text-sm text-gray-400 mb-1">Score</div>
              <div className="text-3xl font-bold gradient-text">{score}</div>
            </div>
            <div className="glass rounded-xl px-6 py-3">
              <div className="text-sm text-gray-400 mb-1">High Score</div>
              <div className="text-3xl font-bold text-secondary">
                {highScore}
              </div>
            </div>
          </div>

          {/* Game Board */}
          <div
            className="relative mx-auto mb-6 glass rounded-2xl overflow-hidden"
            style={{
              width: GRID_SIZE * CELL_SIZE,
              height: GRID_SIZE * CELL_SIZE,
              background: "rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* Grid */}
            <div className="absolute inset-0" style={{
              backgroundImage: `
                linear-gradient(rgba(0, 245, 255, 0.05) 1px, transparent 1px),
                linear-gradient(90deg, rgba(0, 245, 255, 0.05) 1px, transparent 1px)
              `,
              backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`,
            }} />

            {/* Snake */}
            {snake.map((segment, index) => (
              <div
                key={index}
                className="absolute transition-all duration-100"
                style={{
                  left: segment.x * CELL_SIZE,
                  top: segment.y * CELL_SIZE,
                  width: CELL_SIZE - 2,
                  height: CELL_SIZE - 2,
                  background: index === 0
                    ? "linear-gradient(135deg, #00f5ff, #ff0080)"
                    : "linear-gradient(135deg, #00f5ff99, #ff008099)",
                  borderRadius: "3px",
                  boxShadow: index === 0 ? "0 0 10px rgba(0, 245, 255, 0.5)" : "none",
                }}
              />
            ))}

            {/* Food */}
            <div
              className="absolute animate-pulse"
              style={{
                left: food.x * CELL_SIZE,
                top: food.y * CELL_SIZE,
                width: CELL_SIZE - 2,
                height: CELL_SIZE - 2,
                background: "linear-gradient(135deg, #ffd700, #ff0080)",
                borderRadius: "50%",
                boxShadow: "0 0 15px rgba(255, 215, 0, 0.7)",
              }}
            />

            {/* Game Over Overlay */}
            {gameOver && (
              <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">💀</div>
                  <div className="text-2xl font-bold gradient-text mb-4">
                    Game Over!
                  </div>
                  <div className="text-gray-400">Score: {score}</div>
                </div>
              </div>
            )}
          </div>

          {/* Controls */}
          {!gameActive ? (
            <button
              onClick={startGame}
              className="w-full py-4 bg-gradient-to-r from-primary to-secondary rounded-xl font-medium text-lg hover:shadow-2xl hover:shadow-primary/50 transition-all magnetic"
            >
              {gameOver ? "Play Again" : "Start Game"}
            </button>
          ) : (
            <div className="grid grid-cols-3 gap-2 max-w-xs mx-auto">
              <div></div>
              <button
                onClick={() => handleDirectionClick("UP")}
                className="glass rounded-lg py-3 hover:glow-box transition-all active:scale-95"
              >
                ⬆️
              </button>
              <div></div>
              <button
                onClick={() => handleDirectionClick("LEFT")}
                className="glass rounded-lg py-3 hover:glow-box transition-all active:scale-95"
              >
                ⬅️
              </button>
              <button
                onClick={() => handleDirectionClick("DOWN")}
                className="glass rounded-lg py-3 hover:glow-box transition-all active:scale-95"
              >
                ⬇️
              </button>
              <button
                onClick={() => handleDirectionClick("RIGHT")}
                className="glass rounded-lg py-3 hover:glow-box transition-all active:scale-95"
              >
                ➡️
              </button>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-6 text-center text-xs text-gray-500">
            <p>🎉 You found the secret game!</p>
            <p>Try: ↑↑↓↓←→←→ for instant access next time</p>
            <p className="mt-2 text-gray-400">
              🎮 Eat the golden orbs 🟡 to grow longer!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
