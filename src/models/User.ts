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
