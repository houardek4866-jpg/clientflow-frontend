export const capitalizeFirst = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const truncate = (str: string, length: number) =>
  str.length > length ? str.substring(0, length) + '...' : str;

export const getInitials = (firstName: string, lastName: string) =>
  `${firstName.charAt(0)}${lastName.charAt(0)}`.toUpperCase();

export const formatCurrency = (value: number, currency = 'DH') =>
  `${value.toFixed(2)} ${currency}`;

export const generateId = () =>
  `${Date.now()}-${Math.random().toString(36).substring(2, 9)}`;
