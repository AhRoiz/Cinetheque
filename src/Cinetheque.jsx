import React, { useState, useEffect, useLayoutEffect } from 'react';
import { journalEntries } from './data/store';
import Dashboard from './views/Dashboard';
import FilmDetail from './views/FilmDetail';
import TagExplorer from './views/TagExplorer';
import Profile from './views/Profile';

export default function FilmJournalApp() {
  const [activeFilm, setActiveFilm] = useState(null);
  const [activeTag, setActiveTag] = useState(null); 
  const [showProfile, setShowProfile] = useState(false);
  
  // ---  (LIFTED STATE) ---
  const [activeCategory, setActiveCategory] = useState('film'); 
  const [scrollPosition, setScrollPosition] = useState(0); // Untuk menyimpan posisi scroll

  // History & Navigation Logic
  useEffect(() => {
    const handlePopState = (event) => {
      // Saat tombol Back ditekan (termasuk Thumb Mouse)
      
      // 1. Reset View States
      setActiveFilm(null);
      setActiveTag(null);
      setShowProfile(false);

      // 2. Handle History State jika ada
      if (event.state?.filmId) {
        const film = journalEntries.find(f => f.id === event.state.filmId);
        setActiveFilm(film || null);
      } else if (event.state?.tag) {
        setActiveTag(event.state.tag);
      } else if (event.state?.view === 'profile') {
        setShowProfile(true);
      }
      
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Restore Scroll Position saat kembali ke Dashboard
  useLayoutEffect(() => {
    if (!activeFilm && !activeTag && !showProfile) {
      window.scrollTo({ top: scrollPosition, behavior: 'instant' });
    }
  }, [activeFilm, activeTag, showProfile, scrollPosition]);

  const handleFilmClick = (film) => {
    // Simpan posisi scroll sebelum pindah halaman
    setScrollPosition(window.scrollY);
    
    window.history.pushState({ filmId: film.id }, '', `#film-${film.id}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveFilm(film);
    setActiveTag(null);
    setShowProfile(false);
  };

  const handleTagClick = (tag) => {
    setScrollPosition(window.scrollY); // Simpan scroll juga saat masuk ke Tag
    
    window.history.pushState({ tag: tag }, '', `#tag-${tag}`);
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveTag(tag);
    setActiveFilm(null);
    setShowProfile(false);
  };

  const handleBack = () => window.history.back();

  const handleProfileClick = () => {
    setScrollPosition(window.scrollY);
    
    window.history.pushState({ view: 'profile' }, '', '#profile');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setShowProfile(true);
    setActiveFilm(null);
    setActiveTag(null);
  }

  // --- RENDER CONTROLLER ---
  
  if (activeFilm) {
    return (
      <FilmDetail 
        activeFilm={activeFilm} 
        onBack={handleBack} 
        onTagClick={handleTagClick}
      />
    );
  }

  if (activeTag) {
    return (
      <TagExplorer 
        tag={activeTag} 
        entries={journalEntries} 
        onBack={handleBack} 
        onFilmClick={handleFilmClick} 
      />
    );
  }

  if (showProfile) {
    return <Profile onBack={handleBack} />;
  }

  return (
    <Dashboard 
      entries={journalEntries} 
      onFilmClick={handleFilmClick} 
      onProfileClick={handleProfileClick}
      // Pass state dan setter ke bawah
      activeCategory={activeCategory} 
      setActiveCategory={setActiveCategory}
    />
  );
}