function Container({ className = "", children }) {
  return (
    <div className={`mx-auto w-full max-w-330 px-4 xl:px-0 ${className}`}>
      {children}
    </div>
  );
}

export default Container;
