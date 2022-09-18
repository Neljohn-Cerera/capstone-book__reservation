import FormCreateBook from './form';
// import { useRouter } from 'next/router';
// import FormWithBookData from './form/formWithBookData';
interface Props {}

const BooksCreateComponents: React.FC<Props> = () => {
  // const { query } = useRouter();
  return (
    <div>
      <h1 className="text-gray-500 text-center font-bold mb-4 mt-4 text-xl">
        New Book
      </h1>
      <FormCreateBook />
      {/* {Object.keys(query).length === 0 ? (
        <FormCreateBook />
      ) : (
        <FormWithBookData />
      )} */}
    </div>
  );
};

export default BooksCreateComponents;
