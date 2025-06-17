// Mock API service - ready for backend integration
export const api = {
  // Transactions
  getTransactions: async (filters = {}) => {
    // Mock API call
    await new Promise(resolve => setTimeout(resolve, 300));
    // Later: return await fetch('/api/transactions', { params: filters });
    return { success: true, data: [] };
  },

  addTransaction: async (transaction) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    // Later: return await fetch('/api/transactions', { method: 'POST', body: transaction });
    return { success: true, data: transaction };
  },

  updateTransaction: async (id, updates) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    // Later: return await fetch(`/api/transactions/${id}`, { method: 'PUT', body: updates });
    return { success: true, data: updates };
  },

  deleteTransaction: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    // Later: return await fetch(`/api/transactions/${id}`, { method: 'DELETE' });
    return { success: true };
  },

  // Expenses
  getExpenses: async (filters = {}) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    // Later: return await fetch('/api/expenses', { params: filters });
    return { success: true, data: [] };
  },

  addExpense: async (expense) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    // Later: return await fetch('/api/expenses', { method: 'POST', body: expense });
    return { success: true, data: expense };
  },

  updateExpense: async (id, updates) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    // Later: return await fetch(`/api/expenses/${id}`, { method: 'PUT', body: updates });
    return { success: true, data: updates };
  },

  deleteExpense: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    // Later: return await fetch(`/api/expenses/${id}`, { method: 'DELETE' });
    return { success: true };
  },

  // Accounts
  getAccounts: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    // Later: return await fetch('/api/accounts');
    return { success: true, data: [] };
  },

  addAccount: async (account) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    // Later: return await fetch('/api/accounts', { method: 'POST', body: account });
    return { success: true, data: account };
  },

  updateAccount: async (id, updates) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    // Later: return await fetch(`/api/accounts/${id}`, { method: 'PUT', body: updates });
    return { success: true, data: updates };
  },

  deleteAccount: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 300));
    // Later: return await fetch(`/api/accounts/${id}`, { method: 'DELETE' });
    return { success: true };
  },

  // Reports
  generateReport: async (filters = {}) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    // Later: return await fetch('/api/reports/generate', { params: filters });
    return { success: true, data: { reportUrl: '#' } };
  },

  exportData: async (type, format, filters = {}) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    // Later: return await fetch(`/api/export/${type}/${format}`, { params: filters });
    return { success: true, data: { downloadUrl: '#' } };
  }
};