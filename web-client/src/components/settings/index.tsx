import React from 'react';
import SettingsForm from './form';
import { useSettingsQuery } from '../../generated/graphql';

const SettingsComponents: React.FC = () => {
  const { data, refetch } = useSettingsQuery();
  const [openForm, setOpenForm] = React.useState(false);
  const handleChangeSettings = () => {
    setOpenForm((prev) => !prev);
  };

  React.useEffect(() => {});
  return (
    <div className="mt-2 ml-28 mr-28">
      <h1 className="text-gray-500 text-xl">Settings</h1>
      <div className="flex flex-row flex-1">
        <div className="flex-1 flex flex-col pt-10 pb-10 pr-10">
          <button
            className="bg-gray-400 text-white border border-gray-500 p-2 w-1/3 mb-1 hover:bg-gray-900"
            onClick={handleChangeSettings}
          >
            Change Settings
          </button>
          <label className="text-gray-500" htmlFor="Term">
            Fine
          </label>
          <input
            className="rounded text-gray-900 border border-gray-200 mb-5"
            id="Term"
            type="text"
            value={data?.settings.fine}
            disabled={true}
          />
        </div>

        <SettingsForm openForm={openForm} refetch={refetch} />
      </div>
    </div>
  );
};

export default SettingsComponents;
