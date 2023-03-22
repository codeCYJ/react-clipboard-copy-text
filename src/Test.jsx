const Test = () => {
  const copyText = "복사할 텍스트입니다.";
  const handleCopy = () => {
    navigator.clipboard.writeText(copyText);
  };

  return (
    <div>
      <p>{copyText}</p>
      <button onClick={handleCopy}>Copy Text</button>
    </div>
  );
};

export default Test;
