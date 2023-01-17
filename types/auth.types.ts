export interface LoginData {
  userId: string;
  password: string;
}

export interface SignupData {
  nickname: string;
  userId: string;
  password: string;
  confirmPassword?: string;
}
