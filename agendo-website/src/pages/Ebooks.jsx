import React, { useState } from 'react';
import { Download, ShieldCheck } from 'lucide-react';

export default function Ebooks() {
  const [selectedEbook, setSelectedEbook] = useState(null);

  const ebooks = [
    {
      id: 1,
      title: 'Gestão de OSC na Prática: Guia de Boas Práticas e Conformidade com o MROSC',
      description: 'Guia completo com os 12 erros mais comuns na execução de parcerias com o setor público, boas práticas de gestão financeira, documentação e conformidade. Inclui questionário interativo de diagnóstico.',
      author: 'AGENDO Consultoria',
      price: 29.90,
      pages: 22,
      category: 'Organizações da Sociedade Civil',
      highlights: ['Lei 13.019/2014 (MROSC) na prática', '3 fundamentos de gestão eficaz', '12 erros comuns com exemplos reais', 'Questionário de autoavaliação + diagnóstico'],
      coverBg: 'bg-gradient-to-br from-green-700 via-green-600 to-emerald-500',
      coverTitle: 'Gestão de OSC na Prática'
    },
    {
      id: 2,
      title: 'Guia Completo de Emendas Parlamentares 2026',
      description: 'Entenda como funciona o processo de captação, aprovação e execução de emendas parlamentares. Legislação atualizada, casos práticos e checklist de conformidade para OSCs.',
      author: 'AGENDO Consultoria',
      price: 29.90,
      pages: 48,
      category: 'Emendas Parlamentares',
      highlights: ['Legislação atualizada 2026', 'Passo a passo de captação', 'Modelos de documentação', 'Casos de sucesso reais'],
      coverBg: 'bg-gradient-to-br from-blue-70
