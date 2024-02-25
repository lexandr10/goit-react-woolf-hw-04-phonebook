import css from './list.module.css';

const ListContact = ({ onDelete, productFilter }) => {
  return (
    <ul className={css.items}>
      {productFilter.map(({ id, name, number }) => (
        <li className={css.list} key={id}>
          <div>
            <p className={css.text}>Name: {name}</p>
            <p className={css.text}>Number: {number}</p>
          </div>

          <button
            className={css.btn}
            id={id}
            onClick={() => onDelete(id)}
            type="button"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ListContact;
