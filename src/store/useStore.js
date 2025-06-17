import { create } from 'zustand';
import { mockTransactions, mockExpenses, mockAccounts } from '../data/mockData';

const useStore = create((set, get) => ({
  // Transactions state
  transactions: mockTransactions,
  transactionFilters: {
    type: 'all',
    dateRange: 'all',
    paymentMode: 'all',
    account: 'all',
    search: '',
  },
  
  // Expenses state
  expenses: mockExpenses,
  expenseFilters: {
    category: 'all',
    dateRange: 'all',
    paymentMode: 'all',
    account: 'all',
    search: '',
  },
  
  // Accounts state
  accounts: mockAccounts,
  
  // UI state
  sidebarOpen: false,
  
  // Actions
  addTransaction: (transaction) => set((state) => ({
    transactions: [...state.transactions, { ...transaction, id: Date.now().toString() }]
  })),
  
  updateTransaction: (id, updates) => set((state) => ({
    transactions: state.transactions.map(t => t.id === id ? { ...t, ...updates } : t)
  })),
  
  deleteTransaction: (id) => set((state) => ({
    transactions: state.transactions.filter(t => t.id !== id)
  })),
  
  setTransactionFilters: (filters) => set((state) => ({
    transactionFilters: { ...state.transactionFilters, ...filters }
  })),
  
  addExpense: (expense) => set((state) => ({
    expenses: [...state.expenses, { ...expense, id: Date.now().toString() }]
  })),
  
  updateExpense: (id, updates) => set((state) => ({
    expenses: state.expenses.map(e => e.id === id ? { ...e, ...updates } : e)
  })),
  
  deleteExpense: (id) => set((state) => ({
    expenses: state.expenses.filter(e => e.id !== id)
  })),
  
  setExpenseFilters: (filters) => set((state) => ({
    expenseFilters: { ...state.expenseFilters, ...filters }
  })),
  
  addAccount: (account) => set((state) => ({
    accounts: [...state.accounts, { ...account, id: Date.now().toString() }]
  })),
  
  updateAccount: (id, updates) => set((state) => ({
    accounts: state.accounts.map(a => a.id === id ? { ...a, ...updates } : a)
  })),
  
  deleteAccount: (id) => set((state) => ({
    accounts: state.accounts.filter(a => a.id !== id)
  })),
  
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  
  // Computed values
  getFilteredTransactions: () => {
    const { transactions, transactionFilters } = get();
    return transactions.filter(transaction => {
      const matchesType = transactionFilters.type === 'all' || transaction.type === transactionFilters.type;
      const matchesPaymentMode = transactionFilters.paymentMode === 'all' || transaction.mode === transactionFilters.paymentMode;
      const matchesAccount = transactionFilters.account === 'all' || transaction.account === transactionFilters.account;
      const matchesSearch = transactionFilters.search === '' || 
        transaction.from.toLowerCase().includes(transactionFilters.search.toLowerCase()) ||
        transaction.notes.toLowerCase().includes(transactionFilters.search.toLowerCase());
      
      return matchesType && matchesPaymentMode && matchesAccount && matchesSearch;
    });
  },
  
  getFilteredExpenses: () => {
    const { expenses, expenseFilters } = get();
    return expenses.filter(expense => {
      const matchesCategory = expenseFilters.category === 'all' || expense.category === expenseFilters.category;
      const matchesPaymentMode = expenseFilters.paymentMode === 'all' || expense.mode === expenseFilters.paymentMode;
      const matchesAccount = expenseFilters.account === 'all' || expense.account === expenseFilters.account;
      const matchesSearch = expenseFilters.search === '' || 
        expense.to.toLowerCase().includes(expenseFilters.search.toLowerCase()) ||
        expense.notes.toLowerCase().includes(expenseFilters.search.toLowerCase());
      
      return matchesCategory && matchesPaymentMode && matchesAccount && matchesSearch;
    });
  },
}));

export default useStore;