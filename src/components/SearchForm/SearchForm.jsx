import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";
import './search-form.css';

const SearchForm = () => {
  const handleInputChange = (e) => {
    console.log('Input value:', e.target.value);
    // Заглушка для обработчика изменения значения инпута
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log('Performing search...');
    // Заглушка для обработчика поиска
  };

  return (
      <div className='search-form'>
        <div className="search-form__wrapper">
          <form className="search-form__container" onSubmit={handleSearch}>
            <div className="search-form__input">
              <input
                  type="text"
                  name="search"
                  id="search"
                  onChange={handleInputChange}
                  minLength={1}
                  placeholder='Фильм'
                  required
              />
              <button type='submit'>Поиск</button>
            </div>
            <FilterCheckbox />
          </form>
        </div>
      </div>
  );
};

export default SearchForm;

