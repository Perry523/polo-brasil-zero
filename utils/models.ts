interface Cash {
  id: string;
  name: string;
  quantity: number;
  price: string;
  created_at: string;
  updated_at: string;
}
interface Finance {
  id?: number;
  name: string;
  value: number;
  isExpense: boolean;
  initialDate: string;
  recurrent: boolean;
  recurrentFinalDate?: string;
  infiniteRecurrency?: boolean;
}
// interface Date {
//   month: number;
//   year: number;
// }

interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: number;
  created_at: string;
  updated_at: string;
}

