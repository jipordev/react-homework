import React from 'react';
import { Card } from 'flowbite-react'; // Assuming you have imported Card component from flowbite-react

function FBCard() {
  return (
    <Card href="#" className="w-[250px]">
      <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
        Feedback from John Doe
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et justo eu lorem sagittis
        condimentum eget quis lacus. Morbi vitae justo vel enim viverra porta non vitae turpis."
      </p>
    </Card>
  );
}

export default FBCard;
