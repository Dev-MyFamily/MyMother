import React, { useState, useEffect } from 'react';
import { Moon, Sun, Upload, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid } from 'recharts';

interface DataPoint {
  name: number;
  valor: number;
}

const MothersDay: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const data: DataPoint[] = Array.from({ length: 50 }, (_, i) => ({
    name: i,
    valor: Math.pow(i, 2) * 20000
  }));

  const slides: string[] = [
    "/api/placeholder/800/400",
    "/api/placeholder/800/400",
    "/api/placeholder/800/400"
  ];

  const graphBgColor = darkMode ? '#1f2937' : '#ffffff';
  const textColor = darkMode ? '#e5e7eb' : '#374151';

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedImage(URL.createObjectURL(file));
    }
  };

return (
    <div className={`min-h-screen transition-colors duration-300 ${
      darkMode ? 'bg-gradient-to-b from-gray-900 to-gray-800' : 'bg-gradient-to-b from-pink-50 to-white'
    }`}>
      {/* Container principal com máxima largura para diferentes dispositivos */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header com navegação e toggle de tema */}
        <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-opacity-80 border-b border-pink-100 dark:border-gray-700">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center space-x-2">
                <Heart className="text-pink-500" fill="currentColor" />
                <span className={`font-dancing-script text-xl ${
                  darkMode ? 'text-pink-300' : 'text-gray-800'
                }`}>Para Minha Mãe</span>
              </div>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`p-3 rounded-full transition-all duration-300 ${
                  darkMode 
                    ? 'bg-yellow-400 hover:bg-yellow-300' 
                    : 'bg-gray-800 text-white hover:bg-gray-700'
                }`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </header>

        {/* Conteúdo principal com padding para o header fixo */}
        <main className="pt-24 pb-12">
          {/* Título principal animado */}
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="font-dancing-script text-5xl md:text-6xl lg:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-rose-500">
              Feliz Dia, Mãe!
            </h1>
            <Heart className="inline-block text-red-500 animate-pulse" fill="red" size={32} />
          </div>

          {/* Cards com mensagens */}
          <div className="space-y-8">
            {/* Primeira mensagem */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform hover:scale-[1.02] transition-all">
              <p className="font-merriweather text-lg md:text-xl text-center leading-relaxed">
                Mãe, você é a mulher que eu mais admiro no mundo! 🌟 Reconheço todo seu esforço em sempre nos dar o melhor, 
                mesmo quando parece impossível, é isso que te faz tão especial!❤️‍🔥 
                Às vezes você é até um pouquinho "irresponsável" 😝
              </p>
            </div>

            {/* Área de upload de foto */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <label className="cursor-pointer block">
                <div className={`border-3 border-dashed rounded-xl p-8 text-center transition-all ${
                  darkMode ? 'border-pink-400 hover:border-pink-300' : 'border-pink-300 hover:border-pink-400'
                }`}>
                  <Upload className="mx-auto mb-4 text-pink-500" size={32} />
                  <p className="font-merriweather text-lg">Clique para adicionar uma foto especial</p>
                  <input
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImageUpload}
                  />
                </div>
              </label>
              {selectedImage && (
                <div className="mt-6">
                  <img 
                    src={selectedImage} 
                    alt="Foto carregada" 
                    className="max-w-full h-auto rounded-xl shadow-lg mx-auto"
                  />
                </div>
              )}
            </div>

            {/* Segunda mensagem */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <p className="font-merriweather text-lg md:text-xl text-center leading-relaxed">
                Você é a mãe dos meus sonhos 💭, e eu não poderia ter sido mais abençoado que isso. 
                Neste seu dia, quero que saiba o quanto você é maravilhosa e o quanto eu te amo! 🎉🎂
              </p>
            </div>

            {/* Gráfico animado */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
            <h3 className="font-dancing-script text-2xl text-center mb-6">
              Gráfico do Meu Amor Por Você ❤️
            </h3>
            <div className="overflow-x-auto">
              <LineChart 
                width={600} 
                height={300} 
                data={data}
                margin={{ top: 5, right: 30, left: 60, bottom: 20 }}
                style={{ background: graphBgColor }}
              >
                <CartesianGrid stroke={darkMode ? '#374151' : '#e5e7eb'} />
                <XAxis 
                  dataKey="name" 
                  stroke={textColor}
                  tick={{ fill: textColor }}
                  label={{ 
                    value: 'Tempo', 
                    position: 'bottom',
                    fill: textColor,
                    offset: 10
                  }}
                />
                <YAxis 
                  stroke={textColor}
                  tick={{ fill: textColor }}
                  label={{
                    value: 'Amor ❤️', 
                    angle: -90,
                    position: 'insideLeft',
                    fill: textColor,
                    offset: -45,
                    style: {
                      textAnchor: 'middle'
                    }
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="valor" 
                  stroke="#ec4899"
                  strokeWidth={3}
                  dot={false}
                  animationDuration={600}
                />
              </LineChart>
            </div>
          </div>

            {/* Terceira mensagem */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
              <p className="font-merriweather text-lg md:text-xl text-center leading-relaxed">
                Obrigado por ser essa mãe incrível, por todo seu amor e dedicação. 
                Você é meu maior presente, minha inspiração, e meu porto seguro. 
                Feliz aniversário🥳, Te amo mãe! Que seu dia seja tão especial quanto você é para mim. 
                Saiba sempre disso👊🏽🔥
              </p>
            </div>

            {/* Carrossel de fotos */}
            <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-4">
              <div className="relative overflow-hidden rounded-xl">
                <img
                  src={slides[currentSlide]}
                  alt={`Slide ${currentSlide + 1}`}
                  className="w-full h-[400px] object-cover transition-opacity duration-500"
                />
                {/* Controles do carrossel */}
                <button 
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full"
                  onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                >
                  <ChevronLeft className="text-pink-500" />
                </button>
                <button 
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 dark:bg-gray-800/80 p-2 rounded-full"
                  onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
                >
                  <ChevronRight className="text-pink-500" />
                </button>
                {/* Indicadores */}
                <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all ${
                        currentSlide === index 
                          ? 'bg-pink-500 w-6' 
                          : 'bg-gray-300 hover:bg-pink-300'
                      }`}
                      onClick={() => setCurrentSlide(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="text-center py-8 border-t border-pink-100 dark:border-gray-700">
          <p className={`font-dancing-script text-lg ${
            darkMode ? 'text-pink-300' : 'text-gray-800'
          }`}>
            Feito com ❤️ para a melhor mãe do mundo
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MothersDay;
