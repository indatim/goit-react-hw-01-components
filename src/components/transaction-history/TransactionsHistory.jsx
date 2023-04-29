import PropTypes from 'prop-types';
import { TransactionsTable, HeadTableRow, HeadTableColumn, TransactionsNameColumn, DataRow, DataColumn } from './TransactionsHistory.styled';

export const TransactionsHistory = ({ items }) => (
  <TransactionsTable>
  <HeadTableRow>
    <HeadTableColumn>
      <TransactionsNameColumn>Type</TransactionsNameColumn>
      <TransactionsNameColumn>Amount</TransactionsNameColumn>
      <TransactionsNameColumn>Currency</TransactionsNameColumn>
    </HeadTableColumn>
  </HeadTableRow>

  <tbody>{items.map(item => (
    <DataRow key={item.id}>
          <DataColumn>{item.type}</DataColumn>
          <DataColumn>{item.amount}</DataColumn>
          <DataColumn>{item.currency}</DataColumn>
    </DataRow>))}
  </tbody>
</TransactionsTable>  
);

TransactionsHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
    })).isRequired,
}