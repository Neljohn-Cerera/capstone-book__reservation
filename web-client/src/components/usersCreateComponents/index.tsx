import FormCreateUser from './form';

interface indexProps {}

const UsersCreateComponents: React.FC<indexProps> = () => {
  return (
    <div>
      <h1 className="text-gray-500 text-center font-bold mb-4 mt-4 text-xl">
        USER REGISTRATION
      </h1>
      <FormCreateUser />
    </div>
  );
};

export default UsersCreateComponents;
