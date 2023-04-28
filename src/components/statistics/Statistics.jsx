import PropTypes from 'prop-types';
import { StatisticsContainer, StatisticsTitle, StatisticsList, StatisticsLabel, StatisticsPercentage } from './Statistics.styled';

// function Statistics({ title , stats }) {
//     return (<div><section className="statistics">
//   <h2 className="title">{title}</h2>

//   <ul className="stat-list">{
//     <li className="item">
//       <span className="label">{stats.label}</span>
//       <span className="percentage">{stats.percentage}</span>
//     </li>}
//   </ul>
//     </section>
//     </div>);
// }

export const Statistics = ({ title , stats }) => (<StatisticsContainer><section className="statistics">
  <StatisticsTitle>{title}</StatisticsTitle>

  <StatisticsList>{
    stats.map(stat => (<li className="item" style={{ backgroundColor: getRandomHexColor() }} key={stat.id}>
      <StatisticsLabel>{stat.label}</StatisticsLabel>
      <StatisticsPercentage>{stat.percentage}%</StatisticsPercentage>
    </li>))
    }
  </StatisticsList>
    </section>
    </StatisticsContainer>);

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,  
    })).isRequired,
}

// export default Statistics;