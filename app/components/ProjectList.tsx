'use client';

import { useEffect, useState } from 'react';
import { api, APIError } from '@/app/utils/api';

interface Project {
  id: string;
  title: string;
  description: string;
  // Add other project fields as needed
}

export default function ProjectList() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchProjects();
  }, []);

  const fetchProjects = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await api.get<{ projects: Project[] }>('/api/projects');
      setProjects(data.projects);
    } catch (err) {
      const error = err as APIError;
      setError(error.message || 'Failed to fetch projects');
      console.error('Failed to fetch projects:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading projects...</div>;
  }

  if (error) {
    return (
      <div className="text-red-500">
        Error: {error}
        <button 
          onClick={fetchProjects}
          className="ml-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Projects</h2>
      {projects.length === 0 ? (
        <p>No projects found.</p>
      ) : (
        <ul className="space-y-4">
          {projects.map((project) => (
            <li 
              key={project.id}
              className="p-4 border rounded shadow hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
} 