import InputColor from "./InputColor";
import InputField from "./InputField";
import { InputContext } from "../App";
import { useContext } from "react";

const InputForm = () => {
  const { getQrCode, inputValue } = useContext(InputContext);
  const handleSubmit = () => getQrCode();

  return (
    <div className="col-span-2 p-6 grid gap-4">
      <InputField />
      <InputColor />
      <button
        disabled={!inputValue.url}
        className="bg-blue-400 max-w-xs ml-auto px-4 py-2 text-white rounded-sm mt-4 hover:bg-blue-500 disabled:bg-gray-300"
        onClick={handleSubmit}
      >
        Generate QrCode
      </button>
    </div>
  );
};

export default InputForm;
