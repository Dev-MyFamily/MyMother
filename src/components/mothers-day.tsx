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

  // Resto do seu código permanece o mesmo, apenas com as tipagens adequadas
  return (
    // ... seu JSX permanece o mesmo
  );
};

export default MothersDay;