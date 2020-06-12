const Only = ({ when, children }) => {
  return when ? children : null;
};

export default Only;
