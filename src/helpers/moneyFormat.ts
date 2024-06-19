export const getMoneyFormat = (value: number) => {
  const format_money = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' });
  return format_money.format(value);
};
