import React, { useEffect, useState } from 'react';
import { fetchLearningMaterials } from '../services/api';

const LearningMaterials = () => {
  const [materials, setMaterials] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getMaterials = async () => {
      try {
        const data = await fetchLearningMaterials();
        setMaterials(data);
      } catch (err) {
        setError(err);
      }
    };
    getMaterials();
  }, []);

  return (
    <div>
      <h2>Learning Materials</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {materials.map((material) => (
          <li key={material.id}>
            <a href={material.link} target="_blank" rel="noopener noreferrer">
              {material.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LearningMaterials;
