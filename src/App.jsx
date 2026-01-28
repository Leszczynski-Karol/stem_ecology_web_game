import React, { useState, useEffect } from 'react';

const App = () => {
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [energy, setEnergy] = useState(50);
  const [currentItem, setCurrentItem] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [gameStats, setGameStats] = useState({ correct: 0, total: 0 });
  const [draggedOver, setDraggedOver] = useState(null);
  const [achievements, setAchievements] = useState([]);
  const [language, setLanguage] = useState('en');
  const [isItemLocked, setIsItemLocked] = useState(false);

  useEffect(() => {
    const savedLang = localStorage.getItem('ecoSortLanguage');
    if (savedLang) {
      setLanguage(savedLang);
    }
  }, []);

  const translations = {
    en: {
      title: "EcoSort Challenge",
      subtitle: "Sort wisely to protect our planet!",
      score: "Score",
      streak: "Streak",
      accuracy: "Accuracy",
      sortThis: "SORT THIS ITEM:",
      dragHint: "👆 Drag to correct bin",
      howToPlay: "🎮 How to Play:",
      rule1: "Drag items to correct bin",
      rule2: "Build streak for bonus",
      rule3: "Correct = green energy",
      rule4: "Learn eco-facts",
      rule5: "Unlock achievements!",
      correct: "Correct!",
      incorrect: "Oops!",
      thisGoesIn: "This goes in",
      didYouKnow: "💡 Did you know?",
      bins: {
        paper: "Paper",
        plastic: "Plastic",
        glass: "Glass",
        bio: "Bio",
        general: "General"
      }
    },
    pl: {
      title: "EcoSort Challenge",
      subtitle: "Sortuj mądrze!",
      score: "Punkty",
      streak: "Seria",
      accuracy: "Celność",
      sortThis: "POSORTUJ:",
      dragHint: "👆 Przeciągnij",
      howToPlay: "🎮 Jak grać:",
      rule1: "Przeciągaj do kosza",
      rule2: "Seria = bonus",
      rule3: "Poprawne = energia",
      rule4: "Ucz się faktów",
      rule5: "Odblokuj osiągnięcia!",
      correct: "Dobrze!",
      incorrect: "Ups!",
      thisGoesIn: "To idzie do",
      didYouKnow: "💡 Wiesz, że?",
      bins: {
        paper: "Papier",
        plastic: "Plastik",
        glass: "Szkło",
        bio: "Bio",
        general: "Zmieszane"
      }
    },
    ro: {
      title: "EcoSort Challenge",
      subtitle: "Sortează cu cap!",
      score: "Scor",
      streak: "Serie",
      accuracy: "Precizie",
      sortThis: "SORTEAZĂ:",
      dragHint: "👆 Trage",
      howToPlay: "🎮 Cum se joacă:",
      rule1: "Trage la coș",
      rule2: "Serie = bonus",
      rule3: "Corect = energie",
      rule4: "Învață fapte",
      rule5: "Deblochează!",
      correct: "Corect!",
      incorrect: "Hopa!",
      thisGoesIn: "Merge în",
      didYouKnow: "💡 Știai?",
      bins: {
        paper: "Hârtie",
        plastic: "Plastic",
        glass: "Sticlă",
        bio: "Bio",
        general: "General"
      }
    },
    tr: {
      title: "EcoSort Challenge",
      subtitle: "Akıllıca ayır!",
      score: "Puan",
      streak: "Seri",
      accuracy: "Doğruluk",
      sortThis: "AYIR:",
      dragHint: "👆 Sürükle",
      howToPlay: "🎮 Nasıl:",
      rule1: "Çöp kutusuna sürükle",
      rule2: "Seri = bonus",
      rule3: "Doğru = enerji",
      rule4: "Bilgi öğren",
      rule5: "Kilidi aç!",
      correct: "Doğru!",
      incorrect: "Hay aksi!",
      thisGoesIn: "Bu gider",
      didYouKnow: "💡 Biliyor muydun?",
      bins: {
        paper: "Kağıt",
        plastic: "Plastik",
        glass: "Cam",
        bio: "Biyo",
        general: "Genel"
      }
    },
    be: {
      title: "EcoSort Challenge",
      subtitle: "Sorteer slim!",
      score: "Score",
      streak: "Reeks",
      accuracy: "Nauwkeurig",
      sortThis: "SORTEER:",
      dragHint: "👆 Sleep",
      howToPlay: "🎮 Speluitleg:",
      rule1: "Sleep naar bak",
      rule2: "Reeks = bonus",
      rule3: "Correct = energie",
      rule4: "Leer feiten",
      rule5: "Ontgrendel!",
      correct: "Correct!",
      incorrect: "Oeps!",
      thisGoesIn: "Dit gaat in",
      didYouKnow: "💡 Wist je?",
      bins: {
        paper: "Papier",
        plastic: "Plastic",
        glass: "Glas",
        bio: "GFT",
        general: "Rest"
      }
    }
  };

  const t = translations[language];

  const flags = [
    { code: 'en', flag: '🇬🇧' },
    { code: 'pl', flag: '🇵🇱' },
    { code: 'ro', flag: '🇷🇴' },
    { code: 'tr', flag: '🇹🇷' },
    { code: 'be', flag: '🇧🇪' }
  ];

  const bins = [
    { 
      id: 'paper', 
      name: 'Paper',
      gradient: 'from-blue-400 to-blue-600',
      shadow: 'shadow-blue-500/50',
      ring: 'ring-blue-400',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 576 512">
          <path d="M128 160v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V160H128zm-32 0H32c-17.7 0-32 14.3-32 32v288c0 17.7 14.3 32 32 32h64c17.7 0 32-14.3 32-32V160zm448 32v288c0 17.7-14.3 32-32 32h-64c-17.7 0-32-14.3-32-32V192h128z"/>
        </svg>
      )
    },
    { 
      id: 'plastic', 
      name: 'Plastic',
      gradient: 'from-yellow-400 to-yellow-600',
      shadow: 'shadow-yellow-500/50',
      ring: 'ring-yellow-400',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 384 512">
          <path d="M368 448H16c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-16-288V64c0-17.7-14.3-32-32-32H64C46.3 32 32 46.3 32 64v96h320zm32 32H32c-17.7 0-32 14.3-32 32v160c0 17.7 14.3 32 32 32h352c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32z"/>
        </svg>
      )
    },
    { 
      id: 'glass', 
      name: 'Glass',
      gradient: 'from-green-400 to-green-600',
      shadow: 'shadow-green-500/50',
      ring: 'ring-green-400',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 384 512">
          <path d="M352 0H32C14.3 0 0 14.3 0 32v448c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zm-32 464H64V48h256v416zM96 224h192c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16zm0 96h192c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16H96c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16z"/>
        </svg>
      )
    },
    { 
      id: 'bio', 
      name: 'Bio',
      gradient: 'from-amber-700 to-amber-900',
      shadow: 'shadow-amber-500/50',
      ring: 'ring-amber-400',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 448 512">
          <path d="M416 0H32C14.3 0 0 14.3 0 32v448c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V32c0-17.7-14.3-32-32-32zM224 464c-88.4 0-160-71.6-160-160s71.6-160 160-160 160 71.6 160 160-71.6 160-160 160zm0-288c-17.7 0-32 14.3-32 32s14.3 32 32 32 32-14.3 32-32-14.3-32-32-32z"/>
        </svg>
      )
    },
    { 
      id: 'general', 
      name: 'General',
      gradient: 'from-gray-600 to-gray-800',
      shadow: 'shadow-gray-500/50',
      ring: 'ring-gray-400',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 448 512">
          <path d="M32 464C32 490.5 53.5 512 80 512h288c26.5 0 48-21.5 48-48V128H32V464zM304 208C304 199.1 311.1 192 320 192s16 7.125 16 16v96c0 8.875-7.125 16-16 16s-16-7.125-16-16V208zM192 208C192 199.1 199.1 192 208 192s16 7.125 16 16v96c0 8.875-7.125 16-16 16s-16-7.125-16-16V208zM80 208C80 199.1 87.13 192 96 192s16 7.125 16 16v96c0 8.875-7.125 16-16 16s-16-7.125-16-16V208zM432 32H320l-11.58-23.16C305.7 3.424 300.2 0 294.1 0H153.9C147.8 0 142.3 3.424 139.6 8.844L128 32H16C7.125 32 0 39.13 0 48v32C0 88.88 7.125 96 16 96h416C440.9 96 448 88.88 448 80v-32C448 39.13 440.9 32 432 32z"/>
        </svg>
      )
    }
  ];

  const items = {
    en: [
      { name: 'Newspaper', correctBin: 'paper', fact: 'Recycling paper saves trees and water!' },
      { name: 'Plastic Bottle', correctBin: 'plastic', fact: 'Plastic bottles can become new items!' },
      { name: 'Glass Bottle', correctBin: 'glass', fact: 'Glass recycles infinitely!' },
      { name: 'Apple Core', correctBin: 'bio', fact: 'Food scraps make compost!' },
      { name: 'Used Tissue', correctBin: 'general', fact: 'Used tissues cannot be recycled.' },
    ],
    pl: [
      { name: 'Gazeta', correctBin: 'paper', fact: 'Recykling papieru oszczędza drzewa!' },
      { name: 'Butelka', correctBin: 'plastic', fact: 'Plastik można przerobić!' },
      { name: 'Szkło', correctBin: 'glass', fact: 'Szkło recyklinguje się!' },
      { name: 'Ogryzek', correctBin: 'bio', fact: 'Resztki to kompost!' },
      { name: 'Chusteczka', correctBin: 'general', fact: 'Brudne nie do recyklingu.' },
    ],
    ro: [
      { name: 'Ziar', correctBin: 'paper', fact: 'Reciclarea salvează copaci!' },
      { name: 'Sticlă', correctBin: 'plastic', fact: 'Plasticul se reciclează!' },
      { name: 'Sticlă', correctBin: 'glass', fact: 'Sticla e reciclabilă!' },
      { name: 'Măr', correctBin: 'bio', fact: 'Resturi = compost!' },
      { name: 'Șervețel', correctBin: 'general', fact: 'Uzate nu se reciclează.' },
    ],
    tr: [
      { name: 'Gazete', correctBin: 'paper', fact: 'Kağıt geri dönüşümü!' },
      { name: 'Şişe', correctBin: 'plastic', fact: 'Plastik geri dönüşür!' },
      { name: 'Cam', correctBin: 'glass', fact: 'Cam sonsuz!' },
      { name: 'Elma', correctBin: 'bio', fact: 'Yiyecek kompost!' },
      { name: 'Mendil', correctBin: 'general', fact: 'Kullanılmış yok.' },
    ],
    be: [
      { name: 'Krant', correctBin: 'paper', fact: 'Papier recyclen bespaart!' },
      { name: 'Fles', correctBin: 'plastic', fact: 'Plastic recycleert!' },
      { name: 'Glas', correctBin: 'glass', fact: 'Glas oneindig!' },
      { name: 'Appel', correctBin: 'bio', fact: 'Eten = compost!' },
      { name: 'Tissue', correctBin: 'general', fact: 'Gebruikt kan niet.' },
    ]
  };

  const itemIcons = {
    'Newspaper': (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 512 512">
        <path d="M480 32H32C14.33 32 0 46.33 0 64v384c0 17.67 14.33 32 32 32h448c17.67 0 32-14.33 32-32V64c0-17.67-14.33-32-32-32zm-352 96c0 17.67-14.33 32-32 32s-32-14.33-32-32 14.33-32 32-32 32 14.33 32 32zm96 0c0 17.67-14.33 32-32 32s-32-14.33-32-32 14.33-32 32-32 32 14.33 32 32zm96 0c0 17.67-14.33 32-32 32s-32-14.33-32-32 14.33-32 32-32 32 14.33 32 32zm-224 96h320v224H96V224zm0-64v-32h320v32H96z"/>
      </svg>
    ),
    'Plastic Bottle': (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 320 512">
        <path d="M296 464H24c-13.255 0-24 10.745-24 24s10.745 24 24 24h272c13.255 0 24-10.745 24-24s-10.745-24-24-24zm-8-376V80c0-44.112-35.888-80-80-80h-16C147.888 0 112 35.888 112 80v8H96c-35.29 0-64 28.71-64 64v272c0 35.29 28.71 64 64 64h128c35.29 0 64-28.71 64-64V152c0-35.29-28.71-64-64-64zm-160 8c0-13.255 10.745-24 24-24h80c13.255 0 24 10.745 24 24v8H128V96zm160 328c0 17.645-14.355 32-32 32H96c-17.645 0-32-14.355-32-32V152c0-17.645 14.355-32 32-32h128c17.645 0 32 14.355 32 32v272z"/>
      </svg>
    ),
    'Glass Bottle': (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 384 512">
        <path d="M352 0H32C14.33 0 0 14.33 0 32v448c0 17.67 14.33 32 32 32h320c17.67 0 32-14.33 32-32V32c0-17.67-14.33-32-32-32zm-32 464H64V48h256v416zM224 128c-8.84 0-16 7.16-16 16v192c0 8.84 7.16 16 16 16s16-7.16 16-16V144c0-8.84-7.16-16-16-16z"/>
      </svg>
    ),
    'Apple Core': (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 448 512">
        <path d="M368 144c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm-208 0c26.5 0 48-21.5 48-48s-21.5-48-48-48-48 21.5-48 48 21.5 48 48 48zm104 272c-66.2 0-120-53.8-120-120 0-66.2 53.8-120 120-120s120 53.8 120 120c0 66.2-53.8 120-120 120zm0-208c-48.5 0-88 39.5-88 88s39.5 88 88 88 88-39.5 88-88-39.5-88-88-88z"/>
      </svg>
    ),
    'Used Tissue': (
      <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 640 512">
        <path d="M633.82 458.1L494.97 350.78c.52-5.57 1.03-11.16 1.03-16.87 0-111.75-99.79-153.34-146.78-311.82-7.94-28.78-49.44-30.12-58.44 0-15.52 52.34-36.87 91.96-58.49 125.68L45.47 3.37C38.49-2.05 28.43-.8 23.01 6.18L3.37 31.45C-2.05 38.42-.8 48.47 6.18 53.9l588.36 454.73c6.98 5.43 17.03 4.17 22.46-2.81l19.64-25.27c5.41-6.97 4.16-17.02-2.82-22.45zM144 333.91C144 432.35 222.72 512 320 512c44.71 0 85.37-16.96 116.4-44.7L162.72 255.78c-11.41 23.5-18.72 48.35-18.72 78.13z"/>
      </svg>
    )
  };

  const animalFacts = {
    en: ['🐢 Plastic harms sea turtles and marine life!'],
    pl: ['🐢 Plastik szkodzi żółwiom morskim!'],
    ro: ['🐢 Plasticul leze țestoasele marine!'],
    tr: ['🐢 Plastik deniz kaplumbağalarına zarar!'],
    be: ['🐢 Plastic schaadt zeeschildpadden!']
  };

  useEffect(() => {
    getNewItem();
  }, [language]);

  useEffect(() => {
    if (streak === 5 && !achievements.includes('streak5')) {
      setAchievements([...achievements, 'streak5']);
      showAchievement('🔥 5 in a row!');
    }
  }, [streak, gameStats, achievements]);

  const showAchievement = (message) => {
    setFeedback({ type: 'achievement', message });
    setTimeout(() => setFeedback(null), 2000);
  };

  const getNewItem = () => {
    const langItems = items[language] || items.en;
    const randomItem = langItems[Math.floor(Math.random() * langItems.length)];
    setCurrentItem(randomItem);
    setFeedback(null);
    setIsItemLocked(false);
  };

  const handleLanguageChange = (langCode) => {
    setLanguage(langCode);
    localStorage.setItem('ecoSortLanguage', langCode);
  };

  const handleDragStart = (e) => {
    if (isItemLocked) {
      e.preventDefault();
      return;
    }
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e, binId) => {
    e.preventDefault();
    if (!isItemLocked) {
      setDraggedOver(binId);
    }
  };

  const handleDragLeave = () => {
    setDraggedOver(null);
  };

  const handleDrop = (e, binId) => {
    e.preventDefault();
    setDraggedOver(null);
    if (!isItemLocked) {
      checkAnswer(binId);
    }
  };

  const checkAnswer = (binId) => {
    setIsItemLocked(true);
    const isCorrect = binId === currentItem.correctBin;
    const newTotal = gameStats.total + 1;
    
    if (isCorrect) {
      const points = 10 + (streak * 2);
      setScore(score + points);
      setStreak(streak + 1);
      setEnergy(Math.min(100, energy + 5));
      setGameStats({ correct: gameStats.correct + 1, total: newTotal });
      
      const langAnimalFacts = animalFacts[language] || animalFacts.en;
      const randomAnimalFact = langAnimalFacts[Math.floor(Math.random() * langAnimalFacts.length)];
      setFeedback({
        type: 'correct',
        message: `${t.correct} +${points}`,
        fact: currentItem.fact,
      });

      setTimeout(() => {
        getNewItem();
      }, 2500);
    } else {
      setStreak(0);
      setEnergy(Math.max(0, energy - 10));
      setGameStats({ ...gameStats, total: newTotal });
      
      const correctBin = bins.find(b => b.id === currentItem.correctBin);
      setFeedback({
        type: 'incorrect',
        message: `${t.incorrect} ${t.thisGoesIn} ${t.bins[correctBin.id]}`,
      });

      setTimeout(() => {
        setFeedback(null);
        setIsItemLocked(false);
      }, 1500);
    }
  };

  const accuracy = gameStats.total > 0 ? Math.round((gameStats.correct / gameStats.total) * 100) : 0;

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-emerald-100 via-teal-50 to-cyan-100 overflow-auto p-2 md:p-4">
      <div className="max-w-6xl mx-auto h-full flex flex-col">
        
        {/* Language Flags */}
        <div className="flex justify-center gap-2 mb-3">
          {flags.map((flag) => (
            <button
              key={flag.code}
              onClick={() => handleLanguageChange(flag.code)}
              className={`text-3xl transition-all ${language === flag.code ? 'scale-110 ring-2 ring-yellow-400 rounded-full' : 'opacity-60 hover:opacity-100'}`}
              title={flag.code.toUpperCase()}
            >
              {flag.flag}
            </button>
          ))}
        </div>

        {/* Header */}
        <div className="text-center mb-4">
          <h1 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600 mb-1">
            {t.title}
          </h1>
          <p className="text-gray-700 text-sm font-medium">🌍 {t.subtitle}</p>
        </div>

        {/* Stats Dashboard */}
        <div className="grid grid-cols-4 gap-2 mb-4">
          <div className="bg-gradient-to-br from-blue-500 to-blue-700 rounded-xl shadow-lg p-3 text-center text-white">
            <div className="text-xl font-black">{score}</div>
            <div className="text-xs opacity-90">{t.score}</div>
          </div>
          <div className="bg-gradient-to-br from-orange-500 to-red-600 rounded-xl shadow-lg p-3 text-center text-white">
            <div className="text-xl font-black">{streak}🔥</div>
            <div className="text-xs opacity-90">{t.streak}</div>
          </div>
          <div className="bg-gradient-to-br from-green-500 to-emerald-700 rounded-xl shadow-lg p-3 text-center text-white">
            <div className="text-xl font-black">{accuracy}%</div>
            <div className="text-xs opacity-90">{t.accuracy}</div>
          </div>
          <div className="bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl shadow-lg p-3">
            <div className="flex items-center justify-between mb-1">
              <svg className="w-4 h-4 text-yellow-300" fill="currentColor" viewBox="0 0 384 512">
                <path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z"/>
              </svg>
              <span className="text-xs font-bold text-white">{energy}%</span>
            </div>
            <div className="w-full bg-white/30 rounded-full h-2 overflow-hidden">
              <div 
                className="bg-gradient-to-r from-yellow-300 to-green-400 h-2 rounded-full transition-all duration-500"
                style={{ width: `${energy}%` }}
              />
            </div>
          </div>
        </div>

        {/* Current Item */}
        {currentItem && (
          <div className="bg-white rounded-xl shadow-lg p-4 mb-4 text-center border-2 border-teal-200 flex-1 max-h-40 flex flex-col justify-center">
            <div className="mb-2">
              <div className="text-xs font-bold text-teal-600 mb-2">{t.sortThis}</div>
              <div 
                draggable={!isItemLocked}
                onDragStart={handleDragStart}
                className={`inline-block ${isItemLocked ? 'cursor-not-allowed opacity-50' : 'cursor-move hover:opacity-90 transition-opacity'}`}
              >
                <div className="mb-2 text-blue-600">
                  {itemIcons[currentItem.name.split(' ')[0]] || (
                    <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 512 512">
                      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z"/>
                    </svg>
                  )}
                </div>
                <div className="text-lg font-black text-gray-800">{currentItem.name}</div>
              </div>
              <div className="text-xs text-gray-600 mt-2">{t.dragHint}</div>
            </div>
          </div>
        )}

        {/* Bins */}
        <div className="grid grid-cols-5 gap-2 mb-4 flex-1">
          {bins.map((bin) => {
            const isDraggedOver = draggedOver === bin.id;
            
            return (
              <div
                key={bin.id}
                onDragOver={(e) => handleDragOver(e, bin.id)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, bin.id)}
                className={`bg-gradient-to-br ${bin.gradient} ${isDraggedOver ? `scale-105 ring-4 ${bin.ring}` : ''} rounded-xl p-3 text-white text-center transform transition-all duration-200 border-2 border-white/30 flex flex-col justify-center items-center`}
              >
                <div className="text-white mb-1">
                  {bin.icon}
                </div>
                <div className="font-bold text-xs leading-tight">{t.bins[bin.id]}</div>
              </div>
            );
          })}
        </div>

        {/* How to Play */}
        <div className="bg-white rounded-xl shadow-lg p-3 mb-2 border-2 border-teal-200">
          <h3 className="font-bold text-sm mb-2 text-teal-700">{t.howToPlay}</h3>
          <ul className="text-gray-700 text-xs space-y-1">
            <li className="flex items-center gap-1">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 448 512">
                <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
              </svg>
              {t.rule1}
            </li>
            <li className="flex items-center gap-1">
              <svg className="w-4 h-4 text-orange-500" fill="currentColor" viewBox="0 0 448 512">
                <path d="M349.4 44.6c5.9-13.7 1.5-29.7-10.6-38.5s-28.6-8-39.9 1.8l-256 224c-10 8.8-13.6 22.9-8.9 35.3S50.7 288 64 288H175.5L98.6 467.4c-5.9 13.7-1.5 29.7 10.6 38.5s28.6 8 39.9-1.8l256-224c10-8.8 13.6-22.9 8.9-35.3s-16.6-20.7-30-20.7H272.5L349.4 44.6z"/>
              </svg>
              {t.rule2}
            </li>
            <li className="flex items-center gap-1">
              <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 384 512">
                <path d="M0 256L28.5 28c2-16 15.6-28 31.8-28H228.9c15 0 27.1 12.1 27.1 27.1c0 3.2-.6 6.5-1.7 9.5L208 160H347.3c20.2 0 36.7 16.4 36.7 36.7c0 7.4-2.2 14.6-6.4 20.7l-192.2 281c-5.9 8.6-15.6 13.7-25.9 13.7h-2.9c-15.7 0-28.5-12.8-28.5-28.5c0-2.3 .3-4.6 .9-6.9L176 288H32c-17.7 0-32-14.3-32-32z"/>
              </svg>
              {t.rule3}
            </li>
            <li className="flex items-center gap-1">
              <svg className="w-4 h-4 text-purple-500" fill="currentColor" viewBox="0 0 512 512">
                <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z"/>
              </svg>
              {t.rule4}
            </li>
            <li className="flex items-center gap-1">
              <svg className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 576 512">
                <path d="M400 0H176c-26.5 0-48.1 21.8-48 48.2.2 17.6-10.1 33.3-25.8 40.2L112 96 0 416h576L464 96l-41.1-7.6C406.2 81.2 396.1 65 396.2 48c-.1-26.6-21.9-48-48-48zM64 224l13.2-32 42.8 32H64zm154.9 128L224 320l5.1-32-96-32 32 64-42.8 32h97.6zm72.5-20.3c-6.7 2-15.5-2.4-13.9-10.7 4-20.1 6.4-43.9 4.3-69.1-1.5 24.7-5.8 46.5-12.8 65.7-2 5.5-8.3 9.3-14.3 6.8-11.8-4.9-22.5-14.4-32.1-27.1 9.6 26.7 22.7 46.6 38.3 58.3 16.7 12.4 36.6 17.5 57.9 11.6 21.8-6 36.8-20.4 43.5-41.5 2.2-6.9-3.8-13.6-10.9-12-17.3 3.8-37.3-1.3-51.9-15.9 14.6 19.1 36.9 26.3 60.9 22.5 12.6-2 24.1-7.6 34.1-15.8-10 8.2-21.4 13.8-34 15.8-23.9 3.8-46.3-3.4-60.9-22.5 14.6 14.6 34.6 19.7 51.9 15.9 7.1-1.6 13.1 5.1 10.9 12-6.7 21.1-21.7 35.5-43.5 41.5-21.3 5.9-41.2.8-57.9-11.6-15.6-11.7-28.7-31.6-38.3-58.3 9.6 12.7 20.3 22.2 32.1 27.1 6 2.5 12.3-1.3 14.3-6.8 7-19.2 11.3-41 12.8-65.7-2.1 25.2.3 49 4.3 69.1 1.6 8.3-7.2 12.7-13.9 10.7zM512 224h-56l42.8-32L512 224zm-78.1 128l-42.8-32 32-64-96 32 5.1 32-5.1 32h106.9z"/>
              </svg>
              {t.rule5}
            </li>
          </ul>
        </div>

        {/* Copyright Footer */}
        <div className="text-center text-gray-600 text-xs py-2 border-t border-gray-300 mt-2">
          <p>© STEM in the Museum <br></br> Game creators: <br></br> <a href="https://leszczynski-karol.github.io/">Karol Leszczyński</a> & <a href="#">Patryk Widło</a> & <a href="#">Jakub Niedźwiecki</a></p>
        </div>
      </div>

      {/* Feedback Overlay */}
      {feedback && (
        <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 p-4">
          <div className={`max-w-xs w-full rounded-xl shadow-lg p-6 border-4 ${
            feedback.type === 'correct' ? 'bg-gradient-to-br from-green-50 to-green-200 border-green-400' :
            feedback.type === 'achievement' ? 'bg-gradient-to-br from-yellow-50 to-yellow-200 border-yellow-400' :
            'bg-gradient-to-br from-red-50 to-red-200 border-red-400'
          }`}>
            <div className={`text-2xl font-black mb-3 text-center ${
              feedback.type === 'correct' ? 'text-green-700' :
              feedback.type === 'achievement' ? 'text-yellow-700' :
              'text-red-700'
            }`}>
              {feedback.message}
            </div>
            {feedback.fact && (
              <div className="bg-white rounded-lg p-3 mb-3 border-2 border-gray-200">
                <div className="flex items-center gap-2 mb-2">
                  <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256 256-114.6 256-256S397.4 0 256 0zm0 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208-93.3 208-208 208z"/>
                    <path d="M277.3 128h-42.7v42.67h42.7V128zm0 64h-42.7v149.3h42.7V192z"/>
                  </svg>
                  <div className="font-bold text-gray-800 text-sm">{t.didYouKnow}</div>
                </div>
                <div className="text-gray-700 text-xs">{feedback.fact}</div>
              </div>
            )}
            {feedback.animalFact && (
              <div className="bg-white rounded-lg p-3 border-2 border-pink-300">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-pink-500" fill="currentColor" viewBox="0 0 512 512">
                    <path d="M462.3 62.6C407.5 15.9 326 24.3 275.7 76.2L256 96.5l-19.7-20.3C186.1 24.3 104.5 15.9 49.7 62.6c-62.8 53.6-66.1 149.8-9.9 207.9l193.5 199.8c12.5 12.9 32.8 12.9 45.3 0l193.5-199.8c56.3-58.1 53-154.3-9.8-207.9z"/>
                  </svg>
                  <div className="text-gray-800 text-xs font-medium">{feedback.animalFact}</div>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;