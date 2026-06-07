import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Servicos from './pages/Servicos';
import ServicoDetail from './pages/ServicoDetail';
import Produtos from './pages/Produtos';
import Ebooks from './pages/Ebooks';
import Sobre from './pages/Sobre';
import Contato from './pages/Contato';
import './App.css';

export default function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="hidden lg:block w-64 bg-blue-800 text-white fixed left-0 top-0 h-screen">
        <div className="p-6 space-y-4">
          <div className="s
          
