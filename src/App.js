import React, { useState, useEffect } from 'react';
import axios from 'axios';

function FilmManager() {
  const [uczniowie, setUczniowie] = useState([]);

  useEffect(() => {
    fetchUczniowie();
  }, []);

  const fetchUczniowie = async () => {
    try {
      const response = await axios.get('http://localhost:5000/uczniowie');
      setUczniowie(uczniowie.uczen);
    } catch (error) {
      console.error('Błąd podczas pobierania danych:', error);
    }
  };

  return (
    <div>

      <h2>Lista Uczniów</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imie</th>
            <th>Nazwisko</th>
            <th>Data urodzenia</th>
          </tr>
        </thead>
        <tbody>
          {uczniowie.map((uczen) => (
            <tr key={uczen.id}>
              <td>{uczen.id}</td>
              <td>{uczen.imie}</td>
              <td>{uczen.nazwisko}</td>
              <td>{uczen.data_urodzenia}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FilmManager;