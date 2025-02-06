import React, { useEffect, useState } from 'react';
import { fetchJobListings } from '../services/api';

const JobListings = () => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    const getJobs = async () => {
      try {
        const data = await fetchJobListings();
        setJobs(data);
      } catch (err) {
        setError(err);
      }
    };
    getJobs();
  }, []);

  return (
    <div>
      <h2>Job Listings</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <ul>
        {jobs.map((job) => (
          <li key={job.id}>
            <strong>{job.title}</strong> - {job.company}
            <br />
            <a href={job.applyLink} target="_blank" rel="noopener noreferrer">
              Apply Here
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobListings;
