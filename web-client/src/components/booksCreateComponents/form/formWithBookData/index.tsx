import React from 'react';

interface Props {}

const FormWithBookData: React.FC<Props> = () => {
  return (
    <div className="absolute top-0 right-0 w-full h-full bg-gray-900 bg-opacity-50 z-50 flex items-center justify-center">
      <form
        className="w-1/3 h-2/3 bg-white flex items-center justify-center"
        action=""
      >
        <p className="">New book</p>
        <input type="text" />
      </form>
    </div>
  );
};

export default FormWithBookData;
