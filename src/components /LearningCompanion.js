import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Check, Book, Trophy, Brain } from 'lucide-react';

const LearningCompanion = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [progress, setProgress] = useState(0);
  const [streak, setStreak] = useState(0);

  const modules = [
    {
      title: "Introduction to Programming",
      concepts: ["Variables", "Data Types", "Control Flow"],
      quiz: [
        {
          question: "What is a variable?",
          options: [
            "A container for storing data",
            "A mathematical equation",
            "A type of loop",
            "A function name"
          ],
          correct: 0
        }
      ]
    },
    {
      title: "Basic Algorithms",
      concepts: ["Arrays", "Sorting", "Searching"],
      quiz: [
        {
          question: "Which sorting algorithm has O(n log n) complexity?",
          options: [
            "Bubble Sort",
            "Quick Sort",
            "Selection Sort",
            "Insertion Sort"
          ],
          correct: 1
        }
      ]
    }
  ];

  const [quizAnswers, setQuizAnswers] = useState({});

  const handleAnswer = (moduleIndex, questionIndex, answerIndex) => {
    const newAnswers = { ...quizAnswers };
    newAnswers[`${moduleIndex}-${questionIndex}`] = answerIndex;
    setQuizAnswers(newAnswers);

    const isCorrect = modules[moduleIndex].quiz[questionIndex].correct === answerIndex;
    if (isCorrect) {
      setStreak(prev => prev + 1);
      setProgress(prev => Math.min(100, prev + 10));
    } else {
      setStreak(0);
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Learning Companion</CardTitle>
          <CardDescription>Your personalized learning journey</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center gap-2">
              <Trophy className="h-5 w-5 text-yellow-500" />
              <span>Streak: {streak}</span>
            </div>
            <div className="flex-1">
              <Progress value={progress} className="h-2" />
            </div>
          </div>
        </CardContent>
      </Card>

      <Tabs defaultValue="learn" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="learn">
            <Book className="h-4 w-4 mr-2" />
            Learn
          </TabsTrigger>
          <TabsTrigger value="practice">
            <Brain className="h-4 w-4 mr-2" />
            Practice
          </TabsTrigger>
        </TabsList>

        <TabsContent value="learn">
          <Card>
            <CardHeader>
              <CardTitle>{modules[currentModule].title}</CardTitle>
              <CardDescription>Key concepts to master</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {modules[currentModule].concepts.map((concept, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-green-500" />
                    <span>{concept}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="practice">
          <Card>
            <CardHeader>
              <CardTitle>Practice Quiz</CardTitle>
              <CardDescription>Test your knowledge</CardDescription>
            </CardHeader>
            <CardContent>
              {modules[currentModule].quiz.map((question, qIndex) => (
                <div key={qIndex} className="space-y-4">
                  <h3 className="font-medium">{question.question}</h3>
                  <div className="grid grid-cols-1 gap-2">
                    {question.options.map((option, oIndex) => (
                      <Button
                        key={oIndex}
                        variant={
                          quizAnswers[`${currentModule}-${qIndex}`] === oIndex
                            ? 'default'
                            : 'outline'
                        }
                        className="justify-start"
                        onClick={() => handleAnswer(currentModule, qIndex, oIndex)}
                      >
                        {option}
                      </Button>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default LearningCompanion;