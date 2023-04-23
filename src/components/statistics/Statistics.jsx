import PropTypes from 'prop-types';

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

export const Statistics = ({ title , stats }) => (<div><section className="statistics">
  <h2 className="title">{title}</h2>

  <ul className="stat-list">{
    stats.map(stat => (<li className="item" style={{ backgroundColor: getRandomHexColor() }} key={stat.id}>
      <span className="label">{stat.label}</span>
      <span className="percentage">{stat.percentage}%</span>
    </li>))
    }
  </ul>
    </section>
    </div>);

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