import { format, parseISO } from 'date-fns';

export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(amount);
};

export const formatDate = (dateString) => {
  try {
    const date = parseISO(dateString);
    return format(date, 'dd MMM yyyy');
  } catch (error) {
    return dateString;
  }
};

export const formatDateTime = (dateString) => {
  try {
    const date = parseISO(dateString);
    return format(date, 'dd MMM yyyy, hh:mm a');
  } catch (error) {
    return dateString;
  }
};

export const getTransactionTypeColor = (type) => {
  switch (type) {
    case 'incoming':
      return 'bg-success-100 text-success-600';
    case 'outgoing':
      return 'bg-error-100 text-error-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

export const getPaymentModeColor = (mode) => {
  switch (mode) {
    case 'Cash':
      return 'bg-warning-100 text-warning-600';
    case 'UPI':
      return 'bg-primary-100 text-primary-600';
    case 'Bank Transfer':
      return 'bg-blue-100 text-blue-600';
    case 'Card':
      return 'bg-purple-100 text-purple-600';
    case 'Cheque':
      return 'bg-indigo-100 text-indigo-600';
    default:
      return 'bg-gray-100 text-gray-600';
  }
};

export const getCategoryColor = (category) => {
  const colors = {
    'Taxi': 'bg-yellow-100 text-yellow-600',
    'Salary': 'bg-green-100 text-green-600',
    'Kit': 'bg-blue-100 text-blue-600',
    'Utilities': 'bg-orange-100 text-orange-600',
    'Equipment': 'bg-purple-100 text-purple-600',
    'Supplies': 'bg-pink-100 text-pink-600',
    'Maintenance': 'bg-red-100 text-red-600',
    'Other': 'bg-gray-100 text-gray-600'
  };
  return colors[category] || 'bg-gray-100 text-gray-600';
};