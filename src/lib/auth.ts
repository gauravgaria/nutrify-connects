
import { create } from 'zustand';

// This is a simplified mock auth store for demonstration
// In a real application, you would integrate with a proper auth system

interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  signup: (name: string, email: string, password: string) => Promise<void>;
  logout: () => void;
  socialLogin: (provider: 'google' | 'apple' | 'github') => Promise<void>;
}

// Mock user data for demonstration
const mockUser: User = {
  id: '1',
  name: 'Jane Doe',
  email: 'jane@example.com',
  avatar: 'https://i.pravatar.cc/150?img=5'
};

export const useAuth = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,
  isLoading: false,
  
  login: async (email: string, password: string) => {
    set({ isLoading: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, validate credentials with your backend
    set({ 
      user: mockUser,
      isAuthenticated: true,
      isLoading: false
    });
  },
  
  signup: async (name: string, email: string, password: string) => {
    set({ isLoading: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, register the user with your backend
    set({ 
      user: {
        ...mockUser,
        name,
        email
      },
      isAuthenticated: true,
      isLoading: false
    });
  },
  
  logout: () => {
    // Simulate API call
    set({ 
      user: null,
      isAuthenticated: false
    });
  },
  
  socialLogin: async (provider) => {
    set({ isLoading: true });
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // In a real app, handle oauth flow
    set({ 
      user: {
        ...mockUser,
        name: `${provider.charAt(0).toUpperCase() + provider.slice(1)} User`
      },
      isAuthenticated: true,
      isLoading: false
    });
  }
}));

// Check if user has access to gated content
export const hasAccessToFreebies = (): boolean => {
  const { isAuthenticated } = useAuth.getState();
  return isAuthenticated;
};
