import { Calendar, CreditCard, User, FileText, MoreVertical } from 'lucide-react';
import { formatCurrency, formatDate, getTransactionTypeColor, getPaymentModeColor } from '../../utils/formatters';
import clsx from 'clsx';

export default function TransactionCard({ transaction, onEdit, onDelete }) {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-3">
            <span className={clsx(
              'px-3 py-1 rounded-full text-xs font-medium',
              getTransactionTypeColor(transaction.type)
            )}>
              {transaction.type === 'incoming' ? 'Income' : 'Expense'}
            </span>
            <span className={clsx(
              'px-3 py-1 rounded-full text-xs font-medium',
              getPaymentModeColor(transaction.mode)
            )}>
              {transaction.mode}
            </span>
          </div>
          
          <div className="mb-4">
            <div className="flex items-center text-gray-700 mb-2">
              <User className="w-4 h-4 mr-2 text-gray-400" />
              <span className="font-medium">{transaction.from}</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm mb-1">
              <Calendar className="w-4 h-4 mr-2 text-gray-400" />
              <span>{formatDate(transaction.date)}</span>
            </div>
            <div className="flex items-center text-gray-600 text-sm mb-1">
              <CreditCard className="w-4 h-4 mr-2 text-gray-400" />
              <span>{transaction.account}</span>
            </div>
            {transaction.notes && (
              <div className="flex items-center text-gray-600 text-sm">
                <FileText className="w-4 h-4 mr-2 text-gray-400" />
                <span>{transaction.notes}</span>
              </div>
            )}
          </div>
        </div>
        
        <div className="flex items-center space-x-3">
          <div className="text-right">
            <div className={clsx(
              'text-xl font-bold',
              transaction.type === 'incoming' ? 'text-success-600' : 'text-error-600'
            )}>
              {transaction.type === 'incoming' ? '+' : '-'}{formatCurrency(transaction.amount)}
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