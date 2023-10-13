import PropTypes from 'prop-types'; // Импортируем PropTypes из prop-types
import style from './Statistic.module.css';
import { getRandomColor } from '../../Helper/getRandomColor';

export const Statistics = ({ title, stats }) => {
  return (
    <section className={style.statistics}>
      {title && <h2 className={style.title}>{title}</h2>}

      <ul className={title ? style.statList : style.statListOnly}>
        {stats.map(stat => (
          <li
            className={style.item}
            style={{ backgroundColor: getRandomColor() }}
            key={stat.id}
          >
            <span className={style.label}>{stat.label}</span>
            <span className={style.percentage}>{stat.percentage}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.string.isRequired,
    })
  ).isRequired,
};
