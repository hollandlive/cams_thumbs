"use client";

import { useState } from "react";

function TextInput({ value, onChange, placeholder }: TextInputProps & { placeholder: string }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
}

function Preview({
  firstName,
  lastName
}: {
  firstName: string;
  lastName: string;
}) {
  return (
    <p>
      Hello, {firstName} {lastName}
    </p>
  );
}

function CharacterCounter({
  totalLength
}: {
  totalLength: number;
}) {
  return <p>Total characters: {totalLength}</p>;
}

function FormContainer() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  return (
    <div>
      <TextInput
        value={firstName}
        onChange={setFirstName}
        placeholder="First name"/>
    <TextInput
        value={lastName}
        onChange={setLastName}
        placeholder="Last name"/>
    <CharacterCounter totalLength={firstName.length + lastName.length} />
    <Preview firstName={firstName} lastName={lastName} />
</div>
  );
}

export default FormContainer;

// function FirstNameInput({ value, onChange }) {
//   return <input value={value} onChange={(e) => onChange(e.target.value)} />;
// }

// function LastNameInput({ value, onChange }) {
//   return <input value={value} onChange={(e) => onChange(e.target.value)} />;
// }

// function Preview({ firstName, lastName }) {
//   return <p>Hello, {firstName} {lastName}</p>;
// }

// function CharacterCounter({ totalLength }) {
//   return <p>Total characters: {totalLength}</p>;
// }

// function FormContainer() {
//   const [firstName, setFirstName] = useState("");
//   const [lastName, setLastName] = useState("");

//   return (
//     <div>
//       <FirstNameInput value={firstName} onChange={setFirstName} />
//       <LastNameInput value={lastName} onChange={setLastName} />
//       <Preview firstName={firstName} lastName={lastName} />
//       <CharacterCounter totalLength={firstName.length + lastName.length} />
//     </div>
//   );
// }

// export default FormContainer;