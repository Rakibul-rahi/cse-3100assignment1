import { useEffect, useState } from 'react';

// DropdownBar Component
function DropdownBar({ options, onSelect }) {
  return (
    <select
      className="form-select"
      onChange={(e) => onSelect(e.target.value)}
    >
      <option value="">All Breeds</option>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}

// Main AvailableCats Component
const availableCats = [
  { name: 'Whiskers', age: '2', breed: 'Sphynx' },
  { name: 'Mittens', age: '2', breed: 'Peterbald' },
  { name: 'Shadow', age: '1', breed: 'Birman' },
  { name: 'Pumpkin', age: '3', breed: 'Abyssinian' },
  { name: 'Luna', age: '4', breed: 'Persian' },
  { name: 'Simba', age: '2', breed: 'Bengal' },
  { name: 'Garfield', age: '1', breed: 'Siamese' },
  { name: 'Jackis', age: '6', breed: 'Local' },
  { name: 'Linlin', age: '3', breed: 'Local' },
];

export default function AvailableCats() {
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedBreed, setSelectedBreed] = useState('');

  // Fetch cat images and assign to cats array
  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const responses = await Promise.all(
          availableCats.map(() =>
            fetch('https://api.thecatapi.com/v1/images/search').then((res) =>
              res.json()
            )
          )
        );
        const catsWithImages = availableCats.map((cat, index) => ({
          ...cat,
          image: responses[index][0].url,
        }));
        setCats(catsWithImages);
        setFilteredCats(catsWithImages); // Initialize filteredCats with all cats
      } catch (error) {
        console.error('Error fetching cat images:', error);
      }
    };

    fetchCatImages();
  }, []);

  // Update filteredCats when searchQuery or selectedBreed changes
  useEffect(() => {
    let result = cats;

    if (selectedBreed) {
      result = result.filter((cat) => cat.breed === selectedBreed);
    }

    if (searchQuery) {
      result = result.filter((cat) =>
        cat.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    setFilteredCats(result);
  }, [searchQuery, selectedBreed, cats]);

  // Breed options for dropdown
  const breedOptions = [
    { label: 'Sphynx', value: 'Sphynx' },
    { label: 'Persian', value: 'Persian' },
    { label: 'Peterbald', value: 'Peterbald' },
    { label: 'Birman', value: 'Birman' },
    { label: 'Abyssinian', value: 'Abyssinian' },
    { label: 'Bengal', value: 'Bengal' },
    { label: 'Siamese', value: 'Siamese' },
    { label: 'Local', value: 'Local' },
  ];

  return (
    <section className="text-center mt-4">
      <h2>Available Cats</h2>
      <p>Meet our adorable cats looking for their forever home!</p>

      {/* Filters */}
      <div className="filters mb-4 d-flex justify-content-center align-items-center gap-3">
        {/* Dropdown */}
        <DropdownBar options={breedOptions} onSelect={setSelectedBreed} />
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by name..."
          className="form-control"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Cat Cards */}
      <div className="mt-2 row g-4 cats-container" id="cats-container">
        {filteredCats.map((cat, i) => (
          <div key={i} className="col-md-4">
            <div className="cat-card">
              <img
                src={cat.image}
                alt={cat.name}
                className="img-fluid mb-2"
                style={{
                  borderRadius: '8px',
                  height: '200px',
                  objectFit: 'cover',
                }}
              />
              <div className="cat-info">
                <h3 className="h5 mb-1">{cat.name}</h3>
                <p className="mb-0">Age: {cat.age}</p>
                <p className="mb-0">Breed: {cat.breed}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
