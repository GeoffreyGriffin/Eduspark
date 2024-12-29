import { createBrowserRouter } from 'react-router-dom';
import EduSpark from '../components/EduSpark';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <EduSpark />,
    children: [
      {
        path: 'modules/:moduleId',
        element: <ModuleView />
      },
      {
        path: 'collaborate',
        element: <CollaborateView />
      },
      {
        path: 'path',
        element: <LearningPathView />
      },
      {
        path: 'insights',
        element: <InsightsView />
      },
      {
        path: 'achievements',
        element: <AchievementsView />
      }
    ]
  }
]);