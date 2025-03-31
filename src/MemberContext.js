import React, { createContext, useState, useContext } from "react";

const MemberContext = createContext();

export const useMember = () => {
  return useContext(MemberContext);
};

export const MemberProvider = ({ children }) => {
  const [members, setMembers] = useState([]);

  const addMember = (member) => {
    setMembers([...members, member]);
  };

  return (
    <MemberContext.Provider value={{ members, addMember }}>
      {children}
    </MemberContext.Provider>
  );
};
