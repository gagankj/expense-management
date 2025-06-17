import { Calendar, CreditCard, User, FileText, MoreVertical } from 'lucide-react';
import { formatCurrency, formatDate, getCategoryColor, getPaymentModeColor } from '../../utils/formatters';
import clsx from 'clsx';

export default function ExpenseCard({ expense, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <span className={clsx(
              'px-3 py-1 rounded-full text-xs font-medium',
              getCategoryColor(expense.category)
            )}>
              {expense.category}
            </span>
            <span className={clsx(
              'px-3 py-1 rounded-full text-xs font-medium',
              getPaymentModeColor(expense.mode)
            )}>
              {expense.mode}
            </span>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center text-gray-700 mb-2">
              <User className="w-4 h-4 mr-2 text-gray-400" />
              <span className="font-medium">{expense.to}</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm mb-1">
              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
              <span>{formatDate(expense.date)}</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm mb-1">
              <CreditCard className="w-4 h-4 mr-2 text-gray-400" />
              <span>{expense.account}</span>
            </div>
            {expense.notes && (
              <div className="flex items-center text-gray-600 text-sm">
                <FileText className="w-4 h-4 mr-2 text-gray-400" />
                <span>{expense.notes}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className="text-xl font-bold text-error-600">
              -{formatCurrency(expense.amount)}
            </div>
          </div>
          
          <div className="relative">
            <button className="p-2 hover:bg-gray-100 rounded-md">
              <MoreVertical className="w-4 h-4 text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}