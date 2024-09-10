import { useState, useEffect, useCallback } from 'react';
import LocationGrid from './LocationGrid-1';
import SearchBar from './SearchBar';
import LoadingPlaceholder from './LoadingPlaceholder';
import { SearchData } from '../../models/search';
import { useSearch } from '../hooks/useSearch';
import { sortRawAttractionData } from '../utility/dataSortingFn';
import { FormattedAttraction } from '../../models/attraction';

const Explorer = () => {
  const [randomPlacesData, setRandomPlacesData] = useState<FormattedAttraction[]>([]);
  const [searchTerm, setSearchTerm] = useState<SearchData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const {
    data: searchResult,
    isLoading: searchLoading,
    isSuccess: searchSuccess,
    refetch,
  } = useSearch(searchTerm);

  useEffect(() => {
    if (!searchTerm) {
      fetchRandomAttractions();
    } else {
      refetch();
    }
  }, [searchTerm, refetch]);

  const fetchRandomAttractions = async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/v1/attractions/random-activities', {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!res.ok) {
        const errorBody = await res.text();
        console.error('Error fetching data:', res.status, res.statusText, errorBody);
        throw new Error('Network response was not ok');
      }

      const attractions = await res.json();
      const formattedData = sortRawAttractionData(attractions);
      setRandomPlacesData(formattedData);
    } catch (error) {
      console.error('Error fetching random activities data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = useCallback((searchTerm: SearchData) => {
    setSearchTerm(searchTerm);
  }, []);

  const handleClearSearch = useCallback(() => {
    setSearchTerm(null);
  }, []);

  const renderContent = () => {
    if (searchTerm) {
      if (searchLoading) {
        return <LoadingPlaceholder />;
      }
      if (!searchResult) {
        return <p>No results found</p>;
      }
      const formattedSearchData = sortRawAttractionData(searchResult);
      return <LocationGrid data={formattedSearchData} />;
    } else {
      if (loading) {
        return <LoadingPlaceholder />;
      }
      return <LocationGrid data={randomPlacesData} />;
    }
  };

  return (
    <div >
      <SearchBar onSearch={handleSearch} onClearSearch={handleClearSearch} />
      <h2 >{searchTerm ? 'Search Results' : 'Explore'}</h2>
      {renderContent()}
    </div>
  );
};

export default Explorer;