import { useState } from "react";
import "./index.css";
import { AiOutlineCheck } from "react-icons/ai";

function App() {
  const [allChecked, setAllChecked] = useState(false);
  const [pagesChecked, setPagesChecked] = useState(
    Array(4).fill(false) // Assuming there are 4 checkboxes
  );

  const handleAllPagesCheck = () => {
    const newCheckedState = !allChecked;
    setAllChecked(newCheckedState);
    setPagesChecked(Array(4).fill(newCheckedState)); // Update all checkboxes
  };

  const handleIndividualPageCheck = (index) => {
    const newPagesChecked = [...pagesChecked];
    newPagesChecked[index] = !newPagesChecked[index];
    setPagesChecked(newPagesChecked);
    setAllChecked(newPagesChecked.every(Boolean)); // Update "All pages" checkbox based on individual states
  };

  return (
    <section>
      <div className="flex items-center justify-center w-screen h-screen">
        <div className="p-4 w-[370px] mx-auto shadow-md rounded-md h-[320px]">
          <div
            className="text-[14px] p-2 flex items-center justify-between w-full border-b border-gray-200 cursor-pointer"
            onClick={handleAllPagesCheck}
          >
            <h2 className="font-normal text-lg">All pages</h2>
            <div
              className={`custom-checkbox ${
                allChecked ? "checked" : ""
              } relative`}
            >
              <AiOutlineCheck className="absolute hidden hover:inline-block text-gray-300" />
              {allChecked && <AiOutlineCheck className="text-white" />}
            </div>
          </div>
          <div className="text-[14px] border-b border-gray-200">
            {pagesChecked.map((isChecked, index) => (
              <div
                className="p-2 flex items-center justify-between w-full cursor-pointer"
                key={index}
                onClick={() => handleIndividualPageCheck(index)}
              >
                <h2 className="font-normal text-lg">Page {index + 1}</h2>
                <div
                  className={`custom-checkbox ${isChecked ? "checked" : ""}`}
                >
                  {isChecked && <AiOutlineCheck className="text-white" />}
                </div>
              </div>
            ))}
          </div>
          <button className="w-full bg-[#FFCE22] p-[10px] rounded-md mt-[15px] hover:bg-[#FFD84D]">
            Done
          </button>
        </div>
      </div>
    </section>
  );
}

export default App;
