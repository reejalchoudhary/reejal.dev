import { useEffect, useState } from "react";

export function Footer() {
  const funnyLines = [
    "Ctrl + C, V is my love language ❤️",
    "Life set ho na ho, navbar perfectly responsive hona chahiye 💋",
    "Bug fix karte karte developer ban gaya 😭",
    "Coffee peeyo, bugs bhagao ☕",
    "Kisi din code yahin reh jayega aur main push ho jaunga 🚀",
    "Ek bug fix karo toh 4 naye bugs placement lene aa jaate hain 😒",
    "Kal assignment submit karni hai aur main abhi footer animate kar raha hu 🤡",
    "Div center ho gaya, life nahi 😔"
  ];

  const [currentLine, setCurrentLine] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentLine((prev) => (prev + 1) % funnyLines.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="relative border-t border-white/5 bg-transparent overflow-hidden">

      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-pink-500/5 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 py-5 relative z-10">

        <div className="flex flex-col items-center justify-center text-center gap-2">

          <p className="text-sm sm:text-base text-gray-300 transition-all duration-500">
            {funnyLines[currentLine]}
          </p>

          <p className="text-[10px] sm:text-xs text-gray-500">
            © 2026 Reejal Choudhary • Built with React, fixed with Stack Overflow🥴
          </p>

        </div>

      </div>
    </footer>
  );
}