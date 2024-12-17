export interface User {
  id: string;
  email: string;
  fullName: string;
  dateOfBirth: string;
  gender: 'male' | 'female' | 'other';
  location: string;
  profilePicture?: string;
  about?: string;
  preferences?: {
    ageRange: { min: number; max: number };
    location?: string;
    gender?: string;
  };
}

export interface AuthContextType {
  user: User | null;
  loading: boolean;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
  googleSignIn: () => Promise<void>;
}