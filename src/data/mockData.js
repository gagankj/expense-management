export const mockTransactions = [
  {
    id: "txn_001",
    type: "incoming",
    from: "Patient: Ramesh Kumar",
    amount: 1500,
    mode: "UPI",
    date: "2024-01-15",
    account: "HDFC Bank",
    notes: "Follow-up consultation fee"
  },
  {
    id: "txn_002",
    type: "incoming",
    from: "Patient: Priya Sharma",
    amount: 2500,
    mode: "Cash",
    date: "2024-01-14",
    account: "Cash Register",
    notes: "Initial consultation and medication"
  },
  {
    id: "txn_003",
    type: "outgoing",
    from: "Landlord: Mr. Gupta",
    amount: 15000,
    mode: "Bank Transfer",
    date: "2024-01-10",
    account: "HDFC Bank",
    notes: "Monthly clinic rent"
  },
  {
    id: "txn_004",
    type: "incoming",
    from: "Patient: Amit Patel",
    amount: 3000,
    mode: "Card",
    date: "2024-01-12",
    account: "HDFC Bank",
    notes: "Diagnostic tests and consultation"
  },
  {
    id: "txn_005",
    type: "outgoing",
    from: "Medical Supplies Co.",
    amount: 8500,
    mode: "UPI",
    date: "2024-01-08",
    account: "ICICI Bank",
    notes: "Monthly inventory purchase"
  }
];

export const mockExpenses = [
  {
    id: "exp_001",
    category: "Taxi",
    to: "Uber - Dr. Visit",
    amount: 250,
    mode: "UPI",
    account: "HDFC Bank",
    date: "2024-01-15",
    notes: "Travel to patient home"
  },
  {
    id: "exp_002",
    category: "Salary",
    to: "Staff: Nurse Meena",
    amount: 12000,
    mode: "Bank Transfer",
    account: "ICICI Bank",
    date: "2024-01-01",
    notes: "January salary"
  },
  {
    id: "exp_003",
    category: "Kit",
    to: "Medical Kit Supplies",
    amount: 1500,
    mode: "Cash",
    account: "Cash Register",
    date: "2024-01-12",
    notes: "Emergency medical kit refill"
  },
  {
    id: "exp_004",
    category: "Utilities",
    to: "Electricity Board",
    amount: 2200,
    mode: "UPI",
    account: "HDFC Bank",
    date: "2024-01-05",
    notes: "Monthly electricity bill"
  },
  {
    id: "exp_005",
    category: "Equipment",
    to: "MedTech Solutions",
    amount: 5500,
    mode: "Card",
    account: "ICICI Bank",
    date: "2024-01-10",
    notes: "Stethoscope replacement"
  }
];

export const mockAccounts = [
  {
    id: "acc_001",
    name: "HDFC Bank",
    type: "Bank",
    balance: 45000,
    accountNumber: "****1234",
    description: "Primary business account"
  },
  {
    id: "acc_002",
    name: "ICICI Bank",
    type: "Bank",
    balance: 28000,
    accountNumber: "****5678",
    description: "Secondary business account"
  },
  {
    id: "acc_003",
    name: "Cash Register",
    type: "Cash",
    balance: 8500,
    accountNumber: "N/A",
    description: "Clinic cash drawer"
  }
];

export const PAYMENT_MODES = ['Cash', 'UPI', 'Bank Transfer', 'Card', 'Cheque'];
export const EXPENSE_CATEGORIES = ['Taxi', 'Salary', 'Kit', 'Utilities', 'Equipment', 'Supplies', 'Maintenance', 'Other'];
export const TRANSACTION_TYPES = ['incoming', 'outgoing'];