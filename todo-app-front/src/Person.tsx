import React, { useState } from "react";

interface PersonProps {
  name: string;
  age: number;
  height: number;
}

const Person: React.FC<PersonProps> = props => {
  const [age, setAge] = useState(10);
  const [height, setHeight] = useState(100);

  const buttonClick = () => {
    setAge(age + 1);
    setHeight(height + 1);
  };

  return (
    <div>
      {props.name}
      {age}歳{height}cm
      <button onClick={buttonClick}>ぼたん</button>
    </div>
  );
};

export default Person;
