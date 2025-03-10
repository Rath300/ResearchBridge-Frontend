const API_URL = process.env.NEXT_PUBLIC_API_URL || 'https://researchbridge-server.onrender.com';

export interface APIError {
  message: string;
  status?: number;
  code?: string;
}

export const fetchWithAuth = async <T = any>(
  endpoint: string,
  options: RequestInit = {}
): Promise<T> => {
  let token: string | null = null;

  // Check if we're in the browser environment
  if (typeof window !== 'undefined') {
    token = localStorage.getItem('token');
  }

  const headers = {
    'Content-Type': 'application/json',
    ...options.headers,
    ...(token ? { Authorization: `Bearer ${token}` } : {})
  };

  try {
    const response = await fetch(`${API_URL}${endpoint}`, {
      ...options,
      headers
    });

    if (!response.ok) {
      const error = await response.json().catch(() => ({
        message: 'An unexpected error occurred',
        status: response.status
      }));

      throw {
        message: error.message || `HTTP error! status: ${response.status}`,
        status: response.status,
        code: error.code
      } as APIError;
    }

    // Handle no content responses
    if (response.status === 204) {
      return {} as T;
    }

    return response.json();
  } catch (error) {
    if (error instanceof Error) {
      throw {
        message: error.message,
        status: 500,
        code: 'NETWORK_ERROR'
      } as APIError;
    }
    throw error;
  }
};

// Helper methods for common HTTP methods
export const api = {
  get: <T = any>(endpoint: string, options: Omit<RequestInit, 'method'> = {}) => 
    fetchWithAuth<T>(endpoint, { ...options, method: 'GET' }),

  post: <T = any>(endpoint: string, data?: any, options: Omit<RequestInit, 'method' | 'body'> = {}) =>
    fetchWithAuth<T>(endpoint, {
      ...options,
      method: 'POST',
      body: JSON.stringify(data)
    }),

  put: <T = any>(endpoint: string, data?: any, options: Omit<RequestInit, 'method' | 'body'> = {}) =>
    fetchWithAuth<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: JSON.stringify(data)
    }),

  delete: <T = any>(endpoint: string, options: Omit<RequestInit, 'method'> = {}) =>
    fetchWithAuth<T>(endpoint, { ...options, method: 'DELETE' }),

  patch: <T = any>(endpoint: string, data?: any, options: Omit<RequestInit, 'method' | 'body'> = {}) =>
    fetchWithAuth<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: JSON.stringify(data)
    })
}; 