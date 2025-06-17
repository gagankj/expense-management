import { useState } from 'react';
import { Download, FileText, Calendar, Filter } from 'lucide-react';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import useStore from '../store/useStore';
import { formatCurrency } from '../utils/formatters';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';

const COLORS = ['#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];

export default function Reports() {
  const { transactions, expenses } = useStore();
  const [selectedPeriod, setSelectedPeriod] = useState('month');
  const [reportType, setReportType] = useState('summary');

  // Mock data for charts
  const monthlyData = [
    { month: 'Jan', income: 45000, expenses: 32000 },
    { month: 'Feb', income: 52000, expenses: 28000 },
    { month: 'Mar', income: 48000, expenses: 35000 },
    { month: 'Apr', income: 61000, expenses: 42000 },
    { month: 'May', income: 55000, expenses: 38000 },
    { month: 'Jun', income: 67000, expenses: 45000 },
  ];

  const expenseBreakdown = [
    { name: 'Salary', value: 45000, color: '#3B82F6' },
    { name: 'Equipment', value: 25000, color: '#10B981' },
    { name: 'Utilities', value: 15000, color: '#F59E0B' },
    { name: 'Supplies', value: 12000, color: '#EF4444' },
    { name: 'Other', value: 8000, color: '#8B5CF6' },
  ];

  const handleExport = (format) => {
    // Mock export functionality
    const filename = `report_${Date.now()}.${format}`;
    alert(`Exporting report as ${filename}`);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Reports</h1>
          <p className="text-gray-600">Generate and export financial reports</p>
        </div>
        <div className="flex items-center space-x-3">
          <Button variant="outline" onClick={() => handleExport('pdf')}>
            <Download className="w-4 h-4 mr-2" />
            Export PDF
          </Button>
          <Button variant="outline" onClick={() => handleExport('xlsx')}>
            <Download className="w-4 h-4 mr-2" />
            Export Excel
          </Button>
        </div>
      </div>

      {/* Report Controls */}
      <Card>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Time Period</label>
            <select
              value={selectedPeriod}
              onChange={(e) => setSelectedPeriod(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="week">Last Week</option>
              <option value="month">Last Month</option>
              <option value="quarter">Last Quarter</option>
              <option value="year">Last Year</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Report Type</label>
            <select
              value={reportType}
              onChange={(e) => setReportType(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            >
              <option value="summary">Financial Summary</option>
              <option value="transactions">Transaction Details</option>
              <option value="expenses">Expense Analysis</option>
              <option value="accounts">Account Balances</option>
            </select>
          </div>

          <div className="flex items-end">
            <Button className="w-full">
              <FileText className="w-4 h-4 mr-2" />
              Generate Report
            </Button>
          </div>
        </div>
      </Card>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card className="text-center">
          <div className="text-2xl font-bold text-green-600">₹3,45,000</div>
          <div className="text-sm text-gray-600 mt-1">Total Income</div>
          <div className="text-xs text-green-600 mt-1">↑ 12% vs last month</div>
        </Card>
        
        <Card className="text-center">
          <div className="text-2xl font-bold text-red-600">₹2,15,000</div>
          <div className="text-sm text-gray-600 mt-1">Total Expenses</div>
          <div className="text-xs text-red-600 mt-1">↑ 8% vs last month</div>
        </Card>
        
        <Card className="text-center">
          <div className="text-2xl font-bold text-blue-600">₹1,30,000</div>
          <div className="text-sm text-gray-600 mt-1">Net Profit</div>
          <div className="text-xs text-blue-600 mt-1">↑ 18% vs last month</div>
        </Card>
        
        <Card className="text-center">
          <div className="text-2xl font-bold text-purple-600">60.4%</div>
          <div className="text-sm text-gray-600 mt-1">Profit Margin</div>
          <div className="text-xs text-purple-600 mt-1">↑ 5% vs last month</div>
        </Card>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Monthly Income vs Expenses */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Income vs Expenses</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={monthlyData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip formatter={(value) => formatCurrency(value)} />
              <Bar dataKey="income" fill="#10B981" name="Income" />
              <Bar dataKey="expenses" fill="#EF4444" name="Expenses" />
            </BarChart>
          </ResponsiveContainer>
        </Card>

        {/* Expense Breakdown */}
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Expense Breakdown</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={expenseBreakdown}
                cx="50%"
                cy="50%"
                labelLine={false}
                label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
              >
                {expenseBreakdown.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip formatter={(value) => formatCurrency(value)} />
            </PieChart>
          </ResponsiveContainer>
        </Card>
      </div>

      {/* Profit Trend */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Profit Trend</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={monthlyData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="month" />
            <YAxis />
            <Tooltip formatter={(value) => formatCurrency(value)} />
            <Line 
              type="monotone" 
              dataKey="income" 
              stroke="#10B981" 
              strokeWidth={2}
              name="Income"
            />
            <Line 
              type="monotone" 
              dataKey="expenses" 
              stroke="#EF4444" 
              strokeWidth={2}
              name="Expenses"
            />
          </LineChart>
        </ResponsiveContainer>
      </Card>

      {/* Export Options */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Export Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <Button variant="outline" onClick={() => handleExport('pdf')}>
            <FileText className="w-4 h-4 mr-2" />
            Export as PDF
          </Button>
          <Button variant="outline" onClick={() => handleExport('xlsx')}>
            <FileText className="w-4 h-4 mr-2" />
            Export as Excel
          </Button>
          <Button variant="outline" onClick={() => handleExport('csv')}>
            <FileText className="w-4 h-4 mr-2" />
            Export as CSV
          </Button>
          <Button variant="outline" onClick={() => handleExport('json')}>
            <FileText className="w-4 h-4 mr-2" />
            Export as JSON
          </Button>
        </div>
      </Card>
    </div>
  );
}