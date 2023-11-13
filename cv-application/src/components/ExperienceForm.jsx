import { useState } from 'react';

export default function ExperienceForm({
  experienceDataSelected,
  onSubmit,
  onCancel,
}) {
  const [latestFormCondition, setLatestFormCondition] = useState(
    experienceDataSelected
  );

  function handleInputChange(e) {
    setLatestFormCondition({
      ...latestFormCondition,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <>
      <h1>Experience</h1>
      <form>
        <label>
          Company Name:{' '}
          <input
            value={latestFormCondition.companyName}
            name="companyName"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Position:{' '}
          <input
            value={latestFormCondition.positionTitle}
            name="positionTitle"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Start Date:{' '}
          <input
            value={latestFormCondition.startDate}
            name="startDate"
            onChange={handleInputChange}
          />
        </label>
        <label>
          End Date:{' '}
          <input
            value={latestFormCondition.endDate}
            name="endDate"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Location:{' '}
          <input
            value={latestFormCondition.location}
            name="location"
            onChange={handleInputChange}
          />
        </label>
        <label>
          Description:{' '}
          <input
            value={latestFormCondition.description}
            name="description"
            onChange={handleInputChange}
          />
        </label>
        <button type="submit" onClick={(e) => onSubmit(e, latestFormCondition)}>
          Submit
        </button>
        <button onClick={onCancel}>Cancel</button>
        <button>Delete</button>
      </form>
    </>
  );
}
