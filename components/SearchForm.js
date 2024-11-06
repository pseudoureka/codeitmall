import { useState } from "react";

export default function SearchForm() {
  const [value, setValue] = useState();

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={value} onChange={handleChange}></input>
      <button>검색</button>
    </form>
  );
}
