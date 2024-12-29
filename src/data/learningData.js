export const modules = {
    beginner: [
      {
        id: 'intro-programming',
        title: 'Introduction to Programming',
        xp: 100,
        requirements: [],
        content: ['Variables', 'Data Types', 'Control Flow'],
        challenges: [
          {
            type: 'quiz',
            questions: [/* ... */]
          },
          {
            type: 'coding',
            task: 'Create a simple calculator'
          }
        ]
      }
      // More modules...
    ],
    intermediate: [/* ... */],
    advanced: [/* ... */]
  };
  
  export const learningPaths = [
    {
      id: 'web-dev',
      title: 'Web Development',
      description: 'Full stack web development path',
      modules: ['intro-programming', 'html-css', 'javascript'],
      milestones: [
        {
          title: 'Frontend Basics',
          modules: ['html-css', 'javascript']
        }
        // More milestones...
      ]
    }
    // More paths...
  ];
  
  export const achievements = [
    {
      id: 'first-code',
      title: 'First Line of Code',
      description: 'Write your first program',
      xp: 50,
      icon: '🚀'
    }
    // More achievements...
  ];