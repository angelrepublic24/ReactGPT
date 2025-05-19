import { useRef, useState, type FormEvent } from "react";

interface Props {
  onSendMessage: (message: string, selectedOption: string) => void;
  options: Options[];
  placeholder?: string;
  disableCorrections?: boolean;
  accept?: string;
}

interface Options {
  id: string;
  text: string;
}

export const TextMessageBoxSelect = ({
  onSendMessage,
  options,
  placeholder,
  disableCorrections = false,
  accept,
}: Props) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const [message, setMessage] = useState("");

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleSendMessage = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (message.trim().length === 0) return;
    onSendMessage(message, selectedOption);
    setMessage("");
  };
  return (
    <form
      onSubmit={handleSendMessage}
      className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4"
    >
      <div className="mr-3">
        <button
          onClick={() => inputFileRef.current?.click()}
          type="button"
          className="flex items-center justify-center text-gray-400 hover:text-gray-600"
        >
          <i className="fa-solid fa-paperclip text-xl"></i>
        </button>
      </div>
      <div className="flex-grow">
        <div className="flex">
          <input
            type="text"
            autoFocus
            name="message"
            className="w-full border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            placeholder={placeholder}
            autoComplete={disableCorrections ? "on" : "off"}
            autoCorrect={disableCorrections ? "on" : "off"}
            spellCheck={disableCorrections ? "true" : "false"}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <select
            name="select"
            className="w-2/5 ml-5 border rounded-xl text-gray-800 focus:outline-none focus:border-indigo-300 pl-4 h-10"
            value={selectedOption}
            onChange={(e) => setSelectedOption(e.target.value)}
          >
            <option value={""}>Choose an option</option>
            {options.map((option) => (
              <option key={option.id} value={option.id}>
                {option.text}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="ml-4">
        <button className="btn-primary">
          <span className="mr-2">Send</span>

          <i className="fa-regular fa-paper-plane"></i>
        </button>
      </div>
    </form>
  );
};
