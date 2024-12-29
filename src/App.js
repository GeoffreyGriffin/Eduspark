
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LearningCompanion from './components /LearningCompanion';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <header className="bg-eduspark-600 text-white p-4">
          <h1 className="text-2xl font-bold">EduSpark</h1>
        </header>
        
        <main className="container mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-xl font-semibold text-eduspark-800">
              Welcome to EduSpark Learning Platform
            </h2>
            <p className="mt-2 text-gray-600">
              Your journey to interactive learning starts here.
            </p>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;