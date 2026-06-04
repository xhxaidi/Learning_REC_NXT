import { useState } from "react";

interface ButtonProps {
  text: string;
  color?: "primary" | "secondary" | "danger" | "success";
  size?: "small" | "large";
  onClick?: () => void;
  disabled?: boolean;
}

function Button({ text, color, size, onClick, disabled }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 
    ${size === "small" ? "text-sm px-1 py-1" : ""}
    ${size === "large" ? "text-lg  px-8 py-3 " : ""}
    ${color === "primary" ? "bg-blue-500 hover:bg-blue-500 text-white" : ""}
    ${color === "secondary" ? "bg-gray-500 hover:bg-gray-500 text-white" : ""}
    ${color === "danger" ? "bg-red-500 hover:bg-red-500 text-white" : ""}
    ${color === "success" ? "bg-green-500 hover:bg-green-500 text-white" : ""}
    ${disabled ? "opacity-50 cursor-not-allowed" : " cursor-pointer "}
    `}
    >
      {text}
    </button>
  );
}
const BasicProps = () => {
  const [clickCount, setClickCount] = useState(0);

  return (
    <section className="p-8 bg-white rounded-xl shadow-2xl ">
      <h2 className="text-3xl font-bold mb-4 text-gray-800">BasicProps</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci
        libero beatae soluta rerum. Sint sunt, dolor eos, provident repudiandae
        hic blanditiis officia aut nobis quis laborum tenetur mollitia velit
        accusamus.
      </p>
      <div className="space-y-4">
        <h3 className="text-1xl font-bold mb-4 text-gray-800">
          Different colors{" "}
        </h3>
        <div className="flex flex-wrap gap-3 items-start">
          <Button
            text="Primary Button"
            color="primary"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
          <Button
            text="secondary Button"
            color="secondary"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
          <Button
            text="Danger Button"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
          <Button
            text="Success Button"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
        </div>
        <h3 className="text-1xl font-bold mb-4 text-gray-800">
          Different colors{" "}
        </h3>
        <div className="flex flex-wrap gap-3 items-start">
          <Button
            text="Primary Button"
            color="primary"
            size="small"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
          <Button
            text="secondary Button"
            color="secondary"
            size="large"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
          <Button
            text="Danger Button"
            color="danger"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
          <Button
            text="Success Button"
            color="success"
            onClick={() => setClickCount(clickCount + 1)}
          ></Button>
        </div>
        <div className="mt-6 p-4 bg-blue-200 rounded-lg">
          <p className="text-lg font-medium text-grey-700">
            Click Count :{" "}
            <span className=" text-blue-600 font-bold">{clickCount}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BasicProps;
