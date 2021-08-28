function PageIcon({ children }) {
  return (
    <div
      style={{
        borderRadius: '7px',
        border: '2px solid black',
        padding: '8px',
        //filter: 'blur(5px)',
        backgroundColor: 'transparent',
        marginRight: '0px',
        // backdropFilter: 'blur(10px)',
      }}
    >
      {children}
    </div>
  );
}

export default PageIcon;
