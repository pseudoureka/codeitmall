const { useRouter } = require("next/router");
const { useState } = require("react");

function SearchForm({ initialValue = "" }) {
  const router = useRouter();
  const [value, setValue] = useState(initialValue);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      router.push("/");
      return;
    }
    router.push(`/search?q=${value}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="q" value={value} onChange={handleChange}></input>
      <button>검색</button>
    </form>
  );
}

export default SearchForm;
