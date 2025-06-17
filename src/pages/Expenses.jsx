import { useState } from 'react';
import { Plus, Search, Filter, Download, X } from 'lucide-react';
import useStore from '../store/useStore';
import ExpenseCard from '../components/expenses/ExpenseCard';
import ExpenseForm from '../components/expenses/ExpenseForm';
import Button from '../components/ui/Button';
import Modal from '../components/ui/Modal';
import { PAYMENT_MODES, EXPENSE_CATEGORIES } from '../data/mockData';

export default function Expenses() {
  const { 
    expenses, 
    accounts, 
    expenseFilters, 
    setExpenseFilters,
    addExpense,
    getFilteredExpenses 
  } = useStore();
  
  const [showForm, setShowForm] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedExpense, setSelectedExpense] = useState(null);

  const filteredExpenses = getFilteredExpenses();

  const handleAddExpense = (expenseData) => {
    addExpense(expenseData);
    setShowForm(false);
  };

  const handleFilterChange = (key, value) => {
    setExpenseFilters({ [key]: value });
  };

  const handleClearFilters = () => {
    setExpenseFilters({
      category: 'all',
      dateRange: 'all',
      paymentMode: 'all',
      account: 'all',
      search: '',
    });
  };

  const hasActiveFilters = Object.values(expenseFilters).some(value => value !== 'all' && value !== '');

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Expenses</h1>
          <p className="text-gray-600">Track and manage your business expenses</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" size="sm">
            <Download className="w-4 h-4 mr-2" />
            Export
          </Button>
          <Button onClick={() => setShowForm(true)}>
            <Plus className="w-4 h-4 mr-2" />
            Add Expense
          </Button>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-3 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search expenses..."
              value={expenseFilters.search}
              onChange={(e) => handleFilterChange('search', e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
          </div>
          <Button 
            variant="outline" 
            onClick={() => setShowFilters(!showFilters)}
            className="md:w-auto"
          >
            <Filter className="w-4 h-4 mr-2" />
            Filters
            {hasActiveFilters && (
              <span className="ml-2 bg-primary-600 text-white text-xs rounded-full w-2 h-2"></span>
            )}
          </Button>
        </div>

        {/* Filter Panel */}
        {showFilters && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                <select
                  value={expenseFilters.category}
                  onChange={(e) => handleFilterChange('category', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All Categories</option>
                  {EXPENSE_CATEGORIES.map(category => (
                    <option key={category} value={category}>{category}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Payment Mode</label>
                <select
                  value={expenseFilters.paymentMode}
                  onChange={(e) => handleFilterChange('paymentMode', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All Modes</option>
                  {PAYMENT_MODES.map(mode => (
                    <option key={mode} value={mode}>{mode}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Account</label>
                <select
                  value={expenseFilters.account}
                  onChange={(e) => handleFilterChange('account', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                >
                  <option value="all">All Accounts</option>
                  {accounts.map(account => (
                    <option key={account.id} value={account.name}>{account.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex items-end">
                <Button variant="outline" onClick={handleClearFilters} className="w-full">
                  <X className="w-4 h-4 mr-2" />
                  Clear
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Results */}
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">
            {filteredExpenses.length} Expense{filteredExpenses.length !== 1 ? 's' : ''}
          </h3>
        </div>

        <div className="space-y-4">
          {filteredExpenses.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 text-4xl mb-4">💸</div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No expenses found</h3>
              <p className="text-gray-600">Try adjusting your filters or add a new expense.</p>
            </div>
          ) : (
            filteredExpenses.map((expense) => (
              <ExpenseCard 
                key={expense.id} 
                expense={expense}
                onEdit={(expense) => setSelectedExpense(expense)}
              />
            ))
          )}
        </div>
      </div>

      {/* Add/Edit Expense Modal */}
      <Modal
        isOpen={showForm}
        onClose={() => {
          setShowForm(false);
          setSelectedExpense(null);
        }}
        title={selectedExpense ? 'Edit Expense' : 'Add Expense'}
      >
        <ExpenseForm
          expense={selectedExpense}
          onSubmit={handleAddExpense}
          onCancel={() => {
            setShowForm(false);
            setSelectedExpense(null);
          }}
        />
      </Modal>
    </div>
  );
}