import { Link } from "react-router-dom";

export default function SearchButton({ onValue, onSearchClick }) {
  return (
    <>
      <button onClick={onSearchClick} className="button-search">
        <Link to={`/pokemon/${onValue}`} className="link-search">
          Search
        </Link>
      </button>
    </>
  );
}
