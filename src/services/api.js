const API_BASE_URL = 'http://localhost:8000/api';

export const fetchNews = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/news/`);
    if (!response.ok) {
      throw new Error('Failed to fetch news');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching news:', error);
    throw error;
  }
};

export const fetchNewsById = async (id) => {
  try {
    const response = await fetch(`${API_BASE_URL}/news/${id}/`);
    if (!response.ok) {
      throw new Error('Failed to fetch news details');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching news details:', error);
    throw error;
  }
};

// Project API functions
export const fetchProjects = async () => {
  try {
    const response = await fetch('http://localhost:8000/api/projects/');
    if (!response.ok) {
      throw new Error('Failed to fetch projects');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching projects:', error);
    throw error;
  }
};

export const fetchProjectById = async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/api/projects/${id}/`);
    if (!response.ok) {
      throw new Error('Failed to fetch project details');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching project details:', error);
    throw error;
  }
}; 