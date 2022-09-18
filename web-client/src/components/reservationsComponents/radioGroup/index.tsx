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
          value="PENDING"
          defaultChecked
          onChange={(e) => setStatus(e.currentTarget.value)}
        />
        <span className="ml-2 text-gray-700">Pending</span>
      </label>
      <label className="inline-flex items-center">
        <input
          type="radio"
          className="form-radio"
          name="radio"
          value="APPROVED"
          onChange={(e) => setStatus(e.currentTarget.value)}
        />
        <span className="ml-2 text-gray-700">Approved</span>
      </label>
      <label className="inline-flex items-center ml-4">
        <input
          type="radio"
          className="form-radio"
          name="radio"
          value="DISAPPROVED"
          onChange={(e) => setStatus(e.currentTarget.value)}
        />
        <span className="ml-2 text-gray-700">Disapproved</span>
      </label>
    </div>
  );
};

export default RadioGroup;
