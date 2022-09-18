import { generate } from 'shortid';
import DropDown from '../../../shared/dropDown';
import Input from '../../../shared/input';
import InputTag from '../../../shared/input/inputTag';

interface Props {
  query: any;
  section: any;
  setSection: any;
  bookAuthorsLocal: string[];
  setAuthors: any;
  uniqueAuthors: any[];
  handleRemoveAuthor: (val: string) => void;
}

const RightInput: React.FC<Props> = ({
  query,
  section,
  setSection,
  bookAuthorsLocal,
  setAuthors,
  uniqueAuthors,
  handleRemoveAuthor,
}) => {
  console.log('qeuer : ', query);
  return (
    <>
      <DropDown
        label="Book Section"
        data={['Circulation', 'Filipiniana']}
        state={section}
        setState={setSection}
      />
      <InputTag
        label="Authors"
        bookAuthorsLocal={bookAuthorsLocal}
        setState={setAuthors}
      >
        {uniqueAuthors?.map((author) => (
          <div
            key={generate()}
            className="relative bg-gray-200 p-2 mr-2 mt-2  flex flex-row border border-gray-400 rounded"
          >
            <p className="flex-1 mr-6 text-base">{author}</p>
            <button
              className="flex-1 px-2 text-sm absolute top-0 right-0 hover:bg-gray-600 hover:text-white"
              onClick={() => handleRemoveAuthor(author)}
            >
              x
            </button>
          </div>
        ))}
      </InputTag>
      <Input
        hasIcon={false}
        placeholder="type dewyDecimal ..."
        type="number"
        id="dewyDecimal"
        name="dewyDecimal"
        size="base"
        label="Dewy Decimal"
        labelColor="gray"
        mb="lg"
        mt="lg"
        disabled={Object.entries(query).length === 0 ? false : true}
      />
      <Input
        hasIcon={false}
        placeholder="type publisher ..."
        type="text"
        id="publisher"
        name="publisher"
        size="base"
        label="Publisher"
        labelColor="gray"
        mb="lg"
        disabled={Object.entries(query).length === 0 ? false : true}
      />
      <Input
        hasIcon={false}
        placeholder="type placeOfPublication ..."
        type="text"
        id="placeOfPublication"
        name="placeOfPublication"
        size="base"
        label="Place Of Publication"
        labelColor="gray"
        mb="lg"
        disabled={Object.entries(query).length === 0 ? false : true}
      />
      <Input
        hasIcon={false}
        placeholder="type copyRightYear ..."
        type="number"
        id="copyRightYear"
        name="copyRightYear"
        size="base"
        label="Copyright Year"
        labelColor="gray"
        disabled={Object.entries(query).length === 0 ? false : true}
      />
    </>
  );
};

export default RightInput;
