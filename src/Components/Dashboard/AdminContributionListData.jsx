import React, { useState } from 'react';
import ContributionList from './ContributionList';
import Modal from 'react-modal';

const contributionsData = [
  { id: 1, title: 'Contribution 1', amount: '100', description: 'Description 1', date: '2024-07-07', status: 'In Progress' },
  { id: 2, title: 'Contribution 2', amount: '200', description: 'Description 2', date: '2024-07-08', status: 'Completed' },
];

const ParentComponent = () => {
  const [contributions, setContributions] = useState(contributionsData);

  const handleDelete = (id) => {
    setContributions(contributions.filter(contribution => contribution.id !== id));
  };

  const handleEdit = (editedContribution) => {
    setContributions(contributions.map(contribution =>
      contribution.id === editedContribution.id ? editedContribution : contribution
    ));
  };

  return (
    <div>
      <ContributionList contributions={contributions} onDelete={handleDelete} onEdit={handleEdit} />
    </div>
  );
};

export default ParentComponent;
