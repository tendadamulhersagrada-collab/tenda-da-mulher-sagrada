
export interface Event {
  id: string;
  title: string;
  type: 'Workshop' | 'Curso' | 'Palestra';
  date: string;
  time: string;
  location: string;
  price: string;
  description: string;
  prompt: string;
  hasDetailedInfo?: boolean;
}

export interface OracleMessage {
  role: 'user' | 'model';
  text: string;
}
