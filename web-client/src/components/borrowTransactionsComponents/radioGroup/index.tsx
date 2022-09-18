import React from 'react';

interface Props {
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

const RadioGroup: React.FC<Props> = ({ setStatus }) => {
  return (
    <div className="flex mt-4 mb-4">
      <h5 className="text-gray-700">Filter by : </h5>
      <label className="inline-flex items-center mr-4 ml-4">
        <input
          type="radio"
          className="form-radio"
          name="radio"
          value="BORROWED"
          defaultChecked
          onChange={(e) => setStatus(e.currentTarget.value)}
        />
        <span className="ml-2 text-gray-700">Borrowed</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio"
          name="radio"
          value="RETURNED"
          onChange={(e) => setStatus(e.currentTarget.value)}
        />
        <span className="ml-2 text-gray-700">Returned</span>
      </label>
      <label className="inline-flex items-center ml-4">
        <input
          type="radio"
          className="form-radio"
          name="radio"
          value="OVERDUE"
          onChange={(e) => setStatus(e.currentTarget.value)}
        />
        <span className="ml-2 text-gray-700">Overdue</span>
      </label>
      <label className="inline-flex items-center ml-4">
        <input
          type="radio"
          className="form-radio"
          name="radio"
          value="LOST"
          onChange={(e) => setStatus(e.currentTarget.value)}
        />
        <span className="ml-2 text-gray-700">Lost</span>
      </label>
    </div>
  );
};

export default RadioGroup;
