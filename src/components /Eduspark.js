import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Brain, Users, Route, LineChart, Trophy, BookOpen } from 'lucide-react';

const EduSpark = () => {
  const [xp, setXp] = useState(0);
  const [level, setLevel] = useState(1);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="bg-gradient-to-r from-blue-600 to-blue-800 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold">EduSpark</span>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-blue-900 rounded-full px-4 py-1 flex items-center">
              <Trophy className="h-4 w-4 mr-2" />
              <span>Level {level}</span>
            </div>
            <div className="bg-blue-900 rounded-full px-4 py-1">
              <span>{xp} XP</span>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="modules" className="space-y-6">
          <TabsList className="grid grid-cols-5 gap-4 bg-white p-2 rounded-lg shadow">
            <TabsTrigger value="modules" className="flex items-center space-x-2">
              <Brain className="h-4 w-4" />
              <span>Learning Modules</span>
            </TabsTrigger>
            <TabsTrigger value="collaborative" className="flex items-center space-x-2">
              <Users className="h-4 w-4" />
              <span>Collaborate</span>
            </TabsTrigger>
            <TabsTrigger value="path" className="flex items-center space-x-2">
              <Route className="h-4 w-4" />
              <span>Learning Path</span>
            </TabsTrigger>
            <TabsTrigger value="insights" className="flex items-center space-x-2">
              <LineChart className="h-4 w-4" />
              <span>Insights</span>
            </TabsTrigger>
            <TabsTrigger value="achievements" className="flex items-center space-x-2">
              <Trophy className="h-4 w-4" />
              <span>Achievements</span>
            </TabsTrigger>
          </TabsList>

          {/* Interactive Learning Modules */}
          <TabsContent value="modules">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {['Beginner', 'Intermediate', 'Advanced'].map((level) => (
                <div key={level} className="bg-white rounded-xl shadow-md hover:shadow-xl transition-shadow p-6">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">{level} Track</h3>
                  <div className="space-y-3">
                    {[1, 2, 3].map((module) => (
                      <div key={module} className="flex items-center p-3 bg-gray-50 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-3">
                          <span className="text-blue-600 font-medium">{module}</span>
                        </div>
                        <span className="text-gray-700">Module {module}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Collaborative Learning Spaces */}
          <TabsContent value="collaborative">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Study Groups</h3>
                <div className="space-y-4">
                  {['Web Development', 'Data Science', 'Mobile Apps'].map((group) => (
                    <div key={group} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center">
                        <Users className="h-5 w-5 text-blue-600 mr-3" />
                        <span>{group}</span>
                      </div>
                      <span className="text-sm text-gray-500">12 members</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-md p-6">
                <h3 className="text-lg font-semibold text-blue-800 mb-4">Discussion Forums</h3>
                <div className="space-y-4">
                  {['Programming Tips', 'Career Advice', 'Project Ideas'].map((forum) => (
                    <div key={forum} className="p-4 bg-gray-50 rounded-lg">
                      <h4 className="font-medium text-blue-700">{forum}</h4>
                      <p className="text-sm text-gray-600 mt-1">Latest discussions and trending topics</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Add remaining TabsContent components for other features */}
        </Tabs>
      </div>
    </div>
  );
};

export default EduSpark;