export default function SearchPokemon({ onValue, onSearch }) {
  return (
    <>
      <label>
        <input
          type="search"
          value={onValue}
          onChange={onSearch}
          className="input-search"
        />
      </label>
    </>
  );
}
