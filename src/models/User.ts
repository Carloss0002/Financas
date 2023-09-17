export interface UserResponse {
  id: string;
  email?: string;
  name: string;
  token?: string;
  balance?: number;
  created_at?: string;
  updated_at?: string;
}
export interface UserMovements {
  saldo: number,
  tag: string
}

export interface receives{
  id: string
  user_id: string
  description: string
  value: number
  type: string
  date: string
  created_at: string
  updated_at: string
}
