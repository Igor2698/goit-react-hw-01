import css from "../TransactionHistory/TransactionHistory.module.css";

export const TransactionHistory = ({ items }) => {
  return (
    <table className={css.table}>
      <thead>
        <tr>
          <th className={css.tableHead}>Type</th>
          <th className={css.tableHead}>Amount</th>
          <th className={css.tableHead}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
