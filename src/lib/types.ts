export interface User {
  id: string;
  email: string;
  fullName: string;
  role: string;
  institutionId?: string | null;
  createdAt?: string;
}

export interface LoginRequest {
  email: string;
  password?: string;
}

export interface LoginResponse {
  accessToken: string;
  user: User;
}

export interface HomeStats {
  memberInstitutions?: number;
  countriesReached?: number;
  partnersCollaborators?: number;
  completedProjects?: number;
  activePrograms?: number;
}

export interface Partner {
  id: string;
  name: string;
  logoUrl: string;
  websiteUrl?: string | null;
  featured?: boolean;
}
